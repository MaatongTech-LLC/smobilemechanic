import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work — Mobile Auto Repair Gallery Indianapolis",
  description:
    "See our professional mobile mechanic work in action. From engine repairs to brake services, we deliver quality results at your location in Indianapolis.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Work Gallery | Silverius Mobile Mechanic",
    description:
      "Photos of real mobile auto repair jobs in Indianapolis — oil changes, brake service, engine work & more.",
    url: "/gallery",
  },
};

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main>
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
