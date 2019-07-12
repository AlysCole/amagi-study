import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

function TournamentSidebar({ results, ...props} ) {
  return (
    <div>
      <ul>
        <li>
          <div>All</div>
          <div>{results.filter(result => result.archived === false).length}</div>
        </li>
        <li>
          <div>Pending</div>
          <div>{results.filter(result => result.type === "pending").length}</div>
        </li>
        <li>
          <div>In Progress</div>
          <div>{results.filter(result => result.type === "inprogress").length}</div>
        </li>
        <li>
          <div>Complete</div>
          <div>{results.filter(result => result.type === "Complete").length}</div>
        </li>
        <li>
          <div>Archived</div>
          <div>{results.filter(result => result.archived === true).length}</div>
        </li>
      </ul>
    </div>
  );
}

TournamentSidebar.propTypes = {
};

export default TournamentSidebar;
