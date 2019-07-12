import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import './App.css';
import { tsPropertySignature } from '@babel/types';

function Welcome(props) {
  return (
    <div className="Welcome">
      <h1 className="title">Your tournaments</h1>
      <Button icon={<i class="fas fa-plus-circle"></i>} value="Test" className="addTournament" />
    </div>
  );
}

Welcome.propTypes = {
};

export default Welcome;
