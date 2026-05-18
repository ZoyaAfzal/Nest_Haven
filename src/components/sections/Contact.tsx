import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Phone, MapPin, Send, Check } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    console.log(values);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      toast.success("Message sent successfully! We'll get back to you soon.");
      form.reset();
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  }

  return (
    <section id="contact" className="py-28 bg-charcoal">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <p className="eyebrow">Contact Us</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-ivory leading-[1.1]">
              Let's talk about your <span className="text-gold italic">dream home.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-md">
              Whether you're looking to buy, sell, or just want to explore the market, our team is here to guide you every step of the way.
            </p>

            <div className="mt-12 space-y-8">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-gold/10 text-gold border border-gold/20">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-ivory">Email Us</h3>
                  <p className="mt-1 text-muted-foreground">hello@nesthaven.com</p>
                  <p className="text-muted-foreground">support@nesthaven.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-gold/10 text-gold border border-gold/20">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-ivory">Call Us</h3>
                  <p className="mt-1 text-muted-foreground">+1 (555) 000-0000</p>
                  <p className="text-muted-foreground">Mon-Fri, 9am - 6pm EST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-gold/10 text-gold border border-gold/20">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-ivory">Visit Our Office</h3>
                  <p className="mt-1 text-muted-foreground">123 Luxury Lane, Beverly Hills</p>
                  <p className="text-muted-foreground">California, CA 90210</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="rounded-3xl bg-surface p-8 border border-border shadow-2xl relative overflow-hidden"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-ivory">Full Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John Doe"
                            {...field}
                            className="bg-charcoal border-border text-ivory placeholder:text-ivory/30 focus-visible:ring-gold"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-ivory">Email Address</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="john@example.com"
                            {...field}
                            className="bg-charcoal border-border text-ivory placeholder:text-ivory/30 focus-visible:ring-gold"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-ivory">Subject</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Property Inquiry"
                          {...field}
                          className="bg-charcoal border-border text-ivory placeholder:text-ivory/30 focus-visible:ring-gold"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-ivory">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about the property you're interested in..."
                          {...field}
                          className="min-h-[150px] bg-charcoal border-border text-ivory placeholder:text-ivory/30 focus-visible:ring-gold resize-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className="w-full h-14 rounded-full bg-gold text-charcoal hover:bg-gold/90 text-lg font-medium transition-all group"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <Send className="h-5 w-5" />
                      </motion.span>
                      Sending...
                    </span>
                  ) : isSuccess ? (
                    <span className="flex items-center gap-2">
                      <Check className="h-5 w-5" /> Message Sent
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message
                      <Send className="h-5 w-5 -translate-y-0.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
