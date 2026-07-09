import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Manufacturing", to: "/manufacturing" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-[0_2px_20px_rgba(0,0,0,0.08)]"
            : "bg-white/90 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

          <Link to="/" className="flex items-center gap-2 sm:gap-3 shrink-0">
            <img src="/logo.png" alt="Bareilly Wooden Crafts" className="h-10 sm:h-12 w-auto object-contain" />
            
            <div className="block leading-tight">
              <p className="font-semibold text-[13px] sm:text-[15px] text-[#1F1F1F]" style={{ fontFamily: "'Inter', sans-serif" }}>
                Bareilly Wooden Crafts
              </p>
              <p className="text-[9px] sm:text-[11px] tracking-widest uppercase text-[#8B5E3C] font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                Pvt. Ltd.
              </p>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(({ label, to }) => {
              const isActive = location.pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  className={`relative px-4 py-2 text-[13px] font-medium tracking-wide transition-colors duration-200 group ${
                    isActive ? "text-[#B22222]" : "text-[#1F1F1F] hover:text-[#B22222]"
                  }`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {label}
                  <span
                    className={`absolute bottom-0 left-4 right-4 h-[1.5px] bg-[#B22222] origin-left transition-transform duration-200 ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/917900032000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-[#B22222] text-[#B22222] hover:bg-[#B22222] hover:text-white px-4 py-2 text-[13px] font-semibold tracking-wide transition-all duration-200"
            >
              <FaWhatsapp className="text-base" />
              WhatsApp
            </a>
            <Link
              to="/contact"
              className="bg-[#B22222] hover:bg-[#8B1A1A] text-white px-5 py-2 text-[13px] font-semibold tracking-wide transition-all duration-200"
            >
              Request Quote
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden p-2 text-[#1F1F1F] hover:text-[#B22222] transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-white flex flex-col pt-20"
          >
            <div className="flex flex-col px-6 pt-6 flex-1">
              {NAV_LINKS.map(({ label, to }, i) => {
                const isActive = location.pathname === to;
                return (
                  <motion.div
                    key={to}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.055, duration: 0.25 }}
                  >
                    <Link
                      to={to}
                      className={`block py-4 text-lg font-medium border-b border-[#F0EDE8] transition-colors ${
                        isActive ? "text-[#B22222]" : "text-[#1F1F1F] hover:text-[#B22222]"
                      }`}
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile Bottom Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32 }}
              className="px-6 py-8 flex flex-col gap-3"
            >
              <a
                href="https://wa.me/917900032000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-[#B22222] text-[#B22222] py-3 text-[15px] font-semibold tracking-wide"
              >
                <FaWhatsapp className="text-lg" />
                WhatsApp Us
              </a>
              <Link
                to="/contact"
                className="flex items-center justify-center bg-[#B22222] text-white py-3 text-[15px] font-semibold tracking-wide"
              >
                Request a Quote
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}