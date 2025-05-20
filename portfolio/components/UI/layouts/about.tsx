'use client';

import { motion } from "framer-motion";
import { CodeBracketIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

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
    transition: { duration: 0.5 }
  }
};

const stats = [
  { value: "50+", label: "Projects Completed" },
  { value: "3+", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" }
];

const HomeAbout = () => {
  return (
    <motion.section 
      className="px-4 sm:px-10 md:px-20 py-20 border-t border-gray-200 bg-white transition-colors"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-16">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-gray-900 "
            variants={itemVariants}
          >
            About Me
          </motion.h2>
          
          <motion.div variants={itemVariants}>
            <Link href="/about">
              <button className="group flex items-center gap-2 border border-gray-900 text-gray-900 px-6 py-3 text-lg uppercase tracking-wider hover:bg-gray-100 transition-all duration-300 rounded-md">
                Full Biography
                <ArrowTopRightOnSquareIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
          </motion.div>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT COLUMN */}
          <motion.div className="space-y-10" variants={itemVariants}>
            <p className="text-xl md:text-2xl leading-relaxed text-gray-700">
              I collaborate with businesses of all sizes worldwide, using <span className="font-semibold">cutting-edge technologies</span> to build innovative, high-quality solutions that drive measurable results.
            </p>

            {/* STATS */}
            <div className="flex flex-wrap gap-6">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  className="border border-gray-300  px-6 py-5 flex-1 min-w-[150px] bg-gray-50  rounded-lg shadow-sm"
                >
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm uppercase tracking-wider text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT QUOTE BOX */}
          <motion.div className="relative" variants={itemVariants}>
            <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 p-10 rounded-xl border border-gray-200 shadow-md h-full flex items-center justify-center text-center">
              <div>
                <CodeBracketIcon className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <p className="text-lg italic text-gray-700 leading-relaxed">
                  &quot;I&apos;m dedicated to building <span className="font-medium">beautiful, high-performance</span> solutions perfectly tailored to meet my clients&apos; unique needs and long-term goals.&quot;
                </p>
                <div className="mt-8">
                  <div className="mx-auto w-20 border-t border-gray-300"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HomeAbout;
