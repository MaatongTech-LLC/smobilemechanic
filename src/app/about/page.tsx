import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Wrench, Shield, Clock, ThumbsUp } from "lucide-react";

const teamMembers = [
  {
    name: "Silverius Mbolih",
    role: "Founder & Lead Mechanic",
    bio: "Founded Silverius Mobile Mechanic with a mission to bring honest, expert auto repair directly to customers. Over 10 years of hands-on experience in diagnostics and engine performance.",
    image:
      "https://images.pexels.com/photos/7540624/pexels-photo-7540624.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Marcus Johnson",
    role: "Senior Technician",
    bio: "Specialist in brakes, suspension, and electrical systems. Marcus brings precision and dedication to every job, ensuring vehicles leave safer than they arrived.",
    image:
      "https://images.pexels.com/photos/4439588/pexels-photo-4439588.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Dwayne Carter",
    role: "Mechanic",
    bio: "Expert in oil changes, tune-ups, and preventive maintenance. Dwayne keeps your vehicle running smoothly with thorough, reliable service every time.",
    image:
      "https://images.pexels.com/photos/7541976/pexels-photo-7541976.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const values = [
  {
    icon: Shield,
    title: "Honesty",
    description:
      "Transparent pricing with no hidden fees. We explain every repair before we begin and only recommend what your vehicle truly needs.",
  },
  {
    icon: Wrench,
    title: "Quality",
    description:
      "We use premium parts and proven techniques. Every job is backed by our satisfaction guarantee because we stand behind our work.",
  },
  {
    icon: Clock,
    title: "Convenience",
    description:
      "We come to you — at home, at work, or wherever you are. No towing, no waiting rooms, no disruption to your day.",
  },
  {
    icon: ThumbsUp,
    title: "Reliability",
    description:
      "On time, every time. When we say we will be there, we show up prepared and ready to get your vehicle back on the road.",
  },
];

const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "5,000+", label: "Cars Serviced" },
  { value: "99%", label: "Customer Satisfaction" },
  { value: "30-mi", label: "Service Radius" },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Banner */}
        <section className="relative h-[400px] sm:h-[480px] flex items-center justify-center overflow-hidden mt-[68px]">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1920&q=80"
              alt="Mechanic working on car"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>
          <div className="relative z-10 text-center px-4">
            <ScrollReveal>
              <h1
                className="text-[36px] sm:text-[48px] md:text-[56px] font-bold text-white leading-tight"
                style={{ fontFamily: "var(--font-tektur)" }}
              >
                About Silverius Mobile Mechanic
              </h1>
              <p className="text-white/80 text-[16px] sm:text-[18px] mt-4 max-w-[600px] mx-auto">
                Bringing expert auto repair to your doorstep across Indianapolis
                and the surrounding area.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-white">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left">
                <div>
                  <span className="text-primary font-medium text-[14px]">
                    Our Story
                  </span>
                  <h2
                    className="text-[32px] sm:text-[40px] font-medium text-black mt-2 leading-tight"
                    style={{ fontFamily: "var(--font-tektur)" }}
                  >
                    From a garage dream to
                    <br />
                    Indianapolis&apos; trusted mobile service.
                  </h2>
                  <div className="mt-6 space-y-4 text-[16px] text-[#5e5e5e] leading-[1.7]">
                    <p>
                      Silverius Mobile Mechanic was founded with a simple belief:
                      quality auto repair should come to you. After years of
                      watching customers struggle with tow trucks, long wait
                      times, and overpriced shop fees, we decided there had to be
                      a better way.
                    </p>
                    <p>
                      Based in Indianapolis, Indiana, we built our mobile
                      mechanic service from the ground up — investing in
                      state-of-the-art diagnostic equipment, a fully stocked
                      service vehicle, and a team of certified technicians who
                      share our passion for honest, reliable work.
                    </p>
                    <p>
                      Our mission is straightforward: deliver dealership-quality
                      repairs at fair prices, wherever our customers need us.
                      Whether you are at home, at work, or stranded on the side
                      of the road, we bring the shop to you.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80"
                    alt="Mobile mechanic servicing a vehicle"
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 hidden sm:block">
                    <p
                      className="text-[32px] font-bold"
                      style={{ fontFamily: "var(--font-tektur)" }}
                    >
                      10+
                    </p>
                    <p className="text-[14px] text-white/90">
                      Years serving Indianapolis
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-[#f9f9f9]">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
            <ScrollReveal>
              <div className="text-center mb-14">
                <span className="text-primary font-medium text-[14px]">
                  Our Values
                </span>
                <h2
                  className="text-[32px] sm:text-[40px] font-medium text-black mt-2 leading-tight"
                  style={{ fontFamily: "var(--font-tektur)" }}
                >
                  What drives us every day
                </h2>
                <p className="text-[#5e5e5e] text-[16px] mt-3 max-w-[560px] mx-auto leading-[1.5]">
                  These core values guide every interaction, every repair, and
                  every decision we make as a team.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <ScrollReveal key={value.title} delay={index * 100}>
                  <div className="bg-white p-8 border border-gray-100 hover:border-primary/30 transition-colors group">
                    <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                      <value.icon size={24} />
                    </div>
                    <h3 className="text-[18px] font-semibold text-black mb-2">
                      {value.title}
                    </h3>
                    <p className="text-[14px] text-[#5e5e5e] leading-[1.6]">
                      {value.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
            <ScrollReveal>
              <div className="text-center mb-14">
                <span className="text-primary font-medium text-[14px]">
                  Meet the Team
                </span>
                <h2
                  className="text-[32px] sm:text-[40px] font-medium text-black mt-2 leading-tight"
                  style={{ fontFamily: "var(--font-tektur)" }}
                >
                  The experts behind the wrench
                </h2>
                <p className="text-[#5e5e5e] text-[16px] mt-3 max-w-[560px] mx-auto leading-[1.5]">
                  Our certified technicians bring decades of combined experience
                  to every job. Each specialist is trained, equipped, and ready
                  to tackle your vehicle&apos;s needs.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <ScrollReveal key={member.name} delay={index * 100}>
                  <div className="group overflow-hidden border border-gray-100 hover:border-primary/30 transition-colors">
                    <div className="h-[320px] overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-[18px] font-semibold text-black">
                        {member.name}
                      </h3>
                      <p className="text-primary text-[14px] font-medium mt-1">
                        {member.role}
                      </p>
                      <p className="text-[14px] text-[#5e5e5e] mt-3 leading-[1.6]">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Stats/Achievements */}
        <section className="py-20 bg-black">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
            <ScrollReveal>
              <div className="text-center mb-14">
                <span className="text-primary font-medium text-[14px]">
                  By the Numbers
                </span>
                <h2
                  className="text-[32px] sm:text-[40px] font-medium text-white mt-2 leading-tight"
                  style={{ fontFamily: "var(--font-tektur)" }}
                >
                  Proven track record you can trust
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <ScrollReveal key={stat.label} delay={index * 100}>
                  <div className="text-center">
                    <p
                      className="text-[40px] sm:text-[56px] font-bold text-primary leading-none"
                      style={{ fontFamily: "var(--font-tektur)" }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-white/70 text-[14px] sm:text-[16px] mt-2">
                      {stat.label}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
            <ScrollReveal>
              <div className="bg-[#f9f9f9] border border-gray-100 p-10 sm:p-16 text-center">
                <h2
                  className="text-[28px] sm:text-[36px] font-medium text-black leading-tight"
                  style={{ fontFamily: "var(--font-tektur)" }}
                >
                  Ready to experience the difference?
                </h2>
                <p className="text-[#5e5e5e] text-[16px] mt-4 max-w-[500px] mx-auto leading-[1.6]">
                  Book your appointment today and let our certified mobile
                  mechanics come to you. No shop visits, no hassle — just expert
                  repair at your location.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                  <a
                    href="/#book"
                    className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-none text-[16px] font-medium transition-colors"
                  >
                    Book a Service
                  </a>
                  <a
                    href="tel:+14632498724"
                    className="inline-flex items-center justify-center border border-gray-200 hover:border-primary text-black hover:text-primary px-8 py-4 rounded-none text-[16px] font-medium transition-colors"
                  >
                    Call (463) 249-8724
                  </a>
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
