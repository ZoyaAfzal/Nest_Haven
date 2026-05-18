import prop1 from "@/assets/prop-1.jpg";
import prop2 from "@/assets/prop-2.jpg";
import prop3 from "@/assets/prop-3.jpg";
import prop4 from "@/assets/prop-4.jpg";
import prop5 from "@/assets/prop-5.jpg";
import prop6 from "@/assets/prop-6.jpg";
import agent1 from "@/assets/agent-1.jpg";
import agent2 from "@/assets/agent-2.jpg";
import agent3 from "@/assets/agent-3.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

export interface Property {
  id: string;
  name: string;
  address: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  tag: "For Sale" | "For Rent" | "Luxury" | "Bungalow";
  image: string;
  description: string;
  features: string[];
}

export const properties: Property[] = [
  { 
    id: "1", 
    name: "Seaside Bungalow", 
    address: "Malibu, California", 
    price: "$280,000", 
    beds: 5, 
    baths: 3, 
    sqft: "1,800", 
    tag: "Luxury", 
    image: prop1,
    description: "A breathtaking seaside escape featuring panoramic ocean views and a private beach entrance. This bungalow blends coastal charm with modern luxury, offering an open-plan layout that invites the sea breeze into every room.",
    features: ["Private Beach Access", "Outdoor Kitchen", "Saltwater Pool", "Smart Lighting", "Oceanview Terrace", "Wine Cellar"]
  },
  { 
    id: "2", 
    name: "Skyline Apartment", 
    address: "Manhattan, New York", 
    price: "$950,000", 
    beds: 2, 
    baths: 2, 
    sqft: "1,600", 
    tag: "Luxury", 
    image: prop2,
    description: "Experience the heartbeat of New York from this stunning skyline apartment. Boasting floor-to-ceiling windows, high-end finishes, and access to an exclusive rooftop lounge, this is urban living at its finest.",
    features: ["24/7 Doorman", "Rooftop Garden", "State-of-the-Art Gym", "Floor-to-Ceiling Windows", "Custom Cabinetry", "Automated Shades"]
  },
  { 
    id: "3", 
    name: "Lakeside Cottage", 
    address: "Lake Tahoe, Nevada", 
    price: "$725,000", 
    beds: 3, 
    baths: 2, 
    sqft: "1,750", 
    tag: "Bungalow", 
    image: prop3,
    description: "A serene retreat nestled on the shores of Lake Tahoe. This cozy yet sophisticated cottage features a stone fireplace, reclaimed wood accents, and a private dock, making it the perfect year-round escape.",
    features: ["Private Dock", "Stone Fireplace", "Heated Floors", "Wrap-around Deck", "Guest House", "Vaulted Ceilings"]
  },
  { 
    id: "4", 
    name: "Parkside Townhouse", 
    address: "Brooklyn, New York", 
    price: "$450,000", 
    beds: 3, 
    baths: 2, 
    sqft: "1,850", 
    tag: "For Rent", 
    image: prop4,
    description: "Ideally located just steps from the park, this meticulously renovated townhouse offers three levels of living space, a private backyard garden, and classic Brooklyn charm combined with modern amenities.",
    features: ["Backyard Garden", "Modern Kitchen", "Hardwood Floors", "Walk-in Closets", "Finished Basement", "Security System"]
  },
  { 
    id: "5", 
    name: "Oceanview Penthouse", 
    address: "Miami Beach, Florida", 
    price: "$600,000", 
    beds: 8, 
    baths: 3, 
    sqft: "3,200", 
    tag: "For Sale", 
    image: prop5,
    description: "The ultimate Miami Beach penthouse offering 360-degree views of the Atlantic Ocean and the city skyline. This sprawling residence features a private rooftop pool, a home theater, and unparalleled luxury throughout.",
    features: ["Rooftop Pool", "Home Theater", "Bespoke Bar", "Master Suite", "Direct Elevator Access", "Concierge Service"]
  },
  { 
    id: "6", 
    name: "Mountain Retreat", 
    address: "Aspen, Colorado", 
    price: "$1,500,000", 
    beds: 3, 
    baths: 2, 
    sqft: "4,500", 
    tag: "For Sale", 
    image: prop6,
    description: "An architectural masterpiece in the mountains of Aspen. This retreat features expansive glass walls, a professional-grade kitchen, and an indoor-outdoor living flow that perfectly captures the surrounding natural beauty.",
    features: ["Ski-in/Ski-out Access", "Steam Room", "Professional Kitchen", "Fire Pit", "Three-Car Garage", "Eco-friendly Design"]
  },
];

