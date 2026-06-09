import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work | Silverius Mobile Mechanic",
  description:
    "See our professional mobile mechanic work in action. From engine repairs to brake services, we deliver quality results at your location in Indianapolis.",
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
