import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import JsonLd from "@/components/JsonLd";
import ServiceGrid from "@/components/ServiceGrid";
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

interface Service {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  image_url: string | null;
  price_from: string | null;
  duration_minutes: number | null;
}

interface ServicesResponse {
  data: Service[];
  meta: {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  };
}

async function getServices(): Promise<ServicesResponse> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/services?per_page=8`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) return { data: [], meta: { current_page: 1, last_page: 1, per_page: 8, total: 0 } };

  return res.json();
}

function buildServicesJsonLd(services: Service[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Mobile Mechanic Services",
    description: "Complete list of mobile auto repair services offered by Silverius Mobile Mechanic in Indianapolis, IN",
    numberOfItems: services.length,
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.name,
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
}

export default async function ServicesPage() {
  const { data: services, meta } = await getServices();
  const servicesJsonLd = buildServicesJsonLd(services);

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
            <ServiceGrid initialServices={services} initialMeta={meta} />
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
