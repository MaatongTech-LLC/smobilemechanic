import ScrollReveal from "./ScrollReveal";

const teamMembers = [
  {
    name: "Silverius Mbolih",
    role: "Founder & Lead Mechanic. Expert in diagnostics and engine performance.",
    image:
      "https://images.pexels.com/photos/7540624/pexels-photo-7540624.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    name: "Marcus Johnson",
    role: "Senior Technician. Specialist in brakes, suspension, and electrical systems.",
    image:
      "https://images.pexels.com/photos/4439588/pexels-photo-4439588.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    name: "Dwayne Carter",
    role: "Mechanic. Expert in oil changes, tune-ups, and preventive maintenance.",
    image:
      "https://images.pexels.com/photos/7541976/pexels-photo-7541976.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
];

export default function Team() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <ScrollReveal>
          <div className="flex items-start justify-between mb-12">
            <div>
              <span className="text-primary font-medium text-[14px]">
                About us
              </span>
              <h2 className="text-[32px] sm:text-[40px] font-medium text-black mt-2 leading-tight" style={{ fontFamily: "var(--font-tektur)" }}>
                Driven by quality, powered
                <br />
                by trust.
              </h2>
              <p className="text-[#5e5e5e] text-[16px] mt-3 max-w-[500px] leading-[1.5]">
                We&apos;re more than just mechanics — we&apos;re your trusted
                partners in keeping your vehicle safe, reliable, and ready for
                the road.
              </p>
            </div>
            <a
              href="/about"
              className="hidden md:inline-flex items-center justify-center border border-gray-200 hover:border-primary text-black hover:text-primary px-6 py-3 rounded-none text-[14px] font-medium transition-colors"
            >
              View team
            </a>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <ScrollReveal key={member.name} delay={index * 100}>
              <div className="text-center group">
                <div className="w-[120px] h-[120px] rounded-full overflow-hidden mx-auto mb-4 ring-2 ring-transparent group-hover:ring-primary transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-[16px] font-semibold text-black">
                  {member.name}
                </h3>
                <p className="text-[13px] text-[#5e5e5e] mt-1 leading-[1.4] max-w-[250px] mx-auto">
                  {member.role}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
