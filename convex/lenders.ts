import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("lenders")
      .withIndex("by_active", (q) => q.eq("isActive", true))
      .collect();
  },
});

export const seed = mutation({
  args: {},
  handler: async (ctx) => {
    const existing = await ctx.db.query("lenders").first();
    if (existing) return;

    const lenders = [
      {
        name: "West Bromwich Building Society",
        minLoan: 50000,
        maxLoan: 3000000,
        maxLtv: 50,
        minRate: 5.49,
        sippAccepted: true,
        ssasAccepted: true,
        propertyTypes: ["Office", "Industrial", "Retail", "Mixed-Use"],
        features: ["Fixed & Variable rates", "Up to 25 year terms"],
        isActive: true,
      },
      {
        name: "Shawbrook Bank",
        minLoan: 100000,
        maxLoan: 5000000,
        maxLtv: 50,
        minRate: 5.99,
        sippAccepted: true,
        ssasAccepted: false,
        propertyTypes: ["Office", "Industrial", "Retail"],
        features: ["Interest-only available", "Fast turnaround"],
        isActive: true,
      },
      {
        name: "Redwood Bank",
        minLoan: 250000,
        maxLoan: 15000000,
        maxLtv: 50,
        minRate: 5.75,
        sippAccepted: true,
        ssasAccepted: true,
        propertyTypes: ["Office", "Industrial", "Retail", "Mixed-Use"],
        features: ["Dedicated relationship manager", "Flexible structuring"],
        isActive: true,
      },
      {
        name: "Aldermore",
        minLoan: 50000,
        maxLoan: 10000000,
        maxLtv: 50,
        minRate: 5.89,
        sippAccepted: true,
        ssasAccepted: true,
        propertyTypes: ["Office", "Industrial", "Retail", "Mixed-Use"],
        features: ["Multiple property types", "Broker-only"],
        isActive: true,
      },
      {
        name: "Hampshire Trust Bank",
        minLoan: 150000,
        maxLoan: 5000000,
        maxLtv: 50,
        minRate: 6.25,
        sippAccepted: true,
        ssasAccepted: false,
        propertyTypes: ["Office", "Industrial", "Retail"],
        features: ["Specialist SIPP lending", "Competitive rates"],
        isActive: true,
      },
      {
        name: "Paragon Bank",
        minLoan: 100000,
        maxLoan: 25000000,
        maxLtv: 50,
        minRate: 5.69,
        sippAccepted: true,
        ssasAccepted: true,
        propertyTypes: ["Office", "Industrial", "Retail", "Mixed-Use"],
        features: ["Large loan specialist", "Portfolio landlord friendly"],
        isActive: true,
      },
    ];

    for (const lender of lenders) {
      await ctx.db.insert("lenders", lender);
    }
  },
});
