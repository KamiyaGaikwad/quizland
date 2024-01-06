import React from "react";
import { Link } from "react-router-dom";
import { useQuizContext } from "./QuizContext";

export function QueryForm() {
  const { nullAll } = useQuizContext();
  return (
    <div className="queryform">
      <Link to="/" className="btn" onClick={() => nullAll()}>Try another quiz</Link>
      <h1>Fill out the Form provided below for any further Queries</h1>
      <h1 className="down"><i className="fa-regular fa-hand-point-down"></i></h1>
    </div>
  );
}
