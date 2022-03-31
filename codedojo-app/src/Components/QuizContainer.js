import React from "react";
import { Link } from "react-router-dom";

function QuizContainer({ quizData }) {

  return (
    <div>
      {quizData.map((q) => (
        <div className="home-container-child-link" key={q.id}>
          <Link to={`/Quiz${q.id}`} style={{fontFamily: 'manga', color: '#b21e1c'}}>
            {q.quiz_name}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default QuizContainer;
