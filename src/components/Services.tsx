import { Shield, Wrench, Award, Car } from "lucide-react";
import DashedCircle from "./DashedCircle";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    icon: Shield,
    title: "Expertise you can trust",
    description:
      "From oil changes to full engine rebuilds — our certified team handles it all with professional-grade tools and years of hands-on experience.",
  },
  {
    icon: Wrench,
    title: "11+ specialized services",
    description:
      "Brakes, AC, tune-ups, transmission, fuel pumps, belts, radiators, diagnostics, and more. Complete auto care that comes to you.",
  },
  {
    icon: Car,
    title: "Pre-purchase inspections",
    description:
      "Partnering with local dealerships big and small to provide thorough vehicle inspections. Know exactly what you're buying before you sign.",
  },
  {
    icon: Award,
    title: "VW & all-make specialist",
    description:
      "Specialized Volkswagen expertise plus full-service repair for every make and model. German engineering? No problem.",
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
