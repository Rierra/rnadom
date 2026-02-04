import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-charcoal/40" />

      {/* Gold Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-transparent to-charcoal/90" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <span className="font-sans text-xs letter-spacing-luxury uppercase text-primary">
            Laura Pascual, the woman of connections
          </span>
        </div>

        <h1
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight opacity-0 animate-fade-in drop-shadow-lg"
          style={{ animationDelay: "0.6s" }}
        >
          Where Every Wish
          <br />
          <span className="text-primary italic">Becomes Reality</span>
        </h1>

        <p
          className="mt-8 font-sans text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in"
          style={{ animationDelay: "0.9s" }}
        >
          Experience unparalleled access to the world's most coveted experiences.
          Your personal gateway to extraordinary living.
        </p>

        <div
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 opacity-0 animate-fade-in"
          style={{ animationDelay: "1.2s" }}
        >
          <Link
            to="/membership"
            className="font-sans text-xs letter-spacing-luxury uppercase px-12 py-4 bg-white text-charcoal hover:bg-silver-light transition-all duration-500 shadow-lg"
          >
            Become a Member
          </Link>
          <a
            href="#services"
            className="font-sans text-xs letter-spacing-luxury uppercase px-12 py-4 bg-charcoal/60 border border-white/50 text-white hover:bg-charcoal/80 hover:border-white transition-all duration-500"
          >
            Our Services
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animate-float" style={{ animationDelay: "1.8s" }}>
        <a href="#services" className="flex flex-col items-center gap-2 text-secondary-foreground/50 hover:text-primary transition-colors">
          <span className="font-sans text-xs letter-spacing-wide uppercase">Explore</span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>

      {/* Decorative Lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-primary/30 to-transparent opacity-0 animate-fade-in" style={{ animationDelay: "2s" }} />
    </section>
  );
};

export default HeroSection;
