import { Link } from "react-router-dom";
import image from "../assets/images/logo.png";

export default function Footer() {
  return (
    <footer className="relative bg-navy-900 border-t border-white/5 pt-16 pb-8">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-100 h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-24 h-24 rounded-full border-4 border-teal-500 flex items-center justify-center bg-white overflow-hidden">
                <img
                  src={image}
                  alt="Future Founders Logo"
                  className="w-36 h-36 object-cover"
                />
              </div>
              <div>
                <span className="font-display font-bold text-white text-base block leading-tight">
                  Future Founders Academy
                </span>
                <span className="text-teal-400 text-md tracking-widest uppercase">
                  Kenya 2026
                </span>
              </div>
            </div>
            <p className="text-slate-300 font-body text-base leading-relaxed max-w-sm">
              Preparing the founders and employers of tomorrow. A practical,
              hands-on programme equipping young Kenyans with skills,
              mentorship, and confidence.
            </p>
            <p className="mt-4 text-md font-display font-semibold">
              <span className="text-orange-400">CREATE.</span>{" "}
              <span className="text-teal-400">LAUNCH.</span>{" "}
              <span className="text-white">GROW.</span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white text-md uppercase tracking-widest mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about" },
                { label: "Mission & Vision", to: "/mission-vision" },
                { label: "What We Do", to: "/what-we-do" },
                { label: "Contact", to: "/contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-slate-300 hover:text-teal-400 text-base font-body transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white text-md uppercase tracking-widest mb-4">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-base text-slate-300 font-body">
                <svg
                  className="w-5 h-5 text-teal-400 mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                0783 359 553
              </li>
              <li className="flex items-start gap-3 text-base text-slate-300 font-body">
                <svg
                  className="w-5 h-5 text-teal-400 mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="break-all sm:break-normal">
                  futurefoundersacademyke@gmail.com
                </span>
              </li>
            </ul>

            {/* Social Media Links */}
            <div className="mt-8">
              <h4 className="font-display font-semibold text-white text-md uppercase tracking-widest mb-4 text-center sm:text-left">
                Follow Us
              </h4>
              <div className="flex justify-center sm:justify-start gap-5">
                {/* Instagram */}
                <a
                  href="https://instagram.com/futurefoundersacademy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-navy-800 border border-white/10 flex items-center justify-center text-slate-300 hover:text-teal-400 hover:border-teal-500/50 hover:scale-110 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>

                {/* TikTok */}
                <a
                  href="https://tiktok.com/@futurefoundersacademy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-navy-800 border border-white/10 flex items-center justify-center text-slate-300 hover:text-teal-400 hover:border-teal-500/50 hover:scale-110 transition-all duration-300"
                  aria-label="TikTok"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 015.2-1.74v-3.45a6.33 6.33 0 00-1.05-.07 6.33 6.33 0 00-6.33 6.33c0 3.49 2.84 6.33 6.33 6.33 3.49 0 6.33-2.84 6.33-6.33V8.65A6.33 6.33 0 0022 8.65V5.2a4.83 4.83 0 01-2.41 1.49z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/company/futurefoundersacademy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-navy-800 border border-white/10 flex items-center justify-center text-slate-300 hover:text-teal-400 hover:border-teal-500/50 hover:scale-110 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.204 0 22.225 0z" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com/futurefoundersacademy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-navy-800 border border-white/10 flex items-center justify-center text-slate-300 hover:text-teal-400 hover:border-teal-500/50 hover:scale-110 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="section-divider mb-6" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-md text-slate-400 font-body">
          <p>© 2026 Future Founders Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
