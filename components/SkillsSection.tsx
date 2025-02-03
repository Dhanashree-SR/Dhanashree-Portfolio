"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const skills = [
  { name: "Excel", logo: "/excel-icon.svg" },
  {
    name: "Google Sheets",
    logo: "/googlesheets-icon.svg"
  },
  { name: "Power BI", logo: "/powerbi-icon.svg" },
  { name: "Python", logo: "/python-icon.svg" },
  { name: "SQL", logo: "/sql-database-sql-azure-svgrepo-com.svg" },
  { name: "Git", logo: "/git-svgrepo-com.svg" },
  { name: "GitHub", logo: "/github.svg" },
  { name: "Canva", logo: "/canva-icon (1).svg" }, 
  { name: "VsCode", logo: "/vscode.svg" },
  { name: "HTML", logo: "/html.svg" },
  { name: "CSS", logo: "/css.svg" }
]

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center text-white"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image
                  src={skill.logo || "/placeholder.svg"}
                  alt={skill.name}
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="mt-2 text-sm md:text-base font-medium text-center text-gray-300">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection

