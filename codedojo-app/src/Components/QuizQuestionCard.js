import React from 'react'
import QuestionElement from './QuestionElement'

function QuizQuestionCard({quiz, userScore, setUserScore}) {

const questions = quiz?.questions.map((q) => {
    return [q.question_text, quiz.answers.filter(a => a.question_id === q.id)]
})

  return (
    <div>
        {questions?.map((q) => <QuestionElement setUserScore={setUserScore} userScore={userScore} q={q}/>)}
    </div>
  )
}

export default QuizQuestionCard