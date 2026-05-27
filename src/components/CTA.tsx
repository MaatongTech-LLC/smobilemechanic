import ScrollReveal from "./ScrollReveal";

export default function CTA() {
  return (
    <section className="py-20 bg-[#1a1a1a] relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1920&q=80"
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="relative max-w-[700px] mx-auto px-4 sm:px-6 text-center">
        <ScrollReveal>
          <h2 className="text-[32px] sm:text-[44px] font-medium text-white leading-tight" style={{ fontFamily: "var(--font-tektur)" }}>
            Need a repair?
            <br />
            We&apos;re ready to help.
          </h2>
          <p className="text-gray-300 text-[16px] mt-4 max-w-[500px] mx-auto leading-[1.5]">
            Fast booking. Flexible hours. We&apos;ll get you back on the road.
          </p>
          <a
            href="#book"
            className="mt-8 inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white px-[22px] py-[16px] rounded-none text-[16px] font-medium transition-all h-[46px] hover:scale-105 active:scale-95"
          >
            Service now
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
