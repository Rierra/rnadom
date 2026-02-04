import { useState } from "react";
import { Mail, Phone, MapPin, Loader2, CheckCircle } from "lucide-react";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const accessKey = (import.meta.env.VITE_WEB3FORMS_KEY as string | undefined) ?? "";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    if (!accessKey) {
      setError("Contact form is not configured. Please try again later.");
      setIsSubmitting(false);
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        form.reset();
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-charcoal relative overflow-hidden">

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="font-sans text-xs letter-spacing-luxury uppercase text-primary">
              Begin Your Journey
            </span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl text-text-title">
              Let Me <span className="italic text-primary">Serve You</span>
            </h2>
            <div className="mt-6 w-24 h-px mx-auto bg-gradient-to-r from-transparent via-primary to-transparent" />
            <p className="mt-8 font-sans text-text-body max-w-xl mx-auto">
              Discretion is my foundation. Reach out and discover what it means
              to have the world at your fingertips.
            </p>
          </div>

          {/* Success Message */}
          {isSuccess ? (
            <div className="text-center py-16 animate-fade-in">
              <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="font-serif text-2xl text-text-title mb-4">Thank You</h3>
              <p className="font-sans text-text-body">
                Your inquiry has been received. I will be in touch shortly.
              </p>
              <button
                onClick={() => setIsSuccess(false)}
                className="mt-8 font-sans text-xs letter-spacing-luxury uppercase px-12 py-4 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            /* Contact Form */
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Web3Forms Access Key */}
              <input type="hidden" name="access_key" value={accessKey} />
              <input type="hidden" name="subject" value="New Inquiry from Laura Pascual Concierge" />
              <input type="hidden" name="from_name" value="Laura Pascual Concierge" />

              {/* Honeypot for spam protection */}
              <input type="checkbox" name="botcheck" className="hidden" />

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block font-sans text-xs letter-spacing-wide uppercase text-secondary-foreground/50 mb-3">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
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
                    name="email"
                    required
                    className="w-full bg-transparent border-b border-secondary-foreground/20 py-4 text-secondary-foreground font-sans focus:outline-none focus:border-primary transition-colors"
                    placeholder="For my correspondence"
                  />
                </div>
              </div>

              <div>
                <label className="block font-sans text-xs letter-spacing-wide uppercase text-secondary-foreground/50 mb-3">
                  Your Desire
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full bg-transparent border-b border-secondary-foreground/20 py-4 text-secondary-foreground font-sans focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell me how I may serve you..."
                />
              </div>

              {error && (
                <p className="text-red-400 text-center font-sans text-sm">{error}</p>
              )}

              <div className="text-center pt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="font-sans text-xs letter-spacing-luxury uppercase px-16 py-5 bg-primary text-primary-foreground hover:bg-silver-light transition-all duration-500 shadow-silver disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Submit Inquiry"
                  )}
                </button>
              </div>
            </form>
          )}

          {/* Contact Info */}
          <div className="mt-20 grid md:grid-cols-3 gap-8 pt-12 border-t border-secondary-foreground/10">
            <div className="text-center">
              <Mail className="w-6 h-6 text-primary mx-auto mb-4" />
              <p className="font-sans text-sm text-secondary-foreground/70">
                laurapascualintl@gmail.com
              </p>
            </div>
            <div className="text-center">
              <Phone className="w-6 h-6 text-primary mx-auto mb-4" />
              <p className="font-sans text-sm text-secondary-foreground/70">
                +971 55 138 9983
              </p>
            </div>
            <div className="text-center">
              <MapPin className="w-6 h-6 text-primary mx-auto mb-4" />
              <p className="font-sans text-sm text-secondary-foreground/70">
                Dubai
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
