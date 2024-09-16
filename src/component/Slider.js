import React, { useState } from 'react';

import '../styles/Slider.css';
import { useTheme } from './ThemeContext';

export default function Slider() {
  const { mode, toggleMode } = useTheme();

  return (
    <div className="three-state-toggle">
      <div className="toggle-labels">
        <span className={mode}>1</span>
        <span className={mode}>2</span>
        <span className={mode}>3</span>
      </div>
      <div className="slider">
        <h1 className={`slider-title ${mode}`}>THEME</h1>
        <div className={`toggle-slider ${mode}`} onClick={toggleMode}>
          <div className={`toggle-circle ${mode}`}></div>
        </div>
      </div>
    </div>
  );
}
