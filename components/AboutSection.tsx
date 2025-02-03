"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBitcoin, faCreativeCommonsSamplingPlus, faGoogle, faGooglePlus, faLinkedin, faLinkedinIn, faMailchimp } from '@fortawesome/free-brands-svg-icons';
import { faGoogleDrive } from "@fortawesome/free-brands-svg-icons/faGoogleDrive";
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faMarkdown } from "@fortawesome/free-brands-svg-icons/faMarkdown";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center text-white"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/3 flex justify-center"
          >
            <Image
              src="/my-profile-img.jpg"
              alt="Dhanashree S R"
              width={300}
              height={300}
              className="rounded-full shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-2/3"
          >
            <p className="text-base md:text-sm lg:text-base text-gray-300 text-justify"> Hello! I’m Dhanashree, a passionate Data Analyst Intern at KultureHire, where I specialize in transforming complex data into actionable insights. I’m skilled in data cleaning, analysis, and visualization using Excel, SQL, and Power BI to create reports and dashboards that help businesses make smarter decisions.<br/> <br/>
I’m always excited to learn and grow in the field, tackling every challenge with a positive mindset and adaptability. My goal is to use data to solve problems, uncover trends, and simplify decision-making processes.<br/><br/>
Along with my professional work, I’m thrilled to start sharing my insights as a Data Analytics Content Creator on LinkedIn. I’ll be posting about my preparation, my projects, and sharing tips to help freshers and aspiring data professionals kickstart their careers.<br/><br/>
It brings me great joy to connect with individuals who have similar perspectives. You are welcome to reach out to me through LinkedIn or Email. Should you find that my skills align with your team's needs, I encourage you to explore my personal website and contemplate the opportunity of bringing me on board. </p>
              <a href="https://www.linkedin.com/in/dhanashree-sr/" target="_blank" className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
              <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
              Connect with me
              </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

