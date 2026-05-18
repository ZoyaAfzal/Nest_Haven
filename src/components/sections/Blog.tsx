import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/lib/data";
import { fadeUp } from "@/lib/animations";
import { MarqueeRow } from "@/components/ui/MarqueeRow";
import { Link } from "@tanstack/react-router";

const tags = [
  "#LuxuryHomes", "#InvestmentTips", "#MarketTrends", "#FirstTimeBuyer",
  "#UrbanLiving", "#CoastalEstates", "#InteriorDesign", "#Mortgages",
  "#OffMarket", "#NewDevelopments",
];

export function Blog() {
  const [featured, ...rest] = blogPosts;

  return (
    <section id="blog" className="py-28 bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="flex flex-wrap items-end justify-between gap-6"
        >
          <div>
            <p className="eyebrow">Field Notes</p>
            <h2 className="mt-4 font-display text-5xl md:text-6xl text-ivory text-balance max-w-xl">
              Stories from the open house.
            </h2>
          </div>
          <a href="#" className="nav-link text-sm text-ivory/80">View all articles</a>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          {/* Featured */}
          <Link
            to="/blog/$blogId"
            params={{ blogId: featured.id }}
            className="group relative overflow-hidden rounded-3xl lg:col-span-3 min-h-[460px] flex flex-col justify-end"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0 h-full w-full"
            >
              <img
                src={featured.image}
                alt={featured.title}
                loading="lazy"
                className="h-full w-full object-cover transition-all duration-700 group-hover:scale-[1.04] group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
            </motion.div>

            <div className="relative p-8 lg:p-10">
              <span className="inline-block rounded-full bg-gold px-3 py-1 text-[10px] uppercase tracking-widest text-charcoal">
                {featured.category}
              </span>
              <h3 className="mt-5 font-display text-3xl md:text-4xl text-ivory text-balance max-w-xl">
                <span className="relative inline">
                  {featured.title}
                  <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />
                </span>
              </h3>
              <div className="mt-4 flex items-center gap-5 text-xs text-ivory/70">
                <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {featured.date}</span>
                <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {featured.readTime}</span>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-sm text-gold opacity-0 translate-y-3 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                Read More <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>

          {/* Smaller */}
          <div className="grid gap-6 lg:col-span-2">
            {rest.map((post) => (
              <Link
                key={post.id}
                to="/blog/$blogId"
                params={{ blogId: post.id }}
                className="group flex gap-4 rounded-2xl bg-surface border border-border p-4 transition-colors hover:bg-surface-2"
              >
                <div className="relative h-32 w-40 shrink-0 overflow-hidden rounded-xl">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex min-w-0 flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-gold">{post.category}</span>
                  <h4 className="mt-2 font-display text-xl text-ivory leading-tight">{post.title}</h4>
                  <div className="mt-auto flex items-center gap-3 text-[11px] text-muted-foreground">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <MarqueeRow duration={45} gap={14}>
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-charcoal/60 px-5 py-2 text-sm text-ivory/70 hover:text-gold hover:border-gold transition-colors"
            >
              {t}
            </span>
          ))}
        </MarqueeRow>
      </div>
    </section>
  );
}
