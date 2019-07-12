import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

function Button({ icon, value, ...props }) {
  return (
    <button {...props}>
      {icon}
      {value}
    </button>
  );
}

Button.propTypes = {
  icon: PropTypes.element,
  value: PropTypes.string
};

export default Button;
