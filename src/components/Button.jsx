import React from 'react';
import '../styles/Button.css';

const Button = ({children}) => {
  
  const isOperator = (value) => {
    return isNaN(value) && (value !== '.' && (value !== '=')); 
  }

  return (
    <div 
      className={`button-container ${isOperator(children) ? 'operator' : ''}`.trimEnd()}
    >
      {children}
    </div>
  )
}

export default Button;