const experiences = [
  {
    number: "01",
    title: "Discovery",
    description: "I begin with a deeply personal consultation, understanding not just your needs, but your unspoken desires.",
  },
  {
    number: "02",
    title: "Curation",
    description: "My global network activates to source the extraordinary, crafting possibilities you hadn't imagined.",
  },
  {
    number: "03",
    title: "Elevation",
    description: "Every detail is refined to perfection. I don't meet expectations, I redefine them.",
  },
  {
    number: "04",
    title: "Transformation",
    description: "Experience moments that become cherished memories, elevating your lifestyle to new heights.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32 bg-charcoal-light">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="font-sans text-xs letter-spacing-luxury uppercase text-primary">
              The Journey
            </span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl text-text-title leading-tight">
              An Experience
              <br />
              <span className="italic text-primary">Unlike Any Other</span>
            </h2>
            <div className="mt-6 w-24 h-px bg-gradient-to-r from-primary to-transparent" />
            <p className="mt-8 font-sans text-text-body leading-relaxed">
              From the moment you reach out to me, you enter a realm where the 
              ordinary ceases to exist. My process is as refined as the 
              experiences I create.
            </p>
          </div>

          {/* Right - Steps */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.number}
                className="group flex gap-8 p-6 border-l-2 border-secondary-foreground/20 hover:border-primary transition-colors duration-500"
              >
                <span className="font-serif text-4xl text-primary/30 group-hover:text-primary transition-colors duration-500">
                  {exp.number}
                </span>
                <div>
                  <h3 className="font-serif text-2xl text-text-title mb-2">
                    {exp.title}
                  </h3>
                  <p className="font-sans text-text-body leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
