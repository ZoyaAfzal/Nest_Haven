import { motion } from "framer-motion";
import { ArrowRight, MapPin, Home } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import cta from "@/assets/cta.jpg";

export function CTABanner() {
  return (
    <section id="cta" className="relative overflow-hidden">
      <img src={cta} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-charcoal/75" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="relative mx-auto max-w-4xl px-6 py-28 text-center"
      >
        <p className="eyebrow">Start the search</p>
        <h2 className="mt-4 font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.95] text-ivory text-balance">
          Find your dream home today.
        </h2>
        <p className="mt-5 mx-auto max-w-xl text-base text-ivory/75">
          Tell us where you'd like to live — we'll bring you the listings worth walking through.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto mt-10 flex max-w-3xl flex-col gap-2 rounded-3xl border border-border bg-charcoal/80 backdrop-blur p-2 md:flex-row md:rounded-full md:gap-1"
        >
          <div className="flex flex-1 items-center gap-2 px-4">
            <MapPin className="h-4 w-4 text-gold shrink-0" />
            <Input
              placeholder="Location, neighborhood, or ZIP"
              className="border-0 bg-transparent text-ivory placeholder:text-ivory/50 focus-visible:ring-0 shadow-none h-12"
            />
          </div>
          <div className="hidden h-8 w-px bg-border md:block self-center" />
          <div className="flex flex-1 items-center gap-2 px-4">
            <Home className="h-4 w-4 text-gold shrink-0" />
            <select className="w-full bg-transparent text-ivory text-sm outline-none h-12">
              <option className="bg-charcoal">Any property type</option>
              <option className="bg-charcoal">Apartment</option>
              <option className="bg-charcoal">Townhouse</option>
              <option className="bg-charcoal">Villa</option>
            </select>
          </div>
          <Button
            type="submit"
            size="lg"
            className="group rounded-full bg-gold text-charcoal hover:bg-gold focus-visible:ring-2 focus-visible:ring-gold h-12 px-8"
          >
            Search
            <ArrowRight className="ml-2 h-4 w-4 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
          </Button>
        </form>
      </motion.div>
    </section>
  );
}
