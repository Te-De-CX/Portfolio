'use client';

import { motion } from 'framer-motion';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

const AboutHome = () => {
  const hobbies = [
    "Photography", "Chess", "Hiking", "Reading", 
    "Game Development", "Open Source Contributions"
  ];

  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-24 py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Name Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">
            Teslim Oyetunji
          </h3>
          <div className="h-1 w-20 bg-black mt-4"></div>
        </motion.div>

        {/* About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 uppercase tracking-wider">
              About
            </h3>
            <p className="text-lg md:text-xl leading-relaxed mb-8">
              I work with businesses of all sizes around the world, crafting innovative solutions using the latest technologies to drive success and growth.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-black text-white px-6 py-3 uppercase tracking-wider text-sm font-medium"
            >
              <ArrowDownTrayIcon className="h-5 w-5" />
              Download CV
            </motion.button>
          </motion.div>

          {/* Marquee Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="border border-black p-8 flex items-center justify-center"
          >
            <div className="overflow-hidden w-full">
              <motion.div
                animate={{
                  x: ['100%', '-100%']
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear'
                }}
                className="whitespace-nowrap text-xl font-medium uppercase"
              >
                Full-Stack Developer • UI/UX Designer • Problem Solver • Creative Thinker • Tech Enthusiast •
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Hobbies Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 uppercase tracking-wider">
              Hobbies
            </h3>
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              I&apos;m dedicated to crafting beautiful and highly functional designs that seamlessly align with my clients&apos; unique needs and long-term goals.
            </p>
            <div className="flex flex-wrap gap-3">
              {hobbies.map((hobby, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-gray-100 text-sm uppercase tracking-wider"
                >
                  {hobby}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Games Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="border border-black p-8 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4 uppercase tracking-wider">
                Games
              </h3>
              <p className="mb-6">
                Press enter on your keyboard to start the game.
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-black text-white px-6 py-4 text-center cursor-pointer"
            >
              Lets Play a Game
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHome;