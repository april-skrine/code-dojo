import "./App.css";
import React, { useState } from "react";
import Header from "./Components/Header";
import Lander from "./Components/Lander";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Home from "./Components/Home";
import { useNavigate } from 'react-router-dom'

function App() {
  const [user, setCurrentUser] = useState(null);
  const navigate = useNavigate()

  const handleLogout = () => {
    fetch('/logout', {
      method: 'DELETE'
    })
    setCurrentUser(null)
    navigate('/')
  }

  console.log(user)
  
  // useEffect(() => {
  //   // auto-login
  //   fetch("/status")
	// 	.then((r) => {
  //     if (r.ok) {
  //       r.json().then(console.log);
  //     }
  //   });
  // }, [user])

  return (

    <div>
      <div>
        <Header user={user} handleLogout={handleLogout}/>
      </div>
      <Routes>
        <Route exact path="/" element={<Lander />}/>
        <Route
          exact path="/login"
          element={<Login setCurrentUser={setCurrentUser}/>}/>
        <Route
          exact path="/signup"
          element={<Signup setCurrentUser={setCurrentUser} />}/>
        <Route exact path="/home" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
