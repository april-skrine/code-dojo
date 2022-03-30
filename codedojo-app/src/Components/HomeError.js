import React from "react";
import { Link } from "react-router-dom";

function HomeError() {
  return (
    <div className="home-background">
      <div className="home-container">
        <div>
          <img
            src="https://res.cloudinary.com/april-skrine/image/upload/v1648651343/Phase%204%20Project/notloggedin_ujehkd.jpg"
            alt="not-logged-in"
            style={{ marginTop: "200px" }}
          />
        </div>
        <div>
          <Link to="/login">
            <button
              className="button-lander"
              style={{
                marginTop: "20px",
                marginLeft: "0px",
                marginRight: "0px",
              }}
            >
              go to login.
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeError;
