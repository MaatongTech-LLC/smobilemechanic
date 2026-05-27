import { Shield, Wrench, Award, Star } from "lucide-react";
import DashedCircle from "./DashedCircle";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    icon: Shield,
    title: "Expertise you can trust",
    description:
      "Our team brings industry-leading expertise and certifications to every job. Trust professionals at SMS. This ensures...",
  },
  {
    icon: Wrench,
    title: "Comprehensive services",
    description:
      "From routine maintenance to major repairs, we offer a full range of auto care. From the factory floor to your driveway, our services...",
  },
  {
    icon: Award,
    title: "Quality & reliability",
    description:
      "Our dedication to quality is second to none, offering reliable service from the factory floor for all vehicles...",
  },
  {
    icon: Star,
    title: "Quality & reliability",
    description:
      "Our dedication to quality and certifications to every job. Trust professionals at SMS. This ensures...",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white relative">
      <DashedCircle />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-[14px]">
              Our promise
            </span>
            <h2 className="text-[36px] sm:text-[44px] font-medium text-black mt-2" style={{ fontFamily: "var(--font-tektur)" }}>
              Comprehensive auto
              <br />
              repair services
            </h2>
            <p className="text-[#5e5e5e] mt-3 max-w-[500px] mx-auto text-[16px] leading-[1.5]">
              Full-service auto repair for every make, model, and message.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 bg-white">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="text-black" size={24} />
                </div>
                <h3 className="text-[16px] font-semibold text-black mb-2">
                  {service.title}
                </h3>
                <p className="text-[#5e5e5e] text-[14px] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
