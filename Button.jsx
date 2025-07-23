import React from 'react';
import './Button.css';

const Button = ({ label, onClick, type = 'primary', disabled = false }) => {
  return (
    <button className={`btn ${type}`} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
