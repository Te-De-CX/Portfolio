'use client'

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// 1. First define the interface for your circle objects
interface FloatingCircle {
  id: number;
  size: number;
  x: number;
  y: number;
  color: string;
  duration: number;
  delay: number;
}

const FloatingCirclesBackground = () => {
  // 2. Explicitly type your state with the interface
  const [circles, setCircles] = useState<FloatingCircle[]>([]);

  useEffect(() => {
    const generateCircles = (): FloatingCircle[] => {
      const newCircles: FloatingCircle[] = [];
      for (let i = 0; i < 12; i++) {
        newCircles.push({
          id: i,
          size: Math.random() * 20 + 10,
          x: Math.random() * 100,
          y: Math.random() * 100,
          color: `rgba(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 50 + 50)}, ${Math.floor(Math.random() * 100 + 155)}, 0.4)`,
          duration: Math.random() * 20 + 20,
          delay: Math.random() * 5
        });
      }
      return newCircles;
    };

    setCircles(generateCircles());
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {circles.map((circle) => (
        <motion.div
          key={circle.id}
          initial={{
            x: `${circle.x}%`,
            y: `${circle.y}%`,
            opacity: 0
          }}
          animate={{
            x: [`${circle.x}%`, `${circle.x + (Math.random() * 20 - 10)}%`],
            y: [`${circle.y}%`, `${circle.y + (Math.random() * 20 - 10)}%`],
            opacity: [0, 0.4, 0],
            scale: [0.5, 1.2, 0.8]
          }}
          transition={{
            duration: circle.duration,
            delay: circle.delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          style={{
            width: `${circle.size}px`,
            height: `${circle.size}px`,
            backgroundColor: circle.color,
            borderRadius: "50%",
            position: "absolute",
            filter: "blur(8px)"
          }}
        />
      ))}
    </div>
  );
};

export default FloatingCirclesBackground;