import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/data";
import { Button } from "@/components/ui/button";
import testimonialImg from "@/assets/testimonial-1.jpg";

function Typewriter({ text }: { text: string }) {
  const [shown, setShown] = useState("");
  useEffect(() => {
    setShown("");
    let i = 0;
    const id = setInterval(() => {
      i++;
      setShown(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, 18);
    return () => clearInterval(id);
  }, [text]);
  return <span>{shown}</span>;
}

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];

  return (
    <section className="py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-10">
        <div className="relative">
          <div className="rounded-3xl border-2 border-gold p-3">
            <img src={testimonialImg} alt="Client" loading="lazy" className="rounded-2xl w-full aspect-[4/5] object-cover" />
          </div>
          <span className="absolute -top-4 -right-4 hidden md:block rounded-full bg-gold px-4 py-2 text-xs uppercase tracking-widest text-charcoal">
            Verified Client
          </span>
        </div>

        <div className="relative">
          <p className="eyebrow">Testimonials</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-ivory text-balance">
            Trusted by buyers who needed more than a listing.
          </h2>

          <div className="relative mt-10 min-h-[260px]">
            <span className="absolute -top-6 -left-2 font-display text-[120px] leading-none text-gold/70 select-none">
              &ldquo;
            </span>
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative z-10"
              >
                <p className="font-display text-2xl md:text-3xl leading-snug text-ivory text-balance">
                  <Typewriter text={t.quote} />
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="h-px flex-1 bg-border" />
                  <div>
                    <p className="font-display text-xl text-ivory">{t.name}</p>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">{t.location}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <Button
              size="icon"
              variant="outline"
              onClick={() => setI((i - 1 + testimonials.length) % testimonials.length)}
              className="rounded-full border-ivory/30 bg-transparent text-ivory hover:bg-ivory/5 hover:text-ivory"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => setI((i + 1) % testimonials.length)}
              className="rounded-full border-ivory/30 bg-transparent text-ivory hover:bg-ivory/5 hover:text-ivory"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            <div className="ml-4 flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === i ? "w-8 bg-gold" : "w-1.5 bg-ivory/30"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
