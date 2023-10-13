import React, { useState } from 'react';
import './App.css';

function AgeCalculator() {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const birthDate = new Date(dob);
    const currentDate = new Date();

    if (isNaN(birthDate)) {
      setAge('Invalid date');
      return;
    }

    const yearsDiff = currentDate.getFullYear() - birthDate.getFullYear();
    const monthsDiff = currentDate.getMonth() - birthDate.getMonth();
    const daysDiff = currentDate.getDate() - birthDate.getDate();

    if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
      setAge((yearsDiff - 1).toString());
    } else {
      setAge(yearsDiff.toString());
    }
  };

  return (
    <div className="AgeCalculator">
      <h1>Age Calculator</h1>
      <p>Enter your date of birth</p>
      <div className="form-container">
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          placeholder="Select your date of birth"
        />
      </div>
      <div className="button-container">
        <button className="calculate-button" onClick={calculateAge}>
          Calculate Age
        </button>
      </div>
      <p><b>{age !== '' ? `You are ${age} years old.` : ''}</b></p>
    </div>
  );
}

export default AgeCalculator;
