import { Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    name: "Robert T.",
    verified: true,
    rating: 5,
    text: "I had a check engine light come on and they ran a complete diagnostic in my driveway. Highly professional. 10/10.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Alex M.",
    verified: true,
    rating: 5,
    text: "Brakes were done the same day, greats of service from the team. Drivers recommend.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Christy",
    verified: false,
    rating: 5,
    text: "They had my braking for home. Always on time. Definitely going to tell my friends.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Robert T.",
    verified: false,
    rating: 5,
    text: "I love a second opinion on it, but Tip: Be clear in the context. A clean environment for the mechanics and expertise.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Mike Bankson",
    verified: false,
    rating: 5,
    text: "This is an excellent mechanic shop that's definitely worth checking. Comes to me any day. Great service!",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Sarah K.",
    verified: true,
    rating: 5,
    text: "Required our service on our home to mph. 11k AC well and the parts for again.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-[32px] sm:text-[40px] font-medium text-black" style={{ fontFamily: "var(--font-tektur)" }}>
              Our customers say
              <br />
              it best
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 80}>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="font-semibold text-[14px] text-black">
                        {testimonial.name}
                      </span>
                      {testimonial.verified && (
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          className="text-blue-500"
                        >
                          <circle cx="7" cy="7" r="7" fill="currentColor" />
                          <path
                            d="M5 7l1.5 1.5L9 5.5"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, i) => (
                          <Star
                            key={i}
                            size={12}
                            className="text-yellow-400 fill-yellow-400"
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
                <p className="text-[13px] text-[#5e5e5e] leading-[1.5]">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
