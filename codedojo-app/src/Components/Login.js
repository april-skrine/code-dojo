import React, { useState } from "react";
// import {Route, Routes} from  'react-router-dom'
// import Home from "./Home";
import {useNavigate} from 'react-router-dom' 

function Login({ setCurrentUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((r) => r.json())
      .then((user) => setCurrentUser(user)
    );
      navigate('/home')
  }

  return (
    <div>
      <div className='login-container'>
        <div className='login-container-child'>
          <img src="https://res.cloudinary.com/april-skrine/image/upload/v1648238629/Phase%204%20Project/cododojologin_mhzra9.jpg"
            alt='dojo'
          />
        </div>
        <div className='login-container-child'>
          <form onSubmit={handleSubmit}>
            <label style={{color: '#b21e1c', fontSize: '20px', fontFamily: 'oswald', display:'block'}}>username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className='input-boxes'
              />
            <label style={{color: '#b21e1c', fontSize: '20px', fontFamily: 'oswald', display:'block'}}>password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='input-boxes'
              />
            <button className='button-header' type="submit">LOG IN</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
