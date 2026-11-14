import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, pageHead } from "@/components/site";

export const Route = createFileRoute("/doors")({
  head: () => pageHead("Front, Patio & Garden Doors in Enfield | AK Glazing", "Find an entrance or garden door to suit your home's character, with options for glazing, colour and hardware from AK Glazing."),
  component: DoorsPage,
});

function DoorsPage() {
  return <ServicePage slug="doors" />;
}