import { createFileRoute, Link } from "@tanstack/react-router";
import { blogPosts } from "@/lib/data";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ChevronLeft, Calendar, Clock, Tag, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/blog/$blogId")({
  component: BlogDetail,
});

function BlogDetail() {
  const { blogId } = Route.useParams();
  const post = blogPosts.find((p) => p.id === blogId);

  if (!post) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-charcoal text-ivory">
        <div className="text-center">
          <h1 className="text-4xl font-display">Story not found</h1>
          <Link to="/" className="mt-4 inline-block text-gold hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-charcoal text-ivory">
      <Navbar />
      
      <article className="pt-32 pb-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <Link to="/" className="mb-8 inline-flex items-center gap-2 text-sm text-ivory/60 hover:text-gold transition-colors">
            <ChevronLeft className="h-4 w-4" /> Back to Stories
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="rounded-full bg-gold/15 px-3 py-1 text-[10px] uppercase tracking-widest text-gold border border-gold/20">
                {post.category}
              </span>
              <span className="h-1 w-1 rounded-full bg-ivory/20" />
              <span className="text-[10px] uppercase tracking-widest text-ivory/50 flex items-center gap-1.5">
                <Calendar className="h-3 w-3" /> {post.date}
              </span>
              <span className="h-1 w-1 rounded-full bg-ivory/20" />
              <span className="text-[10px] uppercase tracking-widest text-ivory/50 flex items-center gap-1.5">
                <Clock className="h-3 w-3" /> {post.readTime}
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-6xl leading-[1.1] text-ivory mb-10">
              {post.title}
            </h1>

            <div className="aspect-[21/9] overflow-hidden rounded-3xl border border-border mb-12">
              <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
            </div>

            <div className="prose prose-invert prose-gold max-w-none">
              <p className="text-xl text-ivory/80 leading-relaxed mb-8 font-light italic">
                The open house is more than a viewing; it's a narrative of potential. In this edition of NestHaven Stories, we dive deep into the evolving landscape of luxury real estate.
              </p>
              
              <div className="text-lg text-ivory/70 leading-relaxed space-y-6">
                <p>{post.content}</p>
                <p>
                  Luxury is being redefined by those who inhabit it. As we look towards the second half of 2026, the trends we've observed in our latest open houses suggest a permanent pivot towards architectural honesty and technological invisibility.
                </p>
                <p>
                  We invite you to explore these themes further with our expert agents or by visiting one of our upcoming exclusive viewings. Every address becomes a story, and we are here to help you write the next chapter.
                </p>
              </div>
            </div>

            <div className="mt-16 pt-10 border-t border-border flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full overflow-hidden border border-border">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100" alt="Author" />
                </div>
                <div>
                  <p className="text-sm font-medium text-ivory">NestHaven Editorial</p>
                  <p className="text-xs text-ivory/50">Published on {post.date}</p>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="border-border text-ivory/60 hover:text-gold">
                  <Share2 className="mr-2 h-4 w-4" /> Share Story
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
