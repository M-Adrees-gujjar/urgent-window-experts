import { createServerFn } from "@tanstack/react-start";

import { quoteRequestSchema } from "@/lib/quote-schema";

export const submitQuoteRequest = createServerFn({ method: "POST" })
  .inputValidator((input) => quoteRequestSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("quote_requests").insert({
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      postcode: data.postcode,
      service: data.service,
      message: data.message,
    });

    if (error) {
      console.error("Could not save quote request.", error.message);
      return { ok: false as const };
    }

    return { ok: true as const };
  });