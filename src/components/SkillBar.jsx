import { useState, useEffect, useRef } from "react";

const SkillBar = ({ name, level, icon }) => {
  const [width, setWidth] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => {
      if (barRef.current) {
        observer.unobserve(barRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setWidth(level);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible, level]);

  const getBarColor = (level) => {
    if (level >= 85) return "bg-green-500";
    if (level >= 70) return "bg-blue-500";
    return "bg-purple-500";
  };

  return (
    <div ref={barRef} className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          {icon && <img src={icon} alt={name} className="w-6 h-6" />}
          <span className="text-white font-medium">{name}</span>
        </div>
        <span className="text-white-600 font-semibold">{level}%</span>
      </div>
      <div className="w-full h-3 bg-black-300 rounded-full overflow-hidden">
        <div
          className={`h-full ${getBarColor(level)} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

export default SkillBar;