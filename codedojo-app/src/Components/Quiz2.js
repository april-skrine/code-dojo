import React, {useState} from 'react'
import QuizQuestionCard from './QuizQuestionCard'

function Quiz2({quizData}) {

  const [userScore, setUserScore] = useState({})

  const quizTwo = quizData[1]

  const tallyScore = (e) => {
    e.preventDefault()
  //   console.log
  }

  return (
    <div>
      <div>
        <form onSubmit={tallyScore}>
          <QuizQuestionCard 
            quiz={quizTwo} 
            userScore={userScore}
            setUserScore={setUserScore}
          />
          <button class="submit" type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Quiz2