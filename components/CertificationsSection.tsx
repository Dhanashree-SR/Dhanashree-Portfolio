"use client"

import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

// Define the type for a certification
interface Certification {
  name: string
  image: string
  overview: string
  link: string
}

// Certification data
const certifications: Certification[] = [
  {
    name: "Data Analytics Job Simulation - Deloitte",
    image: "/Deloitte Job Sim.jpg",
    overview: "Completed a Deloitte job simulation involving data analysis and forensic technology, Created a data dashboard using Tableau, Used Excel to classify data and draw business conclusions",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_K5dz5CJN3nM43qX2u_1744044135010_completion_certificate.pdf",
  },
  {
    name: "Data Cleaning Certification",
    image: "/Data-clean.jpg",
    overview: "Learned essential techniques for cleaning and transforming raw data into accurate, structured formats for reliable analysis and decision-making.",
    link: "https://training.foresightbi.com.ng/certificates/yucdugxpnq",
  },
  {
    name: "Data Visualization Certification",
    image: "/data-viz.jpg",
    overview: "Gained essential skills in using Power BI to create interactive and insightful data visualizations, enabling better decision-making and data-driven strategies.",
    link: "https://training.foresightbi.com.ng/certificates/0516qgc0sj",
  },
  {
    name: "SQL Basic Certification",
    image: "/sql-basics.png",
    overview: "Mastered foundational SQL querying techniques, including SELECT statements, filtering, and basic joins, to manage and analyze data effectively.",
    link: "https://www.hackerrank.com/certificates/4baa776846e9",
  },
  {
    name: "Intro to Google Sheets",
    image: "/Googlesheets-cert.jpg",
    overview: "Mastered key techniques in Google Sheets, from data manipulation to creating interactive reports, enhancing data analysis and collaboration efficiency.",
    link: "https://certificates.mavenanalytics.io/21908515-8f27-4935-a369-5640e156b16f#acc.GnJA6S3f",
  },
]

// Define props for CertificationCard
interface CertificationCardProps {
  cert: Certification
  index: number
}

// Certification Card Component
const CertificationCard: React.FC<CertificationCardProps> = ({ cert, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:scale-105 group relative"
    >
      <Image
        src={cert.image || "/placeholder.svg"}
        alt={cert.name}
        width={300}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">{cert.name}</h3>
        <p className="text-sm md:text-base text-gray-300">{cert.overview}</p>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-300 transition-colors duration-300"
        >
          <ExternalLink size={32} />
        </a>
      </div>
    </motion.div>
  )
}

// Certifications Section Component
const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-16 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-justify">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center text-white"
        >
          Certifications
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <CertificationCard key={cert.name} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CertificationsSection