import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { FeaturedProperties } from "@/components/sections/FeaturedProperties";
import { PropertyTypes } from "@/components/sections/PropertyTypes";
import { About } from "@/components/sections/About";
import { StatsBanner } from "@/components/sections/StatsBanner";
import { Testimonials } from "@/components/sections/Testimonials";
import { Agents } from "@/components/sections/Agents";
import { Blog } from "@/components/sections/Blog";
import { CTABanner } from "@/components/sections/CTABanner";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "NestHaven — Where every address becomes a story" },
      {
        name: "description",
        content:
          "NestHaven connects you to extraordinary spaces — luxury homes, exclusive listings, and expert agents.",
      },
      { property: "og:title", content: "NestHaven — Luxury Real Estate" },
      { property: "og:description", content: "Where every address becomes a story." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=DM+Sans:wght@400;500;600&display=swap",
      },
    ],
  }),
});

function Index() {
  return (
    <main id="top" className="min-h-screen bg-charcoal text-ivory">
      <Navbar />
      <Hero />
      <FeaturedProperties />
      <PropertyTypes />
      <About />
      <StatsBanner />
      <Testimonials />
      <Agents />
      <Blog />
      <CTABanner />
      <Footer />
    </main>
  );
}
