import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Privacy = () => {
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
              Privacy <span className="italic text-primary">Policy</span>
            </h1>
            <div className="mt-6 w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

            <div className="mt-12 space-y-8 font-sans text-text-body leading-relaxed">
              <div>
                <h2 className="font-serif text-2xl text-text-title mb-4">Your Privacy Matters</h2>
                <p>
                  At Laura Pascual, discretion is not just a policy, it's a promise. I understand that my clients 
                  value their privacy above all else, and I am committed to protecting your personal information 
                  with the utmost care and confidentiality.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-text-title mb-4">Information I Collect</h2>
                <p>
                  I only collect information that is necessary to provide you with exceptional, personalized service. 
                  This may include your name, contact details, preferences, and any specific requests you share with me.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-text-title mb-4">How I Use Your Information</h2>
                <p>
                  Your information is used solely to curate experiences tailored to your unique lifestyle. 
                  I never share, sell, or disclose your personal details to third parties without your explicit consent.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-text-title mb-4">Confidentiality Guarantee</h2>
                <p>
                  Every interaction, request, and detail shared with me remains strictly confidential. 
                  My reputation is built on trust, and I take that responsibility seriously.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-text-title mb-4">Contact</h2>
                <p>
                  If you have any questions about my privacy practices, please don't hesitate to reach out directly.
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

export default Privacy;
