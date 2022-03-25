import React from 'react'
import {Link} from 'react-router-dom'


function Header({user}) {
  return (
    <div>
        <div className="header-container">
          <div style={{order: 1}}>
            <img 
              src="https://res.cloudinary.com/april-skrine/image/upload/v1648152978/Phase%204%20Project/ninja-base_ei4wh9.jpg" 
              alt="ninja-not-logged-in"
              style={{height: '50px'}}
            />
          </div>
          <div style={{order: 2, flexGrow: 10}}>
            <h1 className='text-header'>{user ? user.username : "AnonymousNinja"} - {user ? user.clan.clan_name : "You are clanless"}</h1>
          </div>
          <div style={{order: 3}}>
            <Link to="/login">
              <button className="button-header">login.</button>
            </Link>
            <Link to="/">
              <button className="button-header">home.</button>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Header;