import Image from "next/image";
import Profile from "@/public/images/home/profile/profile1.jpg";

const First = () => {
  return (
    <section className="px-4 sm:px-10 md:px-20 py-10 md:py-20 border-b border-gray-200">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
        {/* Name/Tagline - now comes first on mobile */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-black uppercase tracking-tight">
            tedecx
          </h1>
          <p className="mt-4 text-lg md:text-xl font-medium text-gray-700 max-w-2xl">
            Full-Stack Developer & Digital Craftsman
          </p>
        </div>
        
        {/* Profile Image */}
        <div className="order-1 md:order-2 w-24 h-24 sm:w-32 sm:h-32 md:w-56 md:h-56 md:left-20 relative overflow-hidden rounded-full border-2 border-black shadow-lg">
          <Image 
            src={Profile}
            alt="Profile image"
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>

      {/* Contact & Bio */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-10">
        <a 
          href="mailto:hello@tedecx.com" 
          className="text-lg md:text-xl font-semibold hover:underline transition-all"
        >
          hello@tedecx.com
        </a>
        
        <p className="text-base md:text-lg text-gray-700 md:w-1/2 lg:w-5/12">
          Hi, I&apos;m a full-stack developer with a passion for turning digital ideas into functional, 
          user-friendly solutions. I specialize in creating seamless web experiences that blend 
          innovative design with robust functionality. Let&apos;s collaborate and innovate!
        </p>
      </div>
    </section>
  );
};

export default First;