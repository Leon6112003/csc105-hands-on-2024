import React, { useState } from "react";
import "./App.css";

function App() {
  const [currentValue, setCurrentValue] = useState(0);
  const [userInput, setUserInput] = useState();

  function handleAddition() {
    setCurrentValue(currentValue + userInput);
  }

  function handleSubtraction() {
    setCurrentValue(currentValue - userInput);
  }

  function handleMultiplication() {
    setCurrentValue(currentValue * userInput);
  }

  function handleDivision() {
    setCurrentValue(currentValue / userInput);
  }

  function resetUserInput() {
    setUserInput(0);
    document.querySelector("input").value = "";
  }

  function resetCurrentValue() {
    setCurrentValue(0);
  }

  function handleInputChange(e) {
    setUserInput(Number(e.target.value));
  }

  return (
    <>
      <div className="card">
        <h1>Simple Calculator</h1>
        <div className="res">Result: {currentValue}</div>
        <form action="">
          <input
            type="text"
            onChange={handleInputChange}
            placeholder="Enter a number"
          />
          <div className="button-row">
            <button type="button" className="Add" onClick={handleAddition}>
              Add
            </button>
            <button
              type="button"
              className="Subtract"
              onClick={handleSubtraction}
            >
              Subtract
            </button>
            <button
              type="button"
              className="Multiply"
              onClick={handleMultiplication}
            >
              Multiply
            </button>
            <button type="button" className="Divide" onClick={handleDivision}>
              Divide
            </button>
          </div>
          <div className="button-row">
            <button
              type="button"
              className="Reset_Input"
              onClick={resetUserInput}
            >
              Reset Input
            </button>
            <button
              type="button"
              className="Reset_Result"
              onClick={resetCurrentValue}
            >
              Reset Result
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
