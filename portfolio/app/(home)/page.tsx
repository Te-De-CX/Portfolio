// app/page.js
'use client';

// import { useState, useEffect } from 'react';
import First from "@/components/components/first";
import Technologies from "@/components/components/Technologies";
import Work from "@/components/UI/layouts/work";
import HomeAbout from "@/components/UI/layouts/about";
import Footer from "@/components/UI/layouts/footer";

export default function RootPage() {
  // const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  
  // useEffect(() => {
  //   const handleMouseMove = (e: MouseEvent) => {
  //     setCursorPosition({ x: e.clientX, y: e.clientY });
  //   };
    
  //   window.addEventListener('mousemove', handleMouseMove);
    
  //   return () => {
  //     window.removeEventListener('mousemove', handleMouseMove);
  //   };
  // }, []);

  return (
    <div className="relative bg-[#1a1a1a] text-white overflow-hidden">
      {/* Custom cursor */}
      <First />
      <Technologies />
      <Work />
      <HomeAbout />
      <Footer />
    </div>
  );
}