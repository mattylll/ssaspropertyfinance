import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const enquirySchema = z.object({
  propertyType: z.string(),
  propertyValue: z.number(),
  location: z.string(),
  tenure: z.string(),
  schemeType: z.string(),
  fundValue: z.number(),
  providerName: z.string().optional(),
  trusteeStatus: z.string().optional(),
  loanAmount: z.number(),
  ltvTarget: z.number(),
  purpose: z.string(),
  urgency: z.string(),
  fullName: z.string(),
  email: z.string().email(),
  phone: z.string(),
  company: z.string().optional(),
  ifaFcaNumber: z.string().optional(),
  preferredContactTime: z.string().optional(),
  gdprConsent: z.literal(true),
  marketingConsent: z.boolean(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = enquirySchema.parse(body);

    const fmt = (n: number) =>
      new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",
        maximumFractionDigits: 0,
      }).format(n);

    // Send confirmation email to prospect
    if (resend) {
      await resend.emails.send({
        from: "SSAS Property Finance <noreply@ssaspropertyfinance.co.uk>",
        to: data.email,
        subject: "Your SSAS Property Finance Enquiry — Received",
        html: `
          <div style="font-family: 'DM Sans', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0A1628; color: #F0F0F0; padding: 40px;">
            <h1 style="color: #C9A84C; font-size: 24px; margin-bottom: 16px;">Thank You, ${data.fullName}</h1>
            <p style="color: rgba(255,255,255,0.6); line-height: 1.6;">
              We have received your SSAS property finance enquiry and a specialist broker will review your requirements within 24 hours.
            </p>
            <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); border-radius: 12px; padding: 20px; margin: 24px 0;">
              <h2 style="color: #C9A84C; font-size: 16px; margin-bottom: 12px;">Your Enquiry Summary</h2>
              <p style="color: rgba(255,255,255,0.5); font-size: 14px; margin: 4px 0;"><strong>Property:</strong> ${data.propertyType} — ${fmt(data.propertyValue)}</p>
              <p style="color: rgba(255,255,255,0.5); font-size: 14px; margin: 4px 0;"><strong>Location:</strong> ${data.location}</p>
              <p style="color: rgba(255,255,255,0.5); font-size: 14px; margin: 4px 0;"><strong>Scheme:</strong> ${data.schemeType.toUpperCase()} — ${fmt(data.fundValue)}</p>
              <p style="color: rgba(255,255,255,0.5); font-size: 14px; margin: 4px 0;"><strong>Loan Required:</strong> ${fmt(data.loanAmount)} (${data.ltvTarget}% LTV)</p>
              <p style="color: rgba(255,255,255,0.5); font-size: 14px; margin: 4px 0;"><strong>Purpose:</strong> ${data.purpose}</p>
              <p style="color: rgba(255,255,255,0.5); font-size: 14px; margin: 4px 0;"><strong>Urgency:</strong> ${data.urgency}</p>
            </div>
            <p style="color: rgba(255,255,255,0.4); font-size: 12px; line-height: 1.5;">
              This email confirms receipt of your enquiry only. It is not a mortgage offer or financial advice.
              SSAS Property Finance is a trading name of Lenzie Consulting Ltd. SSAS commercial property loans are not regulated by the FCA.
            </p>
          </div>
        `,
      });

      // Send notification to broker
      await resend.emails.send({
        from: "SSAS Property Finance <noreply@ssaspropertyfinance.co.uk>",
        to: process.env.BROKER_EMAIL || "enquiries@ssaspropertyfinance.co.uk",
        subject: `New SSAS Enquiry — ${data.fullName} — ${fmt(data.propertyValue)} ${data.propertyType}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px;">
            <h1>New SSAS Property Finance Enquiry</h1>
            <h2>Contact</h2>
            <p><strong>Name:</strong> ${data.fullName}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ""}
            ${data.ifaFcaNumber ? `<p><strong>IFA FCA Number:</strong> ${data.ifaFcaNumber}</p>` : ""}
            <h2>Property</h2>
            <p><strong>Type:</strong> ${data.propertyType}</p>
            <p><strong>Value:</strong> ${fmt(data.propertyValue)}</p>
            <p><strong>Location:</strong> ${data.location}</p>
            <p><strong>Tenure:</strong> ${data.tenure}</p>
            <h2>Pension</h2>
            <p><strong>Scheme:</strong> ${data.schemeType.toUpperCase()}</p>
            <p><strong>Fund Value:</strong> ${fmt(data.fundValue)}</p>
            ${data.providerName ? `<p><strong>Provider:</strong> ${data.providerName}</p>` : ""}
            <h2>Finance</h2>
            <p><strong>Loan Amount:</strong> ${fmt(data.loanAmount)}</p>
            <p><strong>LTV Target:</strong> ${data.ltvTarget}%</p>
            <p><strong>Purpose:</strong> ${data.purpose}</p>
            <p><strong>Urgency:</strong> ${data.urgency}</p>
            <h2>Consent</h2>
            <p><strong>GDPR:</strong> ${data.gdprConsent ? "Yes" : "No"}</p>
            <p><strong>Marketing:</strong> ${data.marketingConsent ? "Yes" : "No"}</p>
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

    console.error("Enquiry submission error:", error);
    return NextResponse.json(
      { success: false, message: "An error occurred processing your enquiry" },
      { status: 500 }
    );
  }
}
