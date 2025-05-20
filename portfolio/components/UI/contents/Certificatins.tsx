'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiChevronDown, FiChevronUp } from 'react-icons/fi';

const certifications = [
  {
    title: "Meta Frontend Developer Professional Certificate",
    issuer: "Meta (Facebook)",
    year: "2024",
    description: "Comprehensive frontend development program covering React, JavaScript, and UI/UX principles.",
    skills: ["React", "JavaScript", "UI/UX", "Version Control"],
    link: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
  },
  {
    title: "Python for Everybody Specialization",
    issuer: "Coursera",
    year: "2023",
    description: "Fundamental Python programming covering data structures, web scraping, and databases.",
    skills: ["Python", "Data Structures", "SQL", "Web Scraping"],
    link: "https://www.coursera.org/specializations/python",
  },
  {
    title: "Laravel Certified Developer",
    issuer: "Laravel",
    year: "2023",
    description: "Official certification demonstrating proficiency in Laravel PHP framework development.",
    skills: ["PHP", "Laravel", "MVC", "REST APIs"],
    link: "https://laravel.com/docs/10.x/certification",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2022",
    description: "Foundational AWS cloud concepts, services, and architectural best practices.",
    skills: ["AWS", "Cloud Computing", "Architecture", "Security"],
    link: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
  },
];

export default function Certifications() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.header 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Certifications & Studies
           </h1>
          {/* <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Student at <span className="font-semibold">FUNAAB</span>, Department of <span className="font-semibold">Physics</span>.
            Dedicated to continuous learning and growth in software development.
          </p> */}
        </motion.header>

        {/* Years of Study */}
        <motion.div 
          className="bg-black text-white p-4 rounded-lg shadow-lg text-center max-w-xs mx-auto mb-12"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-xl font-semibold">
            📚 <span className="text-2xl font-bold">4+ Years</span> of Study & Growth
          </div>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div 
                className="p-6 cursor-pointer"
                onClick={() => toggleCard(index)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.title}</h3>
                    <p className="text-gray-600 mb-1">{cert.issuer} — {cert.year}</p>
                  </div>
                  <button className="text-gray-500 hover:text-black">
                    {expandedCard === index ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
                  </button>
                </div>

                <AnimatePresence>
                  {expandedCard === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4"
                    >
                      <p className="text-gray-700 mb-4">{cert.description}</p>
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Skills Gained:</h4>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill, i) => (
                            <span 
                              key={i}
                              className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="border-t border-gray-200 px-6 py-3 bg-gray-50">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-black font-medium hover:text-gray-600 transition-colors"
                >
                  View Certification <FiExternalLink className="ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Features */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Currently Learning</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Advanced React', 'Node.js', 'TypeScript', 'GraphQL', 'Docker'].map((tech, i) => (
              <motion.div
                key={i}
                className="px-4 py-2 bg-gray-100 rounded-full text-gray-800 font-medium"
                whileHover={{ scale: 1.05, backgroundColor: '#000', color: '#fff' }}
                transition={{ duration: 0.2 }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}