import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import alumni from "../data/alumni/alumni";
import SEOHead from "../components/SEOHead";

const cohorts = [
  "All",
  "2023 - Cohort 1",
  "2023 - Cohort 2",
  "2024 - Cohort 1",
  "2024 - Cohort 2",
];

export default function Alumni() {
  const [selectedAlumni, setSelectedAlumni] = useState(null);
  const [activeCohort, setActiveCohort] = useState("All");

  const filteredAlumni =
    activeCohort === "All"
      ? alumni
      : alumni.filter((alum) => alum.cohort === activeCohort);

  return (
    <>
      <SEOHead
        title="Alumni"
        description="Our Network of Students"
        path="/alumni"
      />
      <div className="min-h-screen bg-navy-900 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
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
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl font-display font-bold text-white mb-6"
            >
              Alumni <span className="text-teal-400">Network</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-slate-300 max-w-3xl mx-auto font-body"
            >
              Meet the changemakers who have graduated from our programs and are
              now building innovative businesses across Kenya
            </motion.p>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          ></motion.div>

          {/* Cohort Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {cohorts.map((cohort) => (
              <button
                key={cohort}
                onClick={() => setActiveCohort(cohort)}
                className={`px-5 py-2.5 rounded-lg font-body font-medium text-md transition-all duration-200 ${
                  activeCohort === cohort
                    ? "bg-teal-500 text-white shadow-lg shadow-teal-500/25"
                    : "bg-navy-800 text-slate-300 hover:text-white hover:bg-navy-700 border border-white/5"
                }`}
              >
                {cohort}
              </button>
            ))}
          </motion.div>

          {/* Alumni Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredAlumni.map((alum, index) => (
                <motion.div
                  key={alum.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onClick={() => setSelectedAlumni(alum)}
                  className="group cursor-pointer"
                >
                  <div className="bg-navy-800/50 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-teal-500/30 hover:shadow-xl hover:shadow-teal-500/10 hover:-translate-y-2">
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={alum.image}
                        alt={alum.name}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/20 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1 bg-teal-500/90 backdrop-blur-sm rounded-full text-white text-md font-medium">
                          {alum.cohort}
                        </span>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-display font-bold text-white mb-1 group-hover:text-teal-400 transition-colors">
                        {alum.name}
                      </h3>
                      <p className="text-teal-400 font-body text-md mb-3">
                        {alum.business}
                      </p>

                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-block px-2 py-0.5 bg-navy-900/50 border border-white/10 rounded-full text-slate-400 text-md">
                          {alum.industry}
                        </span>
                        <span className="inline-flex items-center gap-1 text-slate-400 text-md">
                          <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          {alum.location}
                        </span>
                      </div>

                      <p className="text-slate-400 font-body text-md leading-relaxed line-clamp-2 mb-4">
                        {alum.bio}
                      </p>

                      <div className="pt-4 border-t border-white/5">
                        <div className="flex items-center gap-2 text-teal-400">
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
                              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                            />
                          </svg>
                          <span className="text-md font-medium">
                            {alum.achievement}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredAlumni.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-slate-400 text-lg font-body">
                No alumni found in this cohort.
              </p>
            </motion.div>
          )}
        </div>

        {/* Alumni Detail Modal */}
        <AnimatePresence>
          {selectedAlumni && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
              onClick={() => setSelectedAlumni(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative bg-navy-800 border border-teal-500/20 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedAlumni(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-navy-900/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-navy-700 transition-colors"
                >
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {/* Profile Image */}
                <div className="relative h-64 md:h-72">
                  <img
                    src={selectedAlumni.image}
                    alt={selectedAlumni.name}
                    className="w-full h-full object-cover rounded-t-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-800 to-transparent rounded-t-2xl" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-teal-500/90 backdrop-blur-sm rounded-full text-white text-md font-medium">
                      {selectedAlumni.cohort}
                    </span>
                  </div>
                </div>

                {/* Profile Info */}
                <div className="p-8 -mt-16 relative z-10">
                  <h2 className="text-3xl font-display font-bold text-white mb-2">
                    {selectedAlumni.name}
                  </h2>
                  <p className="text-teal-400 font-body text-lg mb-1">
                    {selectedAlumni.business}
                  </p>

                  <div className="flex items-center gap-3 mb-6">
                    <span className="inline-block px-3 py-1 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400 text-md">
                      {selectedAlumni.industry}
                    </span>
                    <span className="inline-flex items-center gap-1 text-slate-400 text-md">
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
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {selectedAlumni.location}
                    </span>
                  </div>

                  <div className="prose prose-invert max-w-none mb-6">
                    <p className="text-slate-300 font-body leading-relaxed">
                      {selectedAlumni.bio}
                    </p>
                  </div>

                  {/* Achievement */}
                  <div className="bg-gradient-to-r from-teal-500/10 to-teal-500/5 border border-teal-500/20 rounded-xl p-4 mb-6">
                    <div className="flex items-center gap-2 text-teal-400">
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
                          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                        />
                      </svg>
                      <span className="font-medium">
                        {selectedAlumni.achievement}
                      </span>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-navy-900/50 border border-white/5 rounded-xl p-6 mb-6">
                    <div className="flex items-start gap-3">
                      <svg
                        className="w-8 h-8 text-teal-400 flex-shrink-0 mt-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <h4 className="text-slate-300 font-body italic leading-relaxed">
                        "{selectedAlumni.testimonial}"
                      </h4>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-3">
                    {selectedAlumni.whatsapp &&
                      selectedAlumni.whatsapp !== "" && (
                        <a
                          href={selectedAlumni.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] font-body font-medium text-sm py-2.5 rounded-lg text-center transition-colors"
                        >
                          WhatsApp
                        </a>
                      )}

                    {selectedAlumni.website &&
                      selectedAlumni.website !== "" && (
                        <a
                          href={selectedAlumni.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-teal-500/10 hover:bg-teal-500/20 border border-teal-500/30 text-teal-400 font-body font-medium text-sm py-2.5 rounded-lg text-center transition-colors"
                        >
                          Website
                        </a>
                      )}

                    {selectedAlumni.instagram &&
                      selectedAlumni.instagram !== "" && (
                        <a
                          href={selectedAlumni.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-[#E4405F]/10 hover:bg-[#E4405F]/20 border border-[#E4405F]/30 text-[#E4405F] font-body font-medium text-sm py-2.5 rounded-lg text-center transition-colors"
                        >
                          Instagram
                        </a>
                      )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
