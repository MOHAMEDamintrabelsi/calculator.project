import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import './App.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [animateResult, setAnimateResult] = useState(false);

  const handleClick = (digit) => {
    setInput((prevInput) => prevInput + digit);
  };

  const handleEvaluate = () => {
    try {
      const evaluatedResult = evaluate(input);
      setResult(evaluatedResult.toString());
      setAnimateResult(true);

      setInput('');
    } catch (e) {
      setResult('Error');
      setAnimateResult(true);
    }

    setTimeout(() => setAnimateResult(false), 600); 
  };

  const handleClear = () => {
    setInput('');
    setResult('');
    setAnimateResult(false);
  };

  return (
    <div className="calculator">
      <div className="screen">
        <input className="input" type="text" value={input} readOnly />
        <div className={`result ${animateResult ? 'fade-slide' : ''}`}>{result}</div>
      </div>
      <div className="button-grid">
        <button className="btn" onClick={() => handleClick('1')}>1</button>
        <button className="btn" onClick={() => handleClick('2')}>2</button>
        <button className="btn" onClick={() => handleClick('3')}>3</button>
        <button className="btn operator" onClick={() => handleClick('+')}>+</button>
        <button className="btn" onClick={() => handleClick('4')}>4</button>
        <button className="btn" onClick={() => handleClick('5')}>5</button>
        <button className="btn" onClick={() => handleClick('6')}>6</button>
        <button className="btn operator" onClick={() => handleClick('-')}>-</button>
        <button className="btn" onClick={() => handleClick('7')}>7</button>
        <button className="btn" onClick={() => handleClick('8')}>8</button>
        <button className="btn" onClick={() => handleClick('9')}>9</button>
        <button className="btn operator" onClick={() => handleClick('*')}>*</button>
        <button className="btn" onClick={() => handleClick('0')}>0</button>
        <button className="btn" onClick={() => handleClick('.')}>.</button>
        <button className="btn operator" onClick={handleEvaluate}>=</button>
        <button className="btn operator double-width" onClick={handleClear}>C</button>
      </div>
    </div>
  );
};

const App = () => (
  <div className="App">
    <Calculator />
  </div>
);

export default App;
