import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = [
    { label: "Privacy", to: "/privacy" },
    { label: "Terms", to: "/terms" },
    { label: "Press", to: "/press" },
  ];

  return (
    <footer className="py-12 bg-charcoal border-t border-secondary-foreground/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-serif text-xl text-secondary-foreground tracking-wide">
              Laura Pascual
            </span>
          </div>

          <p className="font-sans text-xs text-secondary-foreground/40 letter-spacing-wide uppercase">
            © 2026 Laura Pascual. All Rights Reserved.
          </p>

          <div className="flex items-center gap-8">
            {footerLinks.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="font-sans text-xs letter-spacing-wide uppercase text-secondary-foreground/50 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
