import React from "react";
import QuizContainer from "./Components/QuizContainer";
import LeaderContainer from "./Components/LeaderContainer";

function Home() {
  return (
    <div>
      {/* Under header, flex-box with quizzes and leaderboard */}
      <QuizContainer />
      <LeaderContainer />
      <p>this is home</p>
    </div>
  );
}

export default Home;
