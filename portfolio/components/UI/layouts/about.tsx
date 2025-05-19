'use client'

import { motion } from "framer-motion";
import { CodeBracketIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const HomeAbout = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const stats = [
    { value: "50+", label: "Projects Completed" },
    { value: "5+", label: "Years Experience" },
    { value: "100%", label: "Client Satisfaction" }
  ];

  return (
    <motion.section 
      className="px-4 sm:px-10 md:px-20 py-16 md:py-24 bg-white border-t border-gray-100"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-16">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold uppercase tracking-tighter"
            variants={itemVariants}
          >
            About Me
          </motion.h2>
          
          <motion.div variants={itemVariants}>
            <button className="group flex items-center gap-2 border-2 border-black px-6 py-3 text-lg uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300">
              Full Biography
              <ArrowTopRightOnSquareIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            className="space-y-8"
            variants={itemVariants}
          >
            <p className="text-xl md:text-2xl leading-relaxed">
              I collaborate with businesses of all sizes worldwide, utilizing <span className="font-semibold">cutting-edge technologies</span> to build innovative, high-quality solutions that drive measurable results.
            </p>
            
            <div className="flex flex-wrap gap-4">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="border border-black px-6 py-4 flex-1 min-w-[150px]"
                >
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <p className="text-sm uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            <div className="bg-gray-100 h-full min-h-[400px] flex items-center justify-center">
              <div className="text-center p-8">
                <CodeBracketIcon className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <p className="text-lg italic">
                  &quot;I&apos;m dedicated to building <span className="font-medium">beautiful, high-performance</span> solutions that are perfectly tailored to meet my clients&apos; unique needs and long-term goals.&quot;
                </p>
                <div className="mt-8">
                  <div className="inline-block border-t border-black w-20"></div>
                </div>
              </div>
            </div>
            
            {/* Animated code block that could be added later */}
            {/* <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div> */}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HomeAbout;