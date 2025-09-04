'use client';

// import Image1 from '@/public/images/Thumbnail.jpg';
import Image2 from '@/public/images/tam.png';
// import Image3 from '@/public/images/Light Showreel.png';
// import Image4 from '@/public/images/now.png';
// import image5 from '@/public/images/figma.png';
// import image6 from '@/public/images/portfolio.png';
import image7 from '@/public/images/image1.png';
import image8 from '@/public/images/image2.png';
// import image9 from '@/public/images/image3.png';
import image10 from '@/public/images/image4.png';
import image12 from '@/public/images/image6.jpg';
// import image13 from '@/public/images/image7.png';
import image14 from '@/public/images/image8.webp';
import image15 from '@/public/images/image8.png';

import { useState } from 'react';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { StaticImageData } from 'next/image';
import Image from 'next/image';

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image: string | StaticImageData;
  category: 'web' | 'mobile' | 'design' | 'backend';
};

const WorkPage = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Food Ordering Platform',
      description: 'A scalable e-commerce platform for food delivery, featuring real-time inventory tracking, secure payment gateways, and a seamless user experience.',
      tags: ['Next.js', 'Django', 'Python', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
      link: 'https://tamang-foodservice.vercel.app',
      image: Image2,
      category: 'web',
    },
    {
      id: 2,
      title: 'Disuxchange Mobile App',
      description: 'A secure mobile app for converting cryptocurrencies to Naira, with real-time exchange rates and a user-friendly interface for seamless transactions.',
      tags: ['React Native', 'Firebase', 'TypeScript', 'REST API'],
      image: image10,
      category: 'mobile',
    },
    {
      id: 3,
      title: 'Disuxchange Web Platform',
      description: 'A robust web platform for crypto-to-Naira exchanges, integrating blockchain APIs and a responsive design for fast, secure transactions.',
      tags: ['Next.js', 'Tailwind CSS', 'Node.js', 'Web3.js'],
      link: 'https://disuxchange.com',
      image: image7,
      category: 'web',
    },
    {
      id: 4,
      title: 'Event Rack Website',
      description: 'An event ticketing platform with dynamic search, secure ticket purchasing, and QR code integration for streamlined event management.',
      tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      link: 'https://eventrack.vercel.app',
      image: image15,
      category: 'web',
    },
    {
      id: 5,
      title: 'Perzure AI Backend System',
      description: 'A high-performance backend for an AI-driven platform, enabling real-time data processing, predictive analytics, and secure API integrations.',
      tags: ['Python', 'FastAPI', 'TensorFlow', 'PostgreSQL', 'AWS'],
      image: image12,
      category: 'backend',
    },
    {
      id: 6,
      title: 'Pet Store Website',
      description: 'An engaging e-commerce website for pet products, featuring intuitive navigation, secure payments, and a vibrant UI tailored to pet lovers.',
      tags: ['Next.js', 'Strapi', 'Tailwind CSS', 'Stripe'],
      link: 'https://petstore.example.com',
      image: image14,
      category: 'web',
    },
    {
      id: 7,
      title: 'Event Rack UI/UX Design',
      description: 'A comprehensive UI/UX design system for an event ticketing platform, with wireframes, prototypes, and user flows optimized for accessibility and engagement.',
      tags: ['Figma', 'Adobe XD', 'User Testing'],
      link: 'https://www.figma.com/design/THRxKsnngjVe2cV1xO0MJC/Event-Rack?node-id=0-1&p=f&t=3HIZujytpdqcpytj-0',
      image: image15,
      category: 'design',
    },
    {
      id: 9,
      title: 'Disuxchange Backend API',
      description: 'A secure, scalable backend API for the Disuxchange platform, handling crypto transactions, user authentication, and real-time rate updates.',
      tags: ['Node.js', 'Express', 'MongoDB', 'Web3.js', 'Redis'],
      image: image7,
      category: 'backend',
    },
    {
      id: 10,
      title: 'E-Commerce Backend System',
      description: 'A robust backend for a global e-commerce platform, supporting inventory management, order processing, and integration with third-party APIs.',
      tags: ['Django', 'Python', 'PostgreSQL', 'Celery', 'AWS'],
      image: image8,
      category: 'backend',
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'design', label: 'UI/UX Design' },
    { id: 'backend', label: 'Backend Systems' },
  ];

  return (
    <section className="px-6 sm:px-12 md:px-24 lg:px-32 py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-56 -right-56 w-[30rem] h-[30rem] bg-gradient-to-br from-[#FF0050] to-[#00F2EA] rounded-full filter blur-3xl opacity-25 animate-pulse" />
      <div className="absolute -bottom-56 -left-56 w-[30rem] h-[30rem] bg-gradient-to-br from-[#00F2EA] to-[#FF0050] rounded-full filter blur-3xl opacity-25 animate-pulse" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-[#00F2EA] to-[#FF0050]">
            My Work
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-3xl mx-auto">
            Discover my portfolio of innovative projects, showcasing expertise in web development, mobile apps, UI/UX design, and robust backend systems.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 text-base font-semibold uppercase tracking-wider transition-all duration-300 rounded-lg ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-[#FF0050] to-[#00F2EA] text-white shadow-lg shadow-[#FF0050]/40'
                  : 'bg-gray-800/50 text-gray-200 hover:bg-gray-700/50 border border-gray-700 hover:border-[#00F2EA]/50'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="relative group bg-gray-900/80 border border-gray-800/50 hover:border-[#00F2EA]/40 transition-all duration-500 rounded-lg overflow-hidden shadow-2xl hover:shadow-[#00F2EA]/20 backdrop-blur-sm"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="relative aspect-[16/9] mb-6 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      sizes="100vw"
                      objectFit="cover"
                      className="transition-transform duration-500 group-hover:scale-110"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                      style={{ opacity: hoveredProject === project.id ? 0.5 : 0.3 }}
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-2xl font-bold text-white group-hover:text-[#00F2EA] transition-colors">
                        {project.title}
                      </h3>
                      <ArrowTopRightOnSquareIcon className="h-6 w-6 text-gray-400 group-hover:text-[#00F2EA] transition-colors" />
                    </div>
                    <p className="text-gray-300 mb-4 text-lg leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          className="text-sm font-semibold px-4 py-2 rounded-full bg-gray-800/50 text-gray-200 tracking-wide uppercase group-hover:bg-[#00F2EA]/20 group-hover:text-white transition-all duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              ) : (
                <div className="block">
                  <div className="relative aspect-[16/9] mb-6 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      sizes="100vw"
                      objectFit="cover"
                      className="transition-transform duration-500 group-hover:scale-110"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                      style={{ opacity: hoveredProject === project.id ? 0.5 : 0.3 }}
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-2xl font-bold text-white group-hover:text-[#00F2EA] transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-gray-300 mb-4 text-lg leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          className="text-sm font-semibold px-4 py-2 rounded-full bg-gray-800/50 text-gray-200 tracking-wide uppercase group-hover:bg-[#00F2EA]/20 group-hover:text-white transition-all duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">
              No projects found in this category. Check back soon for updates!
            </p>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-20">
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Inspired by what you see? Let’s collaborate to bring your ideas to life.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-[#FF0050] to-[#00F2EA] text-white px-10 py-4 rounded-lg font-semibold text-lg uppercase tracking-wider hover:from-[#00F2EA] hover:to-[#FF0050] transition-all duration-300 shadow-lg shadow-[#FF0050]/40 hover:shadow-[#00F2EA]/40"
          >
            Start a Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorkPage;