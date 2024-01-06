import data from "./data";
import React from "react";
import { Link } from "react-router-dom";
import { useQuizContext } from "./QuizContext";

export function Review() {
  const { subjectchosen, yearchosen, mediumchosen, answerSelected } = useQuizContext();
  console.log(subjectchosen, yearchosen, mediumchosen);
  const quizSubject = data.find(({ subject }) => subject === subjectchosen);
  const quizYear = quizSubject.years.find(({ year }) => year === yearchosen);
  const quizData = quizYear.mediums.find(({ medium }) => medium === mediumchosen).questions;

  return (
    <div className="quiz">
      <h1>Quiz Answers</h1>
      <div>
        {quizData.map(({ id, question, options, answer, feedback }) => <div key={id} className="qna">
          <h3 className="qq">Q{id} {question}</h3>
          <div>
            {options.map((op) => <label key={op}>
              <input type="radio" name={`question_${id}`} checked={answerSelected.find((ans) => ans.id === id)?.op === op} readOnly />
              <h3 className={op === answer ? "answer" : "option"}>{op}</h3>
            </label>)}
          </div>
          <div className="fb"><b>FeedBack:</b> {feedback}</div>
        </div>)}
      </div>
      <Link to="/queryform" className="btn">Review Done</Link>
    </div>
  );
}
