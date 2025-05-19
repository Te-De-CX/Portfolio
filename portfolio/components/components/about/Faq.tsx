'use client';

import { useState } from 'react';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const faqData = [
    {
      id: 1,
      question: "What is one of your greatest creations?",
      answer: "One of my proudest creations is a full-stack e-commerce platform with real-time inventory tracking and AI-powered recommendations that increased client sales by 40%."
    },
    {
      id: 2,
      question: "How do you approach problem solving?",
      answer: "I follow a structured approach: 1) Understand the problem deeply, 2) Break it into smaller parts, 3) Research solutions, 4) Prototype quickly, and 5) Iterate based on feedback."
    },
    {
      id: 3,
      question: "What technologies do you specialize in?",
      answer: "My core stack includes React, Next.js, TypeScript, Node.js, and PostgreSQL. I'm also experienced with React Native, GraphQL, and various cloud platforms like AWS and Vercel."
    },
    {
      id: 4,
      question: "How do you handle tight deadlines?",
      answer: "I prioritize tasks using the MoSCoW method (Must-have, Should-have, Could-have, Won't-have), communicate early about potential roadblocks, and focus on delivering MVP features first."
    },
    {
      id: 5,
      question: "What's your design philosophy?",
      answer: "I believe in 'less but better' - creating intuitive interfaces that solve real problems without unnecessary complexity. I focus on accessibility, performance, and delightful micro-interactions."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const filteredFAQs = faqData.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <motion.h2 
        className="text-3xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Frequently Asked Questions
      </motion.h2>

      <div className="mb-8">
        <div className="relative max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search FAQs..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button 
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      <div className="space-y-4">
        {filteredFAQs.length > 0 ? (
          filteredFAQs.map((faq, index) => (
            <div 
              key={faq.id}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-${faq.id}`}
              >
                <h3 className="text-lg font-medium flex-1">{faq.question}</h3>
                {activeIndex === index ? (
                  <MinusIcon className="h-5 w-5 text-black ml-4" />
                ) : (
                  <PlusIcon className="h-5 w-5 text-black ml-4" />
                )}
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    id={`faq-${faq.id}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 text-gray-700">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))
        ) : (
          <div className="text-center py-12 text-gray-500">
            No FAQs found matching your search.
          </div>
        )}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-4">
          Didn&apos;t find what you&apos;re looking for?
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
          Contact Me
        </button>
      </div>
    </section>
  );
};

export default FAQs;