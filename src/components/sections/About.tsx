import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Search, TrendingUp, MapPin, DollarSign } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";
import about3 from "@/assets/about-3.jpg";

function Sparkline() {
  return (
    <svg viewBox="0 0 200 60" className="h-14 w-full">
      <motion.path
        d="M0 50 L30 38 L55 44 L80 28 L105 32 L135 18 L165 22 L200 6"
        fill="none"
        stroke="oklch(0.82 0.14 85)"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: "easeOut" }}
      />
      <motion.circle
        cx="200"
        cy="6"
        r="3"
        fill="oklch(0.82 0.14 85)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.4 }}
      />
    </svg>
  );
}

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["6%", "-12%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["-4%", "12%"]);

  return (
    <section id="about" ref={ref} className="py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        {/* LEFT */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
          <div className="rounded-3xl bg-surface p-8 border border-border">
            <p className="eyebrow">Our Approach</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-ivory text-balance">
              Why choose NestHaven?
            </h2>
            <p className="mt-4 text-sm text-muted-foreground max-w-md">
              Two quiet advantages that change how you find — and finance — your next address.
            </p>

            {/* Card 1 */}
            <div className="group mt-6 rounded-2xl bg-charcoal border border-border p-6 relative overflow-hidden transition-colors hover:bg-charcoal/60">
              <span className="absolute left-0 top-0 h-0 w-[2px] bg-gold transition-all duration-500 group-hover:h-full" />
              <div className="flex items-center gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-gold/15 text-gold group-hover:animate-bounce">
                  <Search className="h-5 w-5" />
                </span>
                <h3 className="font-display text-2xl text-ivory">Advanced Property Search</h3>
              </div>
              <p className="mt-3 text-sm text-ivory/70">
                Filter thousands of listings down to the handful that truly fit by neighborhood, light, layout, or yield.
              </p>
              {/* Nested mock search bar */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-5 flex flex-wrap gap-2 rounded-xl bg-surface/80 border border-border p-2"
              >
                <div className="flex flex-1 min-w-[120px] items-center gap-2 rounded-lg bg-charcoal px-3 py-2 text-xs text-ivory/70">
                  <MapPin className="h-3.5 w-3.5 text-gold" /> Malibu, CA
                </div>
                <div className="flex flex-1 min-w-[100px] items-center gap-2 rounded-lg bg-charcoal px-3 py-2 text-xs text-ivory/70">
                  <DollarSign className="h-3.5 w-3.5 text-gold" /> $500k–$1.2M
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-gold px-4 py-2 text-xs font-medium text-charcoal">
                  Search
                </div>
              </motion.div>
            </div>

            {/* Card 2 */}
            <div className="group mt-4 rounded-2xl bg-charcoal border border-border p-6 relative overflow-hidden transition-colors hover:bg-charcoal/60">
              <span className="absolute left-0 top-0 h-0 w-[2px] bg-gold transition-all duration-500 group-hover:h-full" />
              <div className="flex items-center gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-gold/15 text-gold group-hover:animate-bounce">
                  <TrendingUp className="h-5 w-5" />
                </span>
                <h3 className="font-display text-2xl text-ivory">Real-Time Market Insights</h3>
              </div>
              <p className="mt-3 text-sm text-ivory/70">
                A live read on prices, days-on-market, and neighborhood momentum, updated every morning.
              </p>
              <div className="mt-5 rounded-xl bg-surface/80 border border-border p-4">
                <div className="flex items-center justify-between text-xs text-ivory/60">
                  <span>Median price · Last 90 days</span>
                  <span className="text-gold">+ 6.4%</span>
                </div>
                <Sparkline />
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT — collage */}
        <div className="relative grid grid-cols-2 gap-4 min-h-[600px]">
          <motion.div style={{ y: y1 }} className="relative row-span-2 overflow-hidden rounded-2xl group">
            <img src={about1} alt="Marble staircase" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gold/0 transition-colors duration-500 group-hover:bg-gold/20" />
          </motion.div>
          <motion.div style={{ y: y2 }} className="relative overflow-hidden rounded-2xl group">
            <img src={about2} alt="Modern kitchen" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gold/0 transition-colors duration-500 group-hover:bg-gold/20" />
          </motion.div>
          <motion.div style={{ y: y3 }} className="relative overflow-hidden rounded-2xl group">
            <img src={about3} alt="Reading nook" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gold/0 transition-colors duration-500 group-hover:bg-gold/20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
