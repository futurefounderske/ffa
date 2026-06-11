import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import founders from "../data/founders/founders";
import SEOHead from "../components/SEOHead";

export default function Founders() {
  const [selectedfounder, setSelectedfounder] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <>
      <SEOHead title="Founders" description="The Beginning" path="/founders" />
      <div className="min-h-screen bg-navy-900 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-display font-bold text-white mb-6"
            >
              Meet The <span className="text-teal-400">Founders</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-slate-300 max-w-3xl mx-auto font-body"
            >
              Passionate builders and visionaries who turned ideas into reality
              — now sharing their journey, insights, and the drive behind the
              mission.
            </motion.p>
          </div>

          {/* Founders Grid - Responsive with auto-fit and centering */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 400px))",
              justifyContent: "center",
            }}
          >
            {founders.map((founder, index) => (
              <motion.div
                key={founder.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedfounder(founder)}
                onMouseEnter={() => setHoveredId(founder.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative cursor-pointer w-full"
              >
                {/* Card */}
                <div className="bg-navy-800/50 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-teal-500/30 hover:shadow-xl hover:shadow-teal-500/10 hover:-translate-y-2 h-full flex flex-col">
                  {/* Image Section */}
                  <div className="relative overflow-hidden h-64 flex-shrink-0">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover object-[center_20%] transition-all duration-500 group-hover:scale-110"
                    />

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <button className="w-full bg-teal-500 hover:bg-teal-400 text-white font-display font-semibold py-2 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-teal-500/25">
                          View Profile
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Info Section */}
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-display font-bold text-white mb-1 group-hover:text-teal-400 transition-colors">
                      {founder.name}
                    </h3>
                    <p className="text-slate-400 font-body text-md leading-relaxed line-clamp-3">
                      {founder.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Profile Modal */}
        <AnimatePresence>
          {selectedfounder && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
              onClick={() => setSelectedfounder(null)}
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
                  onClick={() => setSelectedfounder(null)}
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
                <div className="relative h-64 md:h-80">
                  <img
                    src={selectedfounder.image}
                    alt={selectedfounder.name}
                    className="w-full h-full object-cover object-[center_25%] rounded-t-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-800 to-transparent rounded-t-2xl" />
                </div>

                {/* Profile Info */}
                <div className="p-8 -mt-20 relative z-10">
                  <span className="inline-block px-3 py-1 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400 text-md font-medium mb-4">
                    {selectedfounder.expertise}
                  </span>

                  <h2 className="text-3xl font-display font-bold text-white mb-2">
                    {selectedfounder.name}
                  </h2>

                  <div className="prose prose-invert max-w-none">
                    <p className="text-slate-300 font-body leading-relaxed mb-6">
                      {selectedfounder.bio}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-navy-900/50 rounded-xl p-4 border border-white/5">
                      <div className="text-teal-400 font-display font-bold text-lg">
                        {selectedfounder.experience}
                      </div>
                      <div className="text-slate-400 text-md font-body">
                        Experience
                      </div>
                    </div>
                    <div className="bg-navy-900/50 rounded-xl p-4 border border-white/5">
                      <div className="text-teal-400 font-display font-bold text-lg">
                        {selectedfounder.companies}
                      </div>
                      <div className="text-slate-400 text-md font-body">
                        Companies
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-3">
                    {selectedfounder.whatsapp &&
                      selectedfounder.whatsapp !== "" && (
                        <a
                          href={selectedfounder.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] font-body font-medium text-sm py-2.5 rounded-lg text-center transition-colors"
                        >
                          WhatsApp
                        </a>
                      )}

                    {selectedfounder.linkedin &&
                      selectedfounder.linkedin !== "" && (
                        <a
                          href={selectedfounder.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 border border-[#0A66C2]/30 text-[#0A66C2] font-body font-medium text-sm py-2.5 rounded-lg text-center transition-colors"
                        >
                          LinkedIn
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
