import React from 'react'
import QuizQuestionCard from './QuizQuestionCard'

function Quiz2({quizData, tallyScore, countPoints}) {
 
  const quizTwo = quizData[1]

  return (
    <div className="home-background">
      <div className="quiz-container">
        <div>
          <form onSubmit={(e) => tallyScore(e, quizTwo)}>
            <QuizQuestionCard 
              quiz={quizTwo}
              countPoints={countPoints}
            />
            <button className='button-lander'
              style={{marginTop: '20px', marginLeft: '0px'}}
              type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Quiz2