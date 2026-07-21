"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import Dropdown from "@/components/Dropdown";
import DatePicker from "@/components/DatePicker";
import SearchableDropdown from "@/components/SearchableDropdown";
import RacingConfetti from "@/components/RacingConfetti";

const CAR_MAKES = [
  "Acura", "Alfa Romeo", "Audi", "BMW", "Buick", "Cadillac", "Chevrolet",
  "Chrysler", "Dodge", "Fiat", "Ford", "Genesis", "GMC", "Honda", "Hyundai",
  "Infiniti", "Jaguar", "Jeep", "Kia", "Land Rover", "Lexus", "Lincoln",
  "Maserati", "Mazda", "Mercedes-Benz", "Mini", "Mitsubishi", "Nissan",
  "Porsche", "Ram", "Subaru", "Tesla", "Toyota", "Volkswagen", "Volvo",
];
import {
  Wrench,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface ApiService {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  image_url: string | null;
  price_from: string | null;
  duration_minutes: number | null;
}

const TIME_SLOTS = [
  "7:00 AM",
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];

const STEPS = ["Select Service", "Vehicle Info", "Schedule", "Your Info"];

interface BookingData {
  service: string;
  year: string;
  make: string;
  model: string;
  notes: string;
  date: string;
  time: string;
  name: string;
  phone: string;
  email: string;
  address: string;
}

function BookPageContent() {
  const searchParams = useSearchParams();
  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [services, setServices] = useState<ApiService[]>([]);
  const [loadingServices, setLoadingServices] = useState(true);
  const [booking, setBooking] = useState<BookingData>({
    service: "",
    year: "",
    make: "",
    model: "",
    notes: "",
    date: "",
    time: "",
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const [preselected, setPreselected] = useState(false);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/services?per_page=50`)
      .then((res) => res.json())
      .then((json) => {
        setServices(json.data || []);
        setLoadingServices(false);
      })
      .catch(() => setLoadingServices(false));
  }, []);

  useEffect(() => {
    if (services.length === 0) return;
    const serviceParam = searchParams.get("service");
    if (serviceParam && services.some((s) => s.slug === serviceParam)) {
      setBooking((prev) => ({ ...prev, service: serviceParam }));
      setCurrentStep(1);
      setPreselected(true);
    }
  }, [searchParams, services]);

  const updateBooking = (field: keyof BookingData, value: string) => {
    setBooking((prev) => ({ ...prev, [field]: value }));
    setErrors([]);
  };

  const validateStep = (): boolean => {
    const newErrors: string[] = [];

    switch (currentStep) {
      case 0:
        if (!booking.service) newErrors.push("Please select a service.");
        break;
      case 1:
        if (!booking.year) newErrors.push("Please select a year.");
        if (!booking.make) newErrors.push("Please enter the make.");
        if (!booking.model) newErrors.push("Please enter the model.");
        break;
      case 2:
        if (!booking.date) newErrors.push("Please select a date.");
        if (!booking.time) newErrors.push("Please select a time slot.");
        break;
      case 3:
        if (!booking.name) newErrors.push("Please enter your full name.");
        if (!booking.phone) newErrors.push("Please enter your phone number.");
        if (!booking.address)
          newErrors.push("Please enter your address/location.");
        break;
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNext = async () => {
    if (!validateStep()) return;

    if (currentStep < STEPS.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsSubmitting(true);
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookings`, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(booking),
        });
        if (!res.ok) {
          const data = await res.json();
          setErrors(data.errors ? Object.values(data.errors).flat() as string[] : ["Something went wrong. Please try again."]);
        } else {
          setSubmitted(true);
        }
      } catch {
        setErrors(["Unable to connect. Please try again later."]);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleBack = () => {
    setErrors([]);
    setCurrentStep((prev) => prev - 1);
  };

  const today = new Date().toISOString().split("T")[0];

  const years = Array.from({ length: 27 }, (_, i) => (2026 - i).toString());

  if (submitted) {
    const selectedService = services.find((s) => s.slug === booking.service);
    return (
      <div className="min-h-screen bg-white">
        <RacingConfetti />
        <div className="bg-black py-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <svg className="w-40 h-40 text-primary" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.83 11.29L10.59 7.05a1 1 0 00-1.42 0 1 1 0 000 1.41L12.71 12l-3.54 3.54a1 1 0 000 1.41 1 1 0 001.42 0l4.24-4.24a1 1 0 000-1.42z"/>
            </svg>
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white relative"
            style={{ fontFamily: "var(--font-tektur)" }}
          >
            Booking Confirmed
          </h1>
          <p className="text-primary font-medium text-sm mt-3 uppercase tracking-widest relative">
            You&apos;re all set — we&apos;re on our way!
          </p>
        </div>
        <div className="max-w-2xl mx-auto px-4 py-16">
          <div className="text-center mb-10">
            <div className="relative inline-block">
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4 animate-[bounce_0.6s_ease-in-out]" />
            </div>
            <h2
              className="text-2xl font-bold mb-2"
              style={{ fontFamily: "var(--font-tektur)" }}
            >
              Thank You, {booking.name}!
            </h2>
            <p className="text-gray-600 text-lg">
              We&apos;ll contact you shortly at{" "}
              <span className="font-semibold">{booking.phone}</span> to confirm
              your appointment.
            </p>
          </div>

          <div className="border border-gray-200 p-6 mb-8">
            <h3
              className="text-lg font-bold mb-4"
              style={{ fontFamily: "var(--font-tektur)" }}
            >
              Booking Summary
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="text-gray-500">Service</span>
                <span className="font-medium">
                  {selectedService?.name}
                </span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="text-gray-500">Vehicle</span>
                <span className="font-medium">
                  {booking.year} {booking.make} {booking.model}
                </span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="text-gray-500">Date</span>
                <span className="font-medium">{booking.date}</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="text-gray-500">Time</span>
                <span className="font-medium">{booking.time}</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="text-gray-500">Location</span>
                <span className="font-medium">{booking.address}</span>
              </div>
              {booking.notes && (
                <div className="flex justify-between">
                  <span className="text-gray-500">Notes</span>
                  <span className="font-medium max-w-[60%] text-right">
                    {booking.notes}
                  </span>
                </div>
              )}
            </div>
          </div>

          <p className="text-center text-gray-500 mb-6">
            Questions? Call us at{" "}
            <a
              href="tel:+13176622514"
              className="text-primary font-semibold hover:underline"
            >
              (317) 662-2514
            </a>
          </p>

          <div className="text-center">
            <Link
              href="/"
              className="inline-block bg-primary text-white px-8 py-3 rounded-none font-semibold hover:bg-red-700 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <ScrollReveal>
        <div className="bg-black py-20 text-center relative">
          <Link
            href="/"
            className="absolute top-6 left-6 flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-[14px]"
          >
            <ChevronLeft size={16} />
            Back to Home
          </Link>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-tektur)" }}
          >
            Book Your Service
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Schedule your mobile auto repair in minutes
          </p>
        </div>
      </ScrollReveal>

      {/* Preselected service banner */}
      {preselected && booking.service && (
        <div className="max-w-3xl mx-auto px-4 pt-8">
          <div className="flex items-center gap-3 bg-primary/5 border border-primary/20 px-5 py-4">
            {(() => {
              const svc = services.find((s) => s.slug === booking.service);
              if (!svc) return null;
              return (
                <>
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center shrink-0">
                    <Wrench className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-[13px] text-[#5e5e5e]">Selected service</p>
                    <p className="text-[16px] font-semibold text-black">{svc.name}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setPreselected(false);
                      setCurrentStep(0);
                      setBooking((prev) => ({ ...prev, service: "" }));
                    }}
                    className="ml-auto text-[13px] text-primary hover:underline font-medium cursor-pointer"
                  >
                    Change
                  </button>
                </>
              );
            })()}
          </div>
        </div>
      )}

      {/* Stepper */}
      <div className="max-w-3xl mx-auto px-4 pt-10 pb-6">
        <div className="flex items-center justify-between mb-2">
          {STEPS.map((step, idx) => (
            <div key={step} className="flex items-center flex-1">
              <div className="flex flex-col items-center flex-1">
                <div
                  className={`w-10 h-10 flex items-center justify-center font-bold text-sm border-2 transition-colors ${
                    idx <= currentStep
                      ? "bg-primary border-primary text-white"
                      : "border-gray-300 text-gray-400"
                  }`}
                >
                  {idx + 1}
                </div>
                <span
                  className={`text-xs mt-1 font-medium hidden sm:block ${
                    idx <= currentStep ? "text-primary" : "text-gray-400"
                  }`}
                  style={{ fontFamily: "var(--font-tektur)" }}
                >
                  {step}
                </span>
              </div>
              {idx < STEPS.length - 1 && (
                <div
                  className={`h-0.5 flex-1 mx-1 ${
                    idx < currentStep ? "bg-primary" : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Form Content */}
      <div className="max-w-3xl mx-auto px-4 pb-16">
        {errors.length > 0 && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 mb-6">
            {errors.map((error, i) => (
              <p key={i} className="text-sm">
                {error}
              </p>
            ))}
          </div>
        )}

        {/* Step 1 - Select Service */}
        {currentStep === 0 && (
          <div>
            <h2
              className="text-2xl font-bold mb-6"
              style={{ fontFamily: "var(--font-tektur)" }}
            >
              Select a Service
            </h2>
            {loadingServices ? (
              <div className="flex items-center justify-center py-12">
                <svg className="animate-spin h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {services.map((service) => {
                  const isSelected = booking.service === service.slug;
                  return (
                    <button
                      key={service.id}
                      onClick={() => updateBooking("service", service.slug)}
                      className={`p-6 border-2 rounded-none text-center transition-colors hover:border-primary cursor-pointer ${
                        isSelected
                          ? "border-primary bg-red-50"
                          : "border-gray-200"
                      }`}
                    >
                      {service.image_url ? (
                        <img
                          src={service.image_url}
                          alt={service.name}
                          className="w-12 h-12 mx-auto mb-3 object-cover rounded"
                        />
                      ) : (
                        <Wrench
                          className={`w-8 h-8 mx-auto mb-3 ${
                            isSelected ? "text-primary" : "text-gray-500"
                          }`}
                        />
                      )}
                      <span
                        className={`text-sm font-medium ${
                          isSelected ? "text-primary" : "text-gray-700"
                        }`}
                      >
                        {service.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Step 2 - Vehicle Info */}
        {currentStep === 1 && (
          <div>
            <h2
              className="text-2xl font-bold mb-6"
              style={{ fontFamily: "var(--font-tektur)" }}
            >
              Vehicle Information
            </h2>
            <div className="space-y-4">
              <Dropdown
                label="Year"
                placeholder="Select Year"
                required
                options={years.map((y) => ({ value: y, label: y }))}
                value={booking.year}
                onChange={(v) => updateBooking("year", v)}
              />
              <SearchableDropdown
                label="Make"
                placeholder="Search or type a make..."
                required
                options={CAR_MAKES}
                value={booking.make}
                onChange={(v) => updateBooking("make", v)}
              />
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Model *
                </label>
                <input
                  type="text"
                  value={booking.model}
                  onChange={(e) => updateBooking("model", e.target.value)}
                  placeholder="e.g. Camry"
                  className="w-full border border-gray-200 px-4 py-3 rounded-none outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Notes / Describe the Issue
                </label>
                <textarea
                  value={booking.notes}
                  onChange={(e) => updateBooking("notes", e.target.value)}
                  placeholder="Describe any symptoms or issues you're experiencing..."
                  rows={4}
                  className="w-full border border-gray-200 px-4 py-3 rounded-none outline-none focus:border-primary transition-colors resize-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 3 - Schedule */}
        {currentStep === 2 && (
          <div>
            <h2
              className="text-2xl font-bold mb-6"
              style={{ fontFamily: "var(--font-tektur)" }}
            >
              Pick a Date & Time
            </h2>
            <div className="space-y-6">
              <DatePicker
                label="Preferred Date"
                placeholder="Select a date"
                required
                value={booking.date}
                onChange={(v) => updateBooking("date", v)}
                minDate={today}
              />
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Preferred Time *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                  {TIME_SLOTS.map((time) => (
                    <button
                      key={time}
                      onClick={() => updateBooking("time", time)}
                      className={`py-3 px-2 border-2 rounded-none text-sm font-medium transition-colors cursor-pointer ${
                        booking.time === time
                          ? "border-primary bg-primary text-white"
                          : "border-gray-200 text-gray-700 hover:border-primary"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 4 - Your Info */}
        {currentStep === 3 && (
          <div>
            <h2
              className="text-2xl font-bold mb-6"
              style={{ fontFamily: "var(--font-tektur)" }}
            >
              Your Information
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={booking.name}
                  onChange={(e) => updateBooking("name", e.target.value)}
                  placeholder="John Doe"
                  className="w-full border border-gray-200 px-4 py-3 rounded-none outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={booking.phone}
                  onChange={(e) => updateBooking("phone", e.target.value)}
                  placeholder="(555) 123-4567"
                  className="w-full border border-gray-200 px-4 py-3 rounded-none outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={booking.email}
                  onChange={(e) => updateBooking("email", e.target.value)}
                  placeholder="john@example.com"
                  className="w-full border border-gray-200 px-4 py-3 rounded-none outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address / Location for Service *
                </label>
                <input
                  type="text"
                  value={booking.address}
                  onChange={(e) => updateBooking("address", e.target.value)}
                  placeholder="123 Main St, Indianapolis, IN"
                  className="w-full border border-gray-200 px-4 py-3 rounded-none outline-none focus:border-primary transition-colors"
                />
                <p className="text-xs text-gray-400 mt-1">
                  We come to you  provide the address where you&apos;d like the
                  service performed.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-10">
          {currentStep > 0 ? (
            <button
              onClick={handleBack}
              className="flex items-center gap-2 border-2 border-gray-200 px-6 py-3 rounded-none font-medium text-gray-700 hover:border-gray-400 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              Back
            </button>
          ) : (
            <div />
          )}
          <button
            onClick={handleNext}
            disabled={isSubmitting}
            className="flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-none font-semibold hover:bg-red-700 transition-colors disabled:opacity-50 cursor-pointer"
          >
            {isSubmitting ? "Submitting..." : currentStep === STEPS.length - 1 ? "Confirm Booking" : "Next"}
            {!isSubmitting && currentStep < STEPS.length - 1 && (
              <ChevronRight className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function BookPage() {
  return (
    <Suspense>
      <BookPageContent />
    </Suspense>
  );
}
