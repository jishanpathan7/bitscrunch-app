"use client";

import { useState } from "react";
import styles from "./counter.module.css";

const CounterApp = () => {
  const [counter, setCounter] = useState(0);
  const [history, setHistory] = useState([]);

  const handleAddCount = () => {
    const value = parseInt(document.getElementById("value").value);
    setCounter(counter + value);
    setHistory([...history, { operation: "Added", value: value }]);
  };

  const handleSubtractCount = () => {
    const value = parseInt(document.getElementById("value").value);
    setCounter(counter - value);
    setHistory([...history, { operation: "Substracted", value: value }]);
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
            <li
              key={index}
              className={
                item.operation === "Added" ? styles.added : styles.subtracted
              }
            >
              <span>{`${item.operation}: ${item.value}`}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CounterApp;
