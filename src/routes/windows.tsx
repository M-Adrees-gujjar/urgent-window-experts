import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, pageHead } from "@/components/site";

export const Route = createFileRoute("/windows")({
  head: () => pageHead("Window Styles & Replacement in Enfield | AK Glazing", "Explore made-to-measure replacement windows, frame styles and glazing options for homes in Enfield and North London."),
  component: WindowsPage,
});

function WindowsPage() {
  return <ServicePage slug="windows" />;
}