import { Star } from "lucide-react";

const reviews = [
  {
    name: "Alexandra M.",
    location: "London",
    text: "Laura made the impossible happen. She secured a private villa in Ibiza during peak season with just 48 hours notice. Absolutely exceptional service.",
    rating: 5,
  },
  {
    name: "Mohammed A.",
    location: "Dubai",
    text: "Her business connections opened doors I didn't know existed. Laura introduced me to key investors that transformed my venture. Invaluable.",
    rating: 5,
  },
  {
    name: "Victoria S.",
    location: "New York",
    text: "From private aviation to rare acquisitions, Laura handles everything with discretion and elegance. She understands luxury at its finest.",
    rating: 5,
  },
  {
    name: "James R.",
    location: "Monaco",
    text: "The 24/7 concierge service is unmatched. No matter the hour, no matter the request, Laura and her team deliver beyond expectations.",
    rating: 5,
  },
  {
    name: "David K.",
    location: "Singapore",
    text: "Laura does things no one would believe possible. She has the key to make everything happen. When everyone said no, she found a way. Simply extraordinary.",
    rating: 5,
  },
  {
    name: "Richard T.",
    location: "Paris",
    text: "My wife visited Dubai alone and Laura organized the most incredible trip for her. She personally spent the days showing her the best of Dubai, like having a private luxury guide. It was the best trip my wife ever had.",
    rating: 5,
  },
  {
    name: "Elena V.",
    location: "Milan",
    text: "Laura found me my dream villa in Dubai when I had almost given up. She handled everything, from the viewing to negotiations to the final paperwork. I never had to worry about a thing. Now I wake up to the most stunning views every morning.",
    rating: 5,
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-32 bg-charcoal">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="font-sans text-xs letter-spacing-luxury uppercase text-primary">
            Testimonials
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl text-text-title">
            Client <span className="italic text-primary">Reviews</span>
          </h2>
          <div className="mt-6 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="p-8 bg-charcoal-light border border-secondary-foreground/10 hover:border-primary/30 transition-all duration-500"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-sans text-text-body leading-relaxed italic mb-6">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-2">
                <span className="font-serif text-lg text-text-title">
                  {review.name}
                </span>
                <span className="text-secondary-foreground/30">·</span>
                <span className="font-sans text-sm text-secondary-foreground/50">
                  {review.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
