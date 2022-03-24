import React from 'react'
import {Link} from 'react-router-dom'


function Header({user}) {
  return (
    <div>
        <div className="header">
          <h1>{user ? user.username : "AnonymousNinja"}</h1>
          <h1>{user ? user.clan : "You are clanless"}</h1>
          <Link to="/login">
            <button>LOGIN</button>
          </Link>
          <Link to="/">
            <button>HOME</button>
          </Link>
          <img src="https://res.cloudinary.com/april-skrine/image/upload/v1648152978/Phase%204%20Project/ninja-base_ei4wh9.jpg" alt="ninja-not-logged-in"/>
        </div>
    </div>
  )
}

export default Header;