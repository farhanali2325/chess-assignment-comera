import React from 'react';
import '../App.css';

// Generic Button component
function Button({ onClick, children, className, disabled }) {
  return (
    <button 
      className={`custom-button ${className}`} 
      onClick={onClick} 
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
