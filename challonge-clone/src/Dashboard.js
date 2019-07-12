import React, { useState } from 'react';
import Header from './Header';
import Welcome from './Welcome';
import TournamentContainer from './TournamentContainer';
import logo from './logo.svg';
import './App.css';

function Dashboard() {
  const [ user ] = useState({
    name: 'Alyssa'
  });

  return (
    <div className="Dashboard">
      <Header user={user} />
      <Welcome />
      <TournamentContainer />
      {/*
      <Footer />
      */}
    </div>
  );
}

export default Dashboard;
