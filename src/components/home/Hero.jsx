import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const STATS = [
  { value: "60+", label: "Skilled Craftsmen" },
  { value: "25+", label: "Advanced Imported Machines" },
  { value: "BULK", label: "Wooden Doors Manufacturing" },
  { value: "OEM", label: "Global Standards Manufacturing" },
  { value: "HIGH QUALITY", label: "Wooden Furniture Manufacturing" },
];

const IMAGES = [
  "/images/P1.png",
  "/images/D1.png",
  "/images/F1.png",
  "/images/P2.png",
  "/images/D2.png",
  "/images/F2.png",
  "/images/P3.png",
  "/images/D3.png",
  "/images/F3.png",
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut", delay },
  }),
};

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-white overflow-hidden pt-20">

      {/* Background split */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[55%] h-full bg-[#F8F4F0]" />
        <div className="absolute top-0 right-[55%] w-24 h-full bg-gradient-to-r from-white to-[#F8F4F0]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full grid lg:grid-cols-2 gap-12 lg:gap-8 items-center py-20 lg:py-28">

        {/* Left: Text */}
        <div className="flex flex-col">
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={0.1}
            className="text-[#8B5E3C] text-[12px] font-semibold tracking-[0.2em] uppercase mb-5"
            style={{ fontFamily: "'Inter', sans-serif" }}>
            Trusted Wood Manufacturer · Est. 2016
          </motion.p>

          <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={0.22}
            className="text-[#1F1F1F] text-[2.6rem] sm:text-5xl lg:text-[3.25rem] font-bold leading-[1.12] tracking-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Premium Wooden
            <span className="block text-[#B22222]">Manufacturing</span>
            Solutions
          </motion.h1>

          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={0.34}
            className="text-[#444444] text-[15px] leading-[1.8] max-w-[520px] mb-4"
            style={{ fontFamily: "'Inter', sans-serif" }}>
            Bareilly Wooden Crafts Pvt. Ltd. manufactures premium wooden doors,
            chopping boards, home décor and custom wooden products for builders,
            wholesalers, exporters and OEM brands. Built for bulk. Built to last.
          </motion.p>

          {/* New Clean Location Row directly under description */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.4}
            className="flex items-center gap-2 text-[#666666] text-[13px] font-medium mb-10"
            style={{ fontFamily: "'Inter', sans-serif" }}>
            <FaMapMarkerAlt className="text-[#B22222] text-xs" />
            <span>Bhojipura, Bareilly</span>
            <span className="text-[#E8E0D8]">|</span>
            <span className="text-[#8B5E3C] text-[11px] font-semibold tracking-wider uppercase">Since 2016</span>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.46}
            className="flex flex-wrap gap-4 mb-14">
            <Link to="/contact"
              className="inline-flex items-center gap-2 bg-[#B22222] hover:bg-[#8B1A1A] text-white px-7 py-3.5 text-[13px] font-semibold tracking-wide transition-all duration-200 group">
              Request a Quote
              <FaArrowRight className="text-xs transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <a href="https://wa.me/917900032000" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#1F1F1F] text-[#1F1F1F] hover:border-[#B22222] hover:text-[#B22222] px-7 py-3.5 text-[13px] font-semibold tracking-wide transition-all duration-200">
              <FaWhatsapp className="text-base" />
              WhatsApp Us
            </a>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.56}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-[#E8E0D8] pt-10">
            {STATS.map(({ value, label }) => (
              <div key={label}>
                <p className="text-[#B22222] text-2xl font-bold leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}>{value}</p>
                <p className="text-[#444444] text-[11px] font-medium tracking-wide uppercase mt-1"
                  style={{ fontFamily: "'Inter', sans-serif" }}>{label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Fixed Secure Image Slider Box Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, x: 24 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.2 }}
          className="relative lg:-mt-20 w-full"
        >
          {/* This wrapper keeps everything framed inside a crisp, premium layout */}
          <div className="relative overflow-hidden h-[420px] sm:h-[520px] bg-white border border-neutral-200/80 p-6 shadow-md flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={IMAGES[currentImageIndex]}
                alt="Premium wooden products by Bareilly Wooden Crafts"
                className="max-w-full max-h-full object-contain p-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
          </div>
        </motion.div>

      </div>
    </section>
  );
}