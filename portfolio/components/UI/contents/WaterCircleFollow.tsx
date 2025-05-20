'use client';

import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const WaterCircleFollow = () => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const smoothX = useSpring(cursorX, { damping: 80, stiffness: 40 });
  const smoothY = useSpring(cursorY, { damping: 80, stiffness: 40 });

  const animationState = useRef({ time: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    let animationId: number;

    if (ctx) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      canvas.style.position = 'fixed';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.pointerEvents = 'none';
      canvas.style.zIndex = '9999';
      document.body.appendChild(canvas);

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        animationState.current.time += 0.008;

        const centerX = smoothX.get();
        const centerY = smoothY.get();

        const baseRadius = 140;
        const pulse = Math.sin(animationState.current.time) * 10;
        const radius = baseRadius + pulse;

        const segments = 100;
        const points: { x: number; y: number }[] = [];

        for (let i = 0; i < segments; i++) {
          const angle = (i / segments) * Math.PI * 2;
          const wobble = Math.sin(animationState.current.time * 3 + i * 0.4) * 6;
          const r = radius + wobble;
          const x = centerX + Math.cos(angle) * r;
          const y = centerY + Math.sin(angle) * r;
          points.push({ x, y });
        }

        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
          ctx.lineTo(points[i].x, points[i].y);
        }
        ctx.closePath();

        const gradient = ctx.createRadialGradient(centerX, centerY, 40, centerX, centerY, radius);
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0.3)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = gradient;
        ctx.shadowColor = 'rgba(0, 0, 0, 0.15)';
        ctx.shadowBlur = 40;
        ctx.fill();

        animationId = requestAnimationFrame(animate);
      };

      animate();
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
      if (canvas.parentNode) canvas.remove();
    };
  }, [cursorX, cursorY, smoothX, smoothY]);

  return (
    <motion.div
      className="fixed w-0 h-0 pointer-events-none z-[10000]"
      style={{
        x: smoothX,
        y: smoothY,
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
};
