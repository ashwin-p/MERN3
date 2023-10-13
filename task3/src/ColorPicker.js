import React, { useState } from 'react';

function ColorPicker({ colors }) {
  const [showColors, setShowColors] = useState(false);
  const [selectedColor, setSelectedColor] = useState('blue');

  const handleButtonClick = () => {
    setShowColors(!showColors);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColors(false);
  };

  return (
    <div className="color-picker">
      {showColors && (
        <div className="color-list">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color-square"
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            ></div>
          ))}
        </div>
      )}
      <button
        onClick={handleButtonClick}
        style={{
          backgroundColor: selectedColor,
          marginTop: showColors ? '20px' : '0',
        }}
      >
        Pick a color
      </button>
    </div>
  );
}

export default ColorPicker;
