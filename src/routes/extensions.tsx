import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, pageHead } from "@/components/site";

export const Route = createFileRoute("/extensions")({
  head: () => pageHead("Glazed Extensions & Conservatories in Enfield | AK Glazing", "Explore conservatories, orangeries and glazed extensions planned around your home, garden and the way you want to use the space."),
  component: ExtensionsPage,
});

function ExtensionsPage() {
  return <ServicePage slug="extensions" />;
}