import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import TrustStats from "@/components/TrustStats";
import ServiceDetail from "@/components/ServiceDetail";
import Team from "@/components/Team";
import CTA from "@/components/CTA";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Mission />
        <Services />
        <TrustStats />
        <ServiceDetail />
        <Team />
        <CTA />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
