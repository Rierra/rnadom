import { Link } from "react-router-dom";
import { ArrowLeft, Check, Crown, Shield } from "lucide-react";

const exclusivePerks = [
  "Direct 24/7 access to Laura.",
  "Unlimited lifestyle requests, personally curated.",
  "Priority and immediate attention.",
  "Access to my private network.",
  "Bespoke travel design.",
  "VIP reservations & access.",
  "Private event planning & access.",
  "Personal shopping & acquisitions.",
  "Curated wellness & beauty experiences.",
  "Cultural & entertainment access.",
  "Seamless concierge coordination.",
  "Discretion & trust guaranteed. Absolute privacy in every interaction.",
];

const Membership = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-charcoal/95 backdrop-blur-md py-4">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 text-secondary-foreground/80 hover:text-primary transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-sans text-sm uppercase letter-spacing-wide">Back</span>
          </Link>
          <span className="font-serif text-2xl text-secondary-foreground tracking-wide">
            Laura Pascual
          </span>
          <div className="w-20" /> {/* Spacer for centering */}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal-light/20 to-charcoal" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <span className="font-sans text-xs letter-spacing-luxury uppercase text-primary">
              Exclusive Membership
            </span>
            <h1 className="mt-6 font-serif text-5xl md:text-6xl lg:text-7xl text-text-title leading-tight">
              Join the <span className="italic text-primary">Inner Circle</span>
            </h1>
            <p className="mt-8 font-sans text-xl md:text-2xl text-text-body leading-relaxed max-w-3xl mx-auto">
              This isn't just booking services. It's having Laura anticipate your every need, before you even ask.
            </p>
            <p className="mt-4 font-sans text-lg md:text-xl text-text-body leading-relaxed max-w-3xl mx-auto">
              As a member, your lifestyle is curated with intention, discretion and anticipation.
            </p>
            <div className="mt-6 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
        </div>
      </section>

      {/* Price Section */}
      <section className="py-20 bg-charcoal-light">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-8 border border-primary/30 bg-charcoal">
              <div>
                <Crown className="w-12 h-12 text-primary mx-auto mb-4" />
                <span className="font-sans text-xs letter-spacing-luxury uppercase text-text-body block mb-2">
                  Annual Membership
                </span>
                <div className="font-serif text-6xl md:text-7xl text-text-title">
                  400<span className="text-primary">$</span>
                </div>
                <span className="font-sans text-sm text-text-body mt-2 block">per year</span>
              </div>
            </div>
            <p className="mt-12 font-serif text-2xl md:text-3xl text-text-body italic max-w-2xl mx-auto">
              "I don't just fulfill requests, I anticipate your every need, crafting a life designed exclusively for you."
            </p>
            <p className="mt-4 font-sans text-sm text-primary letter-spacing-wide uppercase">
              — Laura Pascual
            </p>
          </div>
        </div>
      </section>

      {/* Exclusive Perks */}
      <section className="py-24 bg-charcoal-light">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <span className="font-sans text-xs letter-spacing-luxury uppercase text-primary">
                Member Privileges
              </span>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl text-text-title">
                The Laura Pascual <span className="italic text-primary">Difference</span>
              </h2>
              <p className="mt-6 font-sans text-text-body leading-relaxed">
                When you become a member, you gain me as your private partner, orchestrating every detail of your life. The access that exists before you ask. The moments that unfold effortlessly, as if they were always meant to happen.
              </p>
              <p className="mt-4 font-sans text-text-body leading-relaxed">
                I am your single point of contact for a life without friction. My network becomes your access. My way of seeing the world becomes the way your lifestyle is curated.
              </p>
              <p className="mt-4 font-sans text-text-body leading-relaxed">
                This is not delegation.<br />
                This is trust.
              </p>
            </div>

            <div className="bg-charcoal p-10 border border-primary/20">
              <Shield className="w-10 h-10 text-primary mb-6" />
              <h3 className="font-serif text-2xl text-text-title mb-6">
                Your Exclusive Privileges
              </h3>
              <ul className="space-y-4">
                {exclusivePerks.map((perk) => (
                  <li key={perk} className="flex items-center gap-4">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-sans text-text-body">{perk}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal-light/30 to-charcoal" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="font-sans text-xs letter-spacing-luxury uppercase text-primary">
              Begin Your Journey
            </span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl text-text-title">
              Ready to Experience <span className="italic text-primary">Excellence?</span>
            </h2>
            <p className="mt-6 font-sans text-text-body leading-relaxed">
              Membership is by application only. I personally review each inquiry 
              to ensure the perfect fit for both of us.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="#membership-inquiry"
                className="font-sans text-xs letter-spacing-luxury uppercase px-12 py-4 bg-primary text-primary-foreground hover:bg-silver-light transition-all duration-500"
              >
                Apply for Membership
              </a>
              <a
                href="https://wa.me/971551389983"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs letter-spacing-luxury uppercase px-12 py-4 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500"
              >
                Contact Laura Directly
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Inquiry Form */}
      <section id="membership-inquiry" className="py-24 bg-charcoal-light">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="font-sans text-xs letter-spacing-luxury uppercase text-primary">
                Membership Application
              </span>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl text-text-title">
                Apply for <span className="italic text-primary">Membership</span>
              </h2>
              <div className="mt-6 w-24 h-px mx-auto bg-gradient-to-r from-transparent via-primary to-transparent" />
              <p className="mt-8 font-sans text-text-body max-w-xl mx-auto">
                Share a little about yourself and how I can serve you. 
                I will personally review your inquiry and respond within 48 hours.
              </p>
            </div>

            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block font-sans text-xs letter-spacing-wide uppercase text-secondary-foreground/50 mb-3">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-secondary-foreground/20 py-4 text-secondary-foreground font-sans focus:outline-none focus:border-primary transition-colors"
                    placeholder="How shall I address you?"
                  />
                </div>
                <div>
                  <label className="block font-sans text-xs letter-spacing-wide uppercase text-secondary-foreground/50 mb-3">
                    Your Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-secondary-foreground/20 py-4 text-secondary-foreground font-sans focus:outline-none focus:border-primary transition-colors"
                    placeholder="For my correspondence"
                  />
                </div>
              </div>

              <div>
                <label className="block font-sans text-xs letter-spacing-wide uppercase text-secondary-foreground/50 mb-3">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full bg-transparent border-b border-secondary-foreground/20 py-4 text-secondary-foreground font-sans focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your preferred contact number"
                />
              </div>

              <div>
                <label className="block font-sans text-xs letter-spacing-wide uppercase text-secondary-foreground/50 mb-3">
                  Tell Me About Yourself
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border-b border-secondary-foreground/20 py-4 text-secondary-foreground font-sans focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="What brings you here? What does your ideal lifestyle look like?"
                />
              </div>

              <div className="text-center pt-8">
                <button
                  type="submit"
                  className="font-sans text-xs letter-spacing-luxury uppercase px-16 py-5 bg-primary text-primary-foreground hover:bg-silver-light transition-all duration-500 shadow-silver"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-charcoal border-t border-secondary-foreground/10">
        <div className="container mx-auto px-6 text-center">
          <span className="font-serif text-xl text-secondary-foreground">Laura Pascual</span>
          <p className="mt-2 font-sans text-xs text-text-body">
            © 2026 Laura Pascual. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Membership;
