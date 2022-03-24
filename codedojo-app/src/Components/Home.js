import React from 'react'
import QuizContainer from './Components/QuizContainer'
import LeaderContainer from './Components/LeaderContainer'

function Home() {
  return (
    <div>
        {/* Under header, flex-box with quizzes and leaderboard */}
        <QuizContainer />
        <LeaderContainer />
    </div>
  )
}

export default Home