import React from 'react'

function QuestionElement({q, countPoints}) {

  return (
    <div>
        <p>
            {q[0]}
        </p>
            <div>
                {q[1].map((a, index) => 
                    <div key={index}>
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
  )
}

export default QuestionElement