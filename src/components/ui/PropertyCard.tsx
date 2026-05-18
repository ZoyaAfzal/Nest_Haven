import { Bed, Bath, Maximize2, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { Property } from "@/lib/data";

export function PropertyCard({ property }: { property: Property }) {
  return (
    <div className="group relative w-[330px] shrink-0 overflow-hidden rounded-2xl bg-surface border border-border transition-all duration-500 hover:-translate-y-1.5">
      <div className="relative h-[230px] overflow-hidden">
        <img
          src={property.image}
          alt={property.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
        <span className="absolute top-4 right-4 rounded-full bg-charcoal/80 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-widest text-gold border border-gold/30">
          {property.tag}
        </span>
        <Link
          to="/property/$propertyId"
          params={{ propertyId: property.id }}
          className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-full bg-ivory text-charcoal px-4 py-2 text-xs font-medium opacity-0 translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
        >
          View Details
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="relative p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-[22px] leading-tight text-ivory">{property.name}</h3>
            <p className="mt-1 text-xs text-muted-foreground">{property.address}</p>
          </div>
          <p className="font-display text-xl text-gold whitespace-nowrap">{property.price}</p>
        </div>

        <div className="mt-4 flex items-center gap-4 border-t border-border pt-4 text-xs text-ivory/70">
          <span className="flex items-center gap-1.5"><Bed className="h-3.5 w-3.5 text-gold" /> {property.beds} bd</span>
          <span className="flex items-center gap-1.5"><Bath className="h-3.5 w-3.5 text-gold" /> {property.baths} ba</span>
          <span className="flex items-center gap-1.5"><Maximize2 className="h-3.5 w-3.5 text-gold" /> {property.sqft} sqft</span>
        </div>

        <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />
      </div>
    </div>
  );
}
