
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "certifications", "contact"];
      let currentSection = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = element.offsetTop + (element.offsetParent ? element.offsetParent.offsetTop : 0);
      const headerHeight = document.querySelector('nav')?.clientHeight || 0;
      window.scrollTo({ top: offset - headerHeight, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-gray-900 shadow-md sticky top-0 z-20 transition-all duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Image src="/my-profile-img.jpg" alt="Dhanashree S R" width={40} height={40} className="rounded-full" />
            <span className="ml-2 text-xl font-semibold text-white">Dhanashree S R</span>
          </div>
          <div className="hidden md:flex items-center">
            {["Home", "About", "Skills", "Projects", "Certifications", "Contact"].map((item) => (
              <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className={`ml-4 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${activeSection === item.toLowerCase() ? "text-blue-400 bg-gray-800" : "text-gray-300 hover:text-white hover:bg-gray-700"}`}>
                {item}
              </button>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {["Home", "About", "Skills", "Projects", "Certifications", "Contact"].map((item) => (
              <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === item.toLowerCase() ? "text-blue-400 bg-gray-800" : "text-gray-300 hover:text-white hover:bg-gray-700"}`}>
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;