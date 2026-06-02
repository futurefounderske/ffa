import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";

const values = [
  {
    icon: "🤝",
    title: "Faith & Integrity",
    desc: "We integrate entrepreneurship skills with integrity, stewardship and leadership grounded in values.",
  },
  {
    icon: "💡",
    title: "Innovation",
    desc: "We encourage young people to create innovative, socially impactful businesses.",
  },
  {
    icon: "🌍",
    title: "Community Impact",
    desc: "We partner with faith-based communities and institutions to drive lasting change.",
  },
  {
    icon: "📈",
    title: "Real Growth",
    desc: "We provide practical, hands-on training — not just theory — so participants build real skills.",
  },
];

const challenges = [
  "High unemployment & underemployment",
  "Limited access to mentorship and opportunity",
  "Lack of practical entrepreneurship exposure",
  "Economic instability and job market disruption",
  "Rapid development of AI disrupting career paths",
];

export default function About() {
  return (
    <>
      <SEOHead
        title="About Us"
        description="Future Founders Academy addresses youth unemployment in Kenya by equipping young people with entrepreneurship skills, mentorship and confidence. Learn who we are."
        path="/about"
      />

      {/* Page Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-navy-900" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-teal-500/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-teal-400 text-md font-display font-semibold uppercase tracking-widest">
              Who We Are
            </span>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white mt-3 mb-6 leading-tight">
              About Future
              <br />
              <span className="teal-gradient-text">Founders Academy</span>
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-teal-500 rounded-full" />
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-6">
                Addressing Youth Unemployment{" "}
                <span className="teal-gradient-text">in Kenya</span>
              </h2>
              <p className="text-slate-200 font-body text-lg leading-relaxed mb-6">
                Future Founders is an initiative that seeks to address youth
                unemployment and underemployment in Kenyan communities by
                equipping and supporting young people to develop and launch
                innovative and socially impactful businesses.
              </p>
              <p className="text-slate-300 font-body text-base leading-relaxed mb-8">
                We work in close collaboration with entrepreneurs, faith-based
                communities and other institutions to create a holistic support
                system for the next generation of Kenyan business founders.
              </p>
              <Link
                to="/mission-vision"
                className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 font-display font-semibold transition-colors group"
              >
                Our Mission & Vision
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
              </Link>
            </div>

            {/* Quote card */}
            <div className="relative">
              <div className="card-glass rounded-2xl p-8 border-l-4 border-teal-500">
                <svg
                  className="w-10 h-10 text-teal-500/30 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-white font-display font-semibold text-xl leading-relaxed mb-4">
                  Preparing the Founders and Employers of Tomorrow.
                </p>
                <p className="text-slate-300 font-body text-base">
                  No prior business experience required — only a willing heart
                  to learn and grow.
                </p>
              </div>
              {/* Decoration */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-orange-500/20 rounded-2xl" />
              <div className="absolute -top-4 -left-4 w-16 h-16 border border-teal-500/20 rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-orange-400 text-md font-display font-semibold uppercase tracking-widest">
              The Problem We Solve
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-3">
              Challenges Facing{" "}
              <span className="teal-gradient-text">Kenya's Youth</span>
            </h2>
            <p className="text-slate-300 font-body text-base mt-4 max-w-2xl mx-auto leading-relaxed">
              Educated youth are leaving tertiary education without clear
              pathways to economic independence. While entrepreneurship presents
              an opportunity, most youth lack exposure, confidence, and
              practical skills to pursue it successfully.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {challenges.map((c, i) => (
              <div
                key={i}
                className="card-glass rounded-xl px-5 py-4 flex items-center gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-orange-400 shrink-0" />
                <span className="text-slate-200 font-body text-base">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-teal-400 text-md font-display font-semibold uppercase tracking-widest">
              What We Stand For
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-3">
              Our Core Values
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="card-glass rounded-2xl p-6 flex flex-col items-center text-center hover:border-teal-500/25 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-5xl mb-4 flex items-center justify-center">
                  {v.icon}
                </div>
                <h3 className="font-display font-bold text-white text-base mb-2">
                  {v.title}
                </h3>
                <p className="text-slate-300 font-body text-md leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy-800/30">
        <div className="max-w-5xl mx-auto">
          <div className="card-glass rounded-3xl p-8 sm:p-12">
            <div className="text-center mb-10">
              <span className="text-teal-400 text-md font-display font-semibold uppercase tracking-widest">
                Who Should Apply
              </span>
              <h2 className="font-display font-bold text-3xl text-white mt-3">
                Is This Programme For You?
              </h2>
              <p className="text-slate-300 font-body text-base mt-3">
                Designed for young men and women aged 20–28 years old
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Feel uncertain about career or life direction",
                "Have creative ideas but don't know how to start",
                "Have limited access to opportunities or mentorship",
                "Want to earn income responsibly",
                "Open to learning practical entrepreneurship skills",
                "Want to grow in faith, character, and leadership",
                "Desire to become leaders in their community",
                "Willing to actively participate in workshops and projects",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal-500/20 border border-teal-500/40 flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      className="w-3.5 h-3.5 text-teal-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-slate-200 font-body text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <p className="text-teal-400 font-display font-semibold text-base mb-4">
                NO PRIOR BUSINESS EXPERIENCE IS REQUIRED
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc0_X3ffTWpNY5lYHlkiu9vvFxMspar3tsAtkgVtuytPa4h9g/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-display font-bold px-8 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5"
              >
                Apply Now
                <svg
                  className="w-4 h-4"
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
          </div>
        </div>
      </section>
    </>
  );
}
