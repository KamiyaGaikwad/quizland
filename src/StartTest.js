import React from "react";
import { Link } from "react-router-dom";
import { useQuizContext } from "./QuizContext";

export function StartTest() {
  const { subjectchosen, yearchosen, mediumchosen } = useQuizContext();

  return (
    <div className="start-test">
      <div className="time"><i className="fa-solid fa-hourglass"></i> 30:00</div>
      <h2>
        Quiz for 12th State Board {subjectchosen} Paper for the Year{" "}
        {yearchosen} in {mediumchosen} Medium Language
      </h2>
      <h3><span className="green">+1</span> for Correct Answer and <span className="red">0</span> for wrong or unattempted Answers</h3>
      <Link to="/quiz" className="btn">Start Test</Link>
    </div>
  );
}
