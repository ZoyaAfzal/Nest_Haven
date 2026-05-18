import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Twitter, Facebook, Youtube, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { staggerContainer, fadeUp } from "@/lib/animations";

const cols = [
  { 
    title: "Pages", 
    links: [
      { name: "Home", href: "/#top" },
      { name: "Properties", href: "/#properties" },
      { name: "Agents", href: "/#agents" },
      { name: "About", href: "/#about" },
      { name: "Blog", href: "/#blog" },
      { name: "Contact", href: "/#contact" }
    ] 
  },
  { title: "Resources", links: ["Buyer Guide", "Seller Guide", "Mortgage Calc", "Market Reports"].map(l => ({ name: l, href: "#" })) },
  { title: "Utility", links: ["Style Guide", "Licensing", "Privacy", "Terms"].map(l => ({ name: l, href: "#" })) },
];

export function Footer() {
  const [done, setDone] = useState(false);

  return (
    <footer className="border-t border-border bg-charcoal pt-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="mx-auto grid max-w-7xl gap-12 px-6 pb-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-10"
      >
        <motion.div variants={fadeUp}>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full border border-gold/40 text-gold">
              <Home className="h-4 w-4" />
            </span>
            <span className="font-display text-2xl text-ivory">NestHaven</span>
          </div>
          <p className="mt-5 max-w-sm text-sm text-muted-foreground leading-relaxed">
            Where every address becomes a story. Subscribe for new listings, market notes, and quiet recommendations.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
            }}
            className="mt-6 flex gap-2"
          >
            <Input
              placeholder="your@email.com"
              className="bg-surface border-border text-ivory placeholder:text-ivory/40"
            />
            <Button
              type="submit"
              className="bg-gold text-charcoal hover:bg-gold/90 min-w-[120px]"
            >
              {done ? (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center gap-1"
                >
                  <Check className="h-4 w-4" /> Subscribed
                </motion.span>
              ) : (
                "Subscribe"
              )}
            </Button>
          </form>
        </motion.div>

        {cols.map((c) => (
          <motion.div key={c.title} variants={fadeUp}>
            <p className="eyebrow">{c.title}</p>
            <motion.ul
              variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
              className="mt-5 space-y-3"
            >
              {c.links.map((l) => (
                <motion.li
                  key={l.name}
                  variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
                >
                  <a href={l.href} className="nav-link text-sm text-ivory/75 hover:text-ivory">
                    {l.name}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </motion.div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-end gap-4 px-6 py-6 md:flex-row lg:px-10">
          <a 
            href="https://axistechgroup.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-gold transition-colors"
          >
            Powered by AxisTechGroup
          </a>
        </div>
      </div>
    </footer>
  );
}
