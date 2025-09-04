'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { XMarkIcon, Bars3BottomRightIcon } from '@heroicons/react/24/outline';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { id: 1, name: 'About', link: '/about' },
    { id: 2, name: 'Works', link: '/works' },
    { id: 3, name: 'Contact', link: '/contact' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuVariants = {
    hidden: {
      x: '100%',
      opacity: 0,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // const linkVariants = {
  //   hidden: { x: 20, opacity: 0 },
  //   visible: { x: 0, opacity: 1 },
  // };

  return (
    <>
      <nav className="flex justify-between px-6 sm:px-12 md:px-24 lg:px-32 pt-8 uppercase items-center bg-gradient-to-b from-gray-900 to-black fixed w-full z-50 border-b border-gray-800/50 shadow-lg shadow-[#00F2EA]/10">
        <Link
          href="/"
          className="font-extrabold text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-white via-[#00F2EA] to-[#FF0050] hover:scale-105 transition-transform duration-300"
        >
          TED
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <ul className="flex gap-10 font-semibold tracking-widest text-gray-100">
            {links.map(goto => (
              <li key={goto.id}>
                <Link
                  href={goto.link}
                  title={goto.name}
                  className="relative group hover:text-[#00F2EA] transition-colors duration-300"
                >
                  {goto.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FF0050] to-[#00F2EA] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 focus:outline-none text-gray-100 hover:text-[#00F2EA] transition-colors duration-300"
          aria-label="Toggle menu"
        >
          <Bars3BottomRightIcon className="h-8 w-8" />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={toggleMenu}
            />
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuVariants}
              className="fixed top-0 right-0 h-full w-80 bg-gray-900/90 z-50 shadow-2xl shadow-[#00F2EA]/20 p-8 md:hidden border-l border-gray-800/50 backdrop-blur-md"
            >
              <div className="flex justify-end mb-12">
                <button
                  onClick={toggleMenu}
                  className="p-2 focus:outline-none text-gray-100 hover:text-[#00F2EA] transition-colors duration-300"
                  aria-label="Close menu"
                >
                  <XMarkIcon className="h-8 w-8" />
                </button>
              </div>

              <ul className="space-y-8 text-2xl font-semibold tracking-widest text-gray-100">
                {links.map(goto => (
                  <li key={goto.id}>
                    <Link
                      href={goto.link}
                      onClick={toggleMenu}
                      className="block py-2 hover:text-[#00F2EA] transition-colors duration-300"
                    >
                      {goto.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Nav;