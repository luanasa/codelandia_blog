import React, { useState } from 'react';
import './card.css';

function Card({ date, title, content }) {
  const [isFilled, setIsFilled] = useState(false);

  const handleClick = () => {
    setIsFilled(!isFilled);
  };

  return (
    <div className="cards">
      <div className="header_cards">
        <span>{date}</span>
        <img 
          src={isFilled ? "./heart_filled.svg" : "./heart.svg"} 
          alt="" 
          onClick={handleClick} 
        />
      </div>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}

export default Card;
