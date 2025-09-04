'use client';

import Resume from "@/assets/Resume.pdf"

import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

const AboutHome = () => {
  const hobbies = [
    "Photography", "Chess", "Hiking", "Reading",
    "Game Development", "Open Source Contributions"
  ];

  return (
    <section className="px-6 sm:px-12 md:px-24 lg:px-32 py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-56 -right-56 w-[30rem] h-[30rem] bg-gradient-to-br from-[#FF0050] to-[#00F2EA] rounded-full filter blur-3xl opacity-25 animate-pulse" />
      <div className="absolute -bottom-56 -left-56 w-[30rem] h-[30rem] bg-gradient-to-br from-[#00F2EA] to-[#FF0050] rounded-full filter blur-3xl opacity-25 animate-pulse" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Name Section */}
        <div className="mb-20 text-center">
          <h3 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-[#00F2EA] to-[#FF0050]">
            Teslim Oyetunji
          </h3>
          <div className="h-1 w-24 bg-gradient-to-r from-[#FF0050] to-[#00F2EA] mt-4 mx-auto"></div>
        </div>

        {/* About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold uppercase tracking-wider text-gray-100 mb-6">
              About
            </h3>
            <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-8">
              I partner with businesses and creators worldwide, leveraging cutting-edge technologies to craft innovative, scalable solutions that drive measurable impact and growth.
            </p>
            <a
              href={Resume}
              download
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FF0050] to-[#00F2EA] text-white px-8 py-4 rounded-lg font-semibold uppercase tracking-wider text-sm hover:from-[#00F2EA] hover:to-[#FF0050] transition-all duration-300 shadow-lg shadow-[#FF0050]/40 hover:shadow-[#00F2EA]/40"
            >
              <ArrowDownTrayIcon className="h-6 w-6" />
              Download CV
            </a>
          </div>

          {/* Marquee Section */}
          <div className="border border-gray-800/50 p-10 flex items-center justify-center bg-gray-900/80 rounded-lg shadow-lg hover:shadow-[#00F2EA]/20 transition-all duration-300 backdrop-blur-sm">
            <div className="overflow-hidden w-full">
              <div className="whitespace-nowrap text-xl md:text-2xl font-semibold uppercase text-gray-100">
                Full-Stack Developer • UI/UX Designer • Problem Solver • Creative Thinker • Tech Enthusiast •
              </div>
            </div>
          </div>
        </div>

        {/* Hobbies Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold uppercase tracking-wider text-gray-100 mb-6">
              Hobbies
            </h3>
            <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-8">
              Beyond coding, I’m passionate about creating meaningful experiences, whether through capturing moments, strategic thinking, or exploring new challenges.
            </p>
            <div className="flex flex-wrap gap-4">
              {hobbies.map((hobby, index) => (
                <span
                  key={index}
                  className="px-5 py-3 bg-gray-800/50 text-gray-200 text-sm font-semibold uppercase tracking-wider rounded-full hover:bg-[#00F2EA]/20 hover:text-white transition-all duration-300"
                >
                  {hobby}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHome;