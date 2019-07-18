import React, { useState } from 'react';
import Game from './Game';
import './Bracket.css';

function Bracket({ participants, wins, rounds }) {
  const [ hoveredPlayer, setHovered ] = useState('');

  return (
    <div className="Bracket">
      {rounds.map((round) => {
        return (
          <div className="round">
            {round.map((game) => <Game players={game} hoveredPlayer={hoveredPlayer} onHover={setHovered} />)}
          </div>
        )
      })}
    </div>
  )
}

export default Bracket;
