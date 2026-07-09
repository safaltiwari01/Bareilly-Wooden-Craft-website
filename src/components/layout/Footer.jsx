import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1F1F1F] text-white border-t border-neutral-800 pt-16 pb-8 font-body">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Top Grid Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Column 1: Brand Identifier (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h3 className="text-xl font-bold tracking-tight font-heading text-white">
              Bareilly Wooden<span className="text-[#B22222]"> Craft</span>
            </h3>
            <p className="text-neutral-400 text-[14px] leading-relaxed max-w-sm">
              An institutional leader in high-volume raw timber engineering, manufacturing premium doors, custom kitchenware, and industrial OEM handicrafts.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a 
                href="https://wa.me/917900032000" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2.5 bg-neutral-800/60 border border-neutral-700/50 text-neutral-300 hover:text-[#B22222] hover:border-[#B22222] transition-all duration-200"
              >
                <FaWhatsapp className="text-sm" />
              </a>
              <a 
                href="#" 
                className="p-2.5 bg-neutral-800/60 border border-neutral-700/50 text-neutral-300 hover:text-[#B22222] hover:border-[#B22222] transition-all duration-200"
              >
                <FaLinkedinIn className="text-sm" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links Navigation (2.5 Cols) */}
          <div className="lg:col-span-2.5">
            <h4 className="text-[12px] font-bold uppercase tracking-wider text-neutral-300 mb-5">
              Corporate Links
            </h4>
            <ul className="flex flex-col gap-3 text-[14px]">
              <li>
                <Link to="/" className="text-neutral-400 hover:text-[#B22222] transition-colors duration-150">
                  Home Workspace
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-400 hover:text-[#B22222] transition-colors duration-150">
                  Company Profile
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-neutral-400 hover:text-[#B22222] transition-colors duration-150">
                  Our Products
                </Link>
              </li>
              <li>
                <Link to="/manufacturing" className="text-neutral-400 hover:text-[#B22222] transition-colors duration-150">
                  Capabilities
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Material Specifications Quick Reference (2.5 Cols) */}
          <div className="lg:col-span-2.5">
            <h4 className="text-[12px] font-bold uppercase tracking-wider text-neutral-300 mb-5">
              Core Materials
            </h4>
            <ul className="flex flex-col gap-3 text-[14px] text-neutral-400">
              <li className="hover:text-white transition-colors duration-150 cursor-default">Acacia Wood</li>
              <li className="hover:text-white transition-colors duration-150 cursor-default">Sheesham (Rosewood)</li>
              <li className="hover:text-white transition-colors duration-150 cursor-default">Premium Mango Wood</li>
              <li className="hover:text-white transition-colors duration-150 cursor-default">Teak Wood Formulations</li>
            </ul>
          </div>

          {/* Column 4: Contact Core (3 Cols) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-[12px] font-bold uppercase tracking-wider text-neutral-300 mb-1">
              Procurement Desk
            </h4>
            
            <div className="flex items-start gap-3 text-[13.5px]">
              <FaMapMarkerAlt className="text-[#B22222] mt-1 flex-shrink-0" />
              <p className="text-neutral-400 leading-relaxed">
                Plot no. 59,Bhojipura Industrial Estate, Bhojipura, Bareilly,<br />Uttar Pradesh, India
              </p>
            </div>

            <div className="flex items-center gap-3 text-[13.5px]">
              <FaPhoneAlt className="text-[#B22222] flex-shrink-0" />
              <p className="text-neutral-400">+91 7900032000</p>
            </div>

            <div className="flex items-center gap-3 text-[13.5px]">
              <FaEnvelope className="text-[#B22222] flex-shrink-0" />
              <a href="mailto:bwcbly@gmail.com" className="text-neutral-400 hover:text-[#B22222] transition-colors">
                bwcbly@gmail.com
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Legal & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-neutral-500">
          <p>© {currentYear} Bareilly Wooden Crafts Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-neutral-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-300 transition-colors">Terms of Supply</a>
          </div>
        </div>

      </div>
    </footer>
  );
}