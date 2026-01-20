import { useState } from "react";
import { OrbitingCircles } from "./OrbitingCircles";

const SkillOrbit = ({ skill, radius, duration, reverse }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
    >
      <OrbitingCircles radius={radius} duration={duration} reverse={reverse} iconSize={60}>
        <div className="relative group cursor-pointer">
          <div className="w-14 h-14 rounded-full bg-black-200 border-2 border-white/20 flex items-center justify-center hover:border-white/40 hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50">
            {skill.icon ? (
              <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
            ) : (
              <span className="text-white text-sm font-bold">{skill.name[0]}</span>
            )}
          </div>
          
          {showDetails && (
            <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-black-200 border border-white/20 rounded-lg px-4 py-2 whitespace-nowrap z-50 animate-in fade-in slide-in-from-bottom-2 duration-200">
              <p className="text-white font-semibold text-sm">{skill.name}</p>
              <p className="text-blue-400 text-xs">{skill.level}%</p>
            </div>
          )}
        </div>
      </OrbitingCircles>
    </div>
  );
};

export default SkillOrbit;