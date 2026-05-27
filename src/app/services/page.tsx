import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import { Phone } from "lucide-react";

const services = [
  {
    id: "engine",
    title: "Engine Repair",
    description:
      "From minor tune-ups to complete engine rebuilds. We diagnose and fix engine problems on-site with professional-grade tools and OEM parts.",
    image:
      "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "brakes",
    title: "Brake Service",
    description:
      "Inspection, repair, and replacement of brake pads, rotors, calipers, and brake lines. Your safety is our priority.",
    image:
      "https://images.pexels.com/photos/3642618/pexels-photo-3642618.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "oil",
    title: "Oil Change",
    description:
      "Conventional, synthetic blend, and full synthetic oil changes with premium filters — performed at your home or office.",
    image:
      "https://images.pexels.com/photos/4116193/pexels-photo-4116193.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "battery",
    title: "Battery Service",
    description:
      "Battery testing, jump starts, and full replacements on the spot. We carry top-brand car batteries to get you back on the road.",
    image:
      "https://images.pexels.com/photos/4489732/pexels-photo-4489732.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "cooling",
    title: "Cooling System",
    description:
      "Radiators, water pumps, thermostats, and coolant hoses. We handle flushes, leak repairs, and complete cooling system overhauls.",
    image:
      "https://images.pexels.com/photos/7854074/pexels-photo-7854074.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "diagnostics",
    title: "Diagnostics",
    description:
      "Advanced diagnostic scanners to pinpoint issues quickly. We read codes, perform live data analysis, and explain what your vehicle needs.",
    image:
      "https://images.pexels.com/photos/4489765/pexels-photo-4489765.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "suspension",
    title: "Suspension & Steering",
    description:
      "Shocks, struts, ball joints, tie rods, and control arms. We restore your vehicle's handling and ride comfort.",
    image:
      "https://images.pexels.com/photos/4116220/pexels-photo-4116220.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "transmission",
    title: "Transmission",
    description:
      "Fluid changes, filter replacements, and shifting problem diagnosis. We service both automatic and manual transmissions.",
    image:
      "https://images.pexels.com/photos/4489728/pexels-photo-4489728.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Banner */}
        <section className="relative pt-[68px]">
          <div className="relative h-[340px] sm:h-[400px] bg-[#1a1a1a] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1920&q=80"
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            />
            <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
              <ScrollReveal>
                <span className="text-primary font-medium text-[14px] uppercase tracking-wider mb-3 block">
                  What we do
                </span>
                <h1
                  className="text-[36px] sm:text-[48px] md:text-[56px] font-medium text-white leading-tight"
                  style={{ fontFamily: "var(--font-tektur)" }}
                >
                  Our Services
                </h1>
                <p className="text-gray-300 text-[16px] sm:text-[18px] mt-4 max-w-[550px] mx-auto leading-[1.5]">
                  Professional mobile auto repair — we bring the shop to you,
                  anywhere in Indianapolis.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <ScrollReveal key={service.id} delay={index * 75}>
                  <Link
                    href={`/book?service=${service.id}`}
                    className="group block border border-gray-100 hover:border-primary/40 transition-all duration-300 overflow-hidden h-full"
                  >
                    <div className="h-[200px] overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <h3
                        className="text-[17px] font-semibold text-black group-hover:text-primary transition-colors"
                        style={{ fontFamily: "var(--font-tektur)" }}
                      >
                        {service.title}
                      </h3>
                      <p className="text-[14px] text-[#5e5e5e] mt-2 leading-[1.6]">
                        {service.description}
                      </p>
                      <span className="inline-block mt-4 text-[13px] font-medium text-primary group-hover:translate-x-1 transition-transform">
                        Book now &rarr;
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Note */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
            <ScrollReveal>
              <div className="text-center max-w-[700px] mx-auto">
                <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <span className="text-primary text-[24px] font-bold">$</span>
                </div>
                <h2
                  className="text-[28px] sm:text-[36px] font-medium text-black leading-tight"
                  style={{ fontFamily: "var(--font-tektur)" }}
                >
                  Transparent Pricing
                </h2>
                <p className="text-[#5e5e5e] text-[16px] sm:text-[18px] mt-4 leading-[1.7]">
                  Get a free quote before any work begins. No hidden fees, no
                  surprises. We explain every repair and cost upfront so you can
                  make informed decisions about your vehicle.
                </p>
                <p className="text-black font-medium text-[16px] mt-6">
                  Free diagnostics &bull; Upfront estimates &bull; No hidden
                  charges
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#1a1a1a] relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1920&q=80"
              alt=""
              className="w-full h-full object-cover opacity-30"
            />
          </div>

          <div className="relative max-w-[700px] mx-auto px-4 sm:px-6 text-center">
            <ScrollReveal>
              <h2
                className="text-[32px] sm:text-[44px] font-medium text-white leading-tight"
                style={{ fontFamily: "var(--font-tektur)" }}
              >
                Ready to get your car
                <br />
                back in shape?
              </h2>
              <p className="text-gray-300 text-[16px] mt-4 max-w-[500px] mx-auto leading-[1.5]">
                Book your mobile repair today. We&apos;ll come to you anywhere
                in Indianapolis — home, work, or roadside.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white px-[22px] py-[16px] rounded-none text-[16px] font-medium transition-all h-[46px] hover:scale-105 active:scale-95"
                >
                  Book a service
                </Link>
                <a
                  href="tel:+14632498724"
                  className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white text-white px-[22px] py-[16px] rounded-none text-[16px] font-medium transition-all h-[46px] hover:scale-105 active:scale-95"
                >
                  <Phone size={16} />
                  Call us now
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
