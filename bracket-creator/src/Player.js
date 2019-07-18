import React from 'react';

function Player({ name, hovered, onHover }) {
  
  const handleHover = () => {
    onHover(name);
  }

  const handleMouseOut = () => {
    onHover('');
  }

  // refactor this so that hover functionality doesn't rely on JS
  return <div className={hovered ? "Player Player--hovered" : "Player"} onMouseOver={handleHover} onMouseOut={handleMouseOut}>{name}</div>
}

export default Player;
