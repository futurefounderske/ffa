import { useState } from "react";
import SEOHead from "../components/SEOHead";

const contactInfo = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
    label: "Phone",
    value: "0783 359 553",
    href: "tel:+254783359553",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    label: "Email",
    value: "futurefoundersacademykke@gmail.com",
    href: "mailto:futurefoundersacademykke@gmail.com",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"
        />
      </svg>
    ),
    label: "Website",
    value: "www.futurefoundersbootcamp.ke",
    href: "https://www.futurefoundersbootcamp.ke",
  },
];

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    interest: "applying",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormState({ ...formState, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SEOHead
        title="Contact Us"
        description="Get in touch with Future Founders Academy. Call 0783 359 553, email futurefoundersacademykke@gmail.com, or fill out our contact form to enquire about the 2026 bootcamp."
        path="/contact"
      />

      {/* Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-navy-900" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-500/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-teal-400 text-md font-display font-semibold uppercase tracking-widest">
            Reach Out
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white mt-3 mb-6 leading-tight">
            Contact <span className="teal-gradient-text">Us</span>
          </h1>
          <p className="text-slate-200 font-body text-xl max-w-xl leading-relaxed">
            Have questions about the bootcamp? Ready to apply? Get in touch —
            we'd love to hear from you.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-orange-500 rounded-full mt-8" />
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left panel */}
            <div className="lg:col-span-2">
              <h2 className="font-display font-bold text-2xl text-white mb-8">
                Get In Touch
              </h2>

              <div className="space-y-5 mb-10">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.label === "Website" ? "_blank" : undefined}
                    rel={
                      item.label === "Website"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="card-glass rounded-xl p-5 flex items-center gap-4 hover:border-teal-500/30 transition-all duration-200 hover:-translate-y-0.5 group block"
                  >
                    <div className="w-12 h-12 rounded-xl bg-teal-500/15 border border-teal-500/25 flex items-center justify-center text-teal-400 shrink-0 group-hover:bg-teal-500/25 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-slate-400 text-md font-display uppercase tracking-wider mb-1">
                        {item.label}
                      </div>
                      <div className="text-slate-100 font-body text-base break-all">
                        {item.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Start date card */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500/15 to-navy-800 border border-orange-500/20 p-6">
                <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl" />
                <div className="relative">
                  <div className="text-orange-400 text-md font-display font-semibold uppercase tracking-widest mb-2">
                    Next Cohort
                  </div>
                  <div className="font-display font-extrabold text-3xl text-white mb-1">
                    22 June 2026
                  </div>
                  <div className="text-slate-300 font-body text-base mb-4">
                    Programme start date
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-teal-400 font-display font-bold text-xl">
                      KSH 20,000
                    </span>
                    <span className="text-slate-400 font-body text-md">
                      program fee
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="card-glass rounded-2xl p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-teal-500/20 border border-teal-500/30 flex items-center justify-center mx-auto mb-5">
                      <svg
                        className="w-8 h-8 text-teal-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="font-display font-bold text-2xl text-white mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-slate-300 font-body text-base">
                      Thank you for reaching out. We'll get back to you within
                      24–48 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 text-teal-400 hover:text-teal-300 text-md font-display font-semibold transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="font-display font-bold text-xl text-white mb-6">
                      Send a Message
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-md font-display font-semibold text-slate-300 uppercase tracking-wider mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formState.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            className="w-full bg-navy-900/60 border border-white/10 focus:border-teal-500/50 rounded-xl px-4 py-3 text-white font-body text-base placeholder-slate-500 outline-none transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-md font-display font-semibold text-slate-300 uppercase tracking-wider mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formState.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            className="w-full bg-navy-900/60 border border-white/10 focus:border-teal-500/50 rounded-xl px-4 py-3 text-white font-body text-base placeholder-slate-500 outline-none transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-md font-display font-semibold text-slate-300 uppercase tracking-wider mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          placeholder="07XX XXX XXX"
                          className="w-full bg-navy-900/60 border border-white/10 focus:border-teal-500/50 rounded-xl px-4 py-3 text-white font-body text-base placeholder-slate-500 outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-md font-display font-semibold text-slate-300 uppercase tracking-wider mb-2">
                          I'm Interested In
                        </label>
                        <select
                          name="interest"
                          value={formState.interest}
                          onChange={handleChange}
                          className="w-full bg-navy-900/60 border border-white/10 focus:border-teal-500/50 rounded-xl px-4 py-3 text-white font-body text-base outline-none transition-colors"
                        >
                          <option value="applying">
                            Applying to the Bootcamp
                          </option>
                          <option value="info">General Information</option>
                          <option value="partnership">
                            Partnership Opportunities
                          </option>
                          <option value="mentorship">Becoming a Mentor</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-md font-display font-semibold text-slate-300 uppercase tracking-wider mb-2">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          required
                          value={formState.message}
                          onChange={handleChange}
                          rows={5}
                          placeholder="Tell us a bit about yourself and your question..."
                          className="w-full bg-navy-900/60 border border-white/10 focus:border-teal-500/50 rounded-xl px-4 py-3 text-white font-body text-base placeholder-slate-500 outline-none transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-orange-500 hover:bg-orange-400 text-white font-display font-bold py-4 rounded-xl text-base transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                      >
                        Send Message
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
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                          />
                        </svg>
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
