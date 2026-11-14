import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { QuoteBand, SiteLayout, pageHead } from "@/components/site";
import homeImage from "@/assets/ak-glazing-home.jpg";
import { servicePages } from "@/lib/site-content";

export const Route = createFileRoute("/")({
  head: () => pageHead(
    "AK Glazing | Windows, Doors & Glazing in Enfield",
    "Thoughtfully chosen windows, doors and glazing for homes across Enfield and North London. Explore our services or request a quote from AK Glazing.",
  ),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <section className="relative isolate min-h-[34rem] overflow-hidden bg-foreground text-background sm:min-h-[39rem]">
        <img alt="Bright contemporary home with generous glazing and a garden view" className="absolute inset-0 -z-20 size-full object-cover" src={homeImage} />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-foreground/40" />
        <div className="page-shell flex min-h-[34rem] items-center py-14 sm:min-h-[39rem] sm:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.1em] text-background/90">AK Glazing · Enfield &amp; North London</p>
            <h1 className="mt-5 max-w-3xl font-heading text-5xl font-bold leading-[1.04] sm:text-6xl">A brighter, better-fitting home starts here.</h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-background/90 sm:text-lg">Considered windows, doors and glazing, chosen around your home, your style and the way you live.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="secondary"><Link to="/quote">Request a quote <ArrowRight aria-hidden="true" /></Link></Button>
              <Button asChild className="border-background/70 bg-transparent text-background hover:bg-background/15 hover:text-background" size="lg" variant="outline"><Link to="/windows">Explore windows</Link></Button>
            </div>
          </div>
        </div>
      </section>
      <section className="page-shell py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-primary">Our services</p>
            <h2 className="mt-3 max-w-2xl font-heading text-3xl font-bold sm:text-4xl">The right details make a home feel like yours.</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted-foreground">From a single window to a light-filled extension, start with the space you want to improve.</p>
        </div>
        <div className="mt-9 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(servicePages).map(([slug, service]) => (
            <Link className="group block" key={slug} to={slug === "extensions" ? "/extensions" : slug === "roof-glazing" ? "/roof-glazing" : `/${slug}` as "/windows" | "/doors" | "/glazing"}>
              <img alt={service.imageAlt} className="aspect-[4/3] w-full object-cover" height={service.imageHeight} loading="lazy" src={service.image} width={service.imageWidth} />
              <div className="flex items-start justify-between gap-4 border-b border-border py-4">
                <div>
                  <h3 className="font-heading text-xl font-bold">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{service.intro}</p>
                </div>
                <ArrowRight aria-hidden="true" className="mt-1 size-5 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="bg-secondary/60">
        <div className="page-shell grid gap-8 py-12 sm:py-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-primary">A clear start</p>
            <h2 className="mt-3 font-heading text-3xl font-bold">Good choices begin with good questions.</h2>
          </div>
          <div>
            <p className="text-base leading-7 text-muted-foreground">Every property is different. Share what you’d like to change, what matters most and where the home is. We can discuss the options and help you work out a suitable next step.</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {["Tell us about your home", "Explore styles and options", "Get a quote for your project", "Plan the next step together"].map((item) => <li className="flex items-center gap-3 text-sm font-medium" key={item}><Check aria-hidden="true" className="size-4 text-primary" />{item}</li>)}
            </ul>
            <Button asChild className="mt-7" variant="outline"><Link to="/about">A little about AK Glazing <ArrowRight aria-hidden="true" /></Link></Button>
          </div>
        </div>
      </section>
      <QuoteBand />
    </SiteLayout>
  );
}
