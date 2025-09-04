'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaReact, FaPython, FaFigma, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { SiDjango } from "react-icons/si";

import Image1 from "@/public/images/image5.png";
import image2 from "@/public/images/image4.png";

const Work = () => {
  const content = [
    {
      id: 1,
      name: "Web Development",
      description: "Building dynamic, scalable web applications with modern frameworks and tools.",
      tags: [
        { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
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
      description: "Designing intuitive, visually stunning interfaces for seamless user experiences.",
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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariant = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="px-6 sm:px-12 md:px-24 lg:px-32 py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-48 -right-48 w-96 h-96 bg-gradient-to-br from-[#FF0050] to-[#00F2EA] rounded-full filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-gradient-to-br from-[#00F2EA] to-[#FF0050] rounded-full filter blur-3xl opacity-30 animate-pulse" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={containerVariant}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-extrabold uppercase tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-[#00F2EA] to-[#FF0050]"
            variants={itemVariant}
          >
            Featured Projects
          </motion.h2>
          <motion.div variants={itemVariant}>
            <Link
              href="/work"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#FF0050] to-[#00F2EA] text-white py-4 px-8 text-lg font-semibold uppercase tracking-wider hover:from-[#00F2EA] hover:to-[#FF0050] transition-all duration-300 rounded-lg shadow-lg shadow-[#FF0050]/40"
            >
              Explore All Projects
              <svg
                className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
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
              className="group bg-gray-900/80 border border-gray-800/50 hover:border-[#00F2EA]/40 transition-all duration-500 rounded-lg overflow-hidden shadow-2xl hover:shadow-[#00F2EA]/20 relative backdrop-blur-sm"
              variants={itemVariant}
              whileHover={{ y: -12, boxShadow: "0 15px 30px rgba(0, 242, 234, 0.2)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 group-hover:opacity-50 transition-opacity duration-500 z-10" />
              <div className="p-8 relative z-20">
                <div className="mb-8 h-72 bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF0050]/20 to-[#00F2EA]/20 opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  <Image
                    src={project.imagesrc}
                    alt={project.name}
                    className="object-cover w-full h-full group-hover:scale-115 transition-transform duration-700"
                    placeholder="blur"
                  />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-[#00F2EA] transition-colors">
                  {project.name}
                </h3>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  {project.tags.map((tag, index) => (
                    <div key={index} className="flex items-center space-x-2 group">
                      {tag.icon}
                      <span
                        className="text-sm font-semibold px-4 py-2 rounded-full bg-gray-800/50 text-gray-200 tracking-wide uppercase group-hover:bg-[#00F2EA]/20 group-hover:text-white transition-all duration-300"
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