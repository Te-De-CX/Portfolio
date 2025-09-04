'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SiNestjs, SiFastapi, SiJquery, SiAstro, SiRemix, SiQwik, SiSvelte } from 'react-icons/si';
import { SiVercel, SiNetlify, SiHeroku, SiCypress, SiBabel, SiGatsby, SiCloudflare } from 'react-icons/si';
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub, FaNpm,
  FaPython, FaPhp, FaLaravel
} from 'react-icons/fa';
import {
  SiTypescript, SiNextdotjs, SiExpress, SiMongodb, SiPostgresql, SiTailwindcss,
  SiRedux, SiGraphql, SiDocker, SiJest, SiReactrouter, SiDjango, SiVuedotjs,
  SiAngular, SiBootstrap, SiSass, SiLess, SiGo, SiWebpack,
  SiVite, SiEslint, SiPrettier, SiPostman, SiFigma
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';

interface TechItem {
  id: number;
  name: string;
  icon: React.ReactNode;
  category: 'frontend' | 'backend' | 'tools' | 'all';
  color?: string;
}

type CategoryType = 'frontend' | 'backend' | 'tools' | 'all';

const Technologies = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');

  const getTechColor = (name: string) => {
    const colorMap: Record<string, string> = {
      'HTML5': '#E34F26',
      'CSS3': '#1572B6',
      'JavaScript': '#F7DF1E',
      'TypeScript': '#3178C6',
      'React': '#61DAFB',
      'Next.js': '#000000',
      'Vue.js': '#42b883',
      'Angular': '#dd1b16',
      'Redux': '#764ABC',
      'Tailwind CSS': '#06B6D4',
      'React Router': '#CA4245',
      'Bootstrap': '#7952B3',
      'SASS': '#CC6699',
      'LESS': '#1D365D',
      'Node.js': '#339933',
      'Express': '#000000',
      'Python': '#3776AB',
      'PHP': '#8892BF',
      'Laravel': '#FF2D20',
      'Go': '#00ADD8',
      'GraphQL': '#E10098',
      'MongoDB': '#47A248',
      'PostgreSQL': '#336791',
      'Django': '#092E20',
      'React Native': '#61DAFB',
      'Git': '#F05032',
      'GitHub': '#181717',
      'Docker': '#2496ED',
      'Jest': '#C21325',
      'npm': '#CB3837',
      'Vite': '#646CFF',
      'Webpack': '#8DD6F9',
      'ESLint': '#4B32C3',
      'Prettier': '#F7B93E',
      'Postman': '#FF6C37',
      'Figma': '#F24E1E',
      'jQuery': '#0769AD',
      'Astro': '#FF5D01',
      'Remix': '#000000',
      'Qwik': '#18B6F6',
      'Svelte': '#FF3E00',
      'NestJS': '#E0234E',
      'FastAPI': '#009688',
      'Vercel': '#000000',
      'Netlify': '#00C7B7',
      'Heroku': '#430098',
      'Cypress': '#17202C',
      'Babel': '#F9DC3E',
      'Gatsby': '#663399',
      'Cloudflare': '#F38020',
    };
    return colorMap[name] || '#00F2EA';
  };

  const techStack: TechItem[] = [
    // Frontend
    { id: 1, name: "HTML5", icon: <FaHtml5 />, category: 'frontend', color: getTechColor("HTML5") },
    { id: 2, name: "CSS3", icon: <FaCss3Alt />, category: 'frontend', color: getTechColor("CSS3") },
    { id: 3, name: "JavaScript", icon: <FaJs />, category: 'frontend', color: getTechColor("JavaScript") },
    { id: 4, name: "TypeScript", icon: <SiTypescript />, category: 'frontend', color: getTechColor("TypeScript") },
    { id: 5, name: "React", icon: <FaReact />, category: 'frontend', color: getTechColor("React") },
    { id: 6, name: "Next.js", icon: <SiNextdotjs />, category: 'frontend', color: getTechColor("Next.js") },
    { id: 7, name: "Vue.js", icon: <SiVuedotjs />, category: 'frontend', color: getTechColor("Vue.js") },
    { id: 8, name: "Angular", icon: <SiAngular />, category: 'frontend', color: getTechColor("Angular") },
    { id: 9, name: "Redux", icon: <SiRedux />, category: 'frontend', color: getTechColor("Redux") },
    { id: 10, name: "Tailwind CSS", icon: <SiTailwindcss />, category: 'frontend', color: getTechColor("Tailwind CSS") },
    { id: 11, name: "React Router", icon: <SiReactrouter />, category: 'frontend', color: getTechColor("React Router") },
    { id: 12, name: "Bootstrap", icon: <SiBootstrap />, category: 'frontend', color: getTechColor("Bootstrap") },
    { id: 13, name: "SASS", icon: <SiSass />, category: 'frontend', color: getTechColor("SASS") },
    { id: 14, name: "LESS", icon: <SiLess />, category: 'frontend', color: getTechColor("LESS") },
    { id: 15, name: "React Native", icon: <TbBrandReactNative />, category: 'frontend', color: getTechColor("React Native") },
    { id: 38, name: "jQuery", icon: <SiJquery />, category: 'frontend', color: getTechColor("jQuery") },
    { id: 39, name: "Astro", icon: <SiAstro />, category: 'frontend', color: getTechColor("Astro") },
    { id: 40, name: "Remix", icon: <SiRemix />, category: 'frontend', color: getTechColor("Remix") },
    { id: 41, name: "Qwik", icon: <SiQwik />, category: 'frontend', color: getTechColor("Qwik") },
    { id: 42, name: "Svelte", icon: <SiSvelte />, category: 'frontend', color: getTechColor("Svelte") },

    // Backend
    { id: 16, name: "Node.js", icon: <FaNodeJs />, category: 'backend', color: getTechColor("Node.js") },
    { id: 17, name: "Express", icon: <SiExpress />, category: 'backend', color: getTechColor("Express") },
    { id: 18, name: "Python", icon: <FaPython />, category: 'backend', color: getTechColor("Python") },
    { id: 19, name: "PHP", icon: <FaPhp />, category: 'backend', color: getTechColor("PHP") },
    { id: 20, name: "Laravel", icon: <FaLaravel />, category: 'backend', color: getTechColor("Laravel") },
    { id: 22, name: "Go", icon: <SiGo />, category: 'backend', color: getTechColor("Go") },
    { id: 23, name: "GraphQL", icon: <SiGraphql />, category: 'backend', color: getTechColor("GraphQL") },
    { id: 24, name: "MongoDB", icon: <SiMongodb />, category: 'backend', color: getTechColor("MongoDB") },
    { id: 25, name: "PostgreSQL", icon: <SiPostgresql />, category: 'backend', color: getTechColor("PostgreSQL") },
    { id: 26, name: "Django", icon: <SiDjango />, category: 'backend', color: getTechColor("Django") },
    { id: 43, name: "NestJS", icon: <SiNestjs />, category: 'backend', color: getTechColor("NestJS") },
    { id: 44, name: "FastAPI", icon: <SiFastapi />, category: 'backend', color: getTechColor("FastAPI") },

    // Tools
    { id: 27, name: "Git", icon: <FaGitAlt />, category: 'tools', color: getTechColor("Git") },
    { id: 28, name: "GitHub", icon: <FaGithub />, category: 'tools', color: getTechColor("GitHub") },
    { id: 29, name: "Docker", icon: <SiDocker />, category: 'tools', color: getTechColor("Docker") },
    { id: 30, name: "Jest", icon: <SiJest />, category: 'tools', color: getTechColor("Jest") },
    { id: 31, name: "npm", icon: <FaNpm />, category: 'tools', color: getTechColor("npm") },
    { id: 32, name: "Vite", icon: <SiVite />, category: 'tools', color: getTechColor("Vite") },
    { id: 33, name: "Webpack", icon: <SiWebpack />, category: 'tools', color: getTechColor("Webpack") },
    { id: 34, name: "ESLint", icon: <SiEslint />, category: 'tools', color: getTechColor("ESLint") },
    { id: 35, name: "Prettier", icon: <SiPrettier />, category: 'tools', color: getTechColor("Prettier") },
    { id: 36, name: "Postman", icon: <SiPostman />, category: 'tools', color: getTechColor("Postman") },
    { id: 37, name: "Figma", icon: <SiFigma />, category: 'tools', color: getTechColor("Figma") },
    { id: 45, name: "Vercel", icon: <SiVercel />, category: 'tools', color: getTechColor("Vercel") },
    { id: 46, name: "Netlify", icon: <SiNetlify />, category: 'tools', color: getTechColor("Netlify") },
    { id: 47, name: "Heroku", icon: <SiHeroku />, category: 'tools', color: getTechColor("Heroku") },
    { id: 48, name: "Cypress", icon: <SiCypress />, category: 'tools', color: getTechColor("Cypress") },
    { id: 49, name: "Babel", icon: <SiBabel />, category: 'tools', color: getTechColor("Babel") },
    { id: 50, name: "Gatsby", icon: <SiGatsby />, category: 'tools', color: getTechColor("Gatsby") },
    { id: 51, name: "Cloudflare", icon: <SiCloudflare />, category: 'tools', color: getTechColor("Cloudflare") },
  ];

  const categories = [
    { id: 1, name: 'all', title: 'All' },
    { id: 2, name: 'frontend', title: 'Frontend' },
    { id: 3, name: 'backend', title: 'Backend' },
    { id: 4, name: 'tools', title: 'Tools' },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const filteredTech = activeCategory === 'all'
    ? techStack
    : techStack.filter(tech => tech.category === activeCategory);

  return (
    <section className="px-6 sm:px-12 md:px-24 lg:px-32 py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden" id="technologies">
      {/* Background decoration */}
      <div className="absolute -top-48 -right-48 w-96 h-96 bg-gradient-to-br from-[#FF0050] to-[#00F2EA] rounded-full filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-gradient-to-br from-[#00F2EA] to-[#FF0050] rounded-full filter blur-3xl opacity-30 animate-pulse" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-[#00F2EA] to-[#FF0050]">
          My Tech Arsenal
        </h2>
        <p className="text-lg md:text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          A curated collection of cutting-edge tools and technologies I wield to craft exceptional digital experiences.
        </p>

        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`px-6 py-3 text-base font-semibold transition-all duration-300 ${
                activeCategory === category.name
                  ? 'bg-gradient-to-r from-[#FF0050] to-[#00F2EA] text-white shadow-lg shadow-[#FF0050]/40'
                  : 'bg-gray-800/50 text-gray-200 hover:bg-gray-700/50 border border-gray-700 hover:border-[#00F2EA]/50'
              } rounded-lg`}
              onClick={() => setActiveCategory(category.name as CategoryType)}
              whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(0, 242, 234, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              {category.title}
            </motion.button>
          ))}
        </div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 max-w-7xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <AnimatePresence mode="wait">
            {filteredTech.map((tech) => (
              <motion.div
                key={tech.id}
                className="bg-gray-900/80 p-5 flex flex-col items-center justify-center border border-gray-800/50 hover:border-[#00F2EA]/40 transition-all duration-300 group relative overflow-hidden backdrop-blur-sm"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 12px 30px -5px rgba(0, 242, 234, 0.2)",
                  background: "rgba(17, 24, 39, 0.9)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#00F2EA]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div
                  className="text-5xl mb-4 relative z-10 group-hover:scale-125 transition-transform duration-300"
                  style={{ color: tech.color }}
                >
                  {tech.icon}
                </div>
                <span className="text-base font-semibold text-gray-200 relative z-10 group-hover:text-[#00F2EA] transition-colors">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Technologies;