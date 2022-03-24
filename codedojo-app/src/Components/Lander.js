import React from 'react'
import {Link} from 'react-router-dom'

function Lander() {
  return (
    <div>
        <img src="https://res.cloudinary.com/april-skrine/image/upload/v1648153187/Phase%204%20Project/lander-ninja_rnkqp1.jpg" alt="big-ninja"/>
        <Link to="/login">
          <button>LOGIN</button>
        </Link>
        <Link to="/signup">
          <button>SIGNUP</button>
        </Link>
    </div>
  )
}

export default Lander;