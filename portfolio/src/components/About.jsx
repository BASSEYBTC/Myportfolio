import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import photo from "../assets/photo.jpeg";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Node.js", level: 75 },
    { name: "Tailwind CSS", level: 95 },
    { name: "GSAP", level: 70 },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-black">
      <div ref={contentRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            About <span className="text-white">Me</span>
          </h2>
          <div className="w-20 h-1 bg-white mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src={photo}
            alt="Profile photo"
            className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-2xl mx-auto block"
          />

          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              Turning Ideas into Reality
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Hi, I'm a student developer who likes breaking things just to
              figure out how to fix them usually with JavaScript and snacks. I
              build web apps that try their best to work on the first try (no
              promises though).
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              React and Tailwind are my daily tools, and I'm currently exploring
              the mysterious land of backend development where bugs go to
              multiply. Full-stack dreams, coffee-fueled nights, and lots of
              console.log.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              When I'm not coding, I'm either daydreaming startup ideas, lurking
              on GitHub, or explaining to my friends why 'it works on my
              machine' is totally valid. I love creating stuff that’s fun,
              functional, and maybe a little chaotic.
            </p>

            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-white">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-white rounded-full transition-all duration-1000 group-hover:opacity-80"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
