import { motion } from "framer-motion";
import { FaCogs, FaCubes, FaShieldAlt, FaWarehouse } from "react-icons/fa";

export default function Capabilities() {
  const coreMetrics = [
    {
      id: 1,
      icon: <FaWarehouse className="text-xl" />,
      title: "Industrial Footprint",
      description: "Equipped with specialized wood-turning lathes, high-precision hydraulic pressing beds, and commercial cross-cut sanding machinery tailored for large-scale timber fabrication."
    },
    {
      id: 2,
      icon: <FaCogs className="text-xl" />,
      title: "Custom OEM Processing",
      description: "Full-scale custom configuration pipelines. We translate technical blueprint parameters into high-volume batch runs for private labels, corporate kitchenware brands, and architectural firms."
    },
    {
      id: 3,
      icon: <FaCubes className="text-xl" />,
      title: "Material Specialization",
      description: "Advanced processing profiles for raw seasoned Acacia, dense Indian Sheesham (Rosewood), and light-grain Mango wood, ensuring moisture-locked stability across international export zones."
    },
    {
      id: 4,
      icon: <FaShieldAlt className="text-xl" />,
      title: "Rigid Quality Controls",
      description: "Every single production batch undergoes strict anti-warping assessments, chemical-free food-safe finish sealing, and ultrasonic structural moisture testing prior to container dispatch."
    }
  ];

  return (
    <section className="py-24 bg-[#F8F4F0]/60 border-t border-neutral-200/50 font-body">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[#B22222] text-[11px] font-bold tracking-[0.25em] uppercase block mb-3">
            Production Scale
          </span>
          <h2 className="text-[#1F1F1F] text-3xl lg:text-4xl font-bold tracking-tight mb-5 font-heading">
            Manufacturing Capabilities
          </h2>
          <div className="h-1 w-16 bg-[#B22222] mb-6" />
          <p className="text-[#444444] text-[15px] leading-[1.8]">
            Bareilly Wooden Crafts Private Limited couples modern woodworking technology with scalable logistics infrastructure. From raw log processing to automated sanding and finishing lines, our facility is engineered for continuous production capacity.
          </p>
        </div>

        {/* Capabilities Grid Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coreMetrics.map((capability) => (
            <div 
              key={capability.id}
              className="bg-white border border-neutral-200/60 p-8 shadow-sm hover:shadow-md hover:border-neutral-300 transition-all duration-200 flex gap-6 items-start"
            >
              <div className="p-4 bg-[#F8F4F0] text-[#B22222] border border-neutral-100 flex-shrink-0">
                {capability.icon}
              </div>
              <div>
                <h3 className="text-[#1F1F1F] text-[16px] font-bold uppercase tracking-wider mb-3">
                  {capability.title}
                </h3>
                <p className="text-[#666666] text-[14px] leading-[1.7]">
                  {capability.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Block */}
        <div className="mt-12 bg-[#1F1F1F] text-white p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-heading text-xl font-bold mb-2">Require Custom Structural Technicalities?</h4>
            <p className="text-neutral-400 text-[14px]">Our technical development desk can review your custom CAD models or sample schematics.</p>
          </div>
          <button 
            onClick={() => window.location.href = '/contact'}
            className="bg-[#B22222] hover:bg-[#8B1A1A] text-white py-3.5 px-6 text-[13px] font-bold uppercase tracking-wider transition-all duration-200 flex-shrink-0"
          >
            Consult Infrastructure Layout
          </button>
        </div>

      </div>
    </section>
  );
}