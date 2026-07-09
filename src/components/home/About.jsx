import { motion } from "framer-motion";

const ABOUT_PILLARS = [
  {
    title: "Bulk & OEM Scale",
    description: "Equipped with advanced multi-axis woodworking machinery to handle large-scale commercial contracts and precision OEM specifications for global brands."
  },
  {
    title: "Premium Timber Sourcing",
    description: "Strict quality control matrices ensure that every single item is constructed from structurally sound, kiln-dried timber like Acacia, Sheesham, and Mango wood."
  },
  {
    title: "B2B Project Logistics",
    description: "We work directly with builders, developers, and exporters—delivering reliable turnarounds, clear invoicing, and strict on-time dispatches."
  }
];

const textFadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

export default function About() {
  return (
    <section id="about" className="bg-[#F8F4F0] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Structural Title Branding (Fixed Sticky Constraint for Mobile) */}
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <span className="text-[#B22222] text-[11px] font-bold tracking-[0.25em] uppercase block mb-4">
            Corporate Overview
          </span>
          
          <h2 className="text-[#1F1F1F] font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight mb-6">
            An Industrial Infrastructure Built for <span className="text-[#B22222]">Bulk Timber Demand</span>
          </h2>
          
          <div className="h-1 w-16 bg-[#B22222] mb-6" />
          
          <p className="text-neutral-500 text-sm leading-relaxed">
            Operating out of Bareilly, Bareilly Wooden Crafts Pvt. Ltd. has grown into a mechanized B2B wood fabrication manufacturing powerhouse. We blend master woodcraft engineering with disciplined delivery pipelines to service real estate developments, high-volume retail supply chains, and demanding export standards.
          </p>
        </div>

        {/* Right Column: Cascading Operational Competencies */}
        <div className="lg:col-span-7 flex flex-col gap-10 lg:pl-6">
          {ABOUT_PILLARS.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              variants={textFadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={index * 0.15}
              className="group border-b border-neutral-100 pb-8 last:border-0 last:pb-0"
            >
              <div className="flex items-start gap-5">
                {/* Numeric Index Branding */}
                <span className="text-xl lg:text-2xl font-bold text-neutral-300 group-hover:text-[#8c6239] transition-colors duration-300 select-none pt-0.5">
                  0{index + 1}
                </span>
                
                {/* Content Core Block */}
                <div className="flex flex-col">
                  <h3 className="text-[#1F1F1F] text-lg lg:text-xl font-bold mb-3 tracking-tight group-hover:text-[#8c6239] transition-colors duration-300">
                    {pillar.title}
                  </h3>
                  <p className="text-neutral-600 text-[14px] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}