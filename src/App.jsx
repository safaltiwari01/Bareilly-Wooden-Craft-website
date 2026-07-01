import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/home/Hero";
import About from "./components/home/About";
import Products from "./components/home/Products"; 
import Capabilities from "./components/home/Capabilities";
import Gallery from "./pages/Gallery"; // 1. Import your dynamic Gallery
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-[#1F1F1F] antialiased flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route 
              path="/" 
              element={
                <div className="w-full flex flex-col">
                  <Hero />
                  <About />
                  <Products />
                  <Capabilities /> 
                </div>
              } 
            />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/manufacturing" element={<Capabilities />} />
            
            {/* 2. Swapped placeholder for your active live filtering Gallery element */}
            <Route path="/gallery" element={<Gallery />} />
            
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;