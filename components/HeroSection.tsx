"use client"
import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBitcoin, faCreativeCommonsSamplingPlus, faGoogle, faGooglePlus, faMailchimp } from '@fortawesome/free-brands-svg-icons';
import { faGoogleDrive } from "@fortawesome/free-brands-svg-icons/faGoogleDrive";
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faMarkdown } from "@fortawesome/free-brands-svg-icons/faMarkdown";
import { motion } from "framer-motion"

const TypedText = ({ strings, typingSpeed = 150, deletingSpeed = 100, delayBetweenStrings = 1000 }) => {
  const [currentStringIndex, setCurrentStringIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentString = strings[currentStringIndex]
    if (isDeleting) {
      if (currentText === "") {
        setIsDeleting(false)
        setCurrentStringIndex((prevIndex) => (prevIndex + 1) % strings.length)
        return
      }
      const timer = setTimeout(() => {
        setCurrentText((prevText) => prevText.slice(0, -1))
      }, deletingSpeed)
      return () => clearTimeout(timer)
    } else {
      if (currentText === currentString) {
        const timer = setTimeout(() => {
          setIsDeleting(true)
        }, delayBetweenStrings)
        return () => clearTimeout(timer)
      }
      const timer = setTimeout(() => {
        setCurrentText((prevText) => currentString.slice(0, prevText.length + 1))
      }, typingSpeed)
      return () => clearTimeout(timer)
    }
  }, [currentText, isDeleting, currentStringIndex, strings, typingSpeed, deletingSpeed, delayBetweenStrings])

  return <span>{currentText}</span>
}

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-start overflow-hidden pl-12 md:pl-24 lg:pl-36">
    <div className="absolute inset-0 z-0">
      <img 
        src="/hero-bg.jpg" 
        alt="Background Image" 
        className="w-full h-full object-cover object-left md:object-cover lg:object-contain"
        loading="eager"
      />
    </div>
      <div className="relative z-10 text-left">
        <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-3xl md:text-3xl lg:text-4xl font-bold mb-4 text-white" >
          Hi, My name is Dhanashree S R
        </motion.h1>
        <motion.h2 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-gray-200" >
          I'm a{" "}
          <span className="text-yellow-300 font-bold">
            <TypedText strings={["Data Analyst", "SQL Developer"]} typingSpeed={100} deletingSpeed={50} delayBetweenStrings={2000} />
          </span>
        </motion.h2>
        <motion.p 
  initial={{ opacity: 0, y: 50 }} 
  animate={{ opacity: 1, y: 0 }} 
  transition={{ duration: 0.8, delay: 0.4 }} 
  className="text-xl md:text-xl lg:text-xl text-white-300 mb-8 w-full md:w-3/4 xl:w-3/4 pr-8"
>Turning Data into Strategic Insights | Skilled in Excel, SQL & Power BI.
</motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.6 }} 
          className="flex mt-4"
        >
          <a href="https://github.com/SR-Dhana-shree/" target="_blank" rel="noopener noreferrer" className="mr-4 text-gray-300 hover:text-yellow-300 transition-all duration-300 ease-in-out">
            <div className="rounded-full bg-white p-2 hover:bg-yellow-200 transition-all duration-300 ease-in-out">
              <img src="/github.svg" alt="GitHub Logo" className="w-8 h-8" />
            </div>
          </a>
          <a href="mailto:dhanashreesr5@gmail.com" className="mr-4 text-gray-300 hover:text-yellow-300 transition-all duration-300 ease-in-out">
        <div className="rounded-full bg-white p-2 hover:bg-yellow-200 transition-all duration-300 ease-in-out">
          <img src="/gmail.svg" alt="Gmail Logo" className="w-8 h-8" />
        </div>
      </a>
      <a href="https://www.linkedin.com/in/dhanashree-sr/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-300 transition-all duration-300 ease-in-out">
        <div className="rounded-full bg-white p-2 hover:bg-yellow-200 transition-all duration-300 ease-in-out">
          <img src="/linkedin.svg" alt="LinkedIn Logo" className="w-8 h-8" />
        </div>
      </a>
    </motion.div>

    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8, delay: 0.8 }} 
      className="mt-8"
    >
      <a href="\Dhanashree S R da.pdf" download className="bg-yellow-300 hover:bg-yellow-500 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
        <FontAwesomeIcon icon={faArrowDown} className="mr-2" /> Download Resume
      </a>
    </motion.div>
  </div>
</section>

)
}

export default HeroSection