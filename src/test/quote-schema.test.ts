import { describe, expect, it } from "vitest";

import { quoteRequestSchema } from "@/lib/quote-schema";

const validRequest = {
  name: "A. Customer",
  email: "customer@example.com",
  postcode: "EN1 1AA",
  service: "Windows" as const,
};

describe("quote request validation", () => {
  it("requires a name and postcode", () => {
    expect(quoteRequestSchema.safeParse({ ...validRequest, name: " " }).success).toBe(false);
    expect(quoteRequestSchema.safeParse({ ...validRequest, postcode: " " }).success).toBe(false);
  });

  it("accepts a name up to 100 characters and rejects longer names", () => {
    expect(quoteRequestSchema.safeParse({ ...validRequest, name: "A".repeat(100) }).success).toBe(true);
    expect(quoteRequestSchema.safeParse({ ...validRequest, name: "A".repeat(101) }).success).toBe(false);
  });

  it("requires a valid email address no longer than 255 characters", () => {
    expect(quoteRequestSchema.safeParse({ ...validRequest, email: "not-an-email" }).success).toBe(false);
    expect(quoteRequestSchema.safeParse({ ...validRequest, email: `${"a".repeat(243)}@example.com` }).success).toBe(false);
  });

  it("accepts messages up to 2,000 characters and rejects longer messages", () => {
    expect(quoteRequestSchema.safeParse({ ...validRequest, message: "A".repeat(2000) }).success).toBe(true);
    expect(quoteRequestSchema.safeParse({ ...validRequest, message: "A".repeat(2001) }).success).toBe(false);
  });

  it("accepts only the listed quote services", () => {
    expect(quoteRequestSchema.safeParse({ ...validRequest, service: "Windows" }).success).toBe(true);
    expect(quoteRequestSchema.safeParse({ ...validRequest, service: "Not a service" }).success).toBe(false);
  });
});