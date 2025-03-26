"use client"

import Image from "next/image"
import { GitlabIcon as GitHub } from 'lucide-react'
import { useState } from "react"
import { motion } from "framer-motion"

const projects = [
  {
    title: "Maven Roasters Coffee Dashboard ",
    description: "A SQL-based restaurant order analysis to uncover key insights on menu performance, customer preferences, and high-value orders. Using MySQL, this project helps optimize pricing, improve menu offerings, and enhance customer experience with data-driven decisions.",
    image: "/coffee-dashboard.jpeg",
    technologies: ["Excel"],
    githubUrl: "https://github.com/Dhanashree-SR/Maven-Roasters-Coffee-Shop-Dashboard",
  },
  {
    title: "Superstore Sales Report ",
    description: "An interactive Power BI dashboard that visualizes key business metrics for a superstore, including total sales, product performance, and regional trends. The report provides actionable insights into sales performance, helping the business optimize operations, increase sales, and improve customer satisfaction by tracking trends and identifying areas for growth.",
    image: "/Superstore_report.jpg",
    technologies: ["Power BI"],
    githubUrl: "https://github.com/Dhanashree-SR/Superstore-Sales-Report",
  },
  {
    title: "Restaurant Order Analysis using SQL",
    description: "A database-driven project managing ticket bookings for events or transportation, featuring table creation and normalization, CRUD (Create, Read, Update, Delete) operations, joins and subqueries for data retrieval, and constraints for data integrity, providing a robust and efficient system for managing ticket bookings using SQL.",
    image: "/Restaurant Order Analysis.png",
    technologies: ["SQL"],
    githubUrl: "https://github.com/Dhanashree-SR/Restaurant-Order-Analysis",
  },
  {
    title: "Student Information System",
    description: "A Python-based mini project designed to simplify student registration. It features a user-friendly interface, student data storage using SQLite, basic input validation, and easy registration and data management for a seamless experience.",
    image: "/student-info-system.jpeg",
    technologies: ["Python"],
    githubUrl: "https://github.com/SR-Dhana-shree/Student_information_using-python",
  },
  {
    title: "E ticket Booking Database",
    description: "A database-driven project managing ticket bookings for events or transportation, featuring table creation and normalization, CRUD (Create, Read, Update, Delete) operations, joins and subqueries for data retrieval, and constraints for data integrity, providing a robust and efficient system for managing ticket bookings using SQL.",
    image: "/E Ticket Booking Database.png",
    technologies: ["SQL"],
    githubUrl: "https://github.com/Dhanashree-SR/E-ticket-Booking-using-SQL",
  },
  {
    title: "Text to speech",
    description: "A Python-based project that converts text into audio, making written content more accessible. Ideal for visually impaired individuals, language learners, audiobooks, podcasts, and multimedia enhancements.",
    image: "/txt-to-speech.jpeg",
    technologies: ["Python"],
    githubUrl: "https://github.com/Dhanashree-SR/Text_to_speech",
  },
  {
    title: "Voice to Search",
    description: "A hands-free search tool powered by Python. Simply speak your query and receive relevant search results instantly. Features include accurate speech recognition, fast results, and a user-friendly interface, with potential applications in smart homes, vehicles, and accessibility.",
    image: "/voice-to-search.jpeg",
    technologies: ["Python"],
    githubUrl: "https://github.com/Dhanashree-SR/voice_to_search",
  }
]

const ProjectsSection = () => { 
  const [filter, setFilter] = useState("All")

  const filteredProjects = projects.filter((project) => filter === "All" || project.technologies.includes(filter))

  return (
    <section id="projects" className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center text-white"
        >
          Projects
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
          {["All", "SQL", "Python", "Excel", "Power BI"].map((tech) => (
            <motion.button
              key={tech}
              onClick={() => setFilter(tech)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-3 py-1 md:px-4 md:py-2 rounded-md text-sm md:text-base transition-colors duration-300 ${
                filter === tech
                  ? "bg-blue-500 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"
              }`}
            >
              {tech}
            </motion.button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-justify">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-blue-500 text-white px-2 py-1 rounded-md text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300"
                >
                  <GitHub className="w-5 h-5 mr-1" />
                  View on GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection

