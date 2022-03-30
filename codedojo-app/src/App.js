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

function App() {
  const [user, setCurrentUser] = useState(null);
  const [quizData, setQuizData] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
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

  return (
    <div>
      <div>
        <Header
          user={user}
          handleLogout={handleLogout}
          isAuthenticated={isAuthenticated}
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
          element={<Quiz1 quizData={quizData} user={user} />}
        />
        <Route
          exact
          path="/Quiz2"
          element={<Quiz2 quizData={quizData} user={user} />}
        />
      </Routes>
    </div>
  );
}

export default App;
