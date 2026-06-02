import SEOHead from "../components/SEOHead";

export default function MissionVision() {
  return (
    <>
      <SEOHead
        title="Mission & Vision"
        description="Our mission is to nurture the next generation of entrepreneurs through hands-on bootcamps, mentorship, and strategic partnerships. Our vision: a generation of empowered young business founders in Kenya."
        path="/mission-vision"
      />

      {/* Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-navy-900" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-500/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-teal-400 text-md font-display font-semibold uppercase tracking-widest">
            Purpose & Direction
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white mt-3 mb-6 leading-tight">
            Mission &<br />
            <span className="teal-gradient-text">Vision</span>
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-orange-500 rounded-full" />
        </div>
      </section>

      {/* Mission & Vision cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {/* Mission */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-500/10 to-navy-800 border border-teal-500/20 p-10">
              <div className="absolute top-0 right-0 w-40 h-40 bg-teal-500/10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2" />
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-teal-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div className="text-teal-400 text-md font-display font-semibold uppercase tracking-widest mb-2">
                  Our Mission
                </div>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-6">
                  What We're Here to Do
                </h2>
                <p className="text-slate-200 font-body text-lg leading-relaxed">
                  To nurture and support the next generation of entrepreneurs
                  through hands-on bootcamps, mentorship from individuals with
                  diverse and relevant experiences, and strategic partnerships
                  that enable young people to build profitable businesses with
                  meaningful social impact.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500/10 to-navy-800 border border-orange-500/20 p-10">
              <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2" />
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-orange-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <div className="text-orange-400 text-md font-display font-semibold uppercase tracking-widest mb-2">
                  Our Vision
                </div>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-6">
                  Where We're Going
                </h2>
                <p className="text-slate-200 font-body text-lg leading-relaxed">
                  A generation of empowered young business founders building
                  profitable enterprises that create jobs, address community
                  challenges, and advance sustainable development in Kenya.
                </p>
              </div>
            </div>
          </div>

          {/* Three pillars of the mission */}
          <div className="text-center mb-12">
            <span className="text-teal-400 text-md font-display font-semibold uppercase tracking-widest">
              How We Deliver on Our Mission
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-3">
              Three Core Objectives
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                number: "01",
                color: "teal",
                title: "Define Clear Opportunities",
                desc: "Equip youth to define clear, viable entrepreneurial opportunities and reduce uncertainty in starting ventures.",
              },
              {
                number: "02",
                color: "orange",
                title: "Hands-on Business Training",
                desc: "Provide hands-on training in business management, problem-solving, and decision-making to prepare participants for real-world entrepreneurship.",
              },
              {
                number: "03",
                color: "teal",
                title: "Connect with Mentors",
                desc: "Connect youth with mentors and peers to foster guidance, networking, and long-term entrepreneurial growth.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="card-glass rounded-2xl p-8 hover:border-teal-500/25 transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`font-display font-extrabold text-5xl text-${item.color}-500/20 mb-4 leading-none`}
                >
                  {item.number}
                </div>
                <h3
                  className={`font-display font-bold text-lg text-${item.color === "teal" ? "teal-400" : "orange-400"} mb-3`}
                >
                  {item.title}
                </h3>
                <p className="text-slate-300 font-body text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact goals */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy-800/30">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-orange-400 text-md font-display font-semibold uppercase tracking-widest">
            The Bigger Picture
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-3 mb-8">
            Our Impact Goals
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: "👩‍💼",
                stat: "Jobs Created",
                desc: "Every business launched creates employment for others in the community.",
              },
              {
                icon: "🏘️",
                stat: "Community Challenges Addressed",
                desc: "Businesses that directly solve local problems and uplift communities.",
              },
              {
                icon: "🌱",
                stat: "Sustainable Development",
                desc: "Enterprises that advance Kenya's long-term economic and social goals.",
              },
            ].map((g) => (
              <div
                key={g.stat}
                className="card-glass rounded-2xl p-6 flex flex-col items-center text-center hover:border-teal-500/20 transition-colors"
              >
                <div className="text-5xl mb-4 flex items-center justify-center">
                  {g.icon}
                </div>
                <h3 className="font-display font-semibold text-white text-base mb-2">
                  {g.stat}
                </h3>
                <p className="text-slate-300 font-body text-md leading-relaxed">
                  {g.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
