import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { Building, Building2, Factory, Home, Mountain, TreePine, Waves } from "lucide-react";
import { MarqueeRow } from "@/components/ui/MarqueeRow";
import type { LucideIcon } from "lucide-react";

const categories: { icon: LucideIcon; label: string; count: number }[] = [
  { icon: Building2, label: "Luxury Rentals", count: 20 },
  { icon: Home, label: "City Townhouses", count: 45 },
  { icon: Building, label: "Apartments", count: 120 },
  { icon: Factory, label: "Industrial Spaces", count: 20 },
  { icon: Waves, label: "Beachfront Villas", count: 10 },
  { icon: TreePine, label: "Bungalows", count: 40 },
  { icon: Mountain, label: "Cabins", count: 15 },
];

export function PropertyTypes() {
  return (
    <section className="relative bg-surface py-28 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-60" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="relative mx-auto max-w-4xl px-6 text-center"
      >
        <p className="eyebrow">Browse by category</p>
        <h2 className="mt-4 font-display text-4xl md:text-5xl text-ivory text-balance">
          Explore diverse property types
        </h2>
      </motion.div>

      <div className="relative mt-14 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <MarqueeRow reverse duration={40} gap={18}>
          {categories.map(({ icon: Icon, label, count }) => (
            <div
              key={label}
              className="group flex items-center gap-4 rounded-full border border-gold/20 bg-charcoal/60 backdrop-blur px-7 py-4 transition-all duration-300 hover:border-gold hover:bg-charcoal"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gold/10 text-gold transition-transform duration-300 group-hover:rotate-[10deg]">
                <Icon className="h-5 w-5" />
              </span>
              <span className="font-display text-xl text-ivory whitespace-nowrap">{label}</span>
              <span className="rounded-full bg-gold/15 px-3 py-1 text-xs text-gold transition-transform duration-300 group-hover:scale-110">
                {count}
              </span>
            </div>
          ))}
        </MarqueeRow>
      </div>
    </section>
  );
}
