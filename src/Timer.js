import React, { useState, useEffect, useRef } from "react";

export const Timer = ({ onSubmit }) => {
  const timerRef = useRef(null);
  const initialTime = 30 * 60; // 30 minutes in seconds
  const [timeRemaining, setTimeRemaining] = useState(initialTime);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (timeRemaining === 0) {
      clearInterval(timerRef.current);
      onSubmit();
    }
  }, [timeRemaining, onSubmit]);

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  return <>{minutes} min {seconds} sec</>;
};
