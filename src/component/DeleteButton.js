import React from 'react';

import Button from './Button';
import '../styles/DeleteButton.css';

export default function DeleteButton({ className, value, onClick }) {
  let baseClassName = 'delete-button';
  if (className) baseClassName = baseClassName.concat(` ${className}`);

  return <Button value={value} className={baseClassName} onClick={onClick} />;
}
