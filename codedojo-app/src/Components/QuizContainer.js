import React from 'react'
import { Link } from "react-router-dom";

function QuizContainer({quizData}) {

  return (
    <div>
        {quizData.map((q) => <Link to={`/Quiz${q.id}`} key={q.id}>{q.quiz_name}</Link>)}
    </div>
  )
}

export default QuizContainer