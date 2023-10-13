import React, { useState } from 'react';
import './App.css';

function App() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(expression));
      } catch (error) {
        setResult('Error');
      }
      setExpression('');
    } else if (value === '←') {
      setExpression(expression.slice(0, -1));
    } else {
      setExpression((prevExpression) => prevExpression + value);
    }
  };

  const renderButtons = () => {
    const buttons = [
      '7', '8', '9', '/',
      '4', '5', '6', '*',
      '1', '2', '3', '-',
      '0', '.', '=', '+',
      '←',
    ];

    return buttons.map((buttonValue) => (
      <button
        key={buttonValue}
        onClick={() => handleButtonClick(buttonValue)}
      >
        {buttonValue}
      </button>
    ));
  };

  return (
    <div className="App">
      <div className="screen">
        <div className="expression">{expression}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">{renderButtons()}</div>
    </div>
  );
}


export default App;
