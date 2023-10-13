import React, { useState } from 'react';
import './App.css';

function notEmpty(string)
{
  return string != "";
}

function App() {
  const [text, setText] = useState('');

  const countWords = () => {
    const words = text.trim().split(" ").filter(notEmpty);
    return words.length;
  };

  return (
    <div className="App">
      <h1>Responsive Paragraph Word Counter</h1>
      <textarea
        rows="5"
        placeholder="Type your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <p>Word Count: {countWords()}</p>
    </div>
  );
}

export default App;
