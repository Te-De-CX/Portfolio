'use client';

import { useState } from 'react';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const faqData = [
    {
      id: 1,
      question: "What is one of your greatest creations?",
      answer: "One of my proudest creations is a full-stack e-commerce platform with real-time inventory tracking and AI-powered recommendations, boosting client sales by 40%."
    },
    {
      id: 2,
      question: "How do you approach problem solving?",
      answer: "I use a structured process: deeply analyze the problem, break it into manageable parts, research solutions, prototype rapidly, and iterate based on feedback to deliver optimal results."
    },
    {
      id: 3,
      question: "What technologies do you specialize in?",
      answer: "My expertise lies in React, Next.js, TypeScript, Node.js, and PostgreSQL, with additional proficiency in React Native, GraphQL, and cloud platforms like AWS and Vercel."
    },
    {
      id: 4,
      question: "How do you handle tight deadlines?",
      answer: "I employ the MoSCoW prioritization method, proactively communicate potential challenges, and focus on delivering core MVP features to meet deadlines without compromising quality."
    },
    {
      id: 5,
      question: "What's your design philosophy?",
      answer: "I follow a 'less but better' approach, crafting intuitive, accessible interfaces that prioritize user experience, performance, and subtle, delightful micro-interactions."
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
    <section className="px-6 sm:px-12 md:px-24 lg:px-32 py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-56 -right-56 w-[30rem] h-[30rem] bg-gradient-to-br from-[#FF0050] to-[#00F2EA] rounded-full filter blur-3xl opacity-25 animate-pulse" />
      <div className="absolute -bottom-56 -left-56 w-[30rem] h-[30rem] bg-gradient-to-br from-[#00F2EA] to-[#FF0050] rounded-full filter blur-3xl opacity-25 animate-pulse" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-20 text-center">
          <h2 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-[#00F2EA] to-[#FF0050]">
            FAQs
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-3xl mx-auto">
            Got questions? Find answers to common queries about my process, technologies, and approach.
          </p>
        </div>

        <div className="mb-12">
          <div className="relative max-w-lg mx-auto">
            <input
              type="text"
              placeholder="Search FAQs..."
              className="w-full px-5 py-4 bg-gray-900/80 text-gray-100 border border-gray-800/50 focus:border-[#00F2EA] rounded-lg focus:outline-none placeholder-gray-500 transition-all duration-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#00F2EA] transition-colors duration-300"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        <div className="space-y-6">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => (
              <div
                key={faq.id}
                className="bg-gray-900/80 border border-gray-800/50 hover:border-[#00F2EA]/40 rounded-lg overflow-hidden shadow-lg hover:shadow-[#00F2EA]/20 transition-all duration-300 backdrop-blur-sm"
              >
                <button
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-800/50 transition-colors duration-300"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={activeIndex === index}
                  aria-controls={`faq-${faq.id}`}
                >
                  <h3 className="text-xl font-semibold text-gray-100 flex-1">{faq.question}</h3>
                  {activeIndex === index ? (
                    <MinusIcon className="h-6 w-6 text-[#00F2EA] ml-4" />
                  ) : (
                    <PlusIcon className="h-6 w-6 text-[#00F2EA] ml-4" />
                  )}
                </button>

                {activeIndex === index && (
                  <div id={`faq-${faq.id}`} className="px-6 pb-6 pt-2 text-gray-300 text-lg leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-16 text-gray-400 text-lg">
              No FAQs found matching your search. Try a different term!
            </div>
          )}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Didn’t find the answer you’re looking for? Reach out directly!
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-[#FF0050] to-[#00F2EA] text-white px-10 py-4 rounded-lg font-semibold text-lg uppercase tracking-wider hover:from-[#00F2EA] hover:to-[#FF0050] transition-all duration-300 shadow-lg shadow-[#FF0050]/40 hover:shadow-[#00F2EA]/40"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQs;