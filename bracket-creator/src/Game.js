import React from 'react';
import './Game.css';
import Player from './Player';

function Game({ players, hoveredPlayer, onHover }) {
  const playerDivs = players.map((player) => {
    const isHovered = hoveredPlayer === player;
    return <Player hovered={isHovered} name={player} onHover={onHover} />
  });

  return (
    <div className="Game">
      {playerDivs}
    </div>
  )
}

export default Game;
