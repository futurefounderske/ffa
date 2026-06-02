import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";

const navLinks = [
  { label: "About", to: "/about" },
  {
    label: "What We Do",
    dropdown: [
      { label: "Our Programs", to: "/program" },
      {
        label: "Experimental Learning",
        to: "/experimental-learning",
      },
      { label: "FAQs", to: "/faq" },
    ],
  },
  {
    label: "Your Guides",
    dropdown: [
      { label: "Mentors & Facilitators", to: "/mentor" },
      { label: "Alumni Network", to: "/alumni" },
    ],
  },
  { label: "Gallery", to: "/gallery" },
  {
    /*{ label: "Contact", to: "/contact" },*/
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdowns, setMobileDropdowns] = useState({});
  const location = useLocation();
  const dropdownTimeoutRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  const handleMouseEnter = (label) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const toggleMobileDropdown = (label) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const isDropdownActive = (link) => {
    if (!link.dropdown) return false;
    return link.dropdown.some((item) => location.pathname === item.to);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-900/95 backdrop-blur-md shadow-lg shadow-black/30 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full border-4 border-teal-500 flex items-center justify-center bg-white overflow-hidden">
            <img
              src={logo}
              alt="Future Founders Logo"
              className="w-full h-full object-cover scale-110"
            />
          </div>
          <div className="whitespace-nowrap">
            <span className="font-display font-bold text-white text-sm sm:text-base md:text-md leading-tight block">
              Future Founders
            </span>
            <span className="text-teal-400 text-xs sm:text-sm md:text-md font-body tracking-widest uppercase">
              Academy
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = !link.dropdown && location.pathname === link.to;
            const dropdownActive = isDropdownActive(link);

            if (link.dropdown) {
              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(link.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === link.label ? null : link.label,
                      )
                    }
                    className={`relative px-4 py-2 text-md font-body font-medium transition-colors duration-200 rounded-lg flex items-center gap-1
                      ${dropdownActive || activeDropdown === link.label ? "text-teal-400" : "text-slate-200 hover:text-white"}`}
                  >
                    {(dropdownActive || activeDropdown === link.label) && (
                      <span className="absolute inset-0 rounded-lg bg-teal-500/10 border border-teal-500/20" />
                    )}
                    <span className="relative z-10">{link.label}</span>
                    <svg
                      className={`relative z-10 w-4 h-4 transition-transform duration-200 ${activeDropdown === link.label ? "rotate-180" : ""}`}
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
                  </button>

                  {/* Dropdown menu */}
                  {activeDropdown === link.label && (
                    <div
                      className="absolute top-full left-0 mt-2 w-60 bg-navy-800/98 backdrop-blur-md rounded-lg shadow-xl border border-teal-500/20 py-2 animate-in fade-in slide-in-from-top-2 duration-200"
                      onMouseEnter={() => handleMouseEnter(link.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          className={`block px-4 py-2.5 text-md font-body transition-colors ${
                            location.pathname === item.to
                              ? "text-teal-400 bg-teal-500/10"
                              : "text-slate-200 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-4 py-2 text-md font-body font-medium transition-colors duration-200 rounded-lg
                  ${active ? "text-teal-400" : "text-slate-200 hover:text-white"}`}
              >
                {active && (
                  <span className="absolute inset-0 rounded-lg bg-teal-500/10 border border-teal-500/20" />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <a
          href="https://www.futurefoundersbootcamp.ke"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white text-md font-display font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5"
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

        {/* Mobile: Hamburger + Apply */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="https://www.futurefoundersbootcamp.ke"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 bg-orange-500 hover:bg-orange-400 text-white text-sm font-display font-semibold px-3 py-1.5 rounded-lg transition-colors"
          >
            Apply
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="p-2 text-slate-200 hover:text-white"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-navy-800/98 backdrop-blur-md border-t border-white/5 px-4 py-4 max-h-[calc(100vh-120px)] overflow-y-auto">
          {navLinks.map((link) => {
            if (link.dropdown) {
              return (
                <div key={link.label} className="mb-1">
                  <button
                    onClick={() => toggleMobileDropdown(link.label)}
                    className={`w-full flex items-center justify-between py-3 px-4 rounded-lg font-body font-medium text-base transition-colors ${
                      isDropdownActive(link)
                        ? "text-teal-400"
                        : "text-slate-200 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${mobileDropdowns[link.label] ? "rotate-180" : ""}`}
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
                  </button>

                  {mobileDropdowns[link.label] && (
                    <div className="ml-4 border-l-2 border-teal-500/20 pl-4 mt-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          className={`block py-2.5 px-4 rounded-lg font-body text-base transition-colors ${
                            location.pathname === item.to
                              ? "text-teal-400 bg-teal-500/10"
                              : "text-slate-300 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.to}
                to={link.to}
                className={`block py-3 px-4 rounded-lg font-body font-medium text-base transition-colors ${
                  location.pathname === link.to
                    ? "text-teal-400 bg-teal-500/10"
                    : "text-slate-200 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
