import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Lander from "./Components/Lander";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Home from "./Components/Home";
import { useNavigate } from "react-router-dom";
import Quiz1 from "./Components/Quiz1";
import Quiz2 from "./Components/Quiz2";
import HomeError from "./Components/HomeError";
import UserProfile from "./Components/UserProfile";

function App() {
  const [user, setCurrentUser] = useState(null);
  const [quizData, setQuizData] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [answerObj, setAnswerObj] = useState({})
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/authorized_user").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setIsAuthenticated(true);
          setCurrentUser(user);
        });
      }
    });
  }, []);

  useEffect(() => {
    fetch("/quizzes")
      .then((res) => res.json())
      .then((data) => {
        setQuizData(data);
      });
  }, []);

  const handleLogout = () => {
    fetch("/logout", {
      method: "DELETE",
    });
    setCurrentUser(null);
    setIsAuthenticated(false);
    navigate("/");
  };

  const deleteUser = () => {
    console.log(user.id)
    fetch(`/users/${user.id}`, {
      method: "DELETE",
    });
    setCurrentUser(null);
    setIsAuthenticated(false);
    navigate("/"); 
  }

  function clanName() {
    if (user?.clan_id === 1) {
        return "Vanilla Vipers";
    } else if (user?.clan_id === 2) {
        return "React Ronin";
    } else if (user?.clan_id === 3) {
        return "Ruby Red Pandas";
    } else if (user?.clan_id === 4) {
        return "Rails Rabbits";
    }
  }

  const tallyScore = (e, quizData) => {
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
        quiz_id : quizData.id,
        points_scored : quizScore
      }),
    })
      .then((r) => r.json())

    alert(`You scored ${quizScore} out of ${answerArr.length}!`)
    setAnswerObj({})
    navigate('/home')
  }

  const countPoints = (e) => {
    setAnswerObj((prevObj) => ({
      ...prevObj,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <div>
        <Header
          user={user}
          handleLogout={handleLogout}
          isAuthenticated={isAuthenticated}
          clanName={clanName}
        />
      </div>
      <Routes>
        <Route exact path="/" element={<Lander />} />
        <Route
          exact
          path="/login"
          element={
            <Login
              setCurrentUser={setCurrentUser}
              setIsAuthenticated={setIsAuthenticated}
            />
          }
        />
        <Route
          exact
          path="/signup"
          element={<Signup setCurrentUser={setCurrentUser} />}
        />
        <Route
          exact
          path="/home"
          element={user ? <Home quizData={quizData} /> : <HomeError />}
        />
        <Route
          exact
          path="/Quiz1"
          element={<Quiz1 quizData={quizData} user={user} tallyScore={tallyScore} countPoints={countPoints}/>}
        />
        <Route
          exact
          path="/Quiz2"
          element={<Quiz2 quizData={quizData} user={user} tallyScore={tallyScore} countPoints={countPoints}/>}
        />
        <Route
          exact
          path="/UserProfile"
          element={<UserProfile user={user} clanName={clanName} deleteUser={deleteUser}/>}
        />
      </Routes>
    </div>
  );
}

export default App;
