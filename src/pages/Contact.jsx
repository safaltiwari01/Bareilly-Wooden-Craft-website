import { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    productType: "Doors",
    woodPreference: "Acacia",
    quantity: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    loading: false,
    error: false
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitted: false, loading: true, error: false });

    // Web3Forms accepts all your custom inputs inside a flat object payload
    const payload = {
      // ACTION REQUIRED: Go to web3forms.com, get your free access key, and paste it here!
      access_key: "85d44cdc-b984-4dfb-9687-8625a04772ac", 
      subject: `New B2B RFQ Inquiry from ${formData.name}`,
      from_name: "BWC Website Lead Desk",
      ...formData
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus({ submitted: true, loading: false, error: false });
        // Clear out the form inputs on a successful transmit
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          productType: "Doors",
          woodPreference: "Acacia",
          quantity: "",
          message: "",
        });
        setTimeout(() => setFormStatus(prev => ({ ...prev, submitted: false })), 6000);
      } else {
        setFormStatus({ submitted: false, loading: false, error: true });
      }
    } catch (err) {
      setFormStatus({ submitted: false, loading: false, error: true });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-16">
          <span className="text-[#B22222] text-[11px] font-bold tracking-[0.25em] uppercase block mb-3">
            B2B RFQ Workspace
          </span>
          <h1 className="text-[#1F1F1F] text-4xl lg:text-5xl font-bold tracking-tight mb-6 font-heading">
            Request a Bulk Quote
          </h1>
          <div className="h-1 w-16 bg-[#B22222] mb-6" />
          <p className="text-[#444444] text-[15px] leading-[1.8] font-body">
            Partner with Bareilly Wooden Craft Pvt. Ltd. for precision manufacturing of export-quality wooden products. Fill out our Request for Quote (RFQ) form below, and our commercial estimation team will evaluate your specifications within 24 business hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Corporate Info */}
          <div className="lg:col-span-5 bg-white p-8 lg:p-10 border border-neutral-200/60 shadow-sm flex flex-col gap-8">
            <div>
              <h3 className="text-[#1F1F1F] text-lg font-bold font-heading mb-6">Factory HQ</h3>
              
              <div className="flex items-start gap-4 mb-5 font-body">
                <div className="p-3 bg-neutral-50 text-[#B22222] mt-1 border border-neutral-100">
                  <FaMapMarkerAlt className="text-sm" />
                </div>
                <div>
                  <p className="text-[12px] uppercase tracking-wider font-semibold text-[#666666] mb-1">Location</p>
                  <p className="text-[#1F1F1F] text-[14px] font-medium leading-relaxed">
                    Plot no. 59 Bhojipura Industrial Estate, Bhojipura, Bareilly, <br />Uttar Pradesh, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-5 font-body">
                <div className="p-3 bg-neutral-50 text-[#B22222] mt-1 border border-neutral-100">
                  <FaPhoneAlt className="text-sm" />
                </div>
                <div>
                  <p className="text-[12px] uppercase tracking-wider font-semibold text-[#666666] mb-1">Call Us</p>
                  <p className="text-[#1F1F1F] text-[14px] font-medium">+91 7900032000</p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-5 font-body">
                <div className="p-3 bg-neutral-50 text-[#B22222] mt-1 border border-neutral-100">
                  <FaEnvelope className="text-sm" />
                </div>
                <div>
                  <p className="text-[12px] uppercase tracking-wider font-semibold text-[#666666] mb-1">Email Procurement</p>
                  <a href="mailto:bwcbly@gmail.com" className="text-[#B22222] text-[14px] font-medium hover:underline">
                    bwcbly@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 font-body">
                <div className="p-3 bg-neutral-50 text-[#B22222] mt-1 border border-neutral-100">
                  <FaClock className="text-sm" />
                </div>
                <div>
                  <p className="text-[12px] uppercase tracking-wider font-semibold text-[#666666] mb-1">Operational Hours</p>
                  <p className="text-[#444444] text-[14px]">Mon - Sat: 9:00 AM - 5:30 PM IST</p>
                </div>
              </div>
            </div>

            <div className="border-t border-neutral-100 pt-6">
              <h4 className="text-[#1F1F1F] text-[14px] font-bold uppercase tracking-wider mb-4 font-body">Instant Communication</h4>
              <a 
                href="https://wa.me/917900032000"
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 border-2 border-[#1F1F1F] text-[#1F1F1F] hover:border-[#B22222] hover:text-[#B22222] py-3.5 text-[13px] font-bold tracking-wide transition-all duration-200"
              >
                <FaWhatsapp className="text-base" />
                Connect via WhatsApp Business
              </a>
            </div>
          </div>

          {/* Right Column: RFQ Form */}
          <div className="lg:col-span-7 bg-white p-8 lg:p-10 border border-neutral-200/60 shadow-sm">
            <h3 className="text-[#1F1F1F] text-xl font-bold font-heading mb-6">Commercial Estimation Form</h3>
            
            {formStatus.submitted && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 mb-6 text-[14px] font-medium"
              >
                Specifications sent successfully to our procurement desk. We will evaluate your file within 24 business hours.
              </motion.div>
            )}

            {formStatus.error && (
              <div className="bg-rose-50 border border-rose-200 text-rose-800 p-4 mb-6 text-[14px] font-medium">
                Transmission pipeline failed. Please retry or contact us directly at bwcbly@gmail.com.
              </div>
            )}

            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5 font-body">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#666666] mb-2">Your Name *</label>
                <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-neutral-50/80 border border-neutral-200 p-3 text-[14px] focus:outline-none focus:border-[#B22222]" />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#666666] mb-2">Corporate Email *</label>
                <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-neutral-50/80 border border-neutral-200 p-3 text-[14px] focus:outline-none focus:border-[#B22222]" />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#666666] mb-2">Phone Number *</label>
                <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-neutral-50/80 border border-neutral-200 p-3 text-[14px] focus:outline-none focus:border-[#B22222]" />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#666666] mb-2">Company / Brand Name</label>
                <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full bg-neutral-50/80 border border-neutral-200 p-3 text-[14px] focus:outline-none focus:border-[#B22222]" />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#666666] mb-2">Product Category</label>
                <select name="productType" value={formData.productType} onChange={handleChange} className="w-full bg-neutral-50/80 border border-neutral-200 p-3 text-[14px] focus:outline-none focus:border-[#B22222]">
                  <option value="Doors">Premium Wooden Doors </option>
                  <option value="Chopping Boards">Chopping Boards </option>
                  <option value="Furniture">High-Volume Furniture </option>
                  <option value="Custom OEM">Custom OEM Fabrication</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#666666] mb-2">Primary Timber Material</label>
                <select name="woodPreference" value={formData.woodPreference} onChange={handleChange} className="w-full bg-neutral-50/80 border border-neutral-200 p-3 text-[14px] focus:outline-none focus:border-[#B22222]">
                  <option value="Acacia">Acacia Wood</option>
                  <option value="Sheesham">Sheesham Wood</option>
                  <option value="Mango">Mango Wood</option>
                  <option value="Teak">Teak Wood</option>
                  <option value="Chilbil">Chilbil Wood</option>
                  <option value="Other">Other Wood</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#666666] mb-2">Target Volume / Batch Size *</label>
                <input required type="text" name="quantity" placeholder="e.g., 500 units, 2 Container Loads" value={formData.quantity} onChange={handleChange} className="w-full bg-neutral-50/80 border border-neutral-200 p-3 text-[14px] focus:outline-none focus:border-[#B22222]" />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#666666] mb-2">Technical Specifications</label>
                <textarea rows="4" name="message" placeholder="Provide raw thickness, sizing guidelines, or finish preferences..." value={formData.message} onChange={handleChange} className="w-full bg-neutral-50/80 border border-neutral-200 p-3 text-[14px] focus:outline-none focus:border-[#B22222] resize-none" />
              </div>

              <div className="sm:col-span-2 pt-2">
                <button 
                  type="submit" 
                  disabled={formStatus.loading}
                  className="w-full bg-[#B22222] hover:bg-[#8B1A1A] text-white py-4 px-6 text-[13px] font-bold uppercase tracking-wider transition-all duration-200 disabled:opacity-50"
                >
                  {formStatus.loading ? "Transmitting Specifications Portfolio..." : "Submit Specifications Portfolio"}
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}