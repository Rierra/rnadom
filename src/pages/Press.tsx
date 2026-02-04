import { Link } from "react-router-dom";
import { ArrowLeft, Mail } from "lucide-react";

const Press = () => {
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
          <div className="w-20" />
        </div>
      </header>

      {/* Content */}
      <section className="pt-32 pb-24 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="font-sans text-xs letter-spacing-luxury uppercase text-primary">
              Media
            </span>
            <h1 className="mt-4 font-serif text-4xl md:text-5xl text-text-title">
              Press & <span className="italic text-primary">Media</span>
            </h1>
            <div className="mt-6 w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

            <div className="mt-12 space-y-8 font-sans text-text-body leading-relaxed">
              <div>
                <h2 className="font-serif text-2xl text-text-title mb-4">Media Inquiries</h2>
                <p>
                  For press inquiries, interviews, or feature opportunities, I welcome conversations with 
                  journalists and media professionals who are interested in the world of luxury lifestyle 
                  management and personal concierge services.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-text-title mb-4">About Laura Pascual</h2>
                <p>
                  With years of experience curating exceptional experiences for discerning clients worldwide, 
                  I have built a reputation for anticipating needs before they arise and delivering moments 
                  that transcend expectations.
                </p>
                <p className="mt-4">
                  My approach combines an intimate understanding of luxury with genuine care for each client's 
                  unique lifestyle, creating a service that feels less like delegation and more like partnership.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-text-title mb-4">Topics I Speak On</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>The evolution of luxury lifestyle management</li>
                  <li>Building trust in high net worth client relationships</li>
                  <li>The art of anticipation in personal service</li>
                  <li>Travel trends and exclusive experiences</li>
                  <li>Wellness and biohacking for the modern elite</li>
                </ul>
              </div>

              <div className="bg-charcoal-light p-8 border border-primary/20 mt-12">
                <Mail className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-serif text-xl text-text-title mb-2">Get in Touch</h3>
                <p className="text-text-body mb-6">
                  For all press and media inquiries, please reach out directly via WhatsApp or email.
                </p>
                <a
                  href="https://wa.me/971551389983"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-sans text-xs letter-spacing-luxury uppercase px-8 py-3 bg-primary text-primary-foreground hover:bg-silver-light transition-all duration-500"
                >
                  Contact for Press
                </a>
              </div>
            </div>
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

export default Press;
