// components/UI/layouts/footer.js
'use client';

import { motion } from "framer-motion";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { GithubIcon, TwitterIcon } from "@/components/components/Icons"; 

const Footer = () => {
  return (
    <footer className="relative bg-black text-white overflow-hidden">

      <div className="relative z-10 px-6 sm:px-10 md:px-20 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          {/* Top Section - Social & CTA */}
          <div className="flex flex-col lg:flex-row justify-between gap-12 mb-20">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold tracking-wider text-[#00F2EA]">CONNECT</h3>
              <div className="flex gap-6">
                {/* <motion.a 
                  href="https://linkedin.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, color: "#00F2EA" }}
                  className="text-gray-400 hover:text-[#00F2EA] transition-colors"
                >
                  <LinkedinIcon className="h-7 w-7" />
                </motion.a> */}
                <motion.a 
                  href="https://github.com/Te-De-CX" 
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, color: "#00F2EA" }}
                  className="text-gray-400 hover:text-[#00F2EA] transition-colors"
                >
                  <GithubIcon className="h-7 w-7" />
                </motion.a>
                
                <motion.a 
                  href="https://twitter.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, color: "#00F2EA" }}
                  className="text-gray-400 hover:text-[#00F2EA] transition-colors"
                >
                  <TwitterIcon className="h-7 w-7" />
                </motion.a>
              </div>
            </div>

            <div className="max-w-xl">
              <motion.p 
                className="text-2xl md:text-3xl font-medium mb-8 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Curious about what we can create together? Let&apos;s bring something extraordinary to life!
              </motion.p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <motion.a
                  href="mailto:hello@tedecx.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative overflow-hidden group bg-gradient-to-r from-[#FF0050] to-[#FF0050]/80 text-white px-8 py-4 font-medium tracking-wider uppercase rounded-full"
                >
                  <span className="relative z-10">Get in touch</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF0050]/90 to-[#FF0050]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.a>

                <motion.div 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-[#00F2EA]"
                    animate={{
                      scale: [1, 1.4, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <span className="text-sm font-light text-gray-400">Available for work</span>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Contact & Copyright */}
          <div className="flex flex-col md:flex-row justify-between gap-8 pt-8 border-t border-gray-800">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <PhoneIcon className="h-5 w-5 text-[#00F2EA]" />
                <motion.a 
                  href="tel:+2348158444464"
                  whileHover={{ x: 4, color: "#00F2EA" }}
                  className="text-gray-400 hover:text-[#00F2EA] transition-colors"
                >
                  +234 (0)81 5844 4464
                </motion.a>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="h-5 w-5 text-[#00F2EA]" />
                <motion.a 
                  href="mailto:hello@tedecx.com"
                  whileHover={{ x: 4, color: "#00F2EA" }}
                  className="text-gray-400 hover:text-[#00F2EA] transition-colors"
                >
                  hello@tedecx.com
                </motion.a>
              </div>
            </div>

            <div className="text-gray-500 text-sm space-y-2">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Designed & developed by Tedecx
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                All rights reserved © {new Date().getFullYear()}
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;