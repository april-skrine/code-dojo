import React, {useState} from 'react'
import QuizQuestionCard from './QuizQuestionCard'
import { useNavigate } from 'react-router-dom'

function Quiz1({quizData, user}) {

  const [answerObj, setAnswerObj] = useState({})
  const navigate = useNavigate()
  const quizOne = quizData[0]

  const countPoints = (e) => {
    setAnswerObj(prevObj => ({...prevObj, [e.target.name]: e.target.value}))
  }

  const tallyScore = (e) => {
    e.preventDefault()
    const answerArr = Object.values(answerObj)
    const filteredArr = answerArr.filter(word => word === 'true')
    const quizScore = filteredArr.length
    fetch("/user_quizzes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id : user.id,
        quiz_id : 1,
        points_scored : quizScore
      }),
    })
      .then((r) => r.json())

    navigate('/home')
  }

  return (
    <div className="home-background">
      <div className="quiz-container">
        <div>
          <form onSubmit={tallyScore}>
            <QuizQuestionCard 
              quiz={quizOne}
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

export default Quiz1