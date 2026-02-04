const PhilosophySection = () => {
  return (
    <section id="philosophy" className="py-32 bg-charcoal relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-sans text-xs letter-spacing-luxury uppercase text-primary">
            My Philosophy
          </span>
          
          <blockquote className="mt-12">
            <p className="font-serif text-3xl md:text-4xl lg:text-5xl text-text-title leading-relaxed italic">
              "I don't simply fulfill requests.
              <br />
              <span className="text-primary">I anticipate desires</span>
              <br />
              before they're spoken."
            </p>
          </blockquote>

          <div className="mt-12 w-24 h-px mx-auto bg-gradient-to-r from-transparent via-primary to-transparent" />

          <p className="mt-12 font-sans text-lg text-text-body leading-relaxed max-w-2xl mx-auto">
            In a world where luxury has become commonplace, I represent the rare. 
            My clients don't seek service, they seek transformation. Every interaction, 
            every experience, every moment I curate is designed to remind you of 
            one simple truth: you deserve the extraordinary.
          </p>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-3 gap-8">
            {[
              { number: "5", label: "Years of Excellence" },
              { number: "+500", label: "Elite Clientele" },
              { number: "∞", label: "Possibilities" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="font-serif text-4xl md:text-5xl text-primary">
                  {stat.number}
                </span>
                <p className="mt-2 font-sans text-xs letter-spacing-wide uppercase text-secondary-foreground/50">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
