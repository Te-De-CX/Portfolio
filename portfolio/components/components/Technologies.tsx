'use client'

import React from 'react';
import styles from './Technologies.module.css';

// Icons (using react-icons which works well with Next.js)
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub, FaNpm, FaPython } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiExpress, SiMongodb, SiPostgresql, SiTailwindcss, SiRedux, SiGraphql, SiDocker, SiJest, SiReactrouter, SiDjango } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';

interface TechItem {
  id: number;
  name: string;
  icon: React.ReactNode;
  category: 'frontend' | 'backend' | 'tools';
}

const Technologies = () => {
  const techStack: TechItem[] = [
    // Frontend
    { id: 1, name: "HTML5", icon: <FaHtml5 />, category: 'frontend' },
    { id: 2, name: "CSS3", icon: <FaCss3Alt />, category: 'frontend' },
    { id: 3, name: "JavaScript", icon: <FaJs />, category: 'frontend' },
    { id: 4, name: "TypeScript", icon: <SiTypescript />, category: 'frontend' },
    { id: 5, name: "React", icon: <FaReact />, category: 'frontend' },
    { id: 6, name: "Next.js", icon: <SiNextdotjs />, category: 'frontend' },
    { id: 7, name: "Redux", icon: <SiRedux />, category: 'frontend' },
    { id: 8, name: "Tailwind CSS", icon: <SiTailwindcss />, category: 'frontend' },
    { id: 9, name: "React Router", icon: <SiReactrouter />, category: 'frontend' },
    
    // Backend
    { id: 10, name: "Node.js", icon: <FaNodeJs />, category: 'backend' },
    { id: 11, name: "Express", icon: <SiExpress />, category: 'backend' },
    { id: 12, name: "Python", icon: <FaPython />, category: 'backend' },
    { id: 13, name: "GraphQL", icon: <SiGraphql />, category: 'backend' },
    { id: 14, name: "MongoDB", icon: <SiMongodb />, category: 'backend' },
    { id: 15, name: "PostgreSQL", icon: <SiPostgresql />, category: 'backend' },
    { id: 16, name: "Django", icon: <SiDjango />, category: 'backend' },
    
    // Mobile
    { id: 16, name: "React Native", icon: <TbBrandReactNative />, category: 'frontend' },
    
    // Tools
    { id: 17, name: "Git", icon: <FaGitAlt />, category: 'tools' },
    { id: 18, name: "GitHub", icon: <FaGithub />, category: 'tools' },
    { id: 19, name: "Docker", icon: <SiDocker />, category: 'tools' },
    { id: 20, name: "Jest", icon: <SiJest />, category: 'tools' },
    { id: 21, name: "npm", icon: <FaNpm />, category: 'tools' },
  ];

  const categories = [
    { id: 1, name: 'frontend', title: 'Frontend' },
    { id: 2, name: 'backend', title: 'Backend' },
    // { id: 3, name: 'mobile', title: 'Mobile' },
    { id: 4, name: 'tools', title: 'Tools' },
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Technologies</h2>
      <div className={styles.container}>
        {categories.map((category) => (
          <div key={category.id} className={styles.category}>
            <h3 className={styles.categoryTitle}>{category.title}</h3>
            <div className={styles.techGrid}>
              {techStack
                .filter((tech) => tech.category === category.name)
                .map((tech) => (
                  <div key={tech.id} className={styles.techItem}>
                    <div className={styles.techIcon}>{tech.icon}</div>
                    <span className={styles.techName}>{tech.name}</span>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;