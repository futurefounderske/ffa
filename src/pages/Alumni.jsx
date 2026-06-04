import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import alumni from "../data/alumni/alumni";
import SEOHead from "../components/SEOHead";

const cohorts = ["All", "2025 - Cohort 1"];

export default function Alumni() {
  const [selectedAlumni, setSelectedAlumni] = useState(null);
  const [activeCohort, setActiveCohort] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const videoRef = useRef(null);

  const filteredAlumni =
    activeCohort === "All"
      ? alumni
      : alumni.filter((alum) => alum.cohort === activeCohort);

  const handleVideoClick = (e, videoUrl) => {
    e.stopPropagation();
    setSelectedVideo(videoUrl);
  };

  const handleOpenModal = (alum) => {
    setSelectedAlumni(alum);
  };

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
                  onClick={() => handleOpenModal(alum)}
                  className="group cursor-pointer"
                >
                  <div className="bg-navy-800/50 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-teal-500/30 hover:shadow-xl hover:shadow-teal-500/10 hover:-translate-y-2">
                    {/* Video Container with Thumbnail */}
                    <div className="relative h-56 overflow-hidden bg-navy-900">
                      {/* Video element for thumbnail - using video element to capture first frame */}
                      <video
                        src={alum.src}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                        muted
                        preload="metadata"
                      />

                      {/* Dark overlay for better play button visibility */}
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all" />

                      {/* Video Play Button */}
                      <button
                        onClick={(e) => handleVideoClick(e, alum.src)}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <div className="w-16 h-16 rounded-full bg-teal-500/90 backdrop-blur-sm flex items-center justify-center transform transition-transform group-hover:scale-110">
                          <svg
                            className="w-8 h-8 text-white ml-1"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </button>

                      {/* Video Badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-teal-500/90 backdrop-blur-sm rounded-lg text-white text-xs font-medium">
                          <svg
                            className="w-3 h-3"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                          Video Story
                        </span>
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/20 to-transparent pointer-events-none" />
                      <div className="absolute top-4 right-4 z-10">
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

                      <div className="flex items-center gap-2 mb-3 flex-wrap">
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

                      <p className="text-slate-400 font-body text-md leading-relaxed line-clamp-3 mb-4">
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
                              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                            />
                          </svg>
                          <span className="text-md font-medium">
                            Watch their story
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

        {/* Alumni Detail Modal with Video */}
        <AnimatePresence>
          {selectedAlumni && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
              onClick={() => {
                setSelectedAlumni(null);
                if (videoRef.current) {
                  videoRef.current.pause();
                }
              }}
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
                  onClick={() => {
                    setSelectedAlumni(null);
                    if (videoRef.current) {
                      videoRef.current.pause();
                    }
                  }}
                  className="absolute top-4 right-4 z-20 w-10 h-10 bg-navy-900/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-navy-700 transition-colors"
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

                {/* Video Section - Plays directly in modal */}
                <div className="relative bg-black">
                  <video
                    ref={videoRef}
                    src={selectedAlumni.src}
                    className="w-full rounded-t-2xl"
                    controls
                    autoPlay
                    controlsList="nodownload"
                    poster=""
                  >
                    Your browser does not support the video tag.
                  </video>

                  <div className="absolute top-4 right-4">
                    <span className="inline-block px-3 py-1 bg-teal-500/90 backdrop-blur-sm rounded-full text-white text-md font-medium">
                      {selectedAlumni.cohort}
                    </span>
                  </div>
                </div>

                {/* Profile Info */}
                <div className="p-8">
                  <h2 className="text-3xl font-display font-bold text-white mb-2">
                    {selectedAlumni.name}
                  </h2>

                  <div className="flex items-center gap-3 mb-6 flex-wrap">
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

                  {/* Testimonial */}
                  {selectedAlumni.testimonial && (
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
                  )}

                  {/* Social Links */}
                  <div className="flex gap-3">
                    {selectedAlumni.whatsapp &&
                      selectedAlumni.whatsapp !== "#" && (
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
                      selectedAlumni.website !== "#" && (
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
                      selectedAlumni.instagram !== "#" && (
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

        {/* Floating Video Modal for playing videos from grid */}
        <AnimatePresence>
          {selectedVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
              onClick={() => {
                setSelectedVideo(null);
                if (videoRef.current) {
                  videoRef.current.pause();
                }
              }}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative max-w-4xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => {
                    setSelectedVideo(null);
                    if (videoRef.current) {
                      videoRef.current.pause();
                    }
                  }}
                  className="absolute -top-12 right-0 z-10 w-10 h-10 bg-navy-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-navy-700 transition-colors"
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
                <video
                  src={selectedVideo}
                  controls
                  autoPlay
                  className="w-full rounded-xl"
                  controlsList="nodownload"
                >
                  Your browser does not support the video tag.
                </video>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
