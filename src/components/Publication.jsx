import React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState } from "react";

const Publication = ({
  id,
  title,
  description,
  href,
  journal,
  year,
  image,
  tags,
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(mouseY, { damping: 20, stiffness: 100 });
  const rotateY = useSpring(mouseX, { damping: 20, stiffness: 100 });
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / 20);
    mouseY.set((e.clientY - centerY) / 20);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleButtonMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = (e.clientX - centerX) * 0.3;
    const distanceY = (e.clientY - centerY) * 0.3;
    setButtonPosition({ x: distanceX, y: distanceY });
  };

  const handleButtonMouseLeave = () => {
    setButtonPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div 
      className="relative py-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {/* Left Side - Publication Details */}
        <div className="flex flex-col gap-5 pr-8">
          <div className="flex items-center gap-3">
            <p className="px-3 py-1 text-sm font-medium text-white bg-black-200 rounded-full w-fit">
              {year}
            </p>
            <p className="text-sm text-white-600">{journal}</p>
          </div>

          <motion.h3 
            className="text-2xl font-semibold text-white"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h3>

          <motion.p 
            className="text-white-600 text-lg leading-relaxed"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {description}
          </motion.p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mt-3">
            {tags.map((tag) => (
              <div
                key={tag.id}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-black-200"
              >
                {tag.path && (
                  <img src={tag.path} alt={tag.name} className="w-5 h-5" />
                )}
                <p className="text-sm text-white-600">{tag.name}</p>
              </div>
            ))}
          </div>

          {/* DOI Link */}
          {href && (
            <motion.a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center gap-2 mt-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-fit group overflow-hidden"
              onMouseMove={handleButtonMouseMove}
              onMouseLeave={handleButtonMouseLeave}
              animate={{ x: buttonPosition.x, y: buttonPosition.y }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"
              />
              <p className="relative z-10 font-semibold text-white">
                View Publication
              </p>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="relative z-10 w-5 h-5 text-white"
                animate={{ x: buttonPosition.x > 0 ? 3 : 0 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </motion.svg>
            </motion.a>
          )}
        </div>

        {/* Right Side - Image */}
        <motion.div 
          className="flex items-center justify-center rounded-lg bg-black-200 overflow-hidden shadow-xl"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ 
            rotateX: rotateX,
            rotateY: rotateY,
            transformStyle: "preserve-3d"
          }}
        >
          <img
            src={image}
            alt={title}
            className="object-contain w-full h-full rounded-lg"
          />
        </motion.div>
      </div>

      {/* Divider */}
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-8 h-[1px] w-full" />
    </motion.div>
  );
};

export default Publication;