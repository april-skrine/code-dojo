import React from 'react'
import {Link} from 'react-router-dom'

function Lander() {
  return (
    <div>
        <div className='lander-container'>
          <div className="break"></div>
          <div className='lander-container-child'>
            <img src="https://res.cloudinary.com/april-skrine/image/upload/v1648153187/Phase%204%20Project/lander-ninja_rnkqp1.jpg" alt="big-ninja"/>
          </div>
          <div class="break"></div>
          <div className='lander-container-child'>
            <Link to="/login">
              <button className='button-lander'>login.</button>
            </Link>
            <Link to="/signup">
              <button className='button-lander'>signup.</button>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Lander;