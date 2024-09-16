import React, { useState } from 'react';

import Button from './Button';
import '../styles/Calculator.css';
import EqualButton from './EqualButton';
import DeleteButton from './DeleteButton';
import Slider from './Slider';
import { useTheme } from './ThemeContext';

export default function Calculator() {
  const [inputValue, setInputValue] = useState('');
  const [displayRes, setDisplayRes] = useState(false);
  const { mode } = useTheme();

  const operatorRegex = /([+\-*/])/;
  const digitRegex = /[0-9]/;

  const handleButtonClick = (buttonValue) => {
    if (
      inputValue == null ||
      inputValue === '0' ||
      (displayRes === true && digitRegex.test(buttonValue))
    ) {
      setInputValue(buttonValue);
      setDisplayRes(false);
    } else {
      if (displayRes === true) setDisplayRes(false);
      setInputValue(checkinputs(inputValue, buttonValue));
    }
  };

  const checkinputs = (inputValue, buttonValue) => {
    if (buttonValue === '.') {
      if (inputValue === '' || operatorRegex.test(inputValue.slice(-1))) {
        return inputValue + buttonValue;
      }

      const parts = inputValue.split(operatorRegex);
      const lastPart = parts[parts.length - 1];

      if (lastPart.includes('.')) {
        return inputValue;
      }

      return inputValue + buttonValue;
    }

    if (operatorRegex.test(buttonValue)) {
      if (/[\d.]/.test(inputValue.slice(-1))) {
        return inputValue + buttonValue;
      }

      return inputValue;
    }

    return inputValue + buttonValue;
  };

  const reset = () => {
    setInputValue('');
  };

  const del = () => {
    if (inputValue != null)
      if (inputValue.length >= 0)
        setInputValue(inputValue.substring(0, inputValue.length - 1));
  };

  const calculate = () => {
    const operation = inputValue.replace(/x/g, '*');
    if (operation !== '' && operatorRegex.test(operation)) {
      setInputValue(eval(operation).toString());
      setDisplayRes(true);
    }
  };

  return (
    <>
      <div className={`calculator ${mode}`}>
        <div className="entete">
          <h1 className={`app-name ${mode}`}>calc</h1>
          <Slider />
        </div>
        <input
          type="text"
          placeholder="0"
          className={`result ${mode}`}
          value={inputValue}
        />
        <div className={`clavier ${mode}`}>
          <div className="row">
            <Button className={mode} value="7" onClick={handleButtonClick} />
            <Button className={mode} value="8" onClick={handleButtonClick} />
            <Button className={mode} value="9" onClick={handleButtonClick} />
            <DeleteButton className={mode} value="DEL" onClick={del} />
          </div>
          <div className="row">
            <Button className={mode} value="4" onClick={handleButtonClick} />
            <Button className={mode} value="5" onClick={handleButtonClick} />
            <Button className={mode} value="6" onClick={handleButtonClick} />
            <Button className={mode} value="+" onClick={handleButtonClick} />
          </div>
          <div className="row">
            <Button className={mode} value="1" onClick={handleButtonClick} />
            <Button className={mode} value="2" onClick={handleButtonClick} />
            <Button className={mode} value="3" onClick={handleButtonClick} />
            <Button className={mode} value="-" onClick={handleButtonClick} />
          </div>
          <div className="row">
            <Button className={mode} value="." onClick={handleButtonClick} />
            <Button className={mode} value="0" onClick={handleButtonClick} />
            <Button className={mode} value="/" onClick={handleButtonClick} />
            <Button className={mode} value="x" onClick={handleButtonClick} />
          </div>
          <div className="row last-row">
            <DeleteButton className={mode} value="RESET" onClick={reset} />
            <EqualButton className={mode} value="=" onClick={calculate} />
          </div>
        </div>
      </div>
    </>
  );
}
