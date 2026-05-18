import { createFileRoute, Link } from "@tanstack/react-router";
import { properties } from "@/lib/data";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Bed, Bath, Maximize2, MapPin, ChevronLeft, CheckCircle2, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/property/$propertyId")({
  component: PropertyDetail,
});

function PropertyDetail() {
  const { propertyId } = Route.useParams();
  const property = properties.find((p) => p.id === propertyId);

  if (!property) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-charcoal text-ivory">
        <div className="text-center">
          <h1 className="text-4xl font-display">Property not found</h1>
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
      
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <img
          src={property.image}
          alt={property.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
        
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-6 pb-12 lg:px-10">
          <Link to="/" className="mb-6 inline-flex items-center gap-2 text-sm text-ivory/60 hover:text-gold transition-colors">
            <ChevronLeft className="h-4 w-4" /> Back to Collection
          </Link>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="inline-block rounded-full bg-gold/20 border border-gold/30 px-3 py-1 text-[10px] uppercase tracking-widest text-gold mb-4">
                {property.tag}
              </span>
              <h1 className="font-display text-5xl md:text-7xl leading-none">{property.name}</h1>
              <p className="mt-4 flex items-center gap-2 text-lg text-ivory/70">
                <MapPin className="h-5 w-5 text-gold" /> {property.address}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm uppercase tracking-widest text-ivory/50 mb-2">Asking Price</p>
              <p className="font-display text-4xl md:text-6xl text-gold">{property.price}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <h2 className="font-display text-4xl mb-8">Property Overview</h2>
              <div className="grid grid-cols-3 gap-6 border-y border-border py-10 mb-10">
                <div className="text-center lg:text-left">
                  <p className="flex items-center justify-center lg:justify-start gap-3 text-gold mb-2">
                    <Bed className="h-6 w-6" /> <span className="text-2xl font-display">{property.beds}</span>
                  </p>
                  <p className="text-xs uppercase tracking-widest text-ivory/50">Bedrooms</p>
                </div>
                <div className="text-center lg:text-left">
                  <p className="flex items-center justify-center lg:justify-start gap-3 text-gold mb-2">
                    <Bath className="h-6 w-6" /> <span className="text-2xl font-display">{property.baths}</span>
                  </p>
                  <p className="text-xs uppercase tracking-widest text-ivory/50">Bathrooms</p>
                </div>
                <div className="text-center lg:text-left">
                  <p className="flex items-center justify-center lg:justify-start gap-3 text-gold mb-2">
                    <Maximize2 className="h-6 w-6" /> <span className="text-2xl font-display">{property.sqft}</span>
                  </p>
                  <p className="text-xs uppercase tracking-widest text-ivory/50">Square Feet</p>
                </div>
              </div>

              <div className="prose prose-invert max-w-none text-ivory/70 leading-relaxed">
                <p className="text-lg">
                  {property.description}
                </p>
              </div>

              <div className="mt-10 flex gap-4">
                <Button 
                  variant="outline" 
                  className="border-gold/30 text-gold hover:bg-gold/10 h-12 px-8"
                  onClick={() => document.getElementById('neighborhood')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <MapPin className="mr-2 h-4 w-4" /> View Location
                </Button>
              </div>

              <h3 className="font-display text-3xl mt-16 mb-8">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {property.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-ivory/80 bg-surface/40 p-4 rounded-xl border border-border">
                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar / Agent Card */}
            <div className="lg:sticky lg:top-32 h-fit">
              <div className="rounded-3xl bg-surface border border-gold/20 p-8 shadow-2xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-16 w-16 overflow-hidden rounded-full border-2 border-gold/30">
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200" alt="Agent" className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-display text-2xl leading-none">Emma Laurent</h4>
                    <p className="text-xs text-gold uppercase tracking-widest mt-1">Luxury Specialist</p>
                  </div>
                </div>
                
                <p className="text-sm text-ivory/60 mb-8 leading-relaxed">
                  Interested in this property? Contact me for a private viewing or more information regarding 
                  the listing and neighborhood details.
                </p>

                <div className="space-y-3">
                  <Button 
                    className="w-full bg-gold text-charcoal hover:bg-gold/90 h-12"
                    onClick={() => document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <Phone className="mr-2 h-4 w-4" /> (310) 555-0123
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-ivory/20 hover:bg-ivory/5 h-12"
                    onClick={() => document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <Mail className="mr-2 h-4 w-4" /> Email Agent
                  </Button>
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <Button 
                    variant="ghost" 
                    className="w-full text-gold hover:text-gold hover:bg-gold/5"
                    onClick={() => document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Schedule a Virtual Tour
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="font-display text-4xl mb-12 text-center">Property Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="aspect-square overflow-hidden rounded-2xl border border-border">
              <img src={property.image} alt="Gallery 1" className="h-full w-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="aspect-square overflow-hidden rounded-2xl border border-border">
              <img 
                src={properties[(properties.indexOf(property) + 1) % properties.length].image} 
                alt="Gallery 2" 
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-700" 
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-2xl border border-border">
              <img 
                src={properties[(properties.indexOf(property) + 2) % properties.length].image} 
                alt="Gallery 3" 
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhood Section */}
      <section id="neighborhood" className="py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div>
              <p className="eyebrow">The Location</p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl text-ivory">Neighborhood Excellence</h2>
              <p className="mt-6 text-ivory/70 text-lg leading-relaxed">
                Situated in one of the most sought-after enclaves, this property offers more than just a home,
                it offers a lifestyle. Enjoy proximity to world-class dining, elite schools, and lush green spaces.
              </p>
              
              <div className="mt-10 space-y-6">
                {[
                  { label: "Elite School District", dist: "0.8 miles" },
                  { label: "Fine Dining & Cafes", dist: "0.4 miles" },
                  { label: "Parks & Recreation", dist: "1.2 miles" },
                  { label: "Luxury Shopping", dist: "1.5 miles" }
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between border-b border-border pb-4">
                    <span className="text-ivory/80">{item.label}</span>
                    <span className="text-gold font-medium">{item.dist}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-[2.5rem] border border-border bg-surface shadow-2xl">
              {/* Real Map View */}
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
                src={`https://www.google.com/maps/embed/v1/place?key=REPLACE_WITH_YOUR_GOOGLE_MAPS_API_KEY&q=${encodeURIComponent(property.address)}&zoom=14`}
                allowFullScreen
                title="Property Location"
              ></iframe>
              {/* Fallback for no API key in this demo env: using standard search embed */}
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(property.address)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                allowFullScreen
                title="Property Location Fallback"
                className="absolute inset-0"
              ></iframe>
              
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-charcoal/80 backdrop-blur-md p-4 border border-border">
                <p className="text-xs uppercase tracking-widest text-gold mb-1">Interactive Location</p>
                <p className="text-sm text-ivory/80">Exploring {property.address}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floor Plan Section */}
      <section id="floorplan" className="py-28 bg-surface/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center">
          <p className="eyebrow">Layout</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-ivory">Architectural Floor Plan</h2>
          <p className="mt-6 mx-auto max-w-2xl text-ivory/70 text-lg">
            A masterfully designed layout that prioritizes flow, light, and functional elegance across all levels.
          </p>
          
          <div className="mt-16 mx-auto max-w-4xl rounded-3xl border border-border bg-charcoal p-12 shadow-inner relative overflow-hidden group">
            <div className="absolute inset-0 dot-grid opacity-10" />
            <div className="relative aspect-[16/9] flex items-center justify-center border-2 border-dashed border-gold/20 rounded-2xl">
              <div className="text-center">
                <Maximize2 className="mx-auto h-12 w-12 text-gold/30 mb-4" />
                <p className="text-ivory/40 uppercase tracking-[0.2em] text-sm font-medium">Interactive Floor Plan Coming Soon</p>
                <Button variant="outline" className="mt-6 border-gold/30 text-gold hover:bg-gold/10">Request Full PDF Layout</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Section */}
      <section id="inquiry" className="py-28 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Inquiry</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-ivory text-balance">
              Request more information about {property.name}
            </h2>
            <p className="mt-6 text-ivory/70 text-lg">
              Our specialists are ready to provide you with all the details needed for your next investment.
            </p>
            
            <form className="mt-12 grid gap-4 text-left" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-4 md:grid-cols-2">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="rounded-xl border border-border bg-surface p-4 text-ivory focus:border-gold outline-none transition-colors"
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="rounded-xl border border-border bg-surface p-4 text-ivory focus:border-gold outline-none transition-colors"
                />
              </div>
              <textarea 
                placeholder={`I am interested in learning more about ${property.name} at ${property.address}...`}
                rows={4}
                className="rounded-xl border border-border bg-surface p-4 text-ivory focus:border-gold outline-none transition-colors"
              ></textarea>
              <Button className="bg-gold text-charcoal hover:bg-gold/90 h-14 text-lg font-medium">
                Submit Inquiry
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
