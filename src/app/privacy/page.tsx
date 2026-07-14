import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Silverius Mobile Mechanic privacy policy. How we collect, use, and protect your personal information.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative bg-gray-900 py-24 md:py-32">
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
            <ScrollReveal>
              <h1
                className="text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl"
                style={{ fontFamily: "var(--font-tektur)" }}
              >
                Privacy Policy
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
                Last updated: May 27, 2026
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-4">
            <ScrollReveal>
              <div className="prose prose-gray max-w-none space-y-8">
                <div>
                  <h2
                    className="text-2xl font-bold text-gray-900 mb-4"
                    style={{ fontFamily: "var(--font-tektur)" }}
                  >
                    Introduction
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Silverius Mobile Mechanic LLC (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our mobile mechanic services in the Indianapolis metropolitan area.
                  </p>
                </div>

                <div>
                  <h2
                    className="text-2xl font-bold text-gray-900 mb-4"
                    style={{ fontFamily: "var(--font-tektur)" }}
                  >
                    Information We Collect
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    We may collect the following types of information:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li><strong>Personal Information:</strong> Name, email address, phone number, and service address provided when you book an appointment or contact us.</li>
                    <li><strong>Vehicle Information:</strong> Make, model, year, and details about your vehicle&apos;s condition or repair needs.</li>
                    <li><strong>Payment Information:</strong> Billing details processed through secure third-party payment processors.</li>
                    <li><strong>Usage Data:</strong> Information about how you interact with our website, including IP address, browser type, and pages visited.</li>
                  </ul>
                </div>

                <div>
                  <h2
                    className="text-2xl font-bold text-gray-900 mb-4"
                    style={{ fontFamily: "var(--font-tektur)" }}
                  >
                    How We Use Your Information
                  </h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>To provide and manage our mobile mechanic services</li>
                    <li>To communicate with you about appointments, estimates, and service updates</li>
                    <li>To process payments and send invoices</li>
                    <li>To improve our website and services</li>
                    <li>To send promotional communications (with your consent)</li>
                    <li>To comply with legal obligations</li>
                  </ul>
                </div>

                <div>
                  <h2
                    className="text-2xl font-bold text-gray-900 mb-4"
                    style={{ fontFamily: "var(--font-tektur)" }}
                  >
                    Information Sharing
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our business (e.g., payment processors, scheduling tools), but only to the extent necessary to perform their services. We may also disclose information when required by law or to protect our rights.
                  </p>
                </div>

                <div>
                  <h2
                    className="text-2xl font-bold text-gray-900 mb-4"
                    style={{ fontFamily: "var(--font-tektur)" }}
                  >
                    Data Security
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    We implement reasonable administrative, technical, and physical safeguards to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </div>

                <div>
                  <h2
                    className="text-2xl font-bold text-gray-900 mb-4"
                    style={{ fontFamily: "var(--font-tektur)" }}
                  >
                    Your Rights
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    You have the right to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Access the personal information we hold about you</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Opt out of marketing communications at any time</li>
                  </ul>
                </div>

                <div>
                  <h2
                    className="text-2xl font-bold text-gray-900 mb-4"
                    style={{ fontFamily: "var(--font-tektur)" }}
                  >
                    Cookies
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can set your browser to refuse cookies, but some features of our website may not function properly without them.
                  </p>
                </div>

                <div>
                  <h2
                    className="text-2xl font-bold text-gray-900 mb-4"
                    style={{ fontFamily: "var(--font-tektur)" }}
                  >
                    Changes to This Policy
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
                  </p>
                </div>

                <div>
                  <h2
                    className="text-2xl font-bold text-gray-900 mb-4"
                    style={{ fontFamily: "var(--font-tektur)" }}
                  >
                    Contact Us
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    If you have questions about this Privacy Policy, please contact us:
                  </p>
                  <ul className="mt-3 space-y-1 text-gray-600">
                    <li>Email: contact@smobilemechanic.com</li>
                    <li>Phone: (317) 662-2514</li>
                    <li>Service Area: Greater Indianapolis, IN</li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
