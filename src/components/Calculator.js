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
    <div className="calculator">
      <h1>Calculator</h1>
      <div className="display">
        <span>{valueToDisplay}</span>
      </div>
      <div className="buttons">
        {/* Button components */}
      </div>
    </div>
  );
}

export default Calculator;
