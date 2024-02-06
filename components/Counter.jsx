"use client";

import { useState } from "react";
import styles from "./counter.module.css";

const CounterApp = () => {
  const [counter, setCounter] = useState(0);
  const [history, setHistory] = useState([]);

  const handleAddCount = () => {
    const value = parseInt(document.getElementById("value").value);
    setCounter(counter + value);
    setHistory([...history, `Added ${value}`]);
  };

  const handleSubtractCount = () => {
    const value = parseInt(document.getElementById("value").value);
    setCounter(counter - value);
    setHistory([...history, `Substracted ${value}`]);
  };

  return (
    <div className={styles.counterContainer}>
      <h1 className={styles.heading}>Smart Counter</h1>
      <p>Count: {counter}</p>
      <input type="number" name="counter" id="value" />
      <div className={styles.buttonContainer}>
        <button type="button" onClick={handleAddCount}>
          Add
        </button>
        <button type="button" onClick={handleSubtractCount}>
          Substract
        </button>
      </div>
      <div className={styles.listContainer}>
        <h2>History</h2>
        <ul className={styles.list}>
          {history.map((item, index) => (
            <li key={index}>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CounterApp;
