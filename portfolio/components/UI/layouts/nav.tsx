'use client'

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, Bars3BottomRightIcon } from '@heroicons/react/24/outline';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { id: 1, name: "About", link: "/about" },
    { id: 2, name: "Works", link: "/works" },
    { id: 3, name: "Contact", link: "/contact" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuVariants = {
    hidden: { 
      x: '100%',
      opacity: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    },
    visible: { 
      x: 0,
      opacity: 1,
      transition: { 
        duration: 0.5, 
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const linkVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  return (
    <>
      <nav className="flex justify-between px-6 sm:px-10 md:px-12 py-6 uppercase items-center bg-white border-b border-gray-200 fixed w-full z-50">
        <Link href="/" className="font-extrabold text-2xl hover:scale-105 transition-transform">
          TED
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <ul className="flex gap-8 font-semibold tracking-wider">
            {links.map(goto => (
              <li key={goto.id}>
                <Link 
                  href={goto.link} 
                  title={goto.name}
                  className="hover:text-gray-600 transition-colors relative group"
                >
                  {goto.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          <Bars3BottomRightIcon className="h-6 w-6" />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40 md:hidden"
              onClick={toggleMenu}
            />
            
            <motion.div 
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuVariants}
              className="fixed top-0 right-0 h-full w-80 bg-white z-50 shadow-xl p-8 md:hidden"
            >
              <div className="flex justify-end mb-12">
                <button 
                  onClick={toggleMenu}
                  className="p-2 focus:outline-none"
                  aria-label="Close menu"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>

              <motion.ul className="space-y-8 text-2xl font-semibold tracking-wider">
                {links.map(goto => (
                  <motion.li 
                    key={goto.id}
                    variants={linkVariants}
                    whileHover={{ x: 5 }}
                  >
                    <Link 
                      href={goto.link} 
                      onClick={toggleMenu}
                      className="block py-2 hover:text-gray-600 transition-colors"
                    >
                      {goto.name}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Nav;