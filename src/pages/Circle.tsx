import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

// Import gallery images
import circle1 from "@/assets/circle/circle-1.jpeg";
import circle2 from "@/assets/circle/circle-2.jpeg";
import circle3 from "@/assets/circle/circle-3.jpeg";
import circle4 from "@/assets/circle/circle-4.jpeg";
import circle5 from "@/assets/circle/circle-5.jpeg";
import circle6 from "@/assets/circle/circle-6.jpeg";
import circle7 from "@/assets/circle/circle-7.jpeg";
import circle8 from "@/assets/circle/circle-8.jpeg";
import circle9 from "@/assets/circle/circle-9.jpeg";
import circle10 from "@/assets/circle/circle-10.jpeg";
import circle11 from "@/assets/circle/circle-11.jpeg";
import circle12 from "@/assets/circle/circle-12.jpeg";
import circle13 from "@/assets/circle/circle-13.jpeg";
import circle14 from "@/assets/circle/circle-14.jpeg";
import circle15 from "@/assets/circle/circle-15.jpeg";
import circle16 from "@/assets/circle/circle-16.jpeg";
import circle17 from "@/assets/circle/circle-17.jpeg";
import circle18 from "@/assets/circle/circle-18.jpeg";
import circle19 from "@/assets/circle/circle-19.jpeg";
import circle20 from "@/assets/circle/circle-20.jpeg";
import circle21 from "@/assets/circle/circle-21.jpeg";
import circle22 from "@/assets/circle/circle-22.jpeg";
import circle23 from "@/assets/circle/circle-23.jpeg";
import circle24 from "@/assets/circle/circle-24.jpeg";
import circle25 from "@/assets/circle/circle-25.jpeg";
import circle26 from "@/assets/circle/circle-26.jpeg";
import circle27 from "@/assets/circle/circle-27.jpeg";

const Circle = () => {
  // Legends first (Ronaldo, Ronaldinho, Roberto Carlos, Casillas), then mixed variety
  const galleryImages = [
    // Top row: The 4 biggest legends
    { id: 1, src: circle5, caption: "With Ronaldo Nazário" },
    { id: 2, src: circle6, caption: "With Ronaldinho" },
    { id: 3, src: circle2, caption: "Sleeping with a Champions League trophy" },
    { id: 4, src: circle1, caption: "With Barça Legends" },
    // Mixed from here: alternating between people/moments
    { id: 5, src: circle3, caption: "With Edgar Davids" },
    { id: 6, src: circle25, caption: "With Ronaldinho" },
    { id: 7, src: circle11, caption: "With Jorge Lorenzo" },
    { id: 8, src: circle14, caption: "With André Onana & Lautaro Martínez" },
    { id: 9, src: circle27, caption: "With Iker Casillas" },
    { id: 10, src: circle9, caption: "With André Onana" },
    { id: 11, src: circle7, caption: "With Fernando Llorente" },
    { id: 12, src: circle10, caption: "Training session with Edgar Davids" },
    { id: 13, src: circle18, caption: "With Paula Badosa" },
    { id: 14, src: circle8, caption: "With Edgar Davids" },
    { id: 15, src: circle22, caption: "Road trip with André Onana" },
    { id: 16, src: circle16, caption: "With Gatsby Randolph" },
    { id: 17, src: circle17, caption: "With Marc Cucurella" },
    { id: 18, src: circle21, caption: "With Iker Casillas" },
    { id: 19, src: circle13, caption: "With Jorge Lorenzo" },
    { id: 20, src: circle15, caption: "Lunch with André Onana" },
    { id: 21, src: circle4, caption: "With Fernando Sanz" },
    { id: 22, src: circle26, caption: "With Filip Jorgensen" },
    { id: 23, src: circle12, caption: "With Iker Casillas" },
    { id: 24, src: circle19, caption: "With Paula Badosa" },
    { id: 25, src: circle23, caption: "With Alex Collado" },
    { id: 26, src: circle20, caption: "With Álvaro González" },
    { id: 27, src: circle24, caption: "With Eric Garcia" },
  ];

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      {/* Header */}
      <div className="bg-charcoal/95 backdrop-blur-md py-6 sticky top-0 z-50">
        <div className="container mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-text-body hover:text-primary transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-sans text-sm uppercase letter-spacing-wide">Back to Home</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-6 text-center">
          <p className="font-sans text-xs letter-spacing-luxury uppercase text-primary mb-6 reveal">
            Exclusive Moments
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-text-title mb-8 reveal reveal-delay-1">
            Inner Circle
          </h1>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8 reveal reveal-delay-2" />
          <p className="font-sans text-lg text-text-body max-w-2xl mx-auto reveal reveal-delay-3">
            A glimpse into the extraordinary connections and unforgettable moments
            shared with distinguished individuals around the world.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-charcoal-light">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative aspect-[4/5] bg-charcoal overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={image.src}
                  alt={image.caption}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Hover Overlay with Caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="font-sans text-sm text-text-body letter-spacing-wide">
                      {image.caption}
                    </p>
                  </div>
                </div>

                {/* Elegant Border on Hover */}
                <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/30 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discretion Note */}
      <section className="py-16 bg-charcoal">
        <div className="container mx-auto px-6 text-center">
          <p className="font-sans text-sm text-text-body/60 italic max-w-xl mx-auto">
            All images are shared with express permission. Privacy and discretion
            remain my highest priority in every relationship.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-charcoal-light">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-text-title mb-6">
            Join the Circle
          </h2>
          <p className="font-sans text-text-body max-w-lg mx-auto mb-8">
            Experience the world's finest moments with personalized service
            tailored to your unique lifestyle.
          </p>
          <Link
            to="/#contact"
            className="inline-block font-sans text-xs letter-spacing-luxury uppercase px-10 py-4 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500"
          >
            Inquire Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Circle;
