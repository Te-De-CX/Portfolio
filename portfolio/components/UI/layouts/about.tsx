'use client';

import { motion } from "framer-motion";
import { CodeBracketIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const stats = [
  { value: "75+", label: "Projects Delivered" },
  { value: "5+", label: "Years of Expertise" },
  { value: "99%", label: "Client Satisfaction" },
];

const HomeAbout = () => {
  return (
    <motion.section
      className="px-6 sm:px-12 md:px-24 lg:px-32 py-28 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-150px" }}
      variants={containerVariants}
    >
      {/* Background decoration */}
      <div className="absolute -top-56 -right-56 w-[30rem] h-[30rem] bg-gradient-to-br from-[#FF0050] to-[#00F2EA] rounded-full filter blur-3xl opacity-25 animate-pulse" />
      <div className="absolute -bottom-56 -left-56 w-[30rem] h-[30rem] bg-gradient-to-br from-[#00F2EA] to-[#FF0050] rounded-full filter blur-3xl opacity-25 animate-pulse" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-24">
          <motion.h2
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-[#00F2EA] to-[#FF0050]"
            variants={itemVariants}
          >
            About Me
          </motion.h2>

          <motion.div variants={itemVariants}>
            <Link href="/about">
              <button className="group flex items-center gap-4 bg-gradient-to-r from-[#FF0050] to-[#00F2EA] text-white px-10 py-4 text-lg font-bold uppercase tracking-wider hover:from-[#00F2EA] hover:to-[#FF0050] transition-all duration-300 rounded-xl shadow-xl shadow-[#FF0050]/50 hover:shadow-[#00F2EA]/50">
                Discover My Journey
                <ArrowTopRightOnSquareIcon className="h-7 w-7 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </Link>
          </motion.div>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* LEFT COLUMN */}
          <motion.div className="space-y-16" variants={itemVariants}>
            <div className="space-y-8">
              <p className="text-2xl md:text-3xl leading-relaxed text-gray-100 font-medium">
                I collaborate with visionaries and businesses worldwide, harnessing <span className="font-bold text-white">state-of-the-art technologies</span> to create innovative, high-impact solutions tailored to your goals.
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                My work blends technical precision with creative design, delivering projects that are both robust and visually captivating. Let’s transform your ideas into reality!
              </p>
            </div>

            {/* STATS */}
            <div className="flex flex-wrap gap-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.07, boxShadow: "0 12px 25px rgba(0, 242, 234, 0.3)" }}
                  className="bg-gray-900/90 p-8 flex-1 min-w-[180px] rounded-xl border border-gray-800/60 hover:border-[#00F2EA]/50 transition-all duration-300 backdrop-blur-md"
                  variants={itemVariants}
                >
                  <p className="text-5xl font-extrabold text-white">{stat.value}</p>
                  <p className="text-sm uppercase tracking-widest text-gray-300 mt-3">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT QUOTE BOX */}
          <motion.div className="relative" variants={itemVariants}>
            <div className="bg-gradient-to-br from-gray-900/95 to-gray-800/95 p-16 rounded-xl border border-gray-800/60 shadow-2xl shadow-[#00F2EA]/30 h-full flex items-center justify-center text-center backdrop-blur-md">
              <div>
                <CodeBracketIcon className="h-16 w-16 mx-auto text-[#00F2EA] mb-8 animate-pulse" />
                <p className="text-xl md:text-2xl italic text-gray-100 leading-relaxed">
                  &quot;My passion is to architect <span className="font-bold text-white">scalable, user-focused</span> solutions that empower clients to achieve their vision and thrive in a digital world.&quot;
                </p>
                <div className="mt-12">
                  <div className="mx-auto w-32 border-t-2 border-[#00F2EA]/60"></div>
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