"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const faqCategories = [
  {
    title: "General",
    questions: [
      {
        q: "What areas do you serve?",
        a: "We serve Indianapolis and surrounding areas within a 30-mile radius, including Carmel, Fishers, Greenwood, Noblesville, Lawrence, Avon, Brownsburg, Plainfield, Zionsville, Westfield, and Beech Grove.",
      },
      {
        q: "How do I book an appointment?",
        a: "You can book online through our website, call us directly at (317) 662-2514, or send us an email. We'll confirm your appointment within a few hours.",
      },
      {
        q: "What are your hours of operation?",
        a: "We're available 24/7. Day or night, weekends and holidays — we're here when you need us.",
      },
    ],
  },
  {
    title: "Services",
    questions: [
      {
        q: "What services do you offer?",
        a: "We offer a full range of auto repair services including engine repair, brake service, oil changes, battery service, cooling system repair, diagnostics, suspension & steering, and transmission work.",
      },
      {
        q: "Do you work on all makes and models?",
        a: "Yes, our certified technicians are trained to work on all makes and models, both domestic and foreign vehicles.",
      },
      {
        q: "Do you provide the parts or do I need to supply them?",
        a: "We provide all parts needed for the repair. We use high-quality OEM and aftermarket parts and can source specific brands upon request.",
      },
    ],
  },
  {
    title: "Pricing & Payment",
    questions: [
      {
        q: "How much does a typical repair cost?",
        a: "Costs vary depending on the service. We always provide a free estimate before starting any work so you know exactly what to expect  no surprises.",
      },
      {
        q: "Do you offer free estimates?",
        a: "Yes, we provide free estimates for all services. We'll diagnose the issue and give you an upfront quote before any work begins.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept cash, all major credit and debit cards, Venmo, Zelle, and CashApp for your convenience.",
      },
    ],
  },
  {
    title: "Warranty & Guarantee",
    questions: [
      {
        q: "Do you offer a warranty on your work?",
        a: "Yes, we offer a 2-year / 24,000-mile warranty on all labor performed. Parts warranties vary by manufacturer but are typically 1-3 years.",
      },
      {
        q: "What if something goes wrong after the repair?",
        a: "If you experience any issues related to our repair, contact us immediately. We'll re-inspect and fix the problem at no additional charge under our warranty.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  function toggle(id: string) {
    setOpenIndex(openIndex === id ? null : id);
  }

  return (
    <>
      <Header />
      <main>
        <section className="relative h-[350px] bg-black flex items-center justify-center">
          <div className="absolute inset-0">
            <img
              src="/gallery/work-10.jpeg"
              alt=""
              className="w-full h-full object-cover opacity-40"
            />
          </div>
          <div className="relative text-center px-4">
            <h1
              className="text-[40px] sm:text-[56px] font-bold text-white"
              style={{ fontFamily: "var(--font-tektur)" }}
            >
              Frequently Asked Questions
            </h1>
            <p className="text-gray-300 text-[18px] mt-3 max-w-[500px] mx-auto">
              Find answers to common questions about our mobile auto repair services.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-[800px] mx-auto px-4 sm:px-6">
            {faqCategories.map((category, catIndex) => (
              <ScrollReveal key={category.title} delay={catIndex * 100}>
                <div className="mb-12">
                  <h2
                    className="text-[24px] sm:text-[28px] font-semibold text-black mb-6"
                    style={{ fontFamily: "var(--font-tektur)" }}
                  >
                    {category.title}
                  </h2>
                  <div className="space-y-3">
                    {category.questions.map((item, qIndex) => {
                      const id = `${catIndex}-${qIndex}`;
                      const isOpen = openIndex === id;
                      return (
                        <div
                          key={id}
                          className="border border-gray-200 overflow-hidden"
                        >
                          <button
                            onClick={() => toggle(id)}
                            className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                          >
                            <span className="text-[16px] font-medium text-black pr-4">
                              {item.q}
                            </span>
                            <ChevronDown
                              size={20}
                              className={`shrink-0 text-[#5e5e5e] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                            />
                          </button>
                          <div
                            className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"}`}
                          >
                            <p className="px-6 pb-4 text-[15px] text-[#5e5e5e] leading-[1.6]">
                              {item.a}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section className="py-20 bg-[#1a1a1a]">
          <div className="max-w-[600px] mx-auto px-4 text-center">
            <ScrollReveal>
              <h2
                className="text-[28px] sm:text-[36px] font-medium text-white"
                style={{ fontFamily: "var(--font-tektur)" }}
              >
                Still have questions?
              </h2>
              <p className="text-gray-300 text-[16px] mt-3">
                We&apos;re here to help. Reach out and we&apos;ll get back to you quickly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-none text-[16px] font-medium transition-all hover:scale-105 active:scale-95"
                >
                  Contact us
                </a>
                <a
                  href="tel:+13176622514"
                  className="inline-flex items-center justify-center border border-white/30 hover:border-white text-white px-8 py-4 rounded-none text-[16px] font-medium transition-colors"
                >
                  (317) 662-2514
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
