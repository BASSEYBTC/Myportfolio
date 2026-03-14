import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const marqueeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const skills = [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "GSAP",
      icon: "https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Vite",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
    },
    {
      name: "Vercel",
      icon: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png",
    },
    {
      name: "Netlify",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",
    },
    {
      name: "WordPress",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
  ];

  return (
    <section id="tech-stack" ref={sectionRef} className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Tech <span className="text-white">Stack</span>
          </h2>
          <div className="w-20 h-1 bg-white mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Technologies I use to build amazing digital experiences
          </p>
        </div>

        <div className="relative overflow-hidden mask-[linear-gradient(90deg,#0000_0%,#000_10%,#000_calc(100%-10%),#0000_100%)]">
          <div
            ref={marqueeRef}
            className="flex gap-8 whitespace-nowrap animate-[marquee_10s_linear_infinite]"
          >
            {skills.concat(skills, skills).map((tech, index) => (
              <div
                key={index}
                className="shrink-0 w-24 h-16 flex flex-col items-center justify-center group hover:paused transition-all duration-300 hover:scale-110"
              >
                {tech.icon.startsWith("http") ? (
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-12 h-12 object-contain drop-shadow-lg group-hover:drop-shadow-xl mx-auto mb-1"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-12 h-12 mx-auto mb-1" />
                )}
                <span className="text-xs font-semibold text-white text-center leading-tight px-1">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.333%);
            }
          }
          @media (prefers-reduced-motion: reduce) {
            [animation] {
              animation-play-state: paused;
            }
          }
          .group:hover [animation] {
            animation-play-state: paused !important;
          }
        `}</style>
      </div>
    </section>
  );
};

export default TechStack;
