import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "FAQ — Mobile Mechanic Questions Answered",
  description:
    "Frequently asked questions about Silverius Mobile Mechanic services in Indianapolis. Learn about our service area, pricing, warranties, scheduling, and what to expect.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ | Silverius Mobile Mechanic",
    description:
      "Common questions about mobile mechanic services in Indianapolis — areas served, payment, warranties, and more.",
    url: "/faq",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What areas do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve Indianapolis and surrounding areas within a 30-mile radius, including Carmel, Fishers, Greenwood, Noblesville, Lawrence, Avon, Brownsburg, Plainfield, Zionsville, Westfield, and Beech Grove.",
      },
    },
    {
      "@type": "Question",
      name: "How do I book an appointment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can book online through our website, call us directly at (317) 662-2514, or send us an email. We'll confirm your appointment within a few hours.",
      },
    },
    {
      "@type": "Question",
      name: "What are your hours of operation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We're available 24/7. Day or night, weekends and holidays — we're here when you need us.",
      },
    },
    {
      "@type": "Question",
      name: "What services do you offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer a full range of auto repair services including engine repair, brake service, oil changes, battery service, cooling system repair, diagnostics, suspension & steering, and transmission work.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work on all makes and models?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our certified technicians are trained to work on all makes and models, both domestic and foreign vehicles.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer free estimates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide free estimates for all services. We'll diagnose the issue and give you an upfront quote before any work begins.",
      },
    },
    {
      "@type": "Question",
      name: "What payment methods do you accept?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We accept cash, all major credit and debit cards, Venmo, Zelle, and CashApp for your convenience.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer a warranty on your work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer a 2-year / 24,000-mile warranty on all labor performed. Parts warranties vary by manufacturer but are typically 1-3 years.",
      },
    },
  ],
};

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={faqJsonLd} id="faq-jsonld" />
      {children}
    </>
  );
}
