import React from "react";
import { Link } from "react-router-dom";
import { Timer } from "./Timer";
import { useQuizContext } from "./QuizContext";
import data from "./data";

export function Quiz() {
  const { subjectchosen, yearchosen, mediumchosen, answerSelected, setAnswerSelected, setSubmitted } = useQuizContext();
  const quizSubject = data.find(({ subject }) => subject === subjectchosen);
  const quizYear = quizSubject.years.find(({ year }) => year === yearchosen);
  const quizData = quizYear.mediums.find(({ medium }) => medium === mediumchosen).questions;

  const handleAnswersSelected = (id, op, answer) => {
    let newAnswerSelected;

    if (answerSelected.some((ob) => ob.id === id)) {
      newAnswerSelected = answerSelected.map((ob) =>
        ob.id === id ? { ...ob, op: op, answer: answer } : ob
      );
    } else {
      newAnswerSelected = [...answerSelected, { id: id, op: op, answer: answer }];
    }

    setAnswerSelected(newAnswerSelected);
  };

  return (
    <div className="quiz">
      <div className="time"><i className="fa-solid fa-hourglass"></i> <Timer onSubmit={() => setSubmitted(true)} /></div>
      <h1>Quiz</h1>
      <div>
        {quizData.map(({ id, question, options, answer, feedback }) => (
          <div key={id} className="qna">
            <h3 className="qq">Q{id} {question}</h3>
            <div>
              {options.map((op) => (
                <label key={op}>
                  <input type="radio" name={"option" + id} onChange={() => handleAnswersSelected(id, op, answer)} />
                  <h3>{op}</h3>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Link to="/result" className="btn" onClick={() => setSubmitted(true)}>Submit Test</Link>
    </div>
  );
}
