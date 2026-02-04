import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Terms = () => {
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
              Legal
            </span>
            <h1 className="mt-4 font-serif text-4xl md:text-5xl text-text-title">
              Terms of <span className="italic text-primary">Service</span>
            </h1>
            <div className="mt-6 w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

            <div className="mt-12 space-y-8 font-sans text-text-body leading-relaxed">
              <div>
                <h2 className="font-serif text-2xl text-text-title mb-4">Service Agreement</h2>
                <p>
                  By engaging my services, you enter into a relationship built on mutual respect, trust, and 
                  clear communication. My commitment is to deliver exceptional, personalized experiences that 
                  exceed your expectations.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-text-title mb-4">Membership Terms</h2>
                <p>
                  Membership is by invitation and application only. Annual membership fees are non refundable 
                  and grant you exclusive access to my full range of concierge services for the duration of
                  your membership period.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-text-title mb-4">Service Delivery</h2>
                <p>
                  While I strive to fulfill every request, certain services may be subject to availability, 
                  local regulations, and third party providers. I will always communicate transparently about 
                  any limitations and work to find suitable alternatives.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-text-title mb-4">Confidentiality</h2>
                <p>
                  All client information and requests are treated with absolute confidentiality. I expect the 
                  same discretion regarding my network, contacts, and proprietary methods of service delivery.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-text-title mb-4">Communication</h2>
                <p>
                  Members have direct access to me via WhatsApp and email. Response times may vary based on 
                  time zones and request complexity, but I am committed to being available when you need me most.
                </p>
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

export default Terms;
