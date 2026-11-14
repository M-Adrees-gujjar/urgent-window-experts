import { createFileRoute } from "@tanstack/react-router";

import { PageIntro, QuoteForm, SiteLayout, pageHead } from "@/components/site";

export const Route = createFileRoute("/quote")({
  head: () => pageHead("Request a Glazing Quote in Enfield | AK Glazing", "Tell AK Glazing about your window, door or glazing project in Enfield or North London and request a quote."),
  component: QuotePage,
});

function QuotePage() {
  return (
    <SiteLayout>
      <PageIntro eyebrow="Your project" title="Let’s talk about what you have in mind." description="Share a few details about the property and the work you’re considering. We’ll use them to understand your enquiry and respond." />
      <section className="page-shell grid gap-10 py-12 sm:py-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:py-20">
        <div>
          <h2 className="font-heading text-2xl font-bold">A good place to start.</h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">A postcode and a short description help us understand the location and scope. If you’re not sure exactly what you need, just tell us what you’d like to improve.</p>
          <p className="mt-5 text-sm leading-7 text-muted-foreground">We work with homeowners across Enfield and North London on windows, doors, glazing and extensions.</p>
        </div>
        <QuoteForm />
      </section>
    </SiteLayout>
  );
}