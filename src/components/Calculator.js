import React, { useState } from 'react';
import './calculator.css';
import Button from './Button';
import calculate from '../logic/calculate';

function Calculator() {
  const [displayValue, setDisplayValue] = useState({ total: null, next: null, operation: null });

  function handleButtonClick(buttonName) {
    setDisplayValue(calculate(displayValue, buttonName));
  }

  const valueToDisplay = displayValue.next || displayValue.total || '0';

  return (
    <div className="calc">
      <div className="title">
        <h1>Lets do Some Math</h1>
      </div>
      <div className="calculator">
        <div className="display">
          <span>{valueToDisplay}</span>
        </div>
        <div className="buttons">
          <Button label="AC" onClick={() => handleButtonClick('AC')} />
          <Button label="+/-" onClick={() => handleButtonClick('-')} />
          <Button label="%" onClick={() => handleButtonClick('%')} />
          <Button label="/" className="yellow" onClick={() => handleButtonClick('÷')} />
          <Button label="7" onClick={() => handleButtonClick('7')} />
          <Button label="8" onClick={() => handleButtonClick('8')} />
          <Button label="9" onClick={() => handleButtonClick('9')} />
          <Button label="X" className="yellow" onClick={() => handleButtonClick('x')} />
          <Button label="4" onClick={() => handleButtonClick('4')} />
          <Button label="5" onClick={() => handleButtonClick('5')} />
          <Button label="6" onClick={() => handleButtonClick('6')} />
          <Button label="-" className="yellow" onClick={() => handleButtonClick('-')} />
          <Button label="1" onClick={() => handleButtonClick('1')} />
          <Button label="2" onClick={() => handleButtonClick('2')} />
          <Button label="3" onClick={() => handleButtonClick('3')} />
          <Button label="+" className="yellow" onClick={() => handleButtonClick('+')} />
          <Button label="0" className="two-column" onClick={() => handleButtonClick('0')} />
          <Button label="." onClick={() => handleButtonClick('.')} />
          <Button label="=" className="yellow" onClick={() => handleButtonClick('=')} />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
