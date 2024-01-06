import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useQuizContext } from "./QuizContext";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

export function Result() {
  const { score } = useQuizContext();
  console.log(score);
  const [animated, setAnimated] = useState(1);
  const percentage = score * 10;
  const pathColorCode = percentage >= 35 ? `rgba(26,174,159,0.8)` : `rgba(214,80,101,0.8)`;
  const textColorCode = percentage >= 35 ? '#1AAE9F' : '#D65065';
  let grade;

  useEffect(() => {
    // Update animated from 1 to percentage over 0.5 seconds
    const interval = setInterval(() => {
      setAnimated((prev) => (prev < percentage ? prev + 1 : percentage));
    }, (10 / percentage) * 100); // Adjust the interval based on the percentage value


    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, [percentage]);

  if (percentage >= 75) {
    grade = 'Distinction';
  } else if (percentage >= 60 && percentage < 75) {
    grade = 'First Division';
  } else if (percentage >= 45 && percentage < 60) {
    grade = 'Second Division';
  } else if (percentage >= 35 && percentage < 45) {
    grade = 'Pass';
  } else {
    grade = 'Fail';
  }

  const options = {
    strokeLinecap: 'round',
    textSize: '1rem',

    // How long animation takes to go from one percentage to another, in seconds
    pathTransitionDuration: 0.1,

    pathColor: pathColorCode,
    textColor: textColorCode,
    trailColor: '#E0DEFD',
    backgroundColor: '#3e98c7',
  };

  return (
    <div className="result">
      <div style={{ width: 140, height: 140 }}>
        <CircularProgressbar value={animated} text={`${animated}%`} styles={buildStyles(options)} />
      </div>
      <h3>{percentage >= 35 ? "Congratulations" : "Every effort counts."}</h3>
      <div>You scored {score}/10</div>
      <div>This will give <b style={{ color: textColorCode }}>{grade}</b> Grade</div>
      <Link to="/review" className="btn">Check Answers</Link>
    </div>
  );
}
