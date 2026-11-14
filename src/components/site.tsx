import { useState, type FormEvent, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronDown, Mail, Menu, MessageCircle, Phone, X } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { quoteRequestSchema, quoteServices, type QuoteRequestInput } from "@/lib/quote-schema";
import { servicePages, type ServiceSlug } from "@/lib/site-content";
import { submitQuoteRequest } from "@/lib/quote.functions";

const mapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2477.42706786954!2d-0.0619314!3d51.615385599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761f6c83fd127d%3A0xd4e5aae9968ca072!2sAk%20glazing!5e0!3m2!1sen!2s!4v1794658449646!5m2!1sen!2s";
const reviewsUrl = "https://www.google.com/maps/search/?api=1&query=AK%20Glazing&query_place_id=0x48761f6c83fd127d%3A0xd4e5aae9968ca072";

const navigation = [
  { label: "Windows", to: "/windows" as const },
  { label: "Doors", to: "/doors" as const },
  { label: "Glazing", to: "/glazing" as const },
  { label: "Extensions", to: "/extensions" as const },
  { label: "Roof glazing", to: "/roof-glazing" as const },
  { label: "About", to: "/about" as const },
];

export function SiteLayout({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="bg-primary text-primary-foreground">
        <div className="page-shell flex min-h-9 items-center justify-between gap-4 text-xs sm:text-sm">
          <span>Thoughtful glazing for homes across Enfield &amp; North London</span>
          <Link className="hidden items-center gap-1 font-medium sm:inline-flex" to="/quote">
            Request a quote <ArrowRight aria-hidden="true" className="size-3.5" />
          </Link>
        </div>
      </div>
      <header className="border-b border-border bg-background">
        <div className="page-shell flex min-h-[5.25rem] items-center justify-between gap-5">
          <Link aria-label="AK Glazing home" className="flex shrink-0 items-center gap-3" onClick={() => setMenuOpen(false)} to="/">
            <span className="grid size-11 place-items-center bg-primary font-heading text-lg font-extrabold text-primary-foreground">AK</span>
            <span className="leading-tight">
              <span className="block font-heading text-lg font-extrabold">AK Glazing</span>
              <span className="mt-1 block text-[0.68rem] text-muted-foreground">Enfield &amp; North London</span>
            </span>
          </Link>
          <nav aria-label="Main navigation" className="hidden items-center gap-5 py-3 text-sm font-medium lg:flex">
            {navigation.map((item) => (
              <Link key={item.to} className="text-foreground/80 transition-colors hover:text-primary" to={item.to}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild className="hidden shrink-0 lg:inline-flex" size="default">
              <Link to="/quote">Get a quote</Link>
            </Button>
            <button
              aria-controls="mobile-navigation"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="grid size-11 place-items-center rounded-md text-foreground transition-colors hover:bg-secondary lg:hidden"
              onClick={() => setMenuOpen((open) => !open)}
              type="button"
            >
              {menuOpen ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav aria-label="Mobile navigation" className="border-t border-border bg-background lg:hidden" id="mobile-navigation">
            <div className="page-shell grid gap-1 py-3">
              {navigation.map((item) => (
                <Link
                  key={item.to}
                  className="rounded-md px-3 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
                  onClick={() => setMenuOpen(false)}
                  to={item.to}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="mt-2" size="default">
                <Link onClick={() => setMenuOpen(false)} to="/quote">Get a quote</Link>
              </Button>
            </div>
          </nav>
        )}
      </header>
      <main>{children}</main>
      <footer className="bg-foreground text-background">
        <div className="page-shell grid gap-10 py-12 md:grid-cols-[1.2fr_1fr_1fr] md:py-16">
          <div>
            <Link className="inline-flex items-center gap-3" to="/">
              <span className="grid size-10 place-items-center bg-background font-heading font-extrabold text-foreground">AK</span>
              <span className="font-heading text-xl font-bold">AK Glazing</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-background/75">Windows, doors and glazing, considered for your home and the way you live.</p>
            <p className="mt-3 text-sm text-background/75">Serving Enfield and North London.</p>
          </div>
          <div>
            <h2 className="font-heading text-base font-bold">Explore</h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-background/75">
              {navigation.map((item) => <li key={item.to}><Link className="hover:text-background" to={item.to}>{item.label}</Link></li>)}
              <li><Link className="hover:text-background" to="/about">About us</Link></li>
              <li><Link className="hover:text-background" to="/privacy">Privacy</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="font-heading text-base font-bold">Start a conversation</h2>
            <p className="mt-4 text-sm leading-6 text-background/75">Tell us what you have in mind and where the property is. We’ll take it from there.</p>
            <Button asChild className="mt-5" variant="secondary">
              <Link to="/quote">Request a quote <ArrowRight aria-hidden="true" /></Link>
            </Button>
          </div>
        </div>
        <section className="page-shell pb-10" aria-labelledby="business-map-heading">
          <h2 className="font-heading text-base font-bold" id="business-map-heading">Find AK Glazing</h2>
          <iframe
            allowFullScreen
            className="mt-4 h-[280px] w-full border-0 sm:h-[360px]"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            src={mapsUrl}
            title="AK Glazing on Google Maps"
          />
        </section>
        <div className="border-t border-background/20">
          <div className="page-shell flex flex-wrap justify-between gap-3 py-4 text-xs text-background/65">
            <span>© {new Date().getFullYear()} AK Glazing</span>
            <span>Homes across Enfield &amp; North London</span>
          </div>
        </div>
      </footer>
      <a
        aria-label="Read more AK Glazing reviews on Google Maps"
        className="fixed bottom-4 left-4 z-50 inline-flex max-w-[calc(100vw-5.5rem)] cursor-pointer items-center gap-2.5 rounded-xl bg-white px-4 py-3 text-sm font-medium text-neutral-900 shadow-lg ring-1 ring-black/5 transition-transform hover:-translate-y-0.5"
        href={reviewsUrl}
        rel="noreferrer"
        target="_blank"
      >
        <span aria-hidden="true" className="bg-gradient-to-br from-blue-600 via-green-500 to-yellow-500 bg-clip-text text-xl font-bold text-transparent">G</span>
        <span>Read more Reviews</span>
      </a>
      <FloatingContactActions />
    </div>
  );
}

function FloatingContactActions() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-center gap-3">
      {open && (
        <>
          <a
            aria-label="Chat with AK Glazing on WhatsApp"
            className="grid size-14 cursor-pointer place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
            href="https://wa.me/447928516083"
            rel="noreferrer"
            target="_blank"
            title="WhatsApp"
          >
            <MessageCircle aria-hidden="true" className="size-6" />
          </a>
          <Link
            aria-label="Send AK Glazing a message"
            className="grid size-14 cursor-pointer place-items-center rounded-full bg-rose-600 text-white shadow-lg transition-transform hover:scale-105"
            title="Email"
            to="/quote"
          >
            <Mail aria-hidden="true" className="size-6" />
          </Link>
          <a
            aria-label="Call AK Glazing"
            className="grid size-14 cursor-pointer place-items-center rounded-full bg-emerald-500 text-white shadow-lg transition-transform hover:scale-105"
            href="tel:+447928516083"
            title="Call"
          >
            <Phone aria-hidden="true" className="size-6" />
          </a>
        </>
      )}
      <button
        aria-expanded={open}
        aria-label={open ? "Close contact options" : "Open contact options"}
        className="grid size-14 cursor-pointer place-items-center rounded-full bg-black text-white shadow-lg transition-transform hover:scale-105"
        onClick={() => setOpen((current) => !current)}
        type="button"
      >
        {open ? <X aria-hidden="true" className="size-7" /> : <MessageCircle aria-hidden="true" className="size-7" />}
      </button>
    </div>
  );
}

export function pageHead(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}

export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="border-b border-border bg-secondary/50">
      <div className="page-shell py-12 sm:py-16 lg:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-primary">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl font-heading text-4xl font-bold leading-[1.08] sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">{description}</p>
      </div>
    </section>
  );
}

export function ServicePage({ slug }: { slug: ServiceSlug }) {
  const service = servicePages[slug];
  return (
    <SiteLayout>
      <section className="page-shell grid gap-10 py-12 sm:py-16 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-14 lg:py-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-primary">{service.eyebrow}</p>
          <h1 className="mt-4 font-heading text-4xl font-bold leading-[1.08] sm:text-5xl">{service.heading}</h1>
          <p className="mt-6 text-base leading-7 text-muted-foreground sm:text-lg">{service.intro}</p>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">Serving Enfield and North London.</p>
          <Button asChild className="mt-7" size="lg"><Link to="/quote">Talk to us about {service.title.toLowerCase()} <ArrowRight aria-hidden="true" /></Link></Button>
        </div>
        <img alt={service.imageAlt} className="aspect-[5/4] w-full object-cover" height={service.imageHeight} src={service.image} width={service.imageWidth} />
      </section>
      <section className="bg-secondary/60">
        <div className="page-shell grid gap-10 py-12 sm:py-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-primary">A considered choice</p>
            <h2 className="mt-3 font-heading text-3xl font-bold">Made around your home.</h2>
          </div>
          <div>
            <p className="text-base leading-7 text-muted-foreground">{service.detail}</p>
            <ul className="mt-7 grid gap-4 sm:grid-cols-2">
              {service.features.map((feature) => (
                <li className="flex items-start gap-3 border-t border-border pt-4 text-sm leading-6" key={feature}>
                  <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-primary" />{feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="page-shell py-12 sm:py-16 lg:py-20">
        <h2 className="font-heading text-3xl font-bold">A few things you might be wondering</h2>
        <div className="mt-7 divide-y divide-border border-y border-border">
          {service.faqs.map((faq) => (
            <details className="group py-5" key={faq.question}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-heading text-lg font-semibold marker:hidden">
                {faq.question}<ChevronDown aria-hidden="true" className="size-5 shrink-0 text-primary transition-transform group-open:rotate-180" />
              </summary>
              <p className="max-w-3xl pt-4 text-sm leading-7 text-muted-foreground">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
      <QuoteBand />
    </SiteLayout>
  );
}

export function QuoteBand() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="page-shell flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:py-12">
        <div>
          <h2 className="font-heading text-2xl font-bold">Have a project in mind?</h2>
          <p className="mt-2 text-sm text-primary-foreground/80">Tell us a little about it. We’ll help you find a sensible next step.</p>
        </div>
        <Button asChild className="shrink-0" variant="secondary"><Link to="/quote">Request a quote <ArrowRight aria-hidden="true" /></Link></Button>
      </div>
    </section>
  );
}

type FormValues = Omit<QuoteRequestInput, "service"> & { service: QuoteRequestInput["service"] | "" };
type FormErrors = Partial<Record<keyof FormValues | "privacy", string>>;

export function QuoteForm() {
  const submitRequest = useServerFn(submitQuoteRequest);
  const [values, setValues] = useState<FormValues>({ name: "", email: "", phone: "", postcode: "", service: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const update = (field: keyof FormValues, value: string) => setValues((current) => ({ ...current, [field]: value }));

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const parsed = quoteRequestSchema.safeParse(values);
    const nextErrors: FormErrors = {};
    if (!parsed.success) {
      for (const issue of parsed.error.issues) {
        const field = issue.path[0];
        if (typeof field === "string" && field in values) {
          nextErrors[field as keyof FormValues] ??= issue.message;
        }
      }
    }
    if (!privacyAccepted) nextErrors.privacy = "Please confirm before sending your request.";
    setErrors(nextErrors);
    if (!parsed.success || !privacyAccepted) return;

    setStatus("sending");
    try {
      const result = await submitRequest({ data: parsed.data });
      if (!result.ok) throw new Error("Request could not be saved");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border-l-4 border-primary bg-secondary/60 p-6 sm:p-8" role="status">
        <Check aria-hidden="true" className="size-7 text-primary" />
        <h2 className="mt-4 font-heading text-2xl font-bold">Thanks — we’ve received your request.</h2>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">Your details have been sent to AK Glazing. We appreciate you getting in touch.</p>
      </div>
    );
  }

  return (
    <form className="grid gap-5" noValidate onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField error={errors.name} id="quote-name" label="Your name">
          <Input autoComplete="name" id="quote-name" maxLength={100} onChange={(event) => update("name", event.target.value)} required value={values.name} />
        </FormField>
        <FormField error={errors.email} id="quote-email" label="Email address">
          <Input autoComplete="email" id="quote-email" maxLength={255} onChange={(event) => update("email", event.target.value)} required type="email" value={values.email} />
        </FormField>
        <FormField error={errors.phone} id="quote-phone" label="Phone number (optional)">
          <Input autoComplete="tel" id="quote-phone" maxLength={40} onChange={(event) => update("phone", event.target.value)} type="tel" value={values.phone} />
        </FormField>
        <FormField error={errors.postcode} id="quote-postcode" label="Property postcode">
          <Input autoComplete="postal-code" id="quote-postcode" maxLength={16} onChange={(event) => update("postcode", event.target.value)} required value={values.postcode} />
        </FormField>
      </div>
      <FormField error={errors.service} id="quote-service" label="What can we help with?">
        <Select onValueChange={(value) => {
          if (quoteServices.some((service) => service === value)) update("service", value);
        }} value={values.service}>
          <SelectTrigger aria-describedby={errors.service ? "quote-service-error" : undefined} aria-invalid={Boolean(errors.service)} id="quote-service">
            <SelectValue placeholder="Choose a service" />
          </SelectTrigger>
          <SelectContent>
            {quoteServices.map((service) => <SelectItem key={service} value={service}>{service}</SelectItem>)}
          </SelectContent>
        </Select>
      </FormField>
      <FormField error={errors.message} id="quote-message" label="A little about your project (optional)">
        <Textarea id="quote-message" maxLength={2000} onChange={(event) => update("message", event.target.value)} rows={5} value={values.message} />
      </FormField>
      <div>
        <div className="flex items-start gap-3">
          <Checkbox checked={privacyAccepted} id="quote-privacy" onCheckedChange={(checked) => setPrivacyAccepted(checked === true)} />
          <Label className="leading-5 text-muted-foreground" htmlFor="quote-privacy">I agree that AK Glazing can use these details to respond to my enquiry. Read the <Link className="font-medium text-primary underline underline-offset-4" to="/privacy">privacy notice</Link>.</Label>
        </div>
        {errors.privacy && <p className="mt-2 text-sm text-destructive" role="alert">{errors.privacy}</p>}
      </div>
      {status === "error" && <p className="text-sm text-destructive" role="alert">We couldn’t send your request just now. Please try again in a moment.</p>}
      <div>
        <Button disabled={status === "sending"} size="lg" type="submit">{status === "sending" ? "Sending…" : "Send quote request"} <ArrowRight aria-hidden="true" /></Button>
      </div>
    </form>
  );
}

function FormField({ children, error, id, label }: { children: ReactNode; error?: string | undefined; id: string; label: string }) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error && <p className="text-sm text-destructive" id={`${id}-error`} role="alert">{error}</p>}
    </div>
  );
}
