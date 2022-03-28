import React, { useState } from 'react'

function QuestionElement({q, userScore, setUserScore}) {

    const [answerObj, setAnswerObj] = useState({})

    const countPoints = (e) => {
        setAnswerObj(prevObj => ({...prevObj, [e.target.name]: e.target.value}))
    }

    // const pointTally = (e) => {
    //     const answers = {...userScore}
    //     const current = new Object()
    //     const newAnswers = Object.keys(answers).filter( (k) => k !== q[0])

    //     if (e.target.value === 'true') {
    //         // add a key/value pair to the state obj
    //         current[q[0]] = true
    //         console.log('current', current)
    //         console.log('newAnswers', newAnswers)
    //         console.log('both', {...current, ...newAnswers})
    //         setUserScore( {...newAnswers, ...current})
    //     } else if (e.target.value === 'false') {
    //         // remove the key value pair from the state obj
    //         current[q[0]] = false
            
    //         console.log('current', current)
    //         console.log('newAnswers', newAnswers)
    //         console.log('both', {...current, ...newAnswers})
    //         setUserScore( {...newAnswers, ...current})
    //     }
    // }
    console.log(answerObj)
  return (
    <div>
        <p>
            {q[0]}
        </p>
            <div>
                {q[1].map((a) => 
                    <div>
                        <input
                            onClick={countPoints}
                            type="radio" 
                            id="answer" 
                            name={a.question_id} 
                            value={a.correct}
                        />
                        <label>{a.answer_text}</label>
                    </div>
                )}
            </div>
    </div>


/* <input type="radio" id="contactChoice1"
     name="contact" value="email">
    <label for="contactChoice1">Email</label> */
  )
}

export default QuestionElement