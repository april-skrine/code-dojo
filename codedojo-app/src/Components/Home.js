import React from "react";
import QuizContainer from "./QuizContainer";
import LeaderContainer from "./LeaderContainer";

function Home({ quizData }) {
  return (
    <div className="home-background">
      <div className="home-container">
        <div>
          <img
            src="https://res.cloudinary.com/april-skrine/image/upload/v1648582029/Phase%204%20Project/BeFunky-design-removebg-preview_zm9jmr.png"
            alt="dojo-roof"
          />
        </div>
        <div className="home-container-2">
          <div
            className="home-container-child-quiz"
            style={{ marginTop: "50px" }}
          >
            <img
              src="https://res.cloudinary.com/april-skrine/image/upload/v1648577958/Phase%204%20Project/QuizHeader2_a9c2ac.jpg"
              alt="quiz header"
            />
            <QuizContainer quizData={quizData} />
          </div>
          <div
            className="home-container-child-leader"
            style={{ marginTop: "50px" }}
          >
            <img
              src="https://res.cloudinary.com/april-skrine/image/upload/v1648577958/Phase%204%20Project/LeaderboardHeader_tshlyi.jpg"
              alt="quiz header"
            />
            <LeaderContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
