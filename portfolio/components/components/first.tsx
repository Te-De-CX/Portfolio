import Image from "next/image";
import Profile from "@/public/images/home/profile/profile1.jpg";
import { motion } from "framer-motion";

const First = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="px-6 sm:px-12 md:px-24 lg:px-32 py-20 md:py-32 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-48 -right-48 w-96 h-96 bg-gradient-to-br from-[#FF0050] to-[#00F2EA] rounded-full filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-gradient-to-br from-[#00F2EA] to-[#FF0050] rounded-full filter blur-3xl opacity-30 animate-pulse" />

      <motion.div
        className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-16 mb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
      >
        {/* Name/Tagline */}
        <motion.div
          className="order-2 lg:order-1 text-center lg:text-left relative z-10"
          variants={itemVariants}
        >
          <div className="absolute -left-8 top-6 w-5 h-5 bg-[#00F2EA] rounded-full animate-ping" />
          <h1 className="text-7xl sm:text-9xl lg:text-[10rem] font-extrabold text-white uppercase tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-[#00F2EA] to-[#FF0050]">
            TEDECX
          </h1>
          <motion.p
            className="mt-8 text-2xl md:text-3xl font-semibold text-gray-200 max-w-3xl"
            variants={itemVariants}
          >
            Architecting the Future: Full-Stack Developer & Creative Innovator
          </motion.p>
          <motion.p
            className="mt-4 text-lg md:text-xl text-gray-400 max-w-2xl"
            variants={itemVariants}
          >
            Crafting cutting-edge digital experiences with a blend of creativity, precision, and modern technology.
          </motion.p>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          className="order-1 lg:order-2 w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 relative overflow-hidden shadow-2xl shadow-[#00F2EA]/20"
          variants={itemVariants}
          whileHover={{
            scale: 1.08,
            rotate: 3,
            boxShadow: "0 0 40px rgba(0, 242, 234, 0.6)",
          }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <Image
            src={Profile}
            alt="Profile image"
            className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60 hover:opacity-20 transition-opacity duration-500" />
        </motion.div>
      </motion.div>

      {/* Contact & Bio */}
      <motion.div
        className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
      >
        <motion.div
          className="flex flex-col items-center lg:items-start"
          variants={itemVariants}
        >
          <motion.a
            href="mailto:hello@tedecx.com"
            className="text-2xl md:text-3xl font-bold text-white hover:text-[#00F2EA] transition-all group flex items-center"
            variants={itemVariants}
            whileHover={{ x: 12 }}
          >
            <span className="group-hover:underline decoration-[#00F2EA] underline-offset-4">
              hello@tedecx.com
            </span>
            <svg
              className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </motion.a>
          <motion.a
            href="https://github.com/tedecx"
            className="mt-4 text-lg md:text-xl font-medium text-gray-300 hover:text-[#FF0050] transition-all group flex items-center"
            variants={itemVariants}
            whileHover={{ x: 8 }}
          >
            <span className="group-hover:underline decoration-[#FF0050] underline-offset-4">
              github.com/tedecx
            </span>
          </motion.a>
        </motion.div>

        <motion.p
          className="text-lg md:text-xl text-gray-300 lg:w-1/2 leading-relaxed"
          variants={itemVariants}
        >
          I&apos;m a passionate full-stack developer dedicated to building seamless, high-performance web applications. 
          With expertise in modern frameworks and a knack for innovative design, I transform ideas into intuitive, 
          scalable solutions. Let&apos;s create something extraordinary together!
        </motion.p>
      </motion.div>
    </section>
  );
};

export default First;