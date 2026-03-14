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

  return (
    <section className="relative section-spacing">
      {/* Text content stays padded */}
      <div className="c-space">
        <h2 className="text-heading">Technical Skills</h2>
        <p className="text-neutral-400 text-base sm:text-lg mt-4 max-w-3xl">
          Core technologies and tools I use to bring ideas to life.
        </p>
        <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
      </div>

      {/* Orbiting Skills Universe — full viewport width so orbit is truly centered */}
      <div className="relative flex h-[420px] sm:h-[500px] md:h-[600px] w-screen left-1/2 -translate-x-1/2 items-center justify-center overflow-hidden mt-10 sm:mt-16 md:mt-20">

        {/* Center Hub */}
        <div className="relative z-10 flex h-20 w-20 sm:h-28 sm:w-28 md:h-32 md:w-32 items-center justify-center rounded-full border-2 border-white/20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm sun-glow">
          <StarfieldSun size="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20" />
        </div>

        {/* Inner Orbit — Core Languages */}
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

        {/* Middle Orbit — Frameworks & Tools */}
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

        {/* Outer Orbit — Databases & Additional Tools */}
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

        {/* Skill detail card — anchored to bottom of orbit container */}
        {hoveredSkill && (
          <div className="absolute bottom-2 sm:bottom-6 left-1/2 -translate-x-1/2 w-[85%] sm:w-auto bg-navy/95 backdrop-blur-lg border border-white/20 rounded-xl px-4 py-3 sm:px-6 sm:py-4 z-50">
            <p className="text-white font-bold text-sm sm:text-base md:text-lg truncate">
              {hoveredSkill.name}
            </p>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex-1 sm:w-32 sm:flex-none h-2 bg-storm rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"
                  style={{ width: `${hoveredSkill.level}%` }}
                />
              </div>
              <span className="text-blue-400 font-semibold text-sm sm:text-base shrink-0">
                {hoveredSkill.level}%
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="c-space flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mt-6 md:mt-12">
        {[
          { color: "border-blue-500/40",   label: "Core Languages" },
          { color: "border-purple-500/40", label: "Frameworks & Tools" },
          { color: "border-green-500/40",  label: "Databases & More" },
        ].map(({ color, label }) => (
          <div key={label} className="flex items-center gap-2">
            <div className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 ${color}`} />
            <span className="text-neutral-400 text-xs sm:text-sm">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};


/** Extracted skill icon to keep JSX clean */
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