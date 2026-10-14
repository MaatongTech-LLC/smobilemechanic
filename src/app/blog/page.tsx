import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SoroBlog from "@/components/SoroBlog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Auto Repair Tips & Car Care Advice",
  description:
    "Car care tips, maintenance guides, and auto repair advice from the certified mechanics at Silverius Mobile Mechanic in Indianapolis.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Silverius Mobile Mechanic",
    description:
      "Car care tips, maintenance guides, and auto repair advice from our certified mobile mechanics in Indianapolis.",
    url: "/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Banner */}
        <section className="relative bg-gray-900 py-24 md:py-32">
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
            <ScrollReveal>
              <h1
                className="text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl"
                style={{ fontFamily: "var(--font-tektur)" }}
              >
                Our Blog
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
                Car care tips, maintenance guides, and straight answers from the
                mechanics who come to you.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <SoroBlog />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