export interface Agent {
  name: string;
  title: string;
  rating: number;
  listings: number;
  bio: string;
  image: string;
}

export const agents: Agent[] = [
  {
    name: "Emma Laurent",
    title: "Luxury Properties Specialist",
    rating: 4.9,
    listings: 48,
    bio: "A decade pairing collectors with landmark estates across the coast. Emma reads a room before she reads the price tag.",
    image: agent1,
  },
  {
    name: "Marcus Osei",
    title: "Commercial Real Estate Expert",
    rating: 4.8,
    listings: 62,
    bio: "From warehouse conversions to ground-up tower deals, Marcus closes complex transactions with quiet precision.",
    image: agent2,
  },
  {
    name: "Priya Nair",
    title: "Residential & Investment Lead",
    rating: 5.0,
    listings: 35,
    bio: "Priya treats every purchase as a portfolio decision — even when it's a first home — and her clients almost always come back.",
    image: agent3,
  },
];

export interface Testimonial {
  name: string;
  location: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Leslie Alexander",
    location: "Dallas, USA",
    quote:
      "Using NestHaven to find my new home was an absolute dream. The platform's advanced search made it so easy to filter through thousands of listings based on my specific needs.",
  },
  {
    name: "James Whitmore",
    location: "Austin, USA",
    quote:
      "The virtual tours feature changed everything for me. I found my dream apartment without leaving my sofa. NestHaven is miles ahead of any other platform I've used.",
  },
  {
    name: "Sofia Reyes",
    location: "Miami, USA",
    quote:
      "Their team responded to every query within minutes. The market insights dashboard helped me invest confidently in my first property. Couldn't be happier.",
  },
];

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "What buyers are paying for in 2026: light, land, and longevity",
    category: "Market Trends",
    date: "May 12, 2026",
    readTime: "6 min read",
    image: blog1,
    content: "In 2026, the luxury real estate market has shifted its focus towards sustainable longevity and the psychological impact of natural light. Buyers are no longer just looking for square footage; they are seeking 'wellness-integrated' spaces that prioritize air quality and circadian lighting systems. Land remains the ultimate luxury, but it's now being evaluated for its regenerative potential and private biodiversity."
  },
  {
    id: "2",
    title: "How to read a neighborhood before you read the listing",
    category: "Buyer Guide",
    date: "May 04, 2026",
    readTime: "4 min read",
    image: blog2,
    content: "Successful property investment starts long before you step inside a house. It starts with understanding the 'rhythm' of the neighborhood. This guide explores how to evaluate local transit developments, the health of independent retail, and the subtle signs of community investment that predict future property value appreciation. Learn to spot the difference between a neighborhood that is peaking and one that is just beginning its ascent."
  },
  {
    id: "3",
    title: "Closing day, decoded: a step-by-step from offer to keys",
    category: "First-Time Buyer",
    date: "Apr 28, 2026",
    readTime: "5 min read",
    image: blog3,
    content: "The final stretch of a property purchase can be the most daunting. From the initial inspection contingencies to the complex dance of escrow and title insurance, we break down the final 30 days of a transaction. This step-by-step guide ensures that you stay ahead of the paperwork and enter your new home with confidence, fully understanding every document you sign on closing day."
  },
];
