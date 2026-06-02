import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import faq from "../data/faq/faq";
import SEOHead from "../components/SEOHead";

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      <SEOHead title="FAQ" description="Know More About Us" path="/faq" />

      <div className="min-h-screen bg-navy-900 pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center p-4 bg-teal-500/10 border border-teal-500/20 rounded-full mb-6"
            >
              <svg
                className="w-10 h-10 text-teal-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl font-display font-bold text-white mb-6"
            >
              Frequently Asked <span className="text-teal-400">Questions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-slate-300 max-w-3xl mx-auto font-body"
            >
              Everything you need to know about Future Founders Academy and our
              entrepreneurship bootcamps. Can't find what you're looking for?
              Feel free to reach out!
            </motion.p>
          </div>

          {/* FAQ Accordion */}
          <motion.div className="space-y-6">
            {faq.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-navy-800/50 backdrop-blur-sm border rounded-2xl overflow-hidden transition-all duration-300 ${
                  openId === item.id
                    ? "border-teal-500/30 shadow-lg shadow-teal-500/10"
                    : "border-white/5 hover:border-teal-500/20 hover:shadow-lg"
                }`}
              >
                <button
                  className="w-full px-8 py-6 text-left flex justify-between items-center gap-6 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:ring-inset rounded-2xl"
                  onClick={() => toggleFAQ(item.id)}
                  aria-expanded={openId === item.id}
                >
                  <span
                    className={`text-xl md:text-2xl font-display font-semibold transition-colors duration-200 ${
                      openId === item.id ? "text-teal-400" : "text-white"
                    }`}
                  >
                    {item.question}
                  </span>

                  <span className="flex-shrink-0 ml-4">
                    {openId === item.id ? (
                      <div className="w-10 h-10 bg-teal-500/20 border border-teal-500/30 rounded-full flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-teal-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 15l7-7 7 7"
                          />
                        </svg>
                      </div>
                    ) : (
                      <div className="w-10 h-10 bg-navy-900/50 border border-white/10 rounded-full flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-slate-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    )}
                  </span>
                </button>

                <AnimatePresence>
                  {openId === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 pt-4">
                        <div className="h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent mb-6" />
                        <p className="text-lg text-slate-300 font-body leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-20 bg-gradient-to-r from-teal-500/20 to-orange-500/20 backdrop-blur-sm border border-teal-500/20 rounded-2xl p-10 md:p-12 text-center"
          >
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-lg text-slate-300 mb-10 max-w-xl mx-auto font-body">
              We're here to help! Reach out to us directly and we'll get back to
              you as soon as possible.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}
