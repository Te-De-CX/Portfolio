"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-white z-[99999] flex items-center justify-center">
      <motion.svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, ease: "linear", duration: 2 }}
      >
        <motion.circle
          cx="60"
          cy="60"
          r="40"
          stroke="black"
          strokeWidth="6"
          fill="none"
          strokeDasharray="200"
          strokeDashoffset="0"
          animate={{
            strokeDashoffset: [0, 400],
            r: [40, 20, 40],
          }}
          transition={{
            repeat: Infinity,
            duration: 2.5,
            ease: "easeInOut",
          }}
        />
      </motion.svg>
    </div>
  );
}
