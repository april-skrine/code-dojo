import './App.css';
import React, {useState} from 'react';
import Header from './Components/Header';
import Lander from './Components/Lander';
import {Switch, Route} from 'react-router-dom'
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  const [user, setCurrentUser] = useState("")

  console.log(user)

  return (
    <div>
      <div>
        <Header user={user}/>
      </div>
      <Switch>
        <Route exact path='/'>
          <Lander />
        </Route>
        <Route exact path='/login'>
          <Login setCurrentUser={setCurrentUser}/>
        </Route>
        <Route exact path='/signup'>
          <Signup />
        </Route>
      </Switch>
    </div>
  );
}

export default App;