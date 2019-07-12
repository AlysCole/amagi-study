import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

function TournamentList(props) {
  return (
    <div>
      <ul>
        {props.tournaments && tournaments.map( (tournament) => {
          return (
            <li>{tournament}</li>
          );
        })}
      </ul>
    </div>
  );
}

TournamentList.propTypes = {
};

export default TournamentList;
