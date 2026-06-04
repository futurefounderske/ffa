import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";
import qrcode from "../assets/images/qr.jpeg";
import "../styles/navbar.css";

const navLinks = [
  { label: "About", to: "/about" },
  {
    label: "What We Do",
    dropdown: [
      { label: "Our Programs", to: "/program" },
      {
        label: "Experimental Learning",
        to: "/learning",
      },
      { label: "FAQs", to: "/faq" },
    ],
  },
  {
    label: "Your Guides",
    dropdown: [
      { label: "Mentors & Facilitators", to: "/mentors" },
      { label: "Alumni Network", to: "/alumni" },
    ],
  },
  { label: "Gallery", to: "/gallery" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdowns, setMobileDropdowns] = useState({});
  const [showQrModal, setShowQrModal] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const location = useLocation();
  const dropdownTimeoutRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

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
      <header
        className={`navbar ${scrolled ? "navbar-scrolled" : "navbar-transparent"}`}
      >
        <div className="navbar-container">
          {/* Logo */}
          <Link to="/" className="logo-link">
            <div className="logo-wrapper">
              <img
                src={logo}
                alt="Future Founders Logo"
                className="logo-image w-28 h-28"
              />
            </div>
            <div className="logo-text">
              <span className="logo-title">Future Founders</span>
              <span className="logo-subtitle">Academy</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="desktop-nav">
            {navLinks.map((link) => {
              const active = !link.dropdown && location.pathname === link.to;
              const dropdownActive = isDropdownActive(link);

              if (link.dropdown) {
                return (
                  <div
                    key={link.label}
                    className="dropdown-container"
                    onMouseEnter={() => handleMouseEnter(link.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === link.label ? null : link.label,
                        )
                      }
                      className={`dropdown-trigger ${dropdownActive || activeDropdown === link.label ? "active" : ""}`}
                    >
                      {(dropdownActive || activeDropdown === link.label) && (
                        <span className="dropdown-active-bg" />
                      )}
                      <span className="relative-z-10">{link.label}</span>
                      <svg
                        className={`dropdown-arrow ${activeDropdown === link.label ? "rotated" : ""}`}
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
                        className="dropdown-menu"
                        onMouseEnter={() => handleMouseEnter(link.label)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.to}
                            to={item.to}
                            className={`dropdown-item ${location.pathname === item.to ? "active" : ""}`}
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
                  className={`nav-link ${active ? "active" : ""}`}
                >
                  {active && <span className="nav-link-active-bg" />}
                  <span className="relative-z-10">{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <button onClick={handleApplyClick} className="cta-button desktop-cta">
            Apply Now
            <svg
              className="cta-icon"
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

          {/* Mobile: Hamburger + Apply */}
          <div className="mobile-controls">
            <button
              onClick={handleApplyClick}
              className="cta-button mobile-cta"
            >
              Apply
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="hamburger-button"
              aria-label="Toggle menu"
            >
              <svg
                className="hamburger-icon"
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
          <div className="mobile-menu">
            {navLinks.map((link) => {
              if (link.dropdown) {
                return (
                  <div key={link.label} className="mobile-dropdown">
                    <button
                      onClick={() => toggleMobileDropdown(link.label)}
                      className={`mobile-dropdown-trigger ${isDropdownActive(link) ? "active" : ""}`}
                    >
                      {link.label}
                      <svg
                        className={`mobile-dropdown-arrow ${mobileDropdowns[link.label] ? "rotated" : ""}`}
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
                      <div className="mobile-dropdown-menu">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.to}
                            to={item.to}
                            className={`mobile-dropdown-item ${location.pathname === item.to ? "active" : ""}`}
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
                  className={`mobile-nav-link ${location.pathname === link.to ? "active" : ""}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}
      </header>

      {/* QR Code Modal */}
      {showQrModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div
            className={`modal-backdrop ${modalVisible ? "animate-in" : "animate-out"}`}
          />
          <div
            className={`modal-content ${modalVisible ? "modal-animate-in" : "modal-animate-out"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className="modal-close"
              aria-label="Close modal"
            >
              <svg
                className="modal-close-icon"
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

            <div className="modal-inner">
              <h3 className="modal-title">Apply Now</h3>
              <p className="modal-description">
                Scan the QR code to access the application form
              </p>

              <div className="qr-wrapper">
                <img
                  src={qrcode}
                  alt="Application QR Code"
                  className="qr-image"
                />
              </div>

              <div className="modal-link-wrapper">
                <p className="modal-link-label">Or click the link below</p>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc0_X3ffTWpNY5lYHlkiu9vvFxMspar3tsAtkgVtuytPa4h9g/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-link"
                  onClick={handleCloseModal}
                >
                  Open Application Form
                  <svg
                    className="modal-link-icon"
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
