import React from "react";
import { Link } from "react-router-dom";

function QuizContainer({ quizData }) {
  return (
    <div>
      {quizData.map((q) => (
        <div className="home-container-child-link">
          <Link to={`/Quiz${q.id}`} key={q.id}>
            {q.quiz_name}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default QuizContainer;
