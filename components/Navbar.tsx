"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import debounce from "lodash.debounce"; // Install lodash.debounce for better performance

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Sections to observe
  const sections = ["home", "about", "skills", "projects", "certifications", "contact"];

  // Optimized scroll handler using debounce
  const handleScroll = useCallback(
    debounce(() => {
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
    }, 100), // 100ms debounce
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const rect = element.getBoundingClientRect();
      const offset = rect.top + window.scrollY;  // Calculate the scroll position
      const headerHeight = document.querySelector("nav")?.clientHeight || 0;
      window.scrollTo({ top: offset - headerHeight, behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };
  
  return (
    <nav className="bg-gray-900 shadow-md fixed top-0 w-full z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">

          {/* Logo */}
          <div className="flex items-center">
            <Image src="/my-profile-img.jpg" alt="Dhanashree S R" width={40} height={40} className="rounded-full" />
            <span className="ml-2 text-xl font-semibold text-white">Dhanashree S R</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            {sections.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`ml-4 px-3 py-2 rounded-md text-sm font-medium transition-all ${activeSection === item ? "text-blue-400 bg-gray-800" : "text-gray-300 hover:text-white hover:bg-gray-700"}`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {sections.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-all ${activeSection === item ? "text-blue-400 bg-gray-800" : "text-gray-300 hover:text-white hover:bg-gray-700"}`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
