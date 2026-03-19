import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const submit = mutation({
  args: {
    propertyType: v.string(),
    propertyValue: v.number(),
    location: v.string(),
    tenure: v.string(),
    schemeType: v.string(),
    fundValue: v.number(),
    providerName: v.optional(v.string()),
    trusteeStatus: v.optional(v.string()),
    loanAmount: v.number(),
    ltvTarget: v.number(),
    purpose: v.string(),
    urgency: v.string(),
    fullName: v.string(),
    email: v.string(),
    phone: v.string(),
    company: v.optional(v.string()),
    ifaFcaNumber: v.optional(v.string()),
    preferredContactTime: v.optional(v.string()),
    gdprConsent: v.boolean(),
    marketingConsent: v.boolean(),
    source: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const enquiryId = await ctx.db.insert("enquiries", {
      ...args,
      status: "new",
      createdAt: Date.now(),
    });
    return enquiryId;
  },
});

export const list = query({
  args: {
    status: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    if (args.status) {
      return await ctx.db
        .query("enquiries")
        .withIndex("by_status", (q) => q.eq("status", args.status!))
        .order("desc")
        .collect();
    }
    return await ctx.db
      .query("enquiries")
      .withIndex("by_createdAt")
      .order("desc")
      .collect();
  },
});

export const getById = query({
  args: { id: v.id("enquiries") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

export const updateStatus = mutation({
  args: {
    id: v.id("enquiries"),
    status: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, { status: args.status });
  },
});
