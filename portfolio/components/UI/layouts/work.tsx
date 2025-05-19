import Link from "next/link";
import Image1 from "@/public/images/home/work/macbook-pro-template-being-used-next-to-a-water-bottle-a19519 (1).png"
import image2 from "@/public/images/home/work/macbook-mockup-on-a-wooden-table-next-to-a-lamp-21623.png"
import Image from "next/image";

const Work = () => {
  const content = [
    {
      id: 1,
      name: "Web Development",
      description: "Modern web applications with React, Next.js, and TypeScript",
      tags: ["React", "Next.js", "Tailwind CSS","python", "django"],
      link: "https://tamang-foodservice.vercel.app/",
      imagesrc: Image1
    },
    {
      id: 2,
      name: "UI/UX Design",
      description: "Clean, user-centered interfaces with intuitive workflows",
      tags: ["Figma", "Adobe XD", "Prototyping"],
      link: "https://www.figma.com/design/S3lsJ94TT7gwKxInfaRS8p/Social-App?node-id=20-197&t=FVAG2VAj27VOC7RK-0",
      imagesrc: image2
    },
    // Uncomment when ready
    // {
    //   id: 3,
    //   name: "Mobile Development",
    //   description: "Cross-platform apps with React Native",
    //   tags: ["React Native", "Expo", "iOS/Android"],
    //   link: "/work/mobile"
    // },
  ];

  return (
    <section className="px-4 sm:px-10 md:px-20 py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
            Selected Work
          </h2>
          <Link 
            href="/work" 
            className="bg-black text-white py-3 px-6 md:px-8 text-lg uppercase tracking-wider hover:bg-gray-900 transition-colors duration-300"
          >
            View All Projects
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.map((item) => (
            <a 
              href={item.link} 
              target="_blank"
              key={item.id}
              className="group border border-gray-200 hover:border-black transition-colors duration-300"
            >
              <div className="p-8">
                <div className="mb-6 h-64 bg-gray-100 flex items-center justify-center">
                  {/* <span className="text-gray-400">Project Image</span> */}
                  {/* Replace with your Image component when ready */}
                  <Image src={item.imagesrc} alt={item.name} className="object-cover w-full h-full" />
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-gray-700 transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="text-gray-700 mb-4">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="text-xs uppercase tracking-wider px-3 py-1 bg-gray-100 text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;