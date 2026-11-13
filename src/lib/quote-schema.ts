import { z } from "zod";

export const quoteServices = [
  "Windows",
  "Doors",
  "Glazing",
  "Extensions & conservatories",
  "Roof glazing",
  "Other",
] as const;

export const quoteRequestSchema = z.object({
  name: z.string().trim().min(1, "Enter your name.").max(100, "Name must be 100 characters or fewer."),
  email: z.string().trim().email("Enter a valid email address.").max(255, "Email must be 255 characters or fewer."),
  phone: z.string().trim().max(40, "Phone number must be 40 characters or fewer.").optional().default(""),
  postcode: z.string().trim().min(2, "Enter your postcode.").max(16, "Postcode must be 16 characters or fewer."),
  service: z.enum(quoteServices, { error: "Choose the service you need." }),
  message: z.string().trim().max(2000, "Message must be 2,000 characters or fewer.").optional().default(""),
});

export type QuoteRequestInput = z.infer<typeof quoteRequestSchema>;