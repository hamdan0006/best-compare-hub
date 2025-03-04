import React from 'react';
import './CommonHero.css'; // Import the CSS file for styling

const CommonHero = ({ heading, backgroundImage }) => {
  return (
    <div 
      className="hero-section" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="overlay"></div>
      <h1 className="hero-heading">{heading}</h1>
    </div>
  );
};

export default CommonHero;