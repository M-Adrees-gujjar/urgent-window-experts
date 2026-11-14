import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, pageHead } from "@/components/site";

export const Route = createFileRoute("/roof-glazing")({
  head: () => pageHead("Roof Windows & Lanterns in Enfield | AK Glazing", "Bring daylight into kitchens, extensions and other dim spaces with roof windows, skylights and roof lantern options to discuss."),
  component: RoofGlazingPage,
});

function RoofGlazingPage() {
  return <ServicePage slug="roof-glazing" />;
}