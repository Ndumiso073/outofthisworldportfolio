import { OrbitingCircles } from "../components/OrbitingCircles";
import { skills } from "../constants";
import { useState } from "react";
import StarfieldSun from "../components/StarfieldSun";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section className="relative c-space section-spacing">
      <h2 className="text-heading">Technical Skills</h2>
      <p className="text-white-600 text-lg mt-4 max-w-3xl">
        Core technologies and tools I use to bring ideas to life.
      </p>

      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />

      {/* Orbiting Skills Universe - Responsive */}
      <div className="relative flex h-[400px] sm:h-[500px] md:h-[600px] w-full items-center justify-center overflow-hidden mt-12 sm:mt-16 md:mt-20">
        {/* Center Hub */}
        <div className="relative z-10 flex h-20 w-20 sm:h-28 sm:w-28 md:h-32 md:w-32 items-center justify-center rounded-full border-2 sm:border-3 md:border-4 border-white/20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm sun-glow">
          <StarfieldSun size="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20" />
        </div>

        {/* Inner Orbit - Core Languages */}
        <OrbitingCircles 
          radius={window.innerWidth < 640 ? 80 : window.innerWidth < 768 ? 100 : 120} 
          duration={20} 
          iconSize={window.innerWidth < 640 ? 45 : window.innerWidth < 768 ? 55 : 60}
        >
          {skills.languages.slice(0, 4).map((skill, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
              onClick={() => setHoveredSkill(hoveredSkill?.name === skill.name ? null : skill)}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-black-200 border-2 border-blue-500/40 flex items-center justify-center hover:border-blue-500 hover:scale-125 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50">
                {skill.icon ? (
                  <img src={skill.icon} alt={skill.name} className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                ) : (
                  <span className="text-white text-xs sm:text-sm font-bold">{skill.name[0]}</span>
                )}
              </div>
            </div>
          ))}
        </OrbitingCircles>

        {/* Middle Orbit - Frameworks & Tools */}
        <OrbitingCircles 
          radius={window.innerWidth < 640 ? 130 : window.innerWidth < 768 ? 165 : 200} 
          duration={30} 
          reverse 
          iconSize={window.innerWidth < 640 ? 40 : window.innerWidth < 768 ? 45 : 50}
        >
          {[...skills.languages.slice(4), ...skills.tools.slice(0, 2)].map((skill, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
              onClick={() => setHoveredSkill(hoveredSkill?.name === skill.name ? null : skill)}
            >
              <div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-black-200 border-2 border-purple-500/40 flex items-center justify-center hover:border-purple-500 hover:scale-125 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50">
                {skill.icon ? (
                  <img src={skill.icon} alt={skill.name} className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                ) : (
                  <span className="text-white text-[10px] sm:text-xs font-bold">{skill.name[0]}</span>
                )}
              </div>
            </div>
          ))}
        </OrbitingCircles>

        {/* Outer Orbit - Databases & Additional Tools */}
        <OrbitingCircles 
          radius={window.innerWidth < 640 ? 180 : window.innerWidth < 768 ? 230 : 280} 
          duration={40} 
          iconSize={window.innerWidth < 640 ? 38 : window.innerWidth < 768 ? 42 : 45}
        >
          {[...skills.databases, ...skills.tools.slice(2)].map((skill, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
              onClick={() => setHoveredSkill(hoveredSkill?.name === skill.name ? null : skill)}
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-black-200 border-2 border-green-500/40 flex items-center justify-center hover:border-green-500 hover:scale-125 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50">
                {skill.icon ? (
                  <img src={skill.icon} alt={skill.name} className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6" />
                ) : (
                  <span className="text-white text-[10px] sm:text-xs font-bold">{skill.name[0]}</span>
                )}
              </div>
            </div>
          ))}
        </OrbitingCircles>

        {/* Hover/Tap Details Card */}
        {hoveredSkill && (
          <div className="absolute bottom-4 sm:bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 bg-black-200/90 backdrop-blur-lg border border-white/20 rounded-xl px-4 py-3 sm:px-6 sm:py-4 z-50 animate-in fade-in slide-in-from-bottom-4 duration-300 max-w-[90%] sm:max-w-none">
            <p className="text-white font-bold text-base sm:text-lg">{hoveredSkill.name}</p>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-24 sm:w-32 h-2 bg-black-300 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  style={{ width: `${hoveredSkill.level}%` }}
                />
              </div>
              <span className="text-blue-400 font-semibold text-sm sm:text-base">{hoveredSkill.level}%</span>
            </div>
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mt-8 md:mt-12 px-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-blue-500/40" />
          <span className="text-white-600 text-xs sm:text-sm">Core Languages</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-purple-500/40" />
          <span className="text-white-600 text-xs sm:text-sm">Frameworks & Tools</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-green-500/40" />
          <span className="text-white-600 text-xs sm:text-sm">Databases & More</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;