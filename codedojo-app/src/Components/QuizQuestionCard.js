import React from 'react'
import QuestionElement from './QuestionElement'

function QuizQuestionCard({quiz, countPoints}) {

const questions = quiz?.questions.map((q) => {
    return [q.question_text, quiz.answers.filter(a => a.question_id === q.id)]
})

  return (
    <div>
        {questions?.map((q, index) => 
          <QuestionElement 
            countPoints={countPoints} 
            q={q}
            key={index}
          />
        )}
    </div>
  )
}

export default QuizQuestionCard