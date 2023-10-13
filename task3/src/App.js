import React from 'react';
import './App.css';
import ColorPicker from './ColorPicker';
import './ColorPicker.css';

function App() {
  const colors = ['red', 'blue', 'green', 'yellow', 'purple'];

  return (
    <div className="App">
      <h1>Color Picker</h1>
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;
