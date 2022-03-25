import "./App.css";
import React, { useState } from "react";
import Header from "./Components/Header";
import Lander from "./Components/Lander";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

function App() {
  const [user, setCurrentUser] = useState("");

  console.log(user);

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
          element={<Login setCurrentUser={setCurrentUser} />}
        ></Route>
        <Route
          exact
          path="/signup"
          element={<Signup setCurrentUser={setCurrentUser} />}
        ></Route>
        {/* <Route exact path="/login">
          <Login setCurrentUser={setCurrentUser} />
        </Route>
        <Route exact path="/signup">
          <Signup setCurrentUser={setCurrentUser} />
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
