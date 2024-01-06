import data from "./data";
import React from "react";
import { Link } from "react-router-dom";
import { useQuizContext } from "./QuizContext";

export function Home() {
  const { subjectchosen, setSubjectchosen, yearchosen, setYearchosen, mediumchosen, setMediumchosen } = useQuizContext();
  return (
    <div className="btn-container">
      {subjectchosen === null &&
        data.map(({ subject }) => (
          <button
            className="btn"
            key={subject}
            onClick={() => setSubjectchosen(subject)}
          >
            {subject}
          </button>
        ))}
      {subjectchosen !== null && yearchosen === null &&
        data[0].years.map(({ year }) => (
          <button
            className="btn"
            key={year}
            onClick={() => setYearchosen(year)}
          >
            {year}
          </button>
        ))}
      {yearchosen !== null && mediumchosen === null &&
        data[0].years[0].mediums.map(({ medium }) => (
          <Link
            to="/start-test"
            key={medium}
            onClick={() => setMediumchosen(medium)}
          >
            <button className="btn">{medium}</button>
          </Link>
        ))}
    </div>
  );
}
