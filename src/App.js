import './App.css';
import React, { useState } from "react";

export default function App() {
  const [temp, SetTemp] = useState(10);
  const [bgColor, SetbgColor] = useState("cold");
  const increaseTemp = () => {
    if (temp === 30) return;
    const newTemp = temp + 1;
    if (newTemp >= 15) {
      SetbgColor("hot");
    }
    SetTemp(newTemp);
  };
  const decreaseTemp = () => {
    if (temp === 0) return;
    const newTemp = temp - 1;
    if (temp <= 15) {
      SetbgColor("cold");
    }
    SetTemp(newTemp);
  };
  return (
    <>
      <div className="App">
        <div>
          <button className={`container ${bgColor}`}>{temp} °C</button>
        </div>

        <button
          className="btn btn-success btn-circle btn-sm"
          onClick={increaseTemp}
        >
          +
        </button>
        <button
          className=" btn btn-danger btn-circle btn-sm"
          onClick={decreaseTemp}
        >
          -
        </button>
      </div>
    </>
  );
}