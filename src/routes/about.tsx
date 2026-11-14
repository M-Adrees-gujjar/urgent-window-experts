import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageIntro, QuoteBand, SiteLayout, pageHead } from "@/components/site";
import homeImage from "@/assets/ak-glazing-home.jpg";

export const Route = createFileRoute("/about")({
  head: () => pageHead("About AK Glazing | Enfield & North London", "Learn about AK Glazing and our considered approach to windows, doors and home glazing projects across Enfield and North London."),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageIntro eyebrow="A little about us" title="A home improvement should feel like the right fit." description="AK Glazing helps homeowners across Enfield and North London explore windows, doors and glazing options with their home and everyday needs in mind." />
      <section className="page-shell grid gap-10 py-12 sm:py-16 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16 lg:py-20">
        <img alt="Light-filled home with broad garden-facing glazing" className="aspect-[5/4] w-full object-cover" src={homeImage} />
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-primary">Our approach</p>
          <h2 className="mt-3 font-heading text-3xl font-bold">Start with what matters to you.</h2>
          <p className="mt-5 leading-7 text-muted-foreground">A warmer room, more daylight, a new way into the garden or a style that sits comfortably with the rest of your home: every project starts with a different priority. We’ll take time to understand yours before talking through suitable options.</p>
          <p className="mt-4 leading-7 text-muted-foreground">From a single replacement to a larger home project, the useful first step is a straightforward conversation about the property, the opening and what you hope to change.</p>
          <Button asChild className="mt-7" variant="outline"><Link to="/quote">Tell us about your project <ArrowRight aria-hidden="true" /></Link></Button>
        </div>
      </section>
      <section className="bg-secondary/60">
        <div className="page-shell grid gap-8 py-12 sm:py-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-20">
          <div><p className="text-sm font-semibold uppercase tracking-[0.08em] text-primary">What to expect</p><h2 className="mt-3 font-heading text-3xl font-bold">A clear conversation, then a considered quote.</h2></div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {["We listen to what you want to improve", "We talk through options for your property", "We consider the details that matter to you", "We help you understand the next step"].map((item) => <li className="flex gap-3 border-t border-border pt-4 text-sm leading-6" key={item}><Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-primary" />{item}</li>)}
          </ul>
        </div>
      </section>
      <QuoteBand />
    </SiteLayout>
  );
}