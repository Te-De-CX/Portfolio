'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaReact, FaPython, FaFigma, FaCss3Alt, FaNodeJs } from "react-icons/fa"; // Importing some icon libraries
import { SiDjango } from "react-icons/si";

import Image1 from "@/public/images/home/work/macbook-pro-template-being-used-next-to-a-water-bottle-a19519 (1).png";
import image2 from "@/public/images/home/work/macbook-mockup-on-a-wooden-table-next-to-a-lamp-21623.png";

const Work = () => {
  const content = [
    {
      id: 1,
      name: "Web Development",
      description: "Modern web applications with React, Next.js, and TypeScript",
      tags: [
        { name: "React", icon: <FaReact className="text-teal-500" /> },
        { name: "Next.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Tailwind CSS", icon: <FaCss3Alt className="text-indigo-500" /> },
        { name: "Python", icon: <FaPython className="text-yellow-500" /> },
        { name: "Django", icon: <SiDjango className="text-blue-500" /> },
      ],
      link: "https://tamang-foodservice.vercel.app/",
      imagesrc: Image1,
    },
    {
      id: 2,
      name: "UI/UX Design",
      description: "Clean, user-centered interfaces with intuitive workflows",
      tags: [
        { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
        { name: "Adobe XD", icon: <FaFigma className="text-blue-500" /> },
        { name: "Prototyping", icon: <FaReact className="text-teal-500" /> },
      ],
      link: "https://www.figma.com/design/S3lsJ94TT7gwKxInfaRS8p/Social-App?node-id=20-197&t=FVAG2VAj27VOC7RK-0",
      imagesrc: image2,
    },
  ];

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariant = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="px-4 sm:px-10 md:px-20 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariant}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-gray-900"
            variants={itemVariant}
          >
            Selected Work
          </motion.h2>
          <motion.div variants={itemVariant}>
            <Link 
              href="/work" 
              className="inline-block bg-gray-900 text-white py-3 px-6 md:px-8 text-base font-medium uppercase tracking-wide hover:bg-gray-800 transition-all duration-300 rounded-lg"
            >
              View All Projects
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariant}
        >
          {content.map((project) => (
            <motion.a 
              href={project.link} 
              target="_blank"
              rel="noopener noreferrer"
              key={project.id}
              className="group border border-gray-200 hover:border-gray-300 transition-all duration-300 rounded-2xl overflow-hidden shadow hover:shadow-xl bg-white"
              variants={itemVariant}
              whileHover={{ y: -6 }}
            >
              <div className="p-6">
                <div className="mb-6 h-64 bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center">
                  <Image 
                    src={project.imagesrc} 
                    alt={project.name} 
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    placeholder="blur"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                  {project.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  {project.tags.map((tag, index) => (
                    <div key={index} className="flex items-center space-x-2 group">
                      {tag.icon}
                      <span 
                        className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-700 tracking-wide uppercase group-hover:text-gray-900"
                      >
                        {tag.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
