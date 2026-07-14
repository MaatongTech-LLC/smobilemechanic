import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms and conditions for Silverius Mobile Mechanic services in Indianapolis, IN.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
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
                Terms of Service
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
                    Agreement to Terms
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    By accessing or using the services provided by Silverius Mobile Mechanic LLC (&quot;Company,&quot; &quot;we,&quot; &quot;our&quot;), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use our services.
                  </p>
                </div>

                <div>
                  <h2
                    className="text-2xl font-bold text-gray-900 mb-4"
                    style={{ fontFamily: "var(--font-tektur)" }}
                  >
                    Services
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Silverius Mobile Mechanic provides on-site automotive repair and maintenance services in the greater Indianapolis metropolitan area. Our services include but are not limited to: oil changes, brake repairs, battery replacements, diagnostics, tune-ups, and general mechanical repairs performed at your location.
                  </p>
                </div>

                <div>
                  <h2
                    className="text-2xl font-bold text-gray-900 mb-4"
                    style={{ fontFamily: "var(--font-tektur)" }}
                  >
                    Appointments & Scheduling
                  </h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Appointments are scheduled based on availability and are confirmed via phone, email, or text message.</li>
                    <li>We request at least 24 hours&apos; notice for cancellations or rescheduling. Repeated no-shows may result in a cancellation fee.</li>
                    <li>We will make reasonable efforts to arrive within the scheduled time window. Delays due to prior appointments or traffic will be communicated promptly.</li>
                  </ul>
                </div>

                <div>
                  <h2
                    className="text-2xl font-bold text-gray-900 mb-4"
                    style={{ fontFamily: "var(--font-tektur)" }}
                  >
                    Estimates & Pricing
                  </h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>All repair estimates are provided before work begins. You must approve the estimate before we proceed.</li>
                    <li>If additional repairs are discovered during service, we will inform you and obtain approval before performing any extra work.</li>
                    <li>Diagnostic fees may apply and will be communicated upfront. Diagnostic fees may be waived if you proceed with the recommended repair.</li>
                    <li>Prices are subject to change based on parts availability and labor requirements.</li>
                  </ul>
                </div>

                <div>
                  <h2
                    className="text-2xl font-bold text-gray-900 mb-4"
                    style={{ fontFamily: "var(--font-tektur)" }}
                  >
                    Payment
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Payment is due upon completion of service unless otherwise agreed in writing. We accept cash, major credit/debit cards, and digital payment methods. A receipt will be provided for all transactions.
                  </p>
                </div>

                <div>
                  <h2
                    className="text-2xl font-bold text-gray-900 mb-4"
                    style={{ fontFamily: "var(--font-tektur)" }}
                  >
                    Warranty
                  </h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>We stand behind our work. Labor is warranted for 30 days or 1,000 miles (whichever comes first) from the date of service.</li>
                    <li>Parts warranties vary by manufacturer. We will communicate the warranty terms for any parts installed.</li>
                    <li>Warranty claims must be reported promptly. Damage caused by misuse, neglect, or unauthorized modifications is not covered.</li>
                  </ul>
                </div>

                <div>
                  <h2
                    className="text-2xl font-bold text-gray-900 mb-4"
                    style={{ fontFamily: "var(--font-tektur)" }}
                  >
                    Limitation of Liability
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    To the fullest extent permitted by law, Silverius Mobile Mechanic LLC shall not be liable for any indirect, incidental, special, or consequential damages arising from or related to our services. Our total liability for any claim shall not exceed the amount paid for the specific service giving rise to the claim.
                  </p>
                </div>

                <div>
                  <h2
                    className="text-2xl font-bold text-gray-900 mb-4"
                    style={{ fontFamily: "var(--font-tektur)" }}
                  >
                    Customer Responsibilities
                  </h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Provide accurate information about your vehicle and its condition.</li>
                    <li>Ensure a safe, accessible workspace for our mechanic (adequate lighting, level ground, clearance around the vehicle).</li>
                    <li>Inform us of any known hazards at the service location.</li>
                    <li>Secure pets and ensure children are supervised during service.</li>
                  </ul>
                </div>

                <div>
                  <h2
                    className="text-2xl font-bold text-gray-900 mb-4"
                    style={{ fontFamily: "var(--font-tektur)" }}
                  >
                    Intellectual Property
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    All content on this website  including text, graphics, logos, and images  is the property of Silverius Mobile Mechanic LLC and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our written permission.
                  </p>
                </div>

                <div>
                  <h2
                    className="text-2xl font-bold text-gray-900 mb-4"
                    style={{ fontFamily: "var(--font-tektur)" }}
                  >
                    Governing Law
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    These Terms of Service are governed by and construed in accordance with the laws of the State of Indiana, without regard to conflict of law principles. Any disputes arising from these terms shall be resolved in the courts of Marion County, Indiana.
                  </p>
                </div>

                <div>
                  <h2
                    className="text-2xl font-bold text-gray-900 mb-4"
                    style={{ fontFamily: "var(--font-tektur)" }}
                  >
                    Changes to Terms
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to this page. Your continued use of our services after changes are posted constitutes acceptance of the revised terms.
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
                    If you have questions about these Terms of Service, please contact us:
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
