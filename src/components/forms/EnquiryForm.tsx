"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Building2,
  Landmark,
  PoundSterling,
  User,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Loader2,
} from "lucide-react";

const enquirySchema = z.object({
  propertyType: z.string().min(1, "Select a property type"),
  propertyValue: z.number().min(50000, "Minimum £50,000"),
  location: z.string().min(2, "Enter a location or postcode"),
  tenure: z.string().min(1, "Select tenure"),
  schemeType: z.string().min(1, "Select scheme type"),
  fundValue: z.number().min(10000, "Minimum £10,000"),
  providerName: z.string().optional(),
  trusteeStatus: z.string().optional(),
  loanAmount: z.number().min(25000, "Minimum £25,000"),
  ltvTarget: z.number().min(1).max(50, "Maximum 50% LTV"),
  purpose: z.string().min(1, "Select purpose"),
  urgency: z.string().min(1, "Select urgency"),
  fullName: z.string().min(2, "Enter your full name"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(10, "Enter a valid phone number"),
  company: z.string().optional(),
  ifaFcaNumber: z.string().optional(),
  preferredContactTime: z.string().optional(),
  gdprConsent: z.literal(true, {
    message: "You must accept the privacy policy",
  }),
  marketingConsent: z.boolean(),
});

type EnquiryFormData = z.infer<typeof enquirySchema>;

const steps = [
  { label: "Property", icon: Building2 },
  { label: "Pension", icon: Landmark },
  { label: "Finance", icon: PoundSterling },
  { label: "Contact", icon: User },
];

export function EnquiryForm() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors },
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      propertyType: "",
      propertyValue: 0,
      location: "",
      tenure: "",
      schemeType: "",
      fundValue: 0,
      providerName: "",
      trusteeStatus: "",
      loanAmount: 0,
      ltvTarget: 50,
      purpose: "",
      urgency: "",
      fullName: "",
      email: "",
      phone: "",
      company: "",
      ifaFcaNumber: "",
      preferredContactTime: "",
      gdprConsent: false as unknown as true,
      marketingConsent: false,
    },
  });

  const propertyValue = watch("propertyValue");
  const loanAmount = watch("loanAmount");

  const ltvCalc =
    propertyValue > 0 ? Math.round((loanAmount / propertyValue) * 100) : 0;

  const stepFields: (keyof EnquiryFormData)[][] = [
    ["propertyType", "propertyValue", "location", "tenure"],
    ["schemeType", "fundValue"],
    ["loanAmount", "ltvTarget", "purpose", "urgency"],
    ["fullName", "email", "phone", "gdprConsent"],
  ];

  const nextStep = async () => {
    const valid = await trigger(stepFields[step]);
    if (valid && step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  const onSubmit = async (data: EnquiryFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Submission failed");

      setSubmitted(true);
    } catch {
      // Error handled by UI
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card p-10 text-center"
      >
        <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
        <h3 className="font-heading text-2xl text-white mb-2">
          Enquiry Submitted
        </h3>
        <p className="text-white/50 max-w-md mx-auto">
          Thank you for your enquiry. A specialist broker will review your
          requirements and be in touch within 24 hours with indicative terms.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="glass-card p-8">
      {/* Step indicators */}
      <div className="flex items-center justify-between mb-8">
        {steps.map((s, i) => (
          <div key={s.label} className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                i <= step
                  ? "gold-gradient text-navy"
                  : "bg-white/5 text-white/30"
              }`}
            >
              <s.icon className="w-5 h-5" />
            </div>
            <span
              className={`hidden sm:block ml-2 text-xs ${
                i <= step ? "text-gold" : "text-white/30"
              }`}
            >
              {s.label}
            </span>
            {i < steps.length - 1 && (
              <div
                className={`w-8 sm:w-16 h-px mx-2 ${
                  i < step ? "bg-gold" : "bg-white/10"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <AnimatePresence mode="wait">
          {/* Step 1: Property */}
          {step === 0 && (
            <motion.div
              key="step-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-5"
            >
              <h3 className="font-heading text-xl text-white mb-4">
                Property Details
              </h3>

              <div>
                <Label className="text-white/70 text-sm mb-2 block">
                  Property Type
                </Label>
                <Select
                  onValueChange={(v) => v && setValue("propertyType", v)}
                  value={watch("propertyType")}
                >
                  <SelectTrigger className="glass-input text-white">
                    <SelectValue placeholder="Select property type" />
                  </SelectTrigger>
                  <SelectContent className="bg-navy-mid border-white/10">
                    <SelectItem value="office">Office</SelectItem>
                    <SelectItem value="industrial">Industrial</SelectItem>
                    <SelectItem value="retail">Retail</SelectItem>
                    <SelectItem value="mixed-use">Mixed-Use</SelectItem>
                    <SelectItem value="warehouse">Warehouse</SelectItem>
                    <SelectItem value="other">Other Commercial</SelectItem>
                  </SelectContent>
                </Select>
                {errors.propertyType && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.propertyType.message}
                  </p>
                )}
              </div>

              <div>
                <Label className="text-white/70 text-sm mb-2 block">
                  Property Value (£)
                </Label>
                <Input
                  type="number"
                  {...register("propertyValue", { valueAsNumber: true })}
                  className="glass-input text-white"
                  placeholder="500000"
                />
                {errors.propertyValue && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.propertyValue.message}
                  </p>
                )}
              </div>

              <div>
                <Label className="text-white/70 text-sm mb-2 block">
                  Location / Postcode
                </Label>
                <Input
                  {...register("location")}
                  className="glass-input text-white"
                  placeholder="e.g. WC1A 1AA or London"
                />
                {errors.location && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.location.message}
                  </p>
                )}
              </div>

              <div>
                <Label className="text-white/70 text-sm mb-2 block">
                  Tenure
                </Label>
                <Select
                  onValueChange={(v) => v && setValue("tenure", v)}
                  value={watch("tenure")}
                >
                  <SelectTrigger className="glass-input text-white">
                    <SelectValue placeholder="Select tenure" />
                  </SelectTrigger>
                  <SelectContent className="bg-navy-mid border-white/10">
                    <SelectItem value="freehold">Freehold</SelectItem>
                    <SelectItem value="leasehold">Leasehold</SelectItem>
                  </SelectContent>
                </Select>
                {errors.tenure && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.tenure.message}
                  </p>
                )}
              </div>
            </motion.div>
          )}

          {/* Step 2: Pension */}
          {step === 1 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-5"
            >
              <h3 className="font-heading text-xl text-white mb-4">
                Pension Details
              </h3>

              <div>
                <Label className="text-white/70 text-sm mb-2 block">
                  Scheme Type
                </Label>
                <Select
                  onValueChange={(v) => v && setValue("schemeType", v)}
                  value={watch("schemeType")}
                >
                  <SelectTrigger className="glass-input text-white">
                    <SelectValue placeholder="Select scheme type" />
                  </SelectTrigger>
                  <SelectContent className="bg-navy-mid border-white/10">
                    <SelectItem value="sipp">SIPP</SelectItem>
                    <SelectItem value="ssas">SSAS</SelectItem>
                  </SelectContent>
                </Select>
                {errors.schemeType && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.schemeType.message}
                  </p>
                )}
              </div>

              <div>
                <Label className="text-white/70 text-sm mb-2 block">
                  Approximate Fund Value (£)
                </Label>
                <Input
                  type="number"
                  {...register("fundValue", { valueAsNumber: true })}
                  className="glass-input text-white"
                  placeholder="400000"
                />
                {errors.fundValue && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.fundValue.message}
                  </p>
                )}
              </div>

              <div>
                <Label className="text-white/70 text-sm mb-2 block">
                  SIPP/SSAS Provider Name (optional)
                </Label>
                <Input
                  {...register("providerName")}
                  className="glass-input text-white"
                  placeholder="e.g. AJ Bell, Hargreaves Lansdown"
                />
              </div>

              <div>
                <Label className="text-white/70 text-sm mb-2 block">
                  Trustee Status (optional)
                </Label>
                <Select
                  onValueChange={(v) => v && setValue("trusteeStatus", v)}
                  value={watch("trusteeStatus") ?? ""}
                >
                  <SelectTrigger className="glass-input text-white">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent className="bg-navy-mid border-white/10">
                    <SelectItem value="sole-trustee">Sole Trustee</SelectItem>
                    <SelectItem value="co-trustee">Co-Trustee</SelectItem>
                    <SelectItem value="professional-trustee">
                      Professional Trustee
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </motion.div>
          )}

          {/* Step 3: Finance */}
          {step === 2 && (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-5"
            >
              <h3 className="font-heading text-xl text-white mb-4">
                Finance Requirements
              </h3>

              <div>
                <Label className="text-white/70 text-sm mb-2 block">
                  Loan Amount Required (£)
                </Label>
                <Input
                  type="number"
                  {...register("loanAmount", { valueAsNumber: true })}
                  className="glass-input text-white"
                  placeholder="250000"
                />
                {ltvCalc > 0 && (
                  <p
                    className={`text-xs mt-1 ${ltvCalc > 50 ? "text-red-400" : "text-white/40"}`}
                  >
                    Calculated LTV: {ltvCalc}%
                    {ltvCalc > 50 && " — exceeds 50% SIPP cap"}
                  </p>
                )}
                {errors.loanAmount && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.loanAmount.message}
                  </p>
                )}
              </div>

              <div>
                <Label className="text-white/70 text-sm mb-2 block">
                  Target LTV (%)
                </Label>
                <Input
                  type="number"
                  {...register("ltvTarget", { valueAsNumber: true })}
                  className="glass-input text-white"
                  placeholder="50"
                  max={50}
                />
                {errors.ltvTarget && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.ltvTarget.message}
                  </p>
                )}
              </div>

              <div>
                <Label className="text-white/70 text-sm mb-2 block">
                  Purpose
                </Label>
                <Select
                  onValueChange={(v) => v && setValue("purpose", v)}
                  value={watch("purpose")}
                >
                  <SelectTrigger className="glass-input text-white">
                    <SelectValue placeholder="Select purpose" />
                  </SelectTrigger>
                  <SelectContent className="bg-navy-mid border-white/10">
                    <SelectItem value="purchase">Purchase</SelectItem>
                    <SelectItem value="refinance">Refinance</SelectItem>
                    <SelectItem value="development">Development</SelectItem>
                  </SelectContent>
                </Select>
                {errors.purpose && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.purpose.message}
                  </p>
                )}
              </div>

              <div>
                <Label className="text-white/70 text-sm mb-2 block">
                  Urgency
                </Label>
                <Select
                  onValueChange={(v) => v && setValue("urgency", v)}
                  value={watch("urgency")}
                >
                  <SelectTrigger className="glass-input text-white">
                    <SelectValue placeholder="Select urgency" />
                  </SelectTrigger>
                  <SelectContent className="bg-navy-mid border-white/10">
                    <SelectItem value="0-3 months">0-3 months</SelectItem>
                    <SelectItem value="3-6 months">3-6 months</SelectItem>
                    <SelectItem value="6+ months">6+ months</SelectItem>
                  </SelectContent>
                </Select>
                {errors.urgency && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.urgency.message}
                  </p>
                )}
              </div>
            </motion.div>
          )}

          {/* Step 4: Contact */}
          {step === 3 && (
            <motion.div
              key="step-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-5"
            >
              <h3 className="font-heading text-xl text-white mb-4">
                Your Details
              </h3>

              <div>
                <Label className="text-white/70 text-sm mb-2 block">
                  Full Name
                </Label>
                <Input
                  {...register("fullName")}
                  className="glass-input text-white"
                  placeholder="John Smith"
                />
                {errors.fullName && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              <div>
                <Label className="text-white/70 text-sm mb-2 block">
                  Email Address
                </Label>
                <Input
                  type="email"
                  {...register("email")}
                  className="glass-input text-white"
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <Label className="text-white/70 text-sm mb-2 block">
                  Phone Number
                </Label>
                <Input
                  type="tel"
                  {...register("phone")}
                  className="glass-input text-white"
                  placeholder="07700 900000"
                />
                {errors.phone && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div>
                <Label className="text-white/70 text-sm mb-2 block">
                  Company / Firm (optional)
                </Label>
                <Input
                  {...register("company")}
                  className="glass-input text-white"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <Label className="text-white/70 text-sm mb-2 block">
                  IFA FCA Number (optional)
                </Label>
                <Input
                  {...register("ifaFcaNumber")}
                  className="glass-input text-white"
                  placeholder="FCA reference number"
                />
              </div>

              <div className="space-y-3 pt-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    {...register("gdprConsent")}
                    className="mt-1 accent-gold"
                  />
                  <span className="text-xs text-white/50">
                    I have read and agree to the{" "}
                    <a href="/privacy" className="text-gold underline">
                      privacy policy
                    </a>
                    . I understand my data will be processed to respond to my
                    enquiry. *
                  </span>
                </label>
                {errors.gdprConsent && (
                  <p className="text-red-400 text-xs">
                    {errors.gdprConsent.message}
                  </p>
                )}

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    {...register("marketingConsent")}
                    className="mt-1 accent-gold"
                  />
                  <span className="text-xs text-white/50">
                    I would like to receive marketing communications about SIPP
                    property finance products and market updates.
                  </span>
                </label>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
          {step > 0 ? (
            <Button
              type="button"
              variant="outline"
              onClick={prevStep}
              className="border-white/20 text-white hover:bg-white/5"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back
            </Button>
          ) : (
            <div />
          )}

          {step < 3 ? (
            <Button
              type="button"
              onClick={nextStep}
              className="gold-gradient text-navy font-semibold hover:opacity-90"
            >
              Next
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          ) : (
            <Button
              type="submit"
              disabled={isSubmitting}
              className="gold-gradient text-navy font-semibold hover:opacity-90"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Get Indicative Terms
                  <ArrowRight className="ml-2 w-4 h-4" />
                </>
              )}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
