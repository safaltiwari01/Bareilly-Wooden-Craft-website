import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaTimes, FaSearchPlus } from "react-icons/fa";

export default function Gallery() {
  const location = useLocation();
  
  const galleryItems = [
    { 
      id: 1, 
      category: "doors", 
      title: "Teak Wood Entrance Door", 
      desc: "Anti-warping seasoned build with premium structural durability.", 
      img: "/images/D1.png" 
    },
    { 
      id: 2, 
      category: "doors", 
      title: "Teak Wood Door", 
      desc: "Polished multi-point locking base configurations.", 
      img: "/images/D2.png" 
    },
    { 
      id: 3, 
      category: "doors", 
      title: "Premium Teak Wood Door", 
      desc: "High-end craftsmanship with superior durability.", 
      img: "/images/D3.png" 
    },
    { 
      id: 4, 
      category: "doors", 
      title: "Premium Teak Wood Door", 
      desc: "Heavy-duty construction with Premium Teak Wood.", 
      img: "/images/D4.png" 
    },
    { 
      id: 5, 
      category: "doors", 
      title: "PremiumTeak Wooden Door", 
      desc: "Heavy-duty construction with Premium Teak Wood.", 
      img: "/images/D5.png" 
    },
    { 
      id: 6, 
      category: "doors", 
      title: "Premium Teak Wood Door", 
      desc: "Heavy-duty construction with Premium Teak Wood.", 
      img: "/images/D6.png" 
    },
    { 
      id: 7, 
      category: "furniture", 
      title: "Premium Furniture", 
      desc: "Solid hardwood furniture built for generations, crafted with precision joinery and Premium Sheesham & Teak Wood.", 
      img: "/images/F1.png" 
    },
    { 
      id: 8, 
      category: "furniture", 
      title: "Premium Furniture", 
      desc: "Solid hardwood furniture built for generations, crafted with precision joinery and Premium Sheesham & Teak Wood.", 
      img: "/images/F2.png" 
    },
    { 
      id: 9, 
      category: "furniture", 
      title: "Premium Furniture", 
      desc: "Solid hardwood furniture built for generations, crafted with precision joinery and Premium Sheesham & Teak Wood.", 
      img: "/images/F3.png" 
    },
    { 
      id: 10, 
      category: "furniture", 
      title: "Premium Furniture", 
      desc: "Solid hardwood furniture built for generations, crafted with precision joinery and Premium Sheesham & Teak Wood.", 
      img: "/images/F4.png" 
    },
    { 
      id: 11, 
      category: "furniture", 
      title: "Premium Furniture", 
      desc: "Solid hardwood furniture built for generations, crafted with precision joinery and Premium Sheesham & Teak Wood.", 
      img: "/images/F5.png" 
    },
    { 
      id: 12, 
      category: "furniture", 
      title: "Premium Furniture", 
      desc: "Solid hardwood furniture built for generations, crafted with precision joinery and Premium Sheesham & Teak Wood.", 
      img: "/images/F6.png" 
    },
    { 
      id: 13, 
      category: "furniture", 
      title: "Premium Furniture", 
      desc: "Solid hardwood furniture built for generations, crafted with precision joinery and Premium Sheesham & Teak Wood.", 
      img: "/images/F7.png" 
    },
    { 
      id: 14, 
      category: "furniture", 
      title: "Premium Furniture", 
      desc: "Solid hardwood furniture built for generations, crafted with precision joinery and Premium Sheesham & Teak Wood.", 
      img: "/images/F8.png" 
    },
    { 
      id: 15, 
      category: "furniture", 
      title: "Premium Furniture", 
      desc: "Solid hardwood furniture built for generations, crafted with precision joinery and Premium Sheesham & Teak Wood.", 
      img: "/images/F9.png" 
    },
    { 
      id: 16, 
      category: "lifestyle collection", 
      title: "Premium Furniture", 
      desc: "Solid hardwood furniture built for generations, crafted with precision joinery and Premium Sheesham & Teak Wood.", 
      img: "/images/F9.png" 
    },
    { 
      id: 17, 
      category: "lifestyle collection", 
      title: "Premium Products ", 
      desc: "Timeless designs in Premium Natural Wood.", 
      img: "/images/P1.png" 
    },
    { 
      id: 18, 
      category: "lifestyle collection", 
      title: "Premium Products", 
      desc: "Functional elegance crafted from Premium Mango & Acacia Wood.", 
      img: "/images/P2.png" 
    },
    { 
      id: 19, 
      category: "lifestyle collection", 
      title: "Premium Products", 
      desc: "Timeless designs in Premium Natural Wood.", 
      img: "/images/P3.png" 
    },
    { 
      id: 20, 
      category: "lifestyle collection", 
      title: "Premium Products", 
      desc: "Functional elegance crafted from Premium Mango & Acacia Wood.", 
      img: "/images/P4.png" 
    },
    { 
      id: 21, 
      category: "lifestyle collection", 
      title: "Premium Products", 
      desc: "Timeless designs in Premium Natural Wood.", 
      img: "/images/P5.png" 
    },
    { 
      id: 22, 
      category: "lifestyle collection", 
      title: "Premium Products", 
      desc: "Functional elegance crafted from Premium Mango & Acacia Wood.", 
      img: "/images/P6.png" 
    },
    { 
      id: 23, 
      category: "lifestyle collection", 
      title: "Premium Products", 
      desc: "Timeless designs in Premium Natural Wood.", 
      img: "/images/P7.png" 
    }
  ];

  // Simply add your interior factory image filenames here!
  const factoryImages = [
    "/images/FC1.png",
    "/images/FC2.png",
    "/images/FC3.png",
    "/images/FC4.png",
    "/images/FC5.png",
    "/images/FC6.png",
    "/images/FC7.png",
    "/images/FC8.png"
  ];

  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get("category");
    if (categoryParam) {
      setActiveFilter(categoryParam);
    } else {
      setActiveFilter("all");
    }
  }, [location]);

  const filteredItems = galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen pt-32 pb-24 bg-white font-body text-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Title Container */}
        <div className="max-w-3xl mb-12">
          <span className="text-[#B22222] text-[11px] font-bold tracking-[0.25em] uppercase block mb-3">
            Industrial Media Workspace
          </span>
          <h1 className="text-3xl lg:text-5xl font-bold tracking-tight mb-5 font-heading">
            Factory & Product Gallery
          </h1>
          <div className="h-1 w-16 bg-[#B22222]" />
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-neutral-100 pb-6">
          {["all", "doors", "lifestyle collection", "furniture", "factory"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`py-2 px-5 text-[13px] font-bold uppercase tracking-wider transition-all duration-150 ${
                activeFilter === tab 
                  ? "bg-[#B22222] text-white" 
                  : "bg-neutral-50 text-neutral-500 hover:bg-neutral-100 hover:text-[#1F1F1F]"
              }`}
            >
              {tab === "all" ? "Complete Overview" : tab}
            </button>
          ))}
        </div>

        {/* FACTORY VIEW: Pure Image Grid Wall */}
        {activeFilter === "factory" ? (
          <div>
            <div className="mb-8 max-w-2xl">
              <p className="text-neutral-500 text-sm leading-relaxed">
                An inside look at our manufacturing infrastructure and unit facilities in Bhojipura, Bareilly.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {factoryImages.map((imgSrc, index) => (
                <div 
                  key={index}
                  onClick={() => setSelectedImage({ img: imgSrc, title: "Factory Unit View" })}
                  className="group relative h-72 bg-neutral-100 overflow-hidden cursor-pointer border border-neutral-200/60"
                >
                  <img 
                    src={imgSrc} 
                    alt="Bareilly Wooden Craft Factory Infrastructure"
                    className="w-full h-full object-cover transform group-hover:scale-103 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <FaSearchPlus className="text-white text-lg" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* PRODUCT VIEW: Cards with dynamic titles/descriptions */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(activeFilter === "all" ? galleryItems : filteredItems).map((item) => (
              <div 
                key={item.id} 
                onClick={() => setSelectedImage(item)}
                className="group bg-white border border-neutral-200/60 p-4 shadow-sm relative overflow-hidden cursor-pointer"
              >
                <div className="h-64 w-full bg-neutral-50 overflow-hidden relative flex items-center justify-center">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="max-w-full max-h-full object-contain transform group-hover:scale-102 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
                    <FaSearchPlus className="text-white text-xl" />
                    <span className="text-white text-[12px] border border-white/50 py-1.5 px-4 uppercase font-bold tracking-wider">
                      Click to Zoom
                    </span>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="font-heading font-bold text-[16px] text-[#1F1F1F] mb-1">{item.title}</h3>
                  <p className="text-neutral-500 text-[13px]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* LIGHTBOX MODAL */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white text-2xl p-2 transition-colors focus:outline-none"
            onClick={() => setSelectedImage(null)}
          >
            <FaTimes />
          </button>

          <div 
            className="max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.img} 
              alt="Zoomed View" 
              className="max-w-full max-h-[78vh] object-contain shadow-2xl"
            />
            {/* Display typography layout ONLY if description metadata exists */}
            {selectedImage.desc && (
              <div className="text-center mt-4 max-w-2xl px-4">
                <h2 className="text-white font-heading font-bold text-lg mb-1">{selectedImage.title}</h2>
                <p className="text-neutral-400 text-sm leading-relaxed">{selectedImage.desc}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}