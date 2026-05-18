import { motion } from "framer-motion";
import { Linkedin, Twitter, Star, ArrowRight } from "lucide-react";
import { agents } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function Agents() {
  return (
    <section id="agents" className="py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="max-w-2xl"
        >
          <p className="eyebrow">Meet the Team</p>
          <h2 className="mt-4 font-display text-5xl md:text-6xl text-ivory text-balance">
            Expert agents, exceptional results.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {agents.map((a) => (
            <motion.div key={a.name} variants={fadeUp} className="flip-3d h-[440px]">
              <div className="flip-inner">
                {/* FRONT */}
                <div className="flip-face rounded-3xl bg-surface border border-border p-8 flex flex-col items-center text-center">
                  <div className="relative">
                    <span className="absolute -inset-2 rounded-full border border-gold/30" />
                    <img
                      src={a.image}
                      alt={a.name}
                      loading="lazy"
                      className="h-28 w-28 rounded-full object-cover"
                    />
                  </div>
                  <h3 className="mt-6 font-display text-2xl text-ivory">{a.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{a.title}</p>
                  <span className="mt-4 inline-flex rounded-full bg-gold/15 px-3 py-1 text-[10px] uppercase tracking-widest text-gold">
                    Top Producer
                  </span>
                  <div className="mt-5 flex items-center gap-1 text-gold">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star
                        key={idx}
                        className="h-3.5 w-3.5"
                        fill={idx < Math.round(a.rating) ? "currentColor" : "none"}
                      />
                    ))}
                    <span className="ml-2 text-xs text-ivory/70">{a.rating.toFixed(1)}</span>
                  </div>
                  <div className="mt-auto flex items-center gap-3 pt-6">
                    <a className="grid h-9 w-9 place-items-center rounded-full border border-border text-ivory/70 hover:text-gold hover:border-gold transition-colors" href="#" aria-label="LinkedIn">
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a className="grid h-9 w-9 place-items-center rounded-full border border-border text-ivory/70 hover:text-gold hover:border-gold transition-colors" href="#" aria-label="Twitter">
                      <Twitter className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                {/* BACK */}
                <div className="flip-face flip-back rounded-3xl bg-gradient-to-br from-surface to-charcoal border border-gold/30 p-8 flex flex-col text-left">
                  <p className="eyebrow">{a.name.split(" ")[0]}, up close</p>
                  <p className="mt-4 text-sm text-ivory/80 leading-relaxed flex-1">{a.bio}</p>
                  <div className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-6">
                    <div>
                      <p className="font-display text-3xl text-gold">{a.listings}</p>
                      <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Active Listings</p>
                    </div>
                    <div>
                      <p className="font-display text-3xl text-gold">{a.rating}</p>
                      <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Avg Rating</p>
                    </div>
                  </div>
                  <Button 
                    className="mt-6 bg-gold text-charcoal hover:bg-gold/90 group"
                    onClick={() => document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    View Listings
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
