import React from "react";
import QuizQuestionCard from "./QuizQuestionCard";

function Quiz1({ quizData, tallyScore, countPoints }) {

  const quizOne = quizData[0];

  return (
    <div className="home-background">
      <div className="quiz-container">
        <div>
          <form onSubmit={(e) => tallyScore(e, quizOne)}>
            <QuizQuestionCard quiz={quizOne} countPoints={countPoints} />
            <button
              className="button-lander"
              style={{ marginTop: "20px", marginLeft: "0px" }}
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Quiz1;
