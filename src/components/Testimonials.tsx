import { Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    name: "Robert T.",
    verified: true,
    rating: 5,
    text: "I had a check engine light come on and they ran a complete diagnostic in my driveway. Highly professional. 10/10.",
    initials: "RT",
  },
  {
    name: "Alex M.",
    verified: true,
    rating: 5,
    text: "Brakes were done the same day I called. Great service from the team. Highly recommend to any driver in Indy.",
    initials: "AM",
  },
  {
    name: "Christy W.",
    verified: false,
    rating: 5,
    text: "They replaced my brake pads right at my house. Always on time and very professional. Definitely telling my friends.",
    initials: "CW",
  },
  {
    name: "James D.",
    verified: false,
    rating: 5,
    text: "Got a pre-purchase inspection done before buying my truck. Silverius was thorough and honest — saved me from a bad deal.",
    initials: "JD",
  },
  {
    name: "Mike B.",
    verified: false,
    rating: 5,
    text: "This is an excellent mobile mechanic service that's definitely worth checking out. Comes to me any day. Great service!",
    initials: "MB",
  },
  {
    name: "Sarah K.",
    verified: true,
    rating: 5,
    text: "Had my AC recharged at home during the summer. Fast, affordable, and it works perfectly now. Will be calling again!",
    initials: "SK",
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
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary text-[14px] font-bold">
                      {testimonial.initials}
                    </span>
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
