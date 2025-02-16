"use client";

import type React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion"

const ContactSection = () => {
  return (
    <motion.section initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} id="contact" className="py-16 bg-gray-800">
      <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-3xl text-white font-bold mb-4 text-center">Contact</motion.h1>
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="w-full lg:w-1/2 xl:w-1/2 p-6">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497511.23105803586!2d79.87899115728099!3d13.04798594700017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1738318330908!5m2!1sen!2sin" width="100%" height="500" frameBorder="0" style={{ border: 0 }} allowFullScreen></iframe>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className="w-full lg:w-1/2 xl:w-1/2 p-6 pt-2">
          <motion.img initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1 }} src="/Contact us.svg" alt="Girl working on laptop" />
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.2 }} className="flex flex-col mt-8">
            <motion.h2 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.4 }} className="text-3xl text-white font-bold mb-4">Get in Touch</motion.h2>
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.6 }} className="flex items-start justify-between flex-wrap">
              <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.8 }} className="flex flex-col items-start">
                {/* <motion.p initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 2 }} className="text-white text-lg">Reach me out</motion.p> */}
                <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 2 }} className="flex space-x-4 mt-2">
                  <motion.a initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration : 0.8, delay: 2.2 }} 
                    href="https://github.com/SR-Dhana-shree/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-300 transition-all duration-300 ease-in-out">
                    <div className="rounded-full bg-white p-2 hover:bg-yellow-200 transition-all duration-300 ease-in-out">
                      <img src="/github.svg" alt="GitHub Logo" className="w-8 h-8" />
                    </div>
                  </motion.a>
                  <motion.a initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 2.4 }} href="mailto:dhanashreesr5@gmail.com" className="mr-4 text-gray-300 hover:text-yellow-300 transition-all duration-300 ease-in-out">
                    <div className="rounded-full bg-white p-2 hover:bg-yellow-200 transition-all duration-300 ease-in-out">
                      <img src="/gmail.svg" alt="Gmail Logo" className="w-8 h-8" />
                    </div>
                  </motion.a>
                  <motion.a initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 2.6 }} href="https://www.linkedin.com/in/dhanashree-sr/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-300 transition-all duration-300 ease-in-out">
                    <div className="rounded-full bg-white p-2 hover:bg-yellow-200 transition-all duration-300 ease-in-out">
                      <img src="/linkedin.svg" alt="LinkedIn Logo" className="w-8 h-8" />
                    </div>
                  </motion.a>
                </motion.div>
              </motion.div>
              <motion.a initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 2.8 }} href="/Dhanashree S R.pdf" download target= "_blank" className="bg-yellow-300 hover:bg-yellow-500 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mt-4">
                <FontAwesomeIcon icon={faArrowDown} className="mr-2" /> Download Resume
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ContactSection;