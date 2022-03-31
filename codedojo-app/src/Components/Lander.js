import React from "react";
import { Link } from "react-router-dom";

function Lander() {
  return (
    <div>
      <div class="flier">
        <img
          src="https://res.cloudinary.com/april-skrine/image/upload/v1648740487/Phase%204%20Project/111-1119422_cool-ninja-star-outline-removebg-preview_ciecig.png"
          width="200"
          alt="flier"
        />
      </div>
      <div className="lander-container">
        <div className="break"></div>
        <div className="lander-container-child">
          <img
            src="https://res.cloudinary.com/april-skrine/image/upload/v1648582197/Phase%204%20Project/welcometo_omznod.jpg"
            style={{ width: "800px" }}
            alt="ninja"
          />
        </div>
        <div className="break"></div>
        <div className="lander-container-child">
          <Link to="/login">
            <button className="button-lander">login.</button>
          </Link>
          <Link to="/signup">
            <button className="button-lander">signup.</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Lander;
