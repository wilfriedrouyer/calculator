import React from 'react';

import '../styles/Button.css';

export default function Button({ className, value, onClick }) {
  const baseClassName = 'button';
  if (className != null) {
    className = baseClassName.concat(` ${className}`);
  } else {
    className = baseClassName;
  }

  return (
    <input
      type="button"
      value={value}
      className={`${className}`}
      onClick={() => onClick(value)}
    />
  );
}
