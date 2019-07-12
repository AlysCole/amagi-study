import React from 'react';
import TournamentList from './TournamentList';
import TournamentSidebar from './TournamentSidebar';
import PropTypes from 'prop-types';
import './App.css';

function TournamentContainer(props) {
  return (
    <div>
      <input type="text" placeholder="Search your tournaments" />
      <TournamentList />
      <TournamentSidebar />
    </div>
  );
}

TournamentContainer.propTypes = {
};

export default TournamentContainer;
