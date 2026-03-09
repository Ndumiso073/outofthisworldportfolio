import React from 'react';

const CosmicButton = ({ children, onClick, href }) => {
  const handleClick = () => {
    if (onClick) onClick();
    if (href) window.open(href, '_blank');
  };

  return (
    <div className="btn-container">
      <button id="space-btn" type="button" onClick={handleClick}>
        <span>{children}</span>
        {/* Animated Stars */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              position: 'absolute',
              left: `${Math.random() * 200}px`,
              top: `${Math.random() * 60}px`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `scale(${Math.random() * 2})`
            }}
          />
        ))}
        {/* Shooting Stars */}
        <div className="shooting-star shooting-star-1" />
        <div className="shooting-star shooting-star-2" />
        <div className="shooting-star shooting-star-3" />
        <div className="shooting-star shooting-star-4" />
      </button>
    </div>
  );
};

export default CosmicButton;
