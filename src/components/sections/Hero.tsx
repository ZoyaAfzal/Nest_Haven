import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import heroImg from "@/assets/prop-5.jpg";
import featuredProp from "@/assets/prop-1.jpg";

const stats = [
  { value: "500+", label: "Elite Estates", rotate: -3, x: "-10%", y: "10%" },
  { value: "98%", label: "Client Success", rotate: 4, x: "25%", y: "60%" },
];

const headline = ["The pinnacle", "of luxury", "real estate."];

// To change the brand video, simply update this YouTube ID
const BRAND_FILM_ID = "9kRlYZM06tc"; // Cinematic Luxury Property Tour

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const scrollToProperties = () => {
    document.getElementById("properties")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" ref={ref} className="relative min-h-screen overflow-hidden pt-28">
      {/* Background Image with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <img src={heroImg} alt="Luxury real estate background" className="h-full w-full object-cover grayscale-[0.3] brightness-[0.4]" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
      </motion.div>

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.2fr_1fr] lg:gap-16 lg:px-10 lg:py-24">
        <div className="flex flex-col justify-center">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="eyebrow"
          >
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-gold align-middle" />
            Redefining Modern Living
          </motion.p>

          <h1 className="mt-6 font-display text-[clamp(3.5rem,8vw,6.5rem)] leading-[0.9] text-ivory text-balance">
            {headline.map((line, i) => (
              <motion.span
                key={i}
                initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
                animate={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.3 + i * 0.15, ease: [0.76, 0, 0.24, 1] }}
                className="block"
              >
                {i === 2 ? (
                  <>
                    <em className="italic text-gold font-light">real estate</em>.
                  </>
                ) : (
                  line
                )}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-8 max-w-xl text-lg text-ivory/70 leading-relaxed"
          >
            Access the world's most exclusive architectural masterpieces. From coastal retreats to urban sanctuaries, we bridge the gap between vision and reality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              onClick={scrollToProperties}
              className="group bg-gold text-charcoal hover:bg-gold hover:scale-[1.05] transition-all shadow-[0_15px_40px_-10px_oklch(0.82_0.14_85/0.4)]"
            >
              Explore Collection
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>

            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-ivory/20 bg-transparent text-ivory hover:bg-ivory/10 hover:border-ivory/40"
                >
                  <Play className="mr-2 h-4 w-4 fill-current" />
                  Watch Video
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-5xl border-gold/20 bg-charcoal p-0 overflow-hidden sm:rounded-2xl">
                <DialogTitle className="sr-only">Luxury Property Tour</DialogTitle>
                <div className="aspect-video w-full">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${BRAND_FILM_ID}?autoplay=1`}
                    title="Luxury Real Estate Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="h-full w-full"
                  ></iframe>
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-16 flex items-center gap-3 text-xs text-ivory/50"
          >
            <ChevronDown className="h-4 w-4" />
            Scroll to explore
          </motion.div>
        </div>

        {/* Right Column: Featured Real Estate Image + Stats */}
        <div className="relative flex items-center justify-center lg:h-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="relative h-[450px] w-full overflow-hidden rounded-[2.5rem] border border-gold/20 shadow-2xl lg:h-[550px]"
          >
            <img 
              src={featuredProp} 
              alt="Featured luxury estate" 
              className="h-full w-full object-cover transition-transform duration-1000 hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <p className="text-xs uppercase tracking-[0.2em] text-gold/80">Listing of the month</p>
              <p className="mt-1 font-display text-2xl text-ivory">Seaside Bungalow, Malibu</p>
            </div>
          </motion.div>

          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + i * 0.2, duration: 0.7 }}
              style={{
                top: s.y,
                left: s.x,
              }}
              className="absolute hidden rounded-2xl border border-gold/20 bg-surface/90 backdrop-blur-xl p-6 shadow-2xl lg:block gold-glow transition-transform hover:-translate-y-2"
            >
              <p className="font-display text-4xl text-gold leading-none">{s.value}</p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.15em] text-ivory/50">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
