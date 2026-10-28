import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Text Message (SMS) Policy",
  description:
    "Silverius Mobile Mechanic text message (SMS) policy. How we send appointment and service text messages, how to opt out, and how we protect your mobile information.",
  alternates: { canonical: "/sms-policy" },
  robots: { index: true, follow: true },
};

export default function SmsPolicyPage() {
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
                Text Message Policy
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
                Last updated: October 28, 2026
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
                    Program Description
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Silverius Mobile Mechanic LLC (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) sends text messages (SMS) from (317) 662-2514 to customers who have requested our services or contacted us. Messages may include appointment confirmations and reminders, technician arrival updates, estimates, invoices, payment links, service follow-ups, and replies to your questions.
                  </p>
                </div>

                <div>
                  <h2
                    className="text-2xl font-bold text-gray-900 mb-4"
                    style={{ fontFamily: "var(--font-tektur)" }}
                  >
                    How You Opt In
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    You agree to receive text messages from us when you provide your mobile number and consent to be texted, for example when you book an appointment or request a quote on our website, call or text us, or give your number to our team in person. Consent to receive text messages is not a condition of purchasing any goods or services.
                  </p>
                </div>

                <div>
                  <h2
                    className="text-2xl font-bold text-gray-900 mb-4"
                    style={{ fontFamily: "var(--font-tektur)" }}
                  >
                    Message Frequency &amp; Cost
                  </h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Message frequency varies based on your appointments and service requests.</li>
                    <li>Message and data rates may apply, depending on your mobile carrier and plan.</li>
                    <li>Carriers are not liable for delayed or undelivered messages.</li>
                  </ul>
                </div>

                <div>
                  <h2
                    className="text-2xl font-bold text-gray-900 mb-4"
                    style={{ fontFamily: "var(--font-tektur)" }}
                  >
                    How to Opt Out
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    You can cancel text messages at any time by replying <strong>STOP</strong> to any message. You will receive one final message confirming that you have been unsubscribed, and you will no longer receive texts from us. To start receiving messages again, reply <strong>START</strong>.
                  </p>
                </div>

                <div>
                  <h2
                    className="text-2xl font-bold text-gray-900 mb-4"
                    style={{ fontFamily: "var(--font-tektur)" }}
                  >
                    Help
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    For help, reply <strong>HELP</strong> to any message, call us at (317) 662-2514, or email contact@smobilemechanic.com.
                  </p>
                </div>

                <div>
                  <h2
                    className="text-2xl font-bold text-gray-900 mb-4"
                    style={{ fontFamily: "var(--font-tektur)" }}
                  >
                    Privacy of Your Mobile Information
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Text messaging originator opt-in data and consent will not be shared with any third parties. Information may be shared only with the service providers that help us deliver text messages and run our business (such as our phone and scheduling platforms). For more details, see our{" "}
                    <Link href="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link href="/terms" className="text-primary hover:underline">
                      Terms of Service
                    </Link>
                    .
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
                    We may update this Text Message Policy from time to time. Changes will be posted on this page with an updated revision date.
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
                    If you have questions about our text messages, please contact us:
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
