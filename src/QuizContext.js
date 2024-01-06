import React, { createContext, useContext, useState,useEffect } from "react";

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [subjectchosen, setSubjectchosen] = useState(null);
  const [yearchosen, setYearchosen] = useState(null);
  const [mediumchosen, setMediumchosen] = useState(null);
  const [answerSelected,setAnswerSelected] = useState([]);
  const [score,setScore] = useState(0);
  const [submitted,setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) {
      setScore(
        answerSelected.reduce((accumulator, { answer, op }) => {
          return accumulator + (answer === op ? 1 : 0);
        }, 0)
      );
    }
    console.log(answerSelected)
  }, [submitted, answerSelected]);

  const nullAll = () =>{
    setSubjectchosen(null)
    setYearchosen(null)
    setMediumchosen(null)
    setAnswerSelected([])
    setScore(0)
    setSubmitted(false)
  }

  return (
    <QuizContext.Provider
      value={{
        subjectchosen,
        setSubjectchosen,
        yearchosen,
        setYearchosen,
        mediumchosen,
        setMediumchosen,
        nullAll,
        setAnswerSelected,
        answerSelected,
        score,
        setSubmitted
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizContext = () => {
  return useContext(QuizContext);
};
