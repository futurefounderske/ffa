import SEOHead from "../components/SEOHead";

const modules = [
  {
    title: "Self-awareness, Emotional Intelligence & Entrepreneurial Mindset",
    output: "Personal self-awareness assessment",
  },
  {
    title: "Why, When & Where To Start A Business",
    output: 'Personal "Why Entrepreneurship" statement',
  },
  {
    title: "Opportunity Identification & Business Ideas",
    output: "Shortlisted business ideas",
  },
  {
    title: "Business Set-up Options & Market Research",
    output: "Market research report",
  },
  {
    title: "Business Models, Suppliers & Operations",
    output: "Business Model Canvas",
  },
  {
    title: "Management, People, Ethics & Networking",
    output: "Operations & people management plan",
  },
  {
    title: "Marketing, Sales & Customer Management",
    output: "Marketing & sales strategy; pricing framework",
  },
  {
    title: "Business Planning, Finance & Legal Basics",
    output: "Draft business plan",
  },
  {
    title: "Business Failure, Risk & Resilience",
    output: "Business risk register",
  },
  {
    title: "Growth, Sustainability, Attachment & Pitch",
    output: "Business pitch",
  },
];

const approach = [
  {
    number: "01",
    title: "Pre-Bootcamp Prep",
    sub: "Assess Skills & Define Goals",
    items: ["Applications & Assessments", "Pre-Reading & Orientation"],
    color: "teal",
  },
  {
    number: "02",
    title: "Business Training",
    sub: "Learn Essential Skills",
    items: ["Idea Validation & Planning", "Finance, Marketing & Operations"],
    color: "orange",
  },
  {
    number: "03",
    title: "Mentorship & Support",
    sub: "Guidance & Networking",
    items: ["Mentor Matching", "Peer Networking"],
    color: "teal",
  },
  {
    number: "04",
    title: "Practical Exposure",
    sub: "Hands-On Experience",
    items: ["Mini Ventures & Field Visits", "Pitch Sessions"],
    color: "orange",
  },
  {
    number: "05",
    title: "Post-Bootcamp Growth",
    sub: "Sustain & Scale",
    items: ["Alumni Support", "Follow-Up Coaching"],
    color: "teal",
  },
];

export default function WhatWeDo() {
  return (
    <>
      <SEOHead
        title="What We Do"
        description="Future Founders Academy runs a 10-week structured entrepreneurship bootcamp with guided learning, practical assignments, mentorship and follow-ups for young Kenyans."
        path="/what-we-do"
      />

      {/* Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-navy-900" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-500/5 to-transparent" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-teal-400 text-md font-display font-semibold uppercase tracking-widest">
            The Programme
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white mt-3 mb-6 leading-tight">
            What We <span className="teal-gradient-text">Do</span>
          </h1>
          <p className="text-slate-200 font-body text-xl max-w-2xl leading-relaxed">
            A 10-week structured bootcamp that combines guided learning,
            practical assignments, mentorship and follow-ups — integrating
            entrepreneurship skills with integrity, stewardship and leadership.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-orange-500 rounded-full mt-8" />
        </div>
      </section>

      {/* Programme Description */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {[
              {
                icon: "📅",
                title: "10-Week Bootcamp",
                desc: "Structured, intensive programme with clear milestones and deliverables each week.",
              },
              {
                icon: "🧑‍🏫",
                title: "Guided Learning",
                desc: "Combines classroom instruction with real-world application and peer collaboration.",
              },
              {
                icon: "🎯",
                title: "No Experience Needed",
                desc: "Designed for first-time entrepreneurs. All you need is a willing heart to learn and grow.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="card-glass rounded-2xl p-7 flex flex-col items-center text-center hover:border-teal-500/25 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-5xl mb-4 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="font-display font-bold text-white text-lg mb-2">
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

      {/* Bootcamp Approach */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-navy-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-teal-400 text-md font-display font-semibold uppercase tracking-widest">
              How It Works
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-3">
              The Bootcamp <span className="teal-gradient-text">Approach</span>
            </h2>
          </div>

          <div className="relative">
            {/* Connecting line (desktop) */}
            <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {approach.map((step) => (
                <div
                  key={step.number}
                  className="card-glass rounded-2xl p-6 hover:border-teal-500/25 transition-all duration-300 hover:-translate-y-1"
                >
                  <div
                    className={`font-display font-extrabold text-2xl text-${step.color === "teal" ? "teal-400" : "orange-400"} mb-2`}
                  >
                    {step.number}
                  </div>
                  <h3 className="font-display font-bold text-white text-md mb-1 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-md font-body mb-3">
                    {step.sub}
                  </p>
                  <ul className="space-y-2">
                    {step.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <div
                          className={`w-1.5 h-1.5 rounded-full bg-${step.color === "teal" ? "teal-400" : "orange-400"} mt-2 shrink-0`}
                        />
                        <span className="text-slate-300 font-body text-md">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-orange-400 text-md font-display font-semibold uppercase tracking-widest">
              Curriculum
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-3">
              Bootcamp <span className="teal-gradient-text">Modules</span>
            </h2>
            <p className="text-slate-300 font-body text-base mt-3 max-w-xl mx-auto">
              Each module produces a tangible deliverable that becomes part of
              your business plan.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {modules.map((m, i) => (
              <div
                key={i}
                className="card-glass rounded-xl p-5 flex items-start gap-4 hover:border-teal-500/25 transition-all duration-200 hover:-translate-y-0.5 group"
              >
                <div className="w-10 h-10 rounded-lg bg-teal-500/15 border border-teal-500/25 flex items-center justify-center text-teal-400 font-display font-bold text-md shrink-0 group-hover:bg-teal-500/25 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-white text-base mb-1">
                    {m.title}
                  </h3>
                  <p className="text-teal-400/80 font-body text-md">
                    <span className="text-slate-400">Output: </span>
                    {m.output}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What makes it different */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy-800/30">
        <div className="max-w-5xl mx-auto">
          <div className="card-glass rounded-3xl p-8 sm:p-12">
            <div className="text-center mb-10">
              <span className="text-teal-400 text-md font-display font-semibold uppercase tracking-widest">
                Our Difference
              </span>
              <h2 className="font-display font-bold text-3xl text-white mt-3">
                What Makes Us Stand Out
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: "⚡",
                  title: "Hands-on Learning, Not Just Theory",
                  desc: "Every session produces something real — a plan, a pitch, a prototype.",
                },
                {
                  icon: "🧑‍💼",
                  title: "Real Mentors & Practitioners",
                  desc: "Learn directly from entrepreneurs who have built businesses in Kenya.",
                },
                {
                  icon: "👥",
                  title: "Peer Community",
                  desc: "Join a network of ambitious young founders who encourage and challenge each other.",
                },
                {
                  icon: "🎯",
                  title: "Real Opportunities & Impact",
                  desc: "We focus on businesses that solve real problems and create meaningful change.",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="text-3xl shrink-0 flex items-center justify-center w-10">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-white text-base mb-1">
                      {item.title}
                    </h3>
                    <p className="text-slate-300 font-body text-md leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
            Ready to Join the{" "}
            <span className="teal-gradient-text">Next Cohort?</span>
          </h2>
          <p className="text-slate-300 font-body text-base mb-8">
            Starting 22 June 2026 · Nairobi, Kenya
          </p>
          <a
            href="https://www.futurefoundersbootcamp.ke"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-display font-bold px-10 py-4 rounded-xl text-lg transition-all hover:shadow-xl hover:shadow-orange-500/25 hover:-translate-y-1"
          >
            Apply Now
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
