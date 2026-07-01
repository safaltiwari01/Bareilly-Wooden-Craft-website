import { Link } from "react-router-dom";
import { FaDoorOpen, FaUtensils, FaChair, FaArrowRight } from "react-icons/fa";

export default function Products() {
  const productCategories = [
    {
      id: 1,
      icon: <FaDoorOpen className="text-2xl" />,
      title: "Precision-Crafted Wooden Doors at Scale",
      materials: "Sheesham & Teak Wood",
      description: "We specialize in the high-volume production of premium wooden doors. Combining exceptional craftsmanship with structural integrity, we deliver durable, beautifully finished architectural doors tailored for modern spaces.",
      categoryKey: "doors" 
    },
    {
      id: 2,
      icon: <FaUtensils className="text-2xl" />,
      title: "Premium Wooden Utilities & Living",
      materials: "Acacia, Chilbil, Pine & Mango Wood",
      description: "From elegant kitchenware to premium desk organizers, we specialize in high-volume manufacturing of superior wooden utility items. We bring exceptional craftsmanship to scale, delivering beautifully finished wood products tailored for modern spaces.",
      categoryKey: "kitchenware" 
    },
    {
      id: 3,
      icon: <FaChair className="text-2xl" />,
      title: "Premium Wooden Furniture. Manufactured at Scale.",
      materials: "Acacia,Teak, Sheesham & Mango",
      description: "From functional design to lasting durability, we combine exceptional craftsmanship with high-volume production to deliver premium, beautifully finished wood furniture for modern spaces.",
      categoryKey: "furniture" 
    }
  ];

  return (
    <section className="py-24 bg-white font-body">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[#B22222] text-[11px] font-bold tracking-[0.25em] uppercase block mb-3">
            B2B Catalog Portfolio
          </span>
          <h2 className="text-[#1F1F1F] text-3xl lg:text-4xl font-bold tracking-tight mb-5 font-heading">
            Our Core Product Lines
          </h2>
          <div className="h-1 w-16 bg-[#B22222] mb-6" />
          <p className="text-[#444444] text-[15px] leading-[1.8]">
            We provide specialized OEM production workflows for retail brands, global importers, and high-volume contract supply chains. By anchoring our mass manufacturing capabilities in strict material integrity and design fidelity, we deliver premium, precision-engineered wood products at scale for international markets.
          </p>
        </div>

        {/* Product Grid Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {productCategories.map((product) => (
            <div 
              key={product.id}
              className="group bg-white border border-neutral-200/70 p-8 shadow-sm flex flex-col justify-between hover:border-[#B22222] transition-all duration-300 relative overflow-hidden"
            >
              <div>
                {/* Icon wrapper */}
                <div className="p-4 bg-neutral-50 border border-neutral-100 text-[#B22222] w-fit mb-6 transition-colors group-hover:bg-[#B22222] group-hover:text-white group-hover:border-[#B22222]">
                  {product.icon}
                </div>
                
                {/* Title & Timber tags */}
                <h3 className="text-[#1F1F1F] text-lg font-bold font-heading mb-1 group-hover:text-[#B22222] transition-colors">
                  {product.title}
                </h3>
                <span className="text-[11px] uppercase tracking-wider font-bold text-neutral-400 block mb-4">
                  {product.materials}
                </span>
                
                {/* Description */}
                <p className="text-[#666666] text-[14px] leading-[1.7] mb-8">
                  {product.description}
                </p>
              </div>

              {/* Bottom Action trigger linked to dynamic gallery parameters */}
              <Link 
                to={`/gallery?category=${product.categoryKey}`} 
                className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider text-[#1F1F1F] group-hover:text-[#B22222] transition-colors mt-auto"
              >
                View Gallery Images
                <FaArrowRight className="text-[10px] transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}