import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const display = useTransform(mv, (v) => Math.round(v).toString() + suffix);

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration: 1.8, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, mv, to]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

const stats = [
  { value: 95, suffix: "%", label: "Client Satisfaction" },
  { value: 50, suffix: "+", label: "Partner Brokerages" },
  { value: 320, suffix: "+", label: "Active Listings" },
  { value: 12, suffix: "yr", label: "On the Market" },
];

export function StatsBanner() {
  return (
    <section className="border-y border-gold/15 bg-charcoal py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-12 px-6 md:grid-cols-4 lg:px-10">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className={`relative text-center md:text-left ${i > 0 ? "md:border-l md:border-border md:pl-8" : ""}`}
          >
            <p className="font-display text-6xl md:text-7xl text-gold leading-none">
              <Counter to={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
