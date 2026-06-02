import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import { useState, useEffect, useRef } from "react";
import logo from "../assets/images/logo.png";
import qrcode from "../assets/images/qr.jpeg";

const stats = [
  { value: "10", label: "Weeks", sub: "Intensive bootcamp" },
  { value: "5", label: "Modules", sub: "Practical skills" },
  { value: "20-28", label: "Age Range", sub: "Target participants" },
  { value: "24/7", label: "Resources", sub: "Easily accessible resources" },
];

const pillars = [
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    color: "teal",
    title: "CREATE",
    desc: "Turn ideas into opportunities with practical skills and hands-on guidance.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
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
    ),
    color: "orange",
    title: "LAUNCH",
    desc: "Build your business, test your plan and pitch with confidence.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
    color: "teal",
    title: "GROW",
    desc: "Scale your venture with mentorship, networks and real-world experience.",
  },
];

// Partners data
const partners = [
  {
    id: 1,
    name: "Kenya Commercial Bank",
    logo: "https://via.placeholder.com/150x80?text=KCB",
    description: "Banking partner",
  },
  {
    id: 2,
    name: "Safaricom",
    logo: "https://via.placeholder.com/150x80?text=Safaricom",
    description: "Telecommunications partner",
  },
  {
    id: 3,
    name: "Equity Bank",
    logo: "https://via.placeholder.com/150x80?text=Equity",
    description: "Financial partner",
  },
  {
    id: 4,
    name: "Microsoft",
    logo: "https://via.placeholder.com/150x80?text=Microsoft",
    description: "Technology partner",
  },
  {
    id: 5,
    name: "Google",
    logo: "https://via.placeholder.com/150x80?text=Google",
    description: "Digital skills partner",
  },
  {
    id: 6,
    name: "UNICEF",
    logo: "https://via.placeholder.com/150x80?text=UNICEF",
    description: "Development partner",
  },
  {
    id: 7,
    name: "Strathmore University",
    logo: "https://via.placeholder.com/150x80?text=Strathmore",
    description: "Academic partner",
  },
  {
    id: 8,
    name: "NCBA Bank",
    logo: "https://via.placeholder.com/150x80?text=NCBA",
    description: "Financial partner",
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showQrModal, setShowQrModal] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);

  // Number of items to show based on screen size
  const getItemsPerView = () => {
    if (typeof window === "undefined") return 4;
    if (window.innerWidth < 640) return 2;
    if (window.innerWidth < 1024) return 3;
    return 4;
  };

  const [itemsPerView, setItemsPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(getItemsPerView());
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-play carousel
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const maxIndex = Math.max(0, partners.length - itemsPerView);
          if (prevIndex >= maxIndex) {
            return 0;
          }
          return prevIndex + 1;
        });
      }, 3000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, itemsPerView]);

  // Handle modal animation on mount/unmount
  useEffect(() => {
    if (showQrModal) {
      setTimeout(() => setModalVisible(true), 10);
    } else {
      setModalVisible(false);
    }
  }, [showQrModal]);

  // Close modal when pressing Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") handleCloseModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (showQrModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showQrModal]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.max(0, partners.length - itemsPerView);
      if (prevIndex <= 0) {
        return maxIndex;
      }
      return prevIndex - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.max(0, partners.length - itemsPerView);
      if (prevIndex >= maxIndex) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  const handleMouseEnter = () => {
    setIsPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsPlaying(true);
  };

  const handleApplyClick = (e) => {
    e.preventDefault();
    setShowQrModal(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setTimeout(() => setShowQrModal(false), 200);
  };

  return (
    <>
      <style jsx>{`
        @keyframes fadeInBackdrop {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeOutBackdrop {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }

        @keyframes slideUpFadeIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes slideDownFadeOut {
          from {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          to {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
        }

        .backdrop-animate-in {
          animation: fadeInBackdrop 0.25s ease-out forwards;
        }

        .backdrop-animate-out {
          animation: fadeOutBackdrop 0.2s ease-out forwards;
        }

        .modal-animate-in {
          animation: slideUpFadeIn 0.3s cubic-bezier(0.34, 1.2, 0.64, 1)
            forwards;
        }

        .modal-animate-out {
          animation: slideDownFadeOut 0.2s ease-out forwards;
        }
      `}</style>

      <SEOHead
        description="Future Founders Academy equips young Kenyans with entrepreneurship skills through a hands-on 10-week bootcamp. Build your business, shape Kenya. Starting 22 June 2026."
        path="/"
      />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-navy-900" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-500/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-teal-500/8 rounded-full blur-3xl" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(46,196,182,1) 1px, transparent 1px), linear-gradient(90deg, rgba(46,196,182,1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Diagonal accent bar */}
        <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-orange-500 via-teal-500 to-transparent opacity-60" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between gap-12">
            {/* Left Content */}
            <div className="max-w-3xl flex-1">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
                <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
                <span className="text-teal-400 text-md font-display font-semibold uppercase tracking-widest">
                  Young Adults Bootcamp · Starting 22 June 2026
                </span>
              </div>

              <h1 className="font-display font-extrabold leading-[1.05] mb-6">
                <span
                  className="block text-5xl sm:text-6xl lg:text-7xl text-white animate-fade-up opacity-0-start"
                  style={{ animationFillMode: "forwards" }}
                >
                  Build Your
                </span>
                <span
                  className="block text-5xl sm:text-6xl lg:text-7xl text-white animate-fade-up opacity-0-start animation-delay-100"
                  style={{ animationFillMode: "forwards" }}
                >
                  Business.
                </span>
                <span
                  className="block text-5xl sm:text-6xl lg:text-7xl teal-gradient-text animate-fade-up opacity-0-start animation-delay-200"
                  style={{ animationFillMode: "forwards" }}
                >
                  Shape Kenya.
                </span>
              </h1>

              <p
                className="text-slate-200 font-body text-xl sm:text-2xl max-w-xl leading-relaxed mb-10 animate-fade-up opacity-0-start animation-delay-300"
                style={{ animationFillMode: "forwards" }}
              >
                A practical, hands-on programme that equips young innovators
                with the skills, mentorship and confidence to turn ideas into
                real impact.
              </p>

              <div
                className="flex flex-wrap gap-4 animate-fade-up opacity-0-start animation-delay-400"
                style={{ animationFillMode: "forwards" }}
              >
                <button
                  onClick={handleApplyClick}
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-display font-bold px-8 py-4 rounded-xl text-base transition-all duration-200 hover:shadow-xl hover:shadow-orange-500/30 hover:-translate-y-1"
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
                </button>
                <Link
                  to="/what-we-do"
                  className="inline-flex items-center gap-2 border border-teal-500/40 hover:border-teal-400 text-teal-400 hover:text-teal-300 font-display font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200 hover:bg-teal-500/5"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right Side Logo - Only visible on large screens */}
            <div
              className="hidden lg:block flex-shrink-0 animate-fade-up opacity-0-start animation-delay-200"
              style={{ animationFillMode: "forwards" }}
            >
              <div className="relative">
                {/* Glow effect behind logo */}
                <div className="absolute inset-0 bg-teal-500/20 rounded-full blur-3xl" />

                {/* Animated border rings - Larger sizes */}
                <div className="relative w-[450px] h-[450px] rounded-full border-4 border-teal-500/30 flex items-center justify-center">
                  <div className="w-[380px] h-[380px] rounded-full border-4 border-orange-500/20 flex items-center justify-center">
                    <div className="w-[310px] h-[310px] rounded-full border-2 border-teal-500/10 flex items-center justify-center">
                      {/* White background for logo */}
                      <div className="w-[280px] h-[280px] rounded-full bg-white shadow-2xl flex items-center justify-center p-4">
                        <img
                          src={logo}
                          alt="Future Founders Logo"
                          className="w-full h-full object-contain rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative dots around the logo - Repositioned for larger size */}
                <div className="absolute -top-6 -right-6 w-10 h-10 bg-teal-400 rounded-full opacity-60 animate-pulse" />
                <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-orange-400 rounded-full opacity-60 animate-pulse" />
                <div className="absolute top-1/2 -right-8 w-5 h-5 bg-teal-400 rounded-full opacity-40" />
                <div className="absolute top-1/2 -left-8 w-5 h-5 bg-orange-400 rounded-full opacity-40" />

                {/* Floating particles - Adjusted for larger size */}
                <div className="absolute top-12 -right-12 w-3 h-3 bg-teal-400 rounded-full animate-float" />
                <div className="absolute bottom-12 -left-12 w-4 h-4 bg-orange-400 rounded-full animate-float-delayed" />
                <div className="absolute top-1/3 right-2 w-2 h-2 bg-teal-400 rounded-full animate-float-slow" />
                <div className="absolute bottom-1/3 left-2 w-2 h-2 bg-orange-400 rounded-full animate-float-slow" />

                {/* Additional decorative elements */}
                <div className="absolute top-1/4 -right-4 w-1.5 h-1.5 bg-white/50 rounded-full" />
                <div className="absolute bottom-1/4 -left-4 w-1.5 h-1.5 bg-white/50 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Create / Launch / Grow */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-teal-400 text-md font-display font-semibold uppercase tracking-widest">
              Programme Pillars
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-3">
              Less Theory. More Practice.{" "}
              <span className="teal-gradient-text">Real Impact.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <div
                key={p.title}
                className={`card-glass rounded-2xl p-8 hover:border-${p.color}-400/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group`}
              >
                <div
                  className={`w-16 h-16 rounded-xl bg-${p.color}-500/15 border border-${p.color}-500/25 flex items-center justify-center text-${p.color}-400 mb-6 group-hover:bg-${p.color}-500/25 transition-colors`}
                >
                  {p.icon}
                </div>
                <h3
                  className={`font-display font-bold text-xl text-${p.color === "teal" ? "teal-400" : "orange-400"} mb-3 tracking-wide`}
                >
                  {p.title}
                </h3>
                <p className="text-slate-300 font-body text-base leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programme Snapshot */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-navy-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-teal-400 text-md font-display font-semibold uppercase tracking-widest">
              Programme Snapshot
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-3">
              Practical. Hands-on. Built for{" "}
              <span className="teal-gradient-text">Real Entrepreneurs.</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { icon: "🎯", label: "Opportunity Validation" },
              { icon: "📋", label: "Business Model & Planning" },
              { icon: "💰", label: "Finance & Cash Management" },
              { icon: "📣", label: "Marketing & Sales in Action" },
              { icon: "📊", label: "Pitch Development" },
            ].map((item) => (
              <div
                key={item.label}
                className="card-glass rounded-xl p-6 flex flex-col items-center text-center hover:border-teal-500/25 transition-all duration-200 hover:-translate-y-1"
              >
                <div className="text-4xl mb-4 flex items-center justify-center">
                  {item.icon}
                </div>
                <p className="text-slate-200 font-body text-md font-semibold leading-snug">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Carousel */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-teal-400 text-md font-display font-semibold uppercase tracking-widest">
              Our Partners
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-3">
              Trusted by Leading{" "}
              <span className="teal-gradient-text">Organizations</span>
            </h2>
            <p className="text-slate-300 font-body text-lg max-w-2xl mx-auto mt-4">
              We collaborate with industry leaders to deliver exceptional
              entrepreneurial education
            </p>
          </div>

          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Carousel Container */}
            <div className="overflow-hidden">
              <div
                ref={carouselRef}
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                }}
              >
                {partners.map((partner) => (
                  <div
                    key={partner.id}
                    className="flex-shrink-0 px-4"
                    style={{ width: `${100 / itemsPerView}%` }}
                  >
                    <div className="bg-navy-800/50 rounded-xl p-6 border border-teal-500/20 hover:border-teal-500/40 transition-all duration-300 hover:-translate-y-1 group">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-32 h-20 flex items-center justify-center mb-4">
                          <img
                            src={partner.logo}
                            alt={partner.name}
                            className="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                          />
                        </div>
                        <h3 className="text-white font-display font-semibold text-lg">
                          {partner.name}
                        </h3>
                        <p className="text-slate-400 text-sm mt-1">
                          {partner.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-10 h-10 bg-navy-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-teal-500 transition-all duration-200 z-10"
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-10 h-10 bg-navy-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-teal-500 transition-all duration-200 z-10"
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({
              length: Math.max(1, Math.ceil(partners.length / itemsPerView)),
            }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx * itemsPerView);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / itemsPerView) === idx
                    ? "w-8 bg-teal-500"
                    : "w-2 bg-navy-600 hover:bg-teal-400/50"
                }`}
              />
            ))}
          </div>

          {/* Pause/Play Indicator */}
          <div className="text-center mt-4">
            <p className="text-slate-500 text-sm">
              {!isPlaying && "⏸️ Carousel paused — hover to resume"}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-700 via-navy-800 to-navy-900 border border-teal-500/20 p-10 sm:p-14 text-center">
            {/* glow blobs */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 bg-orange-500/15 border border-orange-500/25 text-orange-400 text-md font-display font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                📅 Start Date: 22 June 2026
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white mb-4">
                Ready to Build Your{" "}
                <span className="teal-gradient-text">Future?</span>
              </h2>
              <p className="text-slate-300 font-body text-xl max-w-xl mx-auto mb-8">
                No prior business experience required — only a willing heart to
                learn and grow.
              </p>
              <button
                onClick={handleApplyClick}
                className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-400 text-white font-display font-bold px-10 py-4 rounded-xl text-lg transition-all duration-200 hover:shadow-2xl hover:shadow-orange-500/30 hover:-translate-y-1"
              >
                Scan QR or Apply Online
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
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* QR Code Modal */}
      {showQrModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={handleCloseModal}
        >
          {/* Backdrop with smooth fade */}
          <div
            className={`absolute inset-0 bg-black/70 backdrop-blur-sm ${
              modalVisible ? "backdrop-animate-in" : "backdrop-animate-out"
            }`}
          />

          {/* Modal Content with smooth slide-up + fade */}
          <div
            className={`relative bg-navy-800 rounded-2xl shadow-2xl max-w-sm w-full p-6 border border-teal-500/30 ${
              modalVisible ? "modal-animate-in" : "modal-animate-out"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors duration-200"
              aria-label="Close modal"
            >
              <svg
                className="w-6 h-6"
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

            {/* QR Code Image */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-2xl font-display font-bold text-white mb-2">
                Apply Now
              </h3>
              <p className="text-slate-300 text-sm font-body mb-6">
                Scan the QR code to access the application form
              </p>

              <div className="bg-white p-4 rounded-xl mb-6 transition-transform duration-300 hover:scale-105">
                <img
                  src={qrcode}
                  alt="Application QR Code"
                  className="w-64 h-64 object-contain"
                />
              </div>

              {/* Direct Link */}
              <div className="w-full pt-4 border-t border-white/10">
                <p className="text-slate-300 text-sm font-body mb-3">
                  Or click the link below:
                </p>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc0_X3ffTWpNY5lYHlkiu9vvFxMspar3tsAtkgVtuytPa4h9g/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 font-body text-sm underline underline-offset-2 transition-all duration-200 hover:gap-3"
                  onClick={handleCloseModal}
                >
                  Open Application Form
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
