const AboutSection = () => {
  return (
    <section id="about" className="py-32 bg-charcoal-light relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-sans text-xs letter-spacing-luxury uppercase text-primary">
              The Founder
            </span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl text-secondary-foreground">
              Who is <span className="italic text-primary">Laura Pascual</span>
            </h2>
            <p className="mt-4 font-sans text-lg text-secondary-foreground/70 italic">
              The woman of connections
            </p>
            <div className="mt-6 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>

          {/* Content */}
          <div className="text-center space-y-8">
            <p className="font-sans text-lg text-secondary-foreground/80 leading-relaxed">
              Laura Pascual is a visionary lifestyle manager and concierge specialist based in Dubai, 
              dedicated to transforming the ordinary into the extraordinary for discerning clients worldwide.
            </p>
            
            <p className="font-sans text-secondary-foreground/70 leading-relaxed">
              With over 5 years of experience in luxury lifestyle management, Laura has built an extensive 
              network of exclusive contacts across industries, from the best dining places to rare acquisitions. 
              Her philosophy is simple: every client deserves access to the world's finest experiences, 
              delivered with impeccable discretion and personalized attention.
            </p>

            <p className="font-sans text-secondary-foreground/70 leading-relaxed">
              From securing impossible reservations to orchestrating bespoke experiences, Laura's commitment 
              to excellence has earned her the trust of elite clientele who value privacy, quality, 
              and unparalleled service.
            </p>

            <div className="pt-8">
              <span className="font-serif text-2xl italic text-primary">
                "Your desires are my mission."
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
