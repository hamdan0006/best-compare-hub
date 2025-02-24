import React, { useState } from "react";
import './RangePrice.css'

function RangePriceSlider() {
  const [value, setValue] = useState(10); // Default value set to 10

  const handleSliderChange = (event) => {
    setValue(event.target.value); // Update state when slider value changes
  };

  const handleInputChange = (event) => {
    const inputValue = Math.min(Math.max(event.target.value, 1), 20); // Ensure value is between 1 and 20
    setValue(inputValue);
  };

  return (
    <div>

      <div className="slidecontainer">
        {/* Slider Input */}
        <input
          type="range"
          min="1"
          max="20"
          value={value}
          className="slider"
          id="myRange"
          onChange={handleSliderChange}
        />
        {/* Numeric Input */}
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <label htmlFor="numberInput" style={{ color: "#1E90FF", fontSize: "1.2rem", marginRight: "10px" }}>
            Value:
          </label>
          <input
            type="number"
            id="numberInput"
            min="1"
            max="20"
            value={value}
            onChange={handleInputChange}
            style={{
              width: "80px",
              padding: "5px",
              fontSize: "1rem",
              textAlign: "center",
              border: "2px solid #1E90FF",
              borderRadius: "5px",
            }}
          />
        </div>
      </div>

     
    </div>
  );
}

export default RangePriceSlider;
