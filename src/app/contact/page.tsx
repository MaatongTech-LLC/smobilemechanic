"use client";

import { useState } from "react";
import { Phone, Mail, Clock, MapPin, ChevronDown } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const faqs = [
  {
    question: "How does mobile mechanic service work?",
    answer:
      "We come directly to your location  whether it's your home, office, or roadside. Simply book an appointment, describe your issue, and our certified mechanic will arrive fully equipped to diagnose and repair your vehicle on the spot.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve the greater Indianapolis metropolitan area including Carmel, Fishers, Greenwood, Noblesville, Lawrence, Avon, Brownsburg, and surrounding communities within a 30-mile radius of downtown Indianapolis.",
  },
  {
    question: "Do you provide estimates before starting work?",
    answer:
      "Absolutely. We always provide a transparent estimate before beginning any repair. There are no hidden fees  you'll know the cost upfront and can approve or decline before we start.",
  },
  {
    question: "What types of repairs can you do on-site?",
    answer:
      "We handle a wide range of services including oil changes, brake repairs, battery replacements, starter and alternator repairs, belt and hose replacements, diagnostics, tune-ups, and more. For major engine or transmission work, we'll advise the best course of action.",
  },
  {
    question: "What if it's raining or bad weather?",
    answer:
      "We can work in most weather conditions. For safety-sensitive repairs or extreme weather, we may need to reschedule. We'll always communicate with you ahead of time if weather could impact your appointment.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const data = await res.json();
        setSubmitError(data.message || "Something went wrong. Please try again.");
      } else {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      }
    } catch {
      setSubmitError("Unable to connect. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
                Get In Touch
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
                Need a mobile mechanic in Indianapolis? We&apos;re here to help.
                Reach out and we&apos;ll get back to you as soon as possible.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Contact Info + Form */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Left: Contact Info */}
              <ScrollReveal direction="left">
                <div>
                  <h2
                    className="text-3xl font-bold text-gray-900 md:text-4xl"
                    style={{ fontFamily: "var(--font-tektur)" }}
                  >
                    Contact Information
                  </h2>
                  <p className="mt-4 text-gray-600">
                    Get in touch with Silverius Mobile Mechanic. We&apos;re
                    ready to bring expert auto repair directly to you.
                  </p>

                  <div className="mt-8 space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-primary/10">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Phone</h3>
                        <a
                          href="tel:+13176622514"
                          className="mt-1 text-gray-600 hover:text-primary transition-colors"
                        >
                          (317) 662-2514
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-primary/10">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Email</h3>
                        <a
                          href="mailto:contact@smobilemechanic.com"
                          className="mt-1 text-gray-600 hover:text-primary transition-colors"
                        >
                          contact@smobilemechanic.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-primary/10">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          Service Area
                        </h3>
                        <p className="mt-1 text-gray-600">
                          Greater Indianapolis Metropolitan Area
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-primary/10">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          Business Hours
                        </h3>
                        <div className="mt-1 space-y-1 text-gray-600">
                          <p>Available 24/7</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Right: Contact Form */}
              <ScrollReveal direction="right">
                <div className="bg-gray-50 p-4 sm:p-6 md:p-10">
                  <h2
                    className="text-2xl font-bold text-gray-900"
                    style={{ fontFamily: "var(--font-tektur)" }}
                  >
                    Send Us a Message
                  </h2>
                  <p className="mt-2 text-gray-600">
                    Fill out the form below and we&apos;ll get back to you
                    within 24 hours.
                  </p>

                  {submitted ? (
                    <div className="mt-8 bg-green-50 border border-green-200 p-6 text-center">
                      <p className="text-lg font-semibold text-green-800">
                        Thank you for your message!
                      </p>
                      <p className="mt-2 text-green-700">
                        We&apos;ll get back to you as soon as possible.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="mt-4 text-primary hover:underline font-medium"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                      {submitError && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 text-sm">
                          {submitError}
                        </div>
                      )}
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="mt-1 w-full border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary rounded-none"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="mt-1 w-full border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary rounded-none"
                          placeholder="john@example.com"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="mt-1 w-full border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary rounded-none"
                          placeholder="(555) 123-4567"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className="mt-1 w-full border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary rounded-none resize-none"
                          placeholder="Describe your vehicle issue or question..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary px-8 py-4 text-base font-bold text-white transition-colors hover:bg-primary-dark disabled:opacity-50 rounded-none cursor-pointer"
                        style={{ fontFamily: "var(--font-tektur)" }}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </button>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Service Area Section */}
        <section className="bg-gray-900 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <ScrollReveal>
              <div className="text-center">
                <h2
                  className="text-3xl font-bold text-white md:text-4xl"
                  style={{ fontFamily: "var(--font-tektur)" }}
                >
                  Our Service Area
                </h2>
                <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-300">
                  Silverius Mobile Mechanic proudly serves the greater
                  Indianapolis area. We bring professional auto repair directly
                  to your driveway, workplace, or wherever your vehicle is
                  located.
                </p>
              </div>
            </ScrollReveal>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[
                "Indianapolis",
                "Carmel",
                "Fishers",
                "Greenwood",
                "Noblesville",
                "Lawrence",
                "Avon",
                "Brownsburg",
                "Plainfield",
                "Zionsville",
                "Westfield",
                "Beech Grove",
              ].map((city, index) => (
                <ScrollReveal key={city} delay={index * 50}>
                  <div className="flex items-center gap-3 bg-gray-800 px-5 py-4">
                    <MapPin className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-white font-medium">{city}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={200}>
              <div className="mt-12 w-full overflow-hidden border border-gray-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195370.82752648822!2d-86.32817867304688!3d39.77954005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b50ffa7796a03%3A0xd68e9df640b9ea7c!2sIndianapolis%2C%20IN!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Silverius Mobile Mechanic Service Area - Indianapolis"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <p className="mt-8 text-center text-gray-400">
                Don&apos;t see your area listed? Give us a call at{" "}
                <a
                  href="tel:+13176622514"
                  className="text-primary hover:underline"
                >
                  (317) 662-2514
                </a>{" "}
                 we may still be able to help!
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-4">
            <ScrollReveal>
              <div className="text-center">
                <h2
                  className="text-3xl font-bold text-gray-900 md:text-4xl"
                  style={{ fontFamily: "var(--font-tektur)" }}
                >
                  Frequently Asked Questions
                </h2>
                <p className="mt-4 text-gray-600">
                  Have questions about our mobile mechanic service? Find answers
                  below.
                </p>
              </div>
            </ScrollReveal>

            <div className="mt-12 space-y-4">
              {faqs.map((faq, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="border border-gray-200">
                    <button
                      onClick={() =>
                        setOpenFaq(openFaq === index ? null : index)
                      }
                      className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-gray-50"
                    >
                      <span className="font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-gray-500 transition-transform duration-300 ${
                          openFaq === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openFaq === index ? "max-h-96" : "max-h-0"
                      }`}
                    >
                      <p className="px-6 pb-5 text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
