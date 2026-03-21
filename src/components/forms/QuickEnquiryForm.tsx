"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CheckCircle, Loader2, Send } from "lucide-react";

const quickEnquirySchema = z.object({
  fullName: z.string().min(2, "Enter your full name"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(10, "Enter a valid phone number"),
  message: z.string().min(10, "Please give us a brief overview of your requirements"),
  gdprConsent: z.literal(true, {
    message: "You must accept the privacy policy",
  }),
});

type QuickEnquiryData = z.infer<typeof quickEnquirySchema>;

export function QuickEnquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QuickEnquiryData>({
    resolver: zodResolver(quickEnquirySchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
      gdprConsent: false as unknown as true,
    },
  });

  const onSubmit = async (data: QuickEnquiryData) => {
    setIsSubmitting(true);
    setError("");
    try {
      const response = await fetch("/api/quick-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Submission failed");

      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card p-8 text-center"
      >
        <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
        <h3 className="font-heading text-xl text-white mb-2">
          Message Sent
        </h3>
        <p className="text-white/60 text-sm">
          Thanks for getting in touch. A specialist broker will call you back
          within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="glass-card p-8 space-y-4">
      <div>
        <Label className="text-white/70 text-sm mb-1.5 block">Full Name</Label>
        <Input
          {...register("fullName")}
          className="glass-input text-white"
          placeholder="John Smith"
        />
        {errors.fullName && (
          <p className="text-red-400 text-xs mt-1">{errors.fullName.message}</p>
        )}
      </div>

      <div>
        <Label className="text-white/70 text-sm mb-1.5 block">Email</Label>
        <Input
          type="email"
          {...register("email")}
          className="glass-input text-white"
          placeholder="john@example.com"
        />
        {errors.email && (
          <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Label className="text-white/70 text-sm mb-1.5 block">Phone</Label>
        <Input
          type="tel"
          {...register("phone")}
          className="glass-input text-white"
          placeholder="07700 900000"
        />
        {errors.phone && (
          <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <Label className="text-white/70 text-sm mb-1.5 block">
          How can we help?
        </Label>
        <textarea
          {...register("message")}
          rows={3}
          className="glass-input text-white w-full rounded-md px-3 py-2 text-sm resize-none"
          placeholder="e.g. I'm looking to purchase an office via my SIPP, valued at around &pound;500k..."
        />
        {errors.message && (
          <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>

      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          {...register("gdprConsent")}
          className="mt-1 accent-gold"
        />
        <span className="text-xs text-white/60">
          I have read and agree to the{" "}
          <a href="/privacy" className="text-gold underline">
            privacy policy
          </a>
          . *
        </span>
      </label>
      {errors.gdprConsent && (
        <p className="text-red-400 text-xs">{errors.gdprConsent.message}</p>
      )}

      {error && <p className="text-red-400 text-sm">{error}</p>}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full gold-gradient text-navy font-semibold hover:opacity-90"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 w-4 h-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="mr-2 w-4 h-4" />
            Send Quick Enquiry
          </>
        )}
      </Button>
    </form>
  );
}
