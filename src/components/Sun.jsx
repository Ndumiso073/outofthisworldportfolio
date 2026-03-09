import React from 'react';

const Sun = ({ size = "w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" }) => {
  return (
    <div className={`relative ${size} flex items-center justify-center`}>
      {/* Sun Core */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 shadow-2xl animate-pulse">
        <div className="absolute inset-1 rounded-full bg-gradient-to-br from-yellow-200 via-orange-300 to-yellow-400"></div>
      </div>
      
      {/* Solar Flares/Rays */}
      <div className="absolute inset-0 animate-spin-slow">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-full bg-gradient-to-t from-transparent via-yellow-400/30 to-transparent"
            style={{
              transform: `rotate(${i * 45}deg)`,
              transformOrigin: 'center'
            }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-gradient-to-t from-yellow-400 to-transparent rounded-full"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-gradient-to-b from-yellow-400 to-transparent rounded-full"></div>
          </div>
        ))}
      </div>
      
      {/* Inner Glow */}
      <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/40 to-transparent animate-pulse"></div>
      
      {/* Center Highlight */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full shadow-lg"></div>
      </div>
    </div>
  );
};

export default Sun;
