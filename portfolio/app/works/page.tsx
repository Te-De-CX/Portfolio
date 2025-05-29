'use client';

import Image1 from '@/public/images/Thumbnail.jpg';
import Image2 from '@/public/images/tam.png';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { StaticImageData } from 'next/image';
import Image from 'next/image';

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string | StaticImageData;
  category: 'web' | 'mobile' | 'design';
};

const WorkPage = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Food Ordering Platform',
      description: 'Full-featured online store with payment integration and inventory management.',
      tags: ['React', 'Node.js', 'MongoDB'],
      link: 'https://tamang-foodservice.vercel.app',
      image: Image2,
      category: 'web'
    },
    {
      id: 2,
      title: 'Music Player App',
      description: 'Mobile app for playing and discovering music with personalized playlists.',
      tags: ['React Native', 'Firebase', 'TypeScript'],
      link: 'https://healthapp.example.com',
      image: '/project2.jpg',
      category: 'mobile'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Minimalist portfolio design with smooth animations and dark mode.',
      tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      link: 'https://tedecx.vercel.app',
      image: '/project3.jpg',
      category: 'design'
    },
    {
      id: 4,
      title: 'Task Management System',
      description: 'Collaborative task management tool with real-time updates.',
      tags: ['Vue.js', 'Express', 'WebSockets'],
      link: 'https://tasks.example.com',
      image: '/project4.jpg',
      category: 'web'
    },
    {
      id: 6,
      title: 'Design System',
      description: 'Comprehensive UI kit and design system for consistent product experiences.',
      tags: ['Figma', 'Storybook'],
      link: 'https://design.example.com',
      image: '/project6.jpg',
      category: 'design'
    },
    {
      id: 7,
      title: 'Blog Platform',
      description: 'Headless CMS with custom editor and SEO optimization.',
      tags: ['Next.js', 'Sanity.io', 'SSG'],
      link: 'https://futuretech-sand.vercel.app',
      image: Image1,
      category: 'web'
    },
    {
      id: 9,
      title: 'Brand Identity',
      description: 'Complete brand identity for a tech startup including logo and guidelines.',
      tags: ['Illustrator', 'Branding'],
      link: 'https://brand.example.com',
      image: '/project9.jpg',
      category: 'design'
    },
    // {
    //   id: 10,
    //   title: 'Analytics Dashboard',
    //   description: 'Data visualization dashboard with interactive charts and filters.',
    //   tags: ['D3.js', 'TypeScript', 'Node.js'],
    //   link: 'https://analytics.example.com',
    //   image: '/project10.jpg',
    //   category: 'web'
    // }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'design', label: 'UI/UX Design' }
  ];

  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-24 py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">
            Selected Work
          </h1>
          <div className="h-1 w-20 bg-black"></div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full border border-black text-sm uppercase tracking-wider transition-colors ${
                activeFilter === filter.id 
                  ? 'bg-black text-white' 
                  : 'hover:bg-gray-100'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              className="relative group"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                {/* Project Image Placeholder - Replace with your Image component */}
                <div className="aspect-video bg-gray-100 mb-4 overflow-hidden relative">
                  {/* <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    Project Image
                  </div> */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105" 
                    placeholder="blur"
                  />
                  <motion.div
                    className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                    animate={{
                      opacity: hoveredProject === project.id ? 0.1 : 0
                    }}
                  />
                </div>

                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <ArrowTopRightOnSquareIcon className="h-5 w-5 text-gray-400 group-hover:text-black transition-colors" />
                  </div>
                  <p className="text-gray-700 mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="text-xs px-2 py-1 bg-gray-100 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-gray-500">No projects found in this category.</p>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Want to see more of my work or discuss a potential project?
          </p>
          <a
            href="/contact"
            className="inline-block bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkPage;