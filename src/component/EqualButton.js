import React from 'react';

import Button from './Button';
import '../styles/EqualButton.css';

export default function EqualButton({ className, value, onClick }) {
  let baseClassName = 'equal-button';
  if (className) baseClassName = baseClassName.concat(` ${className}`);

  return <Button value={value} className={baseClassName} onClick={onClick} />;
}
