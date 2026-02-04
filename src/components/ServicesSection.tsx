import { Plane, Sparkles, Crown, Star, Users, Home, Briefcase, ShoppingBag, Heart, UtensilsCrossed, Shield } from "lucide-react";

const services = [
  {
    icon: Star,
    title: "24/7 Concierge",
    description: "Your personal team, always available. No request too complex, no hour too late.",
  },
  {
    icon: Sparkles,
    title: "Booker Venues",
    description: "Securing the most exclusive locations for your events, from private estates to iconic landmarks.",
  },
  {
    icon: Plane,
    title: "Travel & Stay",
    description: "Luxury hotels, private villas, and first class flight tickets tailored to your journey.",
  },
  {
    icon: Users,
    title: "Business Connections",
    description: "Access to our exclusive network of industry leaders, investors, and key decision makers worldwide.",
  },
  {
    icon: Plane,
    title: "Private Aviation",
    description: "Access to the world's most exclusive aircraft. Last minute flights to anywhere, anytime.",
  },
  {
    icon: Sparkles,
    title: "Bespoke Events",
    description: "Orchestrating unforgettable moments. From intimate gatherings to grand celebrations.",
  },
  {
    icon: Crown,
    title: "VIP Access",
    description: "Doors that remain closed to others open for you. Exclusive venues, sold out events.",
  },
  {
    icon: Home,
    title: "Property Sourcing",
    description: "Finding your dream residence. From search to closing, I handle every detail of acquiring exclusive properties worldwide.",
  },
  {
    icon: Briefcase,
    title: "Business Setup & Visa",
    description: "Comprehensive consulting for establishing your business abroad. From company formation to residency visas, I guide you through every step of your international expansion.",
  },
  {
    icon: ShoppingBag,
    title: "Private Shopping",
    description: "Your personal shopper for the extraordinary. From haute couture to rare finds, I curate and acquire the items that define your lifestyle.",
  },
  {
    icon: Heart,
    title: "Wellness & Biohacking",
    description: "Access to elite wellness retreats, cutting edge biohacking protocols, and the world's finest health optimization experiences.",
  },
  {
    icon: UtensilsCrossed,
    title: "Culinary Experiences",
    description: "Private chef arrangements, impossible reservations, and bespoke gastronomic journeys at the world's most exclusive tables.",
  },
  {
    icon: Shield,
    title: "Security Management",
    description: "Private security for your peace of mind. Personal bodyguards and protection services for your outings, events, and travels worldwide.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 bg-charcoal">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="font-sans text-xs letter-spacing-luxury uppercase text-primary">
            Our Services
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl text-text-title">
            Curated <span className="italic text-primary">Excellence</span>
          </h2>
          <div className="mt-6 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 bg-charcoal-light border border-secondary-foreground/10 hover:border-primary/50 transition-all duration-500 hover:shadow-luxury"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <service.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="font-serif text-2xl text-text-title mb-4">
                {service.title}
              </h3>
              <p className="font-sans text-text-body leading-relaxed">
                {service.description}
              </p>
              <div className="mt-6 w-0 h-px bg-primary group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
