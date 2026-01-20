import { OrbitingCircles } from "../components/OrbitingCircles";
import { skills } from "../constants";
import { useState } from "react";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section className="relative c-space section-spacing">
      <h2 className="text-heading">Technical Arsenal</h2>
      <p className="text-white-600 text-lg mt-4 max-w-3xl">
        My technical universe - explore the orbiting skills that power my development journey.
      </p>

      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />

      {/* Orbiting Skills Universe */}
      <div className="relative flex h-[600px] w-full items-center justify-center overflow-hidden mt-20">
        {/* Center Hub */}
        <div className="relative z-10 flex h-32 w-32 items-center justify-center rounded-full border-4 border-white/20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm">
          <div className="text-center">
            <p className="text-white font-bold text-2xl">TM</p>
            <p className="text-white-600 text-xs">Developer</p>
          </div>
        </div>

        {/* Inner Orbit - Core Languages */}
        <OrbitingCircles radius={120} duration={20} iconSize={60}>
          {skills.languages.slice(0, 4).map((skill, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="w-14 h-14 rounded-full bg-black-200 border-2 border-blue-500/40 flex items-center justify-center hover:border-blue-500 hover:scale-125 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50">
                {skill.icon ? (
                  <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
                ) : (
                  <span className="text-white text-sm font-bold">{skill.name[0]}</span>
                )}
              </div>
            </div>
          ))}
        </OrbitingCircles>

        {/* Middle Orbit - Frameworks & Tools */}
        <OrbitingCircles radius={200} duration={30} reverse iconSize={50}>
          {[...skills.languages.slice(4), ...skills.tools.slice(0, 2)].map((skill, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="w-12 h-12 rounded-full bg-black-200 border-2 border-purple-500/40 flex items-center justify-center hover:border-purple-500 hover:scale-125 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50">
                {skill.icon ? (
                  <img src={skill.icon} alt={skill.name} className="w-7 h-7" />
                ) : (
                  <span className="text-white text-xs font-bold">{skill.name[0]}</span>
                )}
              </div>
            </div>
          ))}
        </OrbitingCircles>

        {/* Outer Orbit - Databases & Additional Tools */}
        <OrbitingCircles radius={280} duration={40} iconSize={45}>
          {[...skills.databases, ...skills.tools.slice(2)].map((skill, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="w-11 h-11 rounded-full bg-black-200 border-2 border-green-500/40 flex items-center justify-center hover:border-green-500 hover:scale-125 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50">
                {skill.icon ? (
                  <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
                ) : (
                  <span className="text-white text-xs font-bold">{skill.name[0]}</span>
                )}
              </div>
            </div>
          ))}
        </OrbitingCircles>

        {/* Hover Details Card */}
        {hoveredSkill && (
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black-200/90 backdrop-blur-lg border border-white/20 rounded-xl px-6 py-4 z-50 animate-in fade-in slide-in-from-bottom-4 duration-300">
            <p className="text-white font-bold text-lg">{hoveredSkill.name}</p>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-32 h-2 bg-black-300 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  style={{ width: `${hoveredSkill.level}%` }}
                />
              </div>
              <span className="text-blue-400 font-semibold">{hoveredSkill.level}%</span>
            </div>
          </div>
        )}
      </div>
      {/* Legend */}
      <div className="flex justify-center gap-8 mt-12">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full border-2 border-blue-500/40" />
          <span className="text-white-600 text-sm">Core Languages</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full border-2 border-purple-500/40" />
          <span className="text-white-600 text-sm">Frameworks & Tools</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full border-2 border-green-500/40" />
          <span className="text-white-600 text-sm">Databases & More</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;