import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { properties } from "@/lib/data";
import { PropertyCard } from "@/components/ui/PropertyCard";
import { MarqueeRow } from "@/components/ui/MarqueeRow";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FeaturedProperties() {
  return (
    <section id="properties" className="relative py-28">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="mx-auto max-w-7xl px-6 lg:px-10"
      >
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">
              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-gold align-middle" />
              Exclusive Listings
            </p>
            <h2 className="mt-4 font-display text-5xl md:text-6xl text-ivory text-balance max-w-xl">
              Featured properties, hand-picked for you.
            </h2>
          </div>
          <Button variant="ghost" className="group text-ivory hover:bg-ivory/5 hover:text-ivory">
            View all
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </motion.div>

      <div className="mt-14 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <MarqueeRow duration={50}>
          {properties.map((p) => (
            <PropertyCard key={p.name} property={p} />
          ))}
        </MarqueeRow>
      </div>
    </section>
  );
}
