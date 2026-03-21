import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const quickEnquirySchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  message: z.string().min(10),
  gdprConsent: z.literal(true),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = quickEnquirySchema.parse(body);

    if (resend) {
      await resend.emails.send({
        from: "SIPP Property Finance <noreply@sipppropertyfinance.co.uk>",
        to: data.email,
        subject: "Your Enquiry — SIPP Property Finance",
        html: `
          <div style="font-family: 'DM Sans', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0A1628; color: #F0F0F0; padding: 40px;">
            <h1 style="color: #C9A84C; font-size: 24px; margin-bottom: 16px;">Thank You, ${data.fullName}</h1>
            <p style="color: rgba(255,255,255,0.6); line-height: 1.6;">
              We have received your enquiry and a specialist SIPP property finance broker will be in touch within 24 hours.
            </p>
            <p style="color: rgba(255,255,255,0.4); font-size: 12px; line-height: 1.5; margin-top: 24px;">
              This email confirms receipt of your enquiry only. It is not a mortgage offer or financial advice.
              SIPP Property Finance is a trading name of Lenzie Consulting Ltd. SIPP and SSAS commercial property loans are not regulated by the FCA.
            </p>
          </div>
        `,
      });

      await resend.emails.send({
        from: "SIPP Property Finance <noreply@sipppropertyfinance.co.uk>",
        to: process.env.BROKER_EMAIL || "enquiries@sipppropertyfinance.co.uk",
        subject: `Quick Enquiry — ${data.fullName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px;">
            <h1>New Quick Enquiry</h1>
            <p><strong>Name:</strong> ${data.fullName}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <h2>Message</h2>
            <p>${data.message}</p>
            <h2>Consent</h2>
            <p><strong>GDPR:</strong> Yes</p>
          </div>
        `,
      });
    }

    return NextResponse.json(
      { success: true, message: "Enquiry received successfully" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.issues },
        { status: 400 }
      );
    }

    console.error("Quick enquiry submission error:", error);
    return NextResponse.json(
      { success: false, message: "An error occurred processing your enquiry" },
      { status: 500 }
    );
  }
}
