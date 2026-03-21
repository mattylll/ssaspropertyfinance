import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  enquiries: defineTable({
    // Step 1 — Property
    propertyType: v.string(),
    propertyValue: v.number(),
    location: v.string(),
    tenure: v.string(),

    // Step 2 — Pension
    schemeType: v.string(),
    fundValue: v.number(),
    providerName: v.optional(v.string()),
    trusteeStatus: v.optional(v.string()),

    // Step 3 — Finance Need
    loanAmount: v.number(),
    ltvTarget: v.number(),
    purpose: v.string(),
    urgency: v.string(),

    // Step 4 — Contact
    fullName: v.string(),
    email: v.string(),
    phone: v.string(),
    company: v.optional(v.string()),
    ifaFcaNumber: v.optional(v.string()),
    preferredContactTime: v.optional(v.string()),
    gdprConsent: v.boolean(),
    marketingConsent: v.boolean(),

    // Metadata
    status: v.string(),
    source: v.optional(v.string()),
    createdAt: v.number(),
  })
    .index("by_email", ["email"])
    .index("by_status", ["status"])
    .index("by_createdAt", ["createdAt"]),

  calculatorSessions: defineTable({
    calculatorType: v.string(),
    inputs: v.any(),
    results: v.any(),
    createdAt: v.number(),
  }).index("by_type", ["calculatorType"]),

  lenders: defineTable({
    name: v.string(),
    logo: v.optional(v.string()),
    minLoan: v.number(),
    maxLoan: v.number(),
    maxLtv: v.number(),
    minRate: v.number(),
    ssasAccepted: v.boolean(),
    propertyTypes: v.array(v.string()),
    features: v.array(v.string()),
    isActive: v.boolean(),
  }).index("by_active", ["isActive"]),

  caseStudies: defineTable({
    title: v.string(),
    slug: v.string(),
    propertyType: v.string(),
    loanSize: v.number(),
    ltv: v.number(),
    location: v.string(),
    outcome: v.string(),
    summary: v.string(),
    content: v.string(),
    imageUrl: v.optional(v.string()),
    isPublished: v.boolean(),
    createdAt: v.number(),
  })
    .index("by_slug", ["slug"])
    .index("by_published", ["isPublished"]),

  articles: defineTable({
    title: v.string(),
    slug: v.string(),
    metaTitle: v.string(),
    metaDescription: v.string(),
    excerpt: v.string(),
    content: v.string(),
    category: v.string(),
    tags: v.array(v.string()),
    author: v.string(),
    authorTitle: v.string(),
    heroImage: v.string(),
    heroImageAlt: v.string(),
    publishedAt: v.number(),
    updatedAt: v.number(),
    readingTime: v.number(),
    isPublished: v.boolean(),
    relatedSlugs: v.array(v.string()),
    primaryKeyword: v.string(),
    secondaryKeywords: v.array(v.string()),
  })
    .index("by_slug", ["slug"])
    .index("by_published", ["isPublished"])
    .index("by_category", ["category"])
    .index("by_publishedAt", ["publishedAt"]),
});
