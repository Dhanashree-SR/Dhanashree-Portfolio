"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import React from "react"

const timelineData = {
  workExperience: [
    {
      title: "Data Analyst Intern",
      company: "KultureHire",
      date: "Oct 2024 - Present",
      description:
        "• Participating in a remote internship focused on end-to-end unguided projects. • Leveraging provided resources to develop skills in 𝗦𝗤𝗟, 𝗘𝘅𝗰𝗲𝗹, 𝗮𝗻𝗱 𝗣𝗼𝘄𝗲𝗿 𝗕𝗜, while gaining hands-on experience in data cleaning, visualization, and dashboard creation. • Engaging independently with real-world datasets to deliver insights and support data-driven decisions."
    },
    {
      title: "FronEnd Developer Intern",
      company: "Nammacart",
      date: "Jun 2023 - Jul 2023",
      description:
        "• Conducted rigorous testing and debugging to identify and rectify any compatibility issues that arose during the development process. •  Utilized HTML, CSS, and JavaScript to implement responsive designs and ensure consistent functionality across various mobile devices.",
    },
  ],
  education: [
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Vels University",
      date: "2020 - 2024",
      description:
        "• Completed a final year project on 𝗽𝗿𝗲𝗱𝗶𝗰𝘁𝗶𝗻𝗴 𝗰𝗼𝗹𝗹𝗲𝗴𝗲 𝗱𝗿𝗼𝗽𝗼𝘂𝘁 𝗿𝗮𝘁𝗲𝘀 𝘂𝘀𝗶𝗻𝗴 𝗺𝗮𝗰𝗵𝗶𝗻𝗲 𝗹𝗲𝗮𝗿𝗻𝗶𝗻𝗴, which was published in the IEEE conference. • Developed a predictive model to identify students at risk, providing valuable insights for educational institutions and students. • This project honed my skills in data analysis, machine learning algorithms, and data visualization.",
    },
  ],
}

const TimelineSection = () => {
  const [activeTab, setActiveTab] = useState("workExperience")

  return (
    <section id="timeline" className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center text-white"
        >
          Experience & Education
        </motion.h2>
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setActiveTab("workExperience")}
            className={`px-4 py-2 rounded-md text-sm md:text-base transition-colors duration-300 ${
              activeTab === "workExperience" ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            Work Experience
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className={`px-4 py-2 rounded-md text-sm md:text-base transition-colors duration-300 ${
              activeTab === "education" ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            Education
          </button>
        </div>
        <div className="relative">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-500"></div>
          {timelineData[activeTab].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative mb-8 md:mb-12"
            >
              <div
                className={`flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="hidden md:block w-1/2"></div>
                <div className="w-6 h-6 absolute left-0 md:left-1/2 top-1/2 md:top-1/2 transform -translate-x-1/2 md:-translate-y-1/2 bg-blue-500 rounded-full z-10"></div>
                <div
                  className={`w-full md:w-[calc(50%-1.5rem)] p-4 rounded-lg shadow-md bg-gray-800 ${
                    index % 2 === 0 ? "md:ml-auto md:text-right" : ""
                  }`}
                >
                  <h3 className="text-lg md:text-xl font-bold text-white">{item.title || item.degree}</h3>
                  <p className="font-semibold text-blue-400">{item.company || item.institution}</p>
                  <p className="text-sm text-gray-200">{item.date}</p>
                  <p className="mt-0 text-sm md:text-base text-gray-300">{item.description.split("•").map((line, i) => (<React.Fragment key={i}> {i > 0 && "• "}{line.trim()} <br/><br/>
        </React.Fragment>
      ))}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TimelineSection

