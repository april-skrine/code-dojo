import React from 'react'
import QuizQuestionCard from './QuizQuestionCard'

function Quiz1({quizData}) {

  const quizOne = quizData[0]

  return (
    <div>
      <QuizQuestionCard quiz={quizOne} key={quizData.id}/>
    </div>
  )
}

export default Quiz1