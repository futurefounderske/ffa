import { useState } from "react";
import { motion } from "framer-motion";
import SEOHead from "../components/SEOHead";
import video1 from "../assets/images/gallery/video-1.mp4";

const Learning = () => {
  const [activeTab, setActiveTab] = useState("businessVisits");
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const experiences = {
    businessVisits: {
      title: "Business Visits",
      icon: "🏭",
      color: "teal",
      description:
        "Step into real-world businesses and learn from operational excellence",
      items: [
        {
          title: "Manufacturing Plant Tours",
          description:
            "Visit local manufacturing facilities to understand production processes, quality control, and supply chain management.",
          duration: "Full day",
          impact: "See theory in action",
        },
        {
          title: "Tech Startup Crawls",
          description:
            "Tour innovative tech startups, meet founders, and learn about scaling businesses in the digital age.",
          duration: "Half day",
          impact: "Understand startup culture",
        },
        {
          title: "Retail & Service Business Visits",
          description:
            "Explore successful retail operations and service-based businesses to understand customer experience and operations.",
          duration: "3-4 hours",
          impact: "Learn customer engagement",
        },
        {
          title: "Agricultural Enterprise Tours",
          description:
            "Visit agribusinesses to understand value addition, farming as a business, and agricultural innovation.",
          duration: "Full day",
          impact: "See agribusiness potential",
        },
      ],
    },
    entrepreneurTalks: {
      title: "Entrepreneur Talks",
      icon: "🎤",
      color: "orange",
      description:
        "Learn from successful entrepreneurs who have walked the path",
      items: [
        {
          title: "Founder Fireside Chats",
          description:
            "Intimate conversations with successful founders sharing their journey, failures, and lessons learned.",
          speaker: "Seasoned entrepreneurs",
          impact: "Real-world insights",
        },
        {
          title: "Young Entrepreneur Spotlights",
          description:
            "Talks from young founders who started early, sharing practical tips for getting started.",
          speaker: "Youth founders (18-30)",
          impact: "Relatable success stories",
        },
        {
          title: "Industry Expert Sessions",
          description:
            "Specialists from various industries share market insights and emerging opportunities.",
          speaker: "Industry leaders",
          impact: "Market intelligence",
        },
        {
          title: "Failure & Resilience Stories",
          description:
            "Honest conversations about business failures and how entrepreneurs bounced back stronger.",
          speaker: "Various entrepreneurs",
          impact: "Build mental resilience",
        },
      ],
    },
    webinars: {
      title: "Webinars",
      icon: "💻",
      color: "blue",
      description:
        "Access expert knowledge from anywhere through interactive online sessions",
      items: [
        {
          title: "Live Skills Workshops",
          description:
            "Hands-on workshops covering specific entrepreneurial skills like financial modeling, digital marketing, and sales.",
          format: "2-hour interactive",
          impact: "Practical skills",
        },
        {
          title: "Panel Discussions",
          description:
            "Multiple experts discuss key topics like funding, scaling, and innovation in business.",
          format: "1.5-hour panel + Q&A",
          impact: "Multiple perspectives",
        },
        {
          title: "Masterclass Series",
          description:
            "Deep-dive sessions with industry masters on specialized topics.",
          format: "3-4 hour intensive",
          impact: "Expert-level knowledge",
        },
        {
          title: "Ask Me Anything (AMA)",
          description:
            "Informal sessions where successful entrepreneurs answer participant questions openly.",
          format: "1-hour interactive",
          impact: "Personalized advice",
        },
      ],
    },
    pitchCompetitions: {
      title: "Pitch Competitions",
      icon: "🏆",
      color: "purple",
      description:
        "Showcase your business ideas and compete for recognition and prizes",
      items: [
        {
          title: "Idea Pitching Challenge",
          description:
            "Present your business concept to a panel of judges for feedback and potential awards.",
          prize: "Seed funding & mentorship",
          impact: "Validation & exposure",
        },
        {
          title: "Business Plan Competition",
          description:
            "Submit comprehensive business plans for evaluation by investors and business leaders.",
          prize: "Business grants",
          impact: "Investment readiness",
        },
        {
          title: "Demo Day",
          description:
            "Graduation event where participants present their businesses to investors and the public.",
          prize: "Partnership opportunities",
          impact: "Investor connections",
        },
        {
          title: "Social Impact Challenge",
          description:
            "Competition focused on businesses addressing community challenges and sustainable development.",
          prize: "Impact funding",
          impact: "Social change",
        },
      ],
    },
    learningForums: {
      title: "Learning Forums",
      icon: "📚",
      color: "green",
      description:
        "Collaborative learning spaces for peer-to-peer knowledge exchange",
      items: [
        {
          title: "Peer Learning Circles",
          description:
            "Small group discussions where participants share challenges, solutions, and learn from each other.",
          frequency: "Weekly",
          impact: "Community support",
        },
        {
          title: "Industry Breakout Sessions",
          description:
            "Industry-specific forums where entrepreneurs in similar sectors share insights and resources.",
          frequency: "Bi-weekly",
          impact: "Sector expertise",
        },
        {
          title: "Problem-Solving Clinics",
          description:
            "Interactive sessions where entrepreneurs present real business challenges for group problem-solving.",
          frequency: "Monthly",
          impact: "Practical solutions",
        },
        {
          title: "Knowledge Exchange Forums",
          description:
            "Sessions where alumni and experienced entrepreneurs share specific expertise with new participants.",
          frequency: "Quarterly",
          impact: "Alumni engagement",
        },
      ],
    },
  };

  const categories = [
    { id: "businessVisits", label: "Business Visits", icon: "🏭" },
    { id: "entrepreneurTalks", label: "Entrepreneur Talks", icon: "🎤" },
    { id: "webinars", label: "Webinars", icon: "💻" },
    { id: "pitchCompetitions", label: "Pitch Competitions", icon: "🏆" },
    { id: "learningForums", label: "Learning Forums", icon: "📚" },
  ];

  const colorClasses = {
    teal: "from-teal-500/20 to-teal-600/10 border-teal-500/30 text-teal-400",
    orange:
      "from-orange-500/20 to-orange-600/10 border-orange-500/30 text-orange-400",
    blue: "from-blue-500/20 to-blue-600/10 border-blue-500/30 text-blue-400",
    purple:
      "from-purple-500/20 to-purple-600/10 border-purple-500/30 text-purple-400",
    green:
      "from-green-500/20 to-green-600/10 border-green-500/30 text-green-400",
  };

  return (
    <>
      <SEOHead
        title="Learning"
        description="In-Depth & Practical"
        path="/learning"
      />
      <div className="min-h-screen bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-transparent to-orange-500/10" />
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-display font-bold text-white mb-6"
            >
              Experiential Learning
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-slate-300 max-w-3xl mx-auto"
            >
              Learning by doing — real-world exposure, hands-on experiences, and
              practical skills that prepare you for entrepreneurial success
            </motion.p>
          </div>
        </section>

        {/* Featured Video Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-teal-500/10 to-orange-500/10 rounded-2xl overflow-hidden border border-teal-500/20"
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Video Player */}
              <div className="relative aspect-video md:aspect-auto md:h-full min-h-[300px] bg-navy-900/50">
                {!isVideoPlaying ? (
                  <div
                    className="relative w-full h-full cursor-pointer group"
                    onClick={() => setIsVideoPlaying(true)}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800"
                      alt="Experiential Learning Preview"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-all flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-teal-500/90 backdrop-blur-sm flex items-center justify-center transform transition-transform group-hover:scale-110">
                        <svg
                          className="w-10 h-10 text-white ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                ) : (
                  <video
                    src={video1}
                    controls
                    autoPlay
                    className="w-full h-full object-cover"
                    onEnded={() => setIsVideoPlaying(false)}
                  >
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>

              {/* Video Description */}
              <div className="p-8 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-500/20 rounded-full text-teal-400 text-md w-fit mb-4">
                  <span>🎥</span>
                  <span>Featured Video</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                  Experimental Learning in Action
                </h2>
                <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                  Watch how our participants engage in real-world business
                  experiences, from company visits to pitch competitions. This
                  video showcases the transformative power of learning by doing
                  at Future Founders Academy.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Filter Tabs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-5 py-2.5 rounded-lg font-body font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeTab === category.id
                    ? "bg-teal-500 text-white shadow-lg shadow-teal-500/30"
                    : "bg-navy-800 text-slate-300 hover:bg-navy-700 hover:text-white"
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Experience Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-16"
          >
            <div
              className={`bg-gradient-to-r ${colorClasses[experiences[activeTab].color]} rounded-2xl p-8 mb-8 border`}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="text-5xl">{experiences[activeTab].icon}</div>
                <div>
                  <h2 className="text-3xl font-display font-bold text-white">
                    {experiences[activeTab].title}
                  </h2>
                  <p className="text-slate-300 mt-1">
                    {experiences[activeTab].description}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {experiences[activeTab].items.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="bg-navy-800/30 rounded-xl p-6 border border-teal-500/20 hover:border-teal-500/40 transition-all duration-300 group h-full flex flex-col"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`text-3xl group-hover:scale-110 transition-transform`}
                    >
                      {experiences[activeTab].icon}
                    </div>
                    {item.duration && (
                      <span className="text-md bg-teal-500/20 text-teal-400 px-2 py-1 rounded-full">
                        {item.duration}
                      </span>
                    )}
                    {item.format && (
                      <span className="text-md bg-teal-500/20 text-teal-400 px-2 py-1 rounded-full">
                        {item.format}
                      </span>
                    )}
                    {item.frequency && (
                      <span className="text-md bg-teal-500/20 text-teal-400 px-2 py-1 rounded-full">
                        {item.frequency}
                      </span>
                    )}
                    {item.prize && (
                      <span className="text-md bg-orange-500/20 text-orange-400 px-2 py-1 rounded-full">
                        {item.prize}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-display font-semibold text-white mb-3">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 text-md mb-4 leading-relaxed flex-grow">
                    {item.description}
                  </p>

                  {item.speaker && (
                    <div className="mb-3">
                      <span className="text-md text-teal-400">Speaker:</span>
                      <p className="text-slate-300 text-md">{item.speaker}</p>
                    </div>
                  )}

                  <div className="pt-3 border-t border-teal-500/20 mt-3">
                    <div className="flex items-center gap-2">
                      <span className="text-md text-teal-400">Impact:</span>
                      <span className="text-slate-300 text-md">
                        {item.impact}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Upcoming Events Section */}
        <section className="bg-gradient-to-r from-teal-500/10 to-orange-500/10 py-16 mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Upcoming Experiences
              </h2>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                Join our upcoming experiential learning opportunities
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Startup Crawl - Nairobi",
                  date: "March 15, 2026",
                  type: "Business Visit",
                  icon: "🏭",
                },
                {
                  title: "Founder Fireside Chat with Jane Wanjiru",
                  date: "March 22, 2026",
                  type: "Entrepreneur Talk",
                  icon: "🎤",
                },
                {
                  title: "Digital Marketing Masterclass",
                  date: "April 5, 2026",
                  type: "Webinar",
                  icon: "💻",
                },
                {
                  title: "Youth Pitch Competition",
                  date: "April 20, 2026",
                  type: "Pitch Competition",
                  icon: "🏆",
                },
                {
                  title: "Agribusiness Learning Forum",
                  date: "May 3, 2026",
                  type: "Learning Forum",
                  icon: "📚",
                },
                {
                  title: "Manufacturing Plant Tour - Thika",
                  date: "May 17, 2026",
                  type: "Business Visit",
                  icon: "🏭",
                },
              ].map((event, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-navy-800/50 rounded-xl p-6 border border-teal-500/20 hover:border-teal-500/40 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{event.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-display font-semibold text-white mb-2">
                        {event.title}
                      </h3>
                      <p className="text-teal-400 text-md mb-2">{event.type}</p>
                      <div className="flex items-center gap-2 text-slate-400 text-md">
                        <span>📅</span>
                        <span>{event.date}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-teal-500/20 to-orange-500/20 py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Ready to Experience Learning Differently?
              </h2>
              <p className="text-slate-300 text-lg mb-8">
                Join our next cohort and gain hands-on entrepreneurial
                experience
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.futurefoundersbootcamp.ke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-teal-500 hover:bg-teal-400 text-white font-display font-semibold px-8 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-teal-500/25 inline-flex items-center justify-center gap-2"
                >
                  Apply Now
                  <span>→</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Learning;
