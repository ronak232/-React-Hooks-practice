import React, { useState, useEffect, useRef } from "react";

function Timer() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    // Clear the timer value
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      <h2>Timer - {timer}</h2>
      <button onClick={() => clearInterval(intervalRef.current)}>Timer </button>
      {/* <button onClick={() => setInterval(intervalRef.current)}>Timer </button> */}
    </div>
  );
}

export default Timer;
