import { OrbitingCircles } from "../components/OrbitingCircles";
import { skills } from "../constants";
import { useState } from "react";
import StarfieldSun from "../components/StarfieldSun";
import { useMediaQuery } from "react-responsive";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const isSmall = useMediaQuery({ maxWidth: 639 });
  const isMedium = useMediaQuery({ maxWidth: 767 });

  const innerRadius  = isSmall ? 80  : isMedium ? 100 : 120;
  const middleRadius = isSmall ? 130 : isMedium ? 165 : 200;
  const outerRadius  = isSmall ? 180 : isMedium ? 230 : 280;

  const innerIconSize  = isSmall ? 45 : isMedium ? 55 : 60;
  const middleIconSize = isSmall ? 40 : isMedium ? 45 : 50;
  const outerIconSize  = isSmall ? 38 : isMedium ? 42 : 45;

  const handleSkillClick = (skill) =>
    setHoveredSkill(hoveredSkill?.name === skill.name ? null : skill);

  // Square size = 2 * outerRadius + icon padding
  const containerSize = isSmall ? 420 : isMedium ? 520 : 620;

  return (
    <section className="relative section-spacing">
      <div className="c-space">
        <h2 className="text-heading">Technical Skills</h2>
        <p className="text-neutral-400 text-base sm:text-lg mt-4 max-w-3xl">
          Core technologies and tools I use to bring ideas to life.
        </p>
        <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
      </div>

      {/* ✅ Full-width wrapper for centering */}
      <div className="w-full flex justify-center overflow-hidden mt-10 sm:mt-16 md:mt-20">

        {/* ✅ Perfectly square container — this is what fixes the oval sun */}
        <div
          className="relative flex items-center justify-center"
          style={{
            width: `${containerSize}px`,
            height: `${containerSize}px`, // equal width & height = perfect square
          }}
        >
          {/* ✅ Center Hub — inline px size, flexShrink:0 prevents squishing */}
          <div
            className="relative z-10 flex items-center justify-center rounded-full border-2 border-white/20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm sun-glow"
            style={{
              width: isSmall ? '80px' : isMedium ? '112px' : '128px',
              height: isSmall ? '80px' : isMedium ? '112px' : '128px',
              flexShrink: 0,
            }}
          >
            <StarfieldSun size={isSmall ? "w-12 h-12" : isMedium ? "w-16 h-16" : "w-20 h-20"} />
          </div>

          {/* Inner Orbit */}
          <OrbitingCircles radius={innerRadius} duration={20} iconSize={innerIconSize}>
            {skills.languages.slice(0, 4).map((skill, index) => (
              <SkillIcon
                key={index}
                skill={skill}
                size="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
                imgSize="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                border="border-blue-500/40 hover:border-blue-500 hover:shadow-blue-500/50"
                hoveredSkill={hoveredSkill}
                onHover={setHoveredSkill}
                onClick={handleSkillClick}
              />
            ))}
          </OrbitingCircles>

          {/* Middle Orbit */}
          <OrbitingCircles radius={middleRadius} duration={30} reverse iconSize={middleIconSize}>
            {[...skills.languages.slice(4), ...skills.tools.slice(0, 2)].map((skill, index) => (
              <SkillIcon
                key={index}
                skill={skill}
                size="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12"
                imgSize="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
                border="border-purple-500/40 hover:border-purple-500 hover:shadow-purple-500/50"
                hoveredSkill={hoveredSkill}
                onHover={setHoveredSkill}
                onClick={handleSkillClick}
              />
            ))}
          </OrbitingCircles>

          {/* Outer Orbit */}
          <OrbitingCircles radius={outerRadius} duration={40} iconSize={outerIconSize}>
            {[...skills.databases, ...skills.tools.slice(2)].map((skill, index) => (
              <SkillIcon
                key={index}
                skill={skill}
                size="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11"
                imgSize="w-5 h-5 sm:w-6 sm:h-6"
                border="border-green-500/40 hover:border-green-500 hover:shadow-green-500/50"
                hoveredSkill={hoveredSkill}
                onHover={setHoveredSkill}
                onClick={handleSkillClick}
              />
            ))}
          </OrbitingCircles>

          {/* Skill detail card */}
          {hoveredSkill && (
            <div className="absolute bottom-2 sm:bottom-6 left-1/2 -translate-x-1/2 w-[85%] sm:w-auto bg-navy/95 backdrop-blur-lg border border-white/20 rounded-xl px-4 py-3 sm:px-6 sm:py-4 z-50">
              <p className="text-white font-bold text-sm sm:text-base md:text-lg truncate">
                {hoveredSkill.name}
              </p>
            </div>
          )}
        </div>
      </div>

    </section>
  );
};

const SkillIcon = ({ skill, size, imgSize, border, hoveredSkill, onHover, onClick }) => (
  <div
    className="relative group cursor-pointer"
    onMouseEnter={() => onHover(skill)}
    onMouseLeave={() => onHover(null)}
    onClick={() => onClick(skill)}
  >
    <div
      className={`${size} rounded-full bg-black/40 border-2 ${border} flex items-center justify-center hover:scale-125 transition-all duration-300 hover:shadow-lg`}
    >
      {skill.icon ? (
        <img src={skill.icon} alt={skill.name} className={imgSize} />
      ) : (
        <span className="text-white text-[10px] sm:text-xs font-bold">
          {skill.name[0]}
        </span>
      )}
    </div>
  </div>
);

export default Skills;