import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, pageHead } from "@/components/site";

export const Route = createFileRoute("/glazing")({
  head: () => pageHead("Double & Triple Glazing Options in Enfield | AK Glazing", "Compare glazing choices for windows, doors and extensions, with options to discuss for warmth, light, privacy and sound."),
  component: GlazingPage,
});

function GlazingPage() {
  return <ServicePage slug="glazing" />;
}