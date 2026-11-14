import { createFileRoute } from "@tanstack/react-router";

import { PageIntro, SiteLayout, pageHead } from "@/components/site";

export const Route = createFileRoute("/privacy")({
  head: () => pageHead("Privacy Notice | AK Glazing", "How AK Glazing uses the personal details you provide when you submit a website enquiry."),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <SiteLayout>
      <PageIntro eyebrow="Your information" title="Privacy notice" description="A clear explanation of the details we collect when you contact AK Glazing through this website." />
      <article className="page-shell max-w-4xl py-12 sm:py-16 lg:py-20">
        <div className="space-y-9 text-sm leading-7 text-muted-foreground">
          <section>
            <h2 className="font-heading text-xl font-bold text-foreground">What we collect</h2>
            <p className="mt-3">When you submit a quote enquiry, we ask for your name, email address, property postcode and the service you are interested in. You may also choose to provide a phone number and a message about your project.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold text-foreground">How we use your details</h2>
            <p className="mt-3">We use the information you send to understand and respond to your enquiry, discuss a possible quote and keep a record of the conversation. We do not use these details for unrelated marketing through this form.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold text-foreground">Storage and sharing</h2>
            <p className="mt-3">Your enquiry is stored in the website’s managed hosting and database services. We do not sell your personal information. We may use service providers who help operate the website and store enquiries, with access limited to what is needed for that purpose.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold text-foreground">How long we keep information</h2>
            <p className="mt-3">We keep enquiry details only for as long as they are needed to handle the enquiry and maintain relevant business records, then securely remove them when no longer needed.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold text-foreground">Your choices</h2>
            <p className="mt-3">You can ask us about the personal information you have sent or request a correction or deletion where appropriate. To make a request, use the quote form and include “Privacy request” in your message so we can identify it.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold text-foreground">Questions</h2>
            <p className="mt-3">For a question about this notice or your enquiry details, please contact AK Glazing using the <a className="font-medium text-primary underline underline-offset-4" href="/quote">quote form</a>.</p>
          </section>
          <p className="border-t border-border pt-5 text-xs">This notice covers information submitted through this website’s enquiry form.</p>
        </div>
      </article>
    </SiteLayout>
  );
}