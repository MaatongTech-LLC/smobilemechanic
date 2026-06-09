import { Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const serviceItems = [
  "Routine oil changes & full tune-ups",
  "Professional brake & radiator services",
  "Onsite diagnostics & AC repair",
  "Pre-purchase inspections (PPI) for dealerships",
  "Clutch, transmission & fuel pump repair",
  "Specialized VW repair services",
  "Preventative belt replacement",
];

export default function ServiceDetail() {
  return (
    <section id="service-detail" className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <ScrollReveal>
          <div className="mb-4">
            <span className="text-primary font-medium text-[14px]">
              Service & Repair
            </span>
            <h2 className="text-[32px] sm:text-[40px] font-medium text-black mt-2 leading-tight" style={{ fontFamily: "var(--font-tektur)" }}>
              Complete auto care
              <br />
              at your location
            </h2>
            <p className="text-[#5e5e5e] text-[16px] mt-3 max-w-[450px] leading-[1.5]">
              From the minor maintenance to major repairs, we provide everything
              your car needs to stay safe, reliable, and road-ready.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-10 mt-10">
          <ScrollReveal direction="left">
            <div>
              <a
                href="/book"
                className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-none text-[14px] font-medium transition-colors hover:scale-105 active:scale-95 mb-8"
              >
                View detail
              </a>

              <div>
                <h3 className="text-[16px] font-semibold text-black mb-4">
                  What&apos;s included
                </h3>
                <ul className="space-y-3">
                  {serviceItems.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Check className="text-primary" size={12} />
                      </div>
                      <span className="text-[14px] text-[#5e5e5e]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 p-5 bg-gray-50 rounded-xl">
                <h4 className="text-[16px] font-semibold text-black mb-1">
                  Engine diagnostics
                </h4>
                <p className="text-[14px] text-[#5e5e5e] leading-[1.5]">
                  Pin-point issues quickly with a real manual and diagnostic
                  scan.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={200}>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl overflow-hidden h-[280px] group">
                <img
                  src="/gallery/work-01.jpeg"
                  alt="Engine and transmission work"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="rounded-xl overflow-hidden h-[280px] group">
                <img
                  src="/gallery/work-08.jpeg"
                  alt="Brake service"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="col-span-2 rounded-xl overflow-hidden h-[200px] group">
                <img
                  src="/gallery/work-20.jpeg"
                  alt="Radiator repair"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
