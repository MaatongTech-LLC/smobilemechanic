import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Mobile Mechanic Indianapolis",
  description:
    "Get in touch with Silverius Mobile Mechanic. Serving Indianapolis, Carmel, Fishers, Greenwood & surrounding areas. Call (463) 249-8724 or send us a message online.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Silverius Mobile Mechanic",
    description:
      "Need a mobile mechanic in Indianapolis? Call (463) 249-8724 or fill out our contact form. Mon-Fri 7AM-6PM, Sat 8AM-4PM.",
    url: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
