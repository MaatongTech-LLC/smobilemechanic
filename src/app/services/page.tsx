import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import JsonLd from "@/components/JsonLd";
import Link from "next/link";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Mobile Mechanic Services in Indianapolis",
  description:
    "Full range of mobile auto repair services in Indianapolis: oil changes, brake repair, tune-ups, AC service, diagnostics, transmission repair & more. We come to you.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Our Services | Silverius Mobile Mechanic",
    description:
      "Oil changes, brake repair, tune-ups, AC service, diagnostics, and more — all at your location in Indianapolis.",
    url: "/services",
  },
};

const services = [
  {
    id: "oil",
    title: "Routine Oil Change",
    description:
      "Conventional, synthetic blend, and full synthetic oil changes with premium filters — performed at your home or office. Keep your engine running smooth.",
    image: "/gallery/work-12.jpeg",
  },
  {
    id: "tuneup",
    title: "Full Tune-Up",
    description:
      "Complete engine tune-up including spark plugs, filters, fluid top-offs, and system checks. Restore your vehicle's performance and fuel efficiency.",
    image: "/gallery/work-03.jpeg",
  },
  {
    id: "brakes",
    title: "Professional Brake Service",
    description:
      "Inspection, repair, and replacement of brake pads, rotors, calipers, and brake lines. Your safety is our top priority — we don't cut corners.",
    image: "/gallery/work-08.jpeg",
  },
  {
    id: "radiator",
    title: "Radiator Repair",
    description:
      "Fast and reliable radiator repair — from leak fixes to full replacements. We handle flushes, hose repairs, and complete cooling system overhauls.",
    image: "/gallery/work-20.jpeg",
  },
  {
    id: "ac",
    title: "Auto AC Service",
    description:
      "Complete auto AC diagnostics, recharging, and repair. Stay cool in Indiana summers with our professional climate control services.",
    image: "/gallery/work-15.jpeg",
  },
  {
    id: "diagnostics",
    title: "Onsite Car Diagnostics",
    description:
      "Advanced diagnostic scanners to pinpoint issues at your location. We read codes, perform live data analysis, and explain exactly what your vehicle needs.",
    image: "/gallery/work-05.jpeg",
  },
  {
    id: "ppi",
    title: "Pre-Purchase Inspection",
    description:
      "Thorough pre-purchase car inspections for buyers and dealerships — big and small. Know exactly what you're buying before you sign. We partner with local dealers.",
    image: "/gallery/work-25.jpeg",
  },
  {
    id: "transmission",
    title: "Clutch & Transmission",
    description:
      "Expert clutch and transmission repair — from fluid changes and filter replacements to complete rebuilds. We service both automatic and manual transmissions.",
    image: "/gallery/work-01.jpeg",
  },
  {
    id: "fuelpump",
    title: "Fuel Pump Repair",
    description:
      "Efficient fuel pump diagnosis and replacement. If your car struggles to start or loses power, we'll get your fuel system working reliably again.",
    image: "/gallery/work-30.jpeg",
  },
  {
    id: "belts",
    title: "Belt Replacement",
    description:
      "Preventative serpentine belt, timing belt, and accessory belt replacement. Avoid costly breakdowns with proactive belt maintenance.",
    image: "/gallery/work-10.jpeg",
  },
  {
    id: "vw",
    title: "Specialized VW Repair",
    description:
      "Dedicated Volkswagen expertise — from TDI engines to DSG transmissions. We know VW inside and out, with specialized tools and knowledge for German engineering.",
    image: "/gallery/work-35.jpeg",
  },
];

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Mobile Mechanic Services",
  description: "Complete list of mobile auto repair services offered by Silverius Mobile Mechanic in Indianapolis, IN",
  numberOfItems: 11,
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.title,
      description: service.description,
      provider: {
        "@type": "AutoRepair",
        name: "Silverius Mobile Mechanic",
      },
      areaServed: {
        "@type": "City",
        name: "Indianapolis",
        "@id": "https://www.wikidata.org/wiki/Q6346",
      },
    },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={servicesJsonLd} id="services-jsonld" />
      <Header />
      <main>
        {/* Hero Banner */}
        <section className="relative pt-[68px]">
          <div className="relative h-[340px] sm:h-[400px] bg-[#1a1a1a] overflow-hidden">
            <img
              src="/gallery/work-05.jpeg"
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
                  Professional mobile auto repair — we come to you,
                  anywhere in Indianapolis and surrounding areas.
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
              src="/gallery/work-01.jpeg"
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
                in Indianapolis  home, work, or roadside.
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
