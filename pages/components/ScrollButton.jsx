import React from 'react';

const ScrollButton = ({ targetId, children }) => {
  const handleClick = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return <div onClick={handleClick}>{children}</div>;
};

export default ScrollButton;
