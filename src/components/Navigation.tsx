import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Services", "Philosophy", "Experience", "Contact"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled
        ? "bg-charcoal/95 backdrop-blur-md py-4"
        : "bg-transparent py-8"
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center group">
          <span className="font-serif text-2xl text-secondary-foreground tracking-wide">
            Laura Pascual
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-sans text-sm letter-spacing-wide text-secondary-foreground/80 hover:text-primary transition-colors duration-300 uppercase"
            >
              {item}
            </a>
          ))}
          <Link
            to="/circle"
            className="font-sans text-sm letter-spacing-wide text-secondary-foreground/80 hover:text-primary transition-colors duration-300 uppercase"
          >
            Circle
          </Link>
        </div>

        <a
          href="#contact"
          className="hidden md:block font-sans text-xs letter-spacing-luxury uppercase px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500"
        >
          Inquire
        </a>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <button
              className="md:hidden p-2 text-secondary-foreground hover:text-primary transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full sm:w-80 bg-charcoal border-l border-secondary-foreground/10 p-0"
          >
            <div className="flex flex-col h-full pt-16 pb-8 px-8">
              {/* Navigation Links */}
              <nav className="flex flex-col gap-6">
                {navItems.map((item) => (
                  <SheetClose asChild key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="font-sans text-lg letter-spacing-wide text-secondary-foreground/80 hover:text-primary transition-colors duration-300 uppercase py-2"
                    >
                      {item}
                    </a>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Link
                    to="/circle"
                    className="font-sans text-lg letter-spacing-wide text-secondary-foreground/80 hover:text-primary transition-colors duration-300 uppercase py-2"
                  >
                    Circle
                  </Link>
                </SheetClose>
              </nav>


              {/* CTA Button */}
              <div className="mt-auto">
                <SheetClose asChild>
                  <a
                    href="#contact"
                    className="block text-center font-sans text-xs letter-spacing-luxury uppercase px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500"
                  >
                    Inquire
                  </a>
                </SheetClose>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navigation;
