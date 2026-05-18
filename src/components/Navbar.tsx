import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Home, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

const links = ["Home", "Properties", "Agents", "About", "Blog"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "backdrop-blur-md bg-charcoal/75 border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link to="/" className="flex items-center gap-2">
          <motion.span
            whileHover={{ rotate: -8 }}
            className="grid h-9 w-9 place-items-center rounded-full border border-gold/40 text-gold"
          >
            <Home className="h-4 w-4" />
          </motion.span>
          <span className="font-display text-2xl tracking-tight text-ivory">NestHaven</span>
        </Link>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <li key={l}>
              <a
                href={l === "Home" ? "/#top" : `/#${l.toLowerCase()}`}
                className="nav-link text-sm text-ivory/85 hover:text-ivory"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a href="/#cta">
            <Button variant="ghost" className="text-ivory hover:bg-ivory/5 hover:text-ivory">
              Contact Us
            </Button>
          </a>
          <a href="/#cta">
            <Button className="bg-gold text-charcoal hover:bg-gold/90">Book a Call</Button>
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full border border-border text-ivory md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute left-0 right-0 top-full bg-charcoal/95 backdrop-blur-md border-b border-border"
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
              className="flex flex-col gap-1 px-6 py-6"
            >
              {links.map((l) => (
                <motion.li
                  key={l}
                  variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
                >
                  <a
                    onClick={() => setOpen(false)}
                    href={`#${l.toLowerCase()}`}
                    className="block py-3 font-display text-3xl text-ivory"
                  >
                    {l}
                  </a>
                </motion.li>
              ))}
              <motion.li
                variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
                className="mt-4 flex gap-3"
              >
                <a href="/#cta" onClick={() => setOpen(false)} className="flex-1">
                  <Button variant="ghost" className="w-full border border-border text-ivory">
                    Contact
                  </Button>
                </a>
                <a href="/#cta" onClick={() => setOpen(false)} className="flex-1">
                  <Button className="w-full bg-gold text-charcoal">Book a Call</Button>
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
