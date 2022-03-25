import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Lander from "./Components/Lander";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Home from "./Components/Home";

function App() {
  const [user, setCurrentUser] = useState(null);

  // useEffect(() => {
  //   // auto-login
  //   fetch("/status")
	// 	.then((r) => {
  //     if (r.ok) {
  //       r.json().then(console.log);
  //     }
  //   });
  // }, [user])

console.log(user)

  return (
    <div>
      <div>
        <Header user={user} />
      </div>
      <Routes>
        <Route exact path="/" element={<Lander />}></Route>
        <Route
          exact
          path="/login"
          element={<Login setCurrentUser={setCurrentUser}/>}
        ></Route>
        <Route
          exact
          path="/signup"
          element={<Signup setCurrentUser={setCurrentUser} />}
        ></Route>
        <Route
          exact
          path="/home"
          element={<Home />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
