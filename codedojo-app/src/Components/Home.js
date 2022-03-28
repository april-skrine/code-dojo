import React from "react";
import QuizContainer from "./QuizContainer";
import LeaderContainer from "./LeaderContainer";

function Home({quizData}) {
  
  return (

    <div>
      <div className="home-container">
        <div>
          <img 
            src="https://res.cloudinary.com/april-skrine/image/upload/v1648241789/Phase%204%20Project/dojo_roof_d02ou3.jpg"
            alt='dojo-roof'
          />
        </div>
        <div className="home-container-child" style={{marginTop:'50px'}}>
          <QuizContainer quizData={quizData}/>
        </div>
        <div className="home-container-child" style={{marginTop:'50px'}}>
          <LeaderContainer />
        </div>
      </div>
    </div>
  );
}

export default Home;