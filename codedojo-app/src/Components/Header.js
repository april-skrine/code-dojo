import React from "react";
import { Link } from "react-router-dom";

function Header({ user }) {
  function clanName() {
    if (user.clan_id === 1) {
      return "Vanilla Vipers";
    } else if (user.clan_id === 2) {
      return "React Ronin";
    } else if (user.clan_id === 3) {
      return "Ruby Red Pandas";
    } else if (user.clan_id === 4) {
      return "Rails Rabbits";
    }
  }

  return (
    <div>
      <div className="header-container">
        <div style={{ order: 1 }}>
          <img
            src="https://res.cloudinary.com/april-skrine/image/upload/v1648152978/Phase%204%20Project/ninja-base_ei4wh9.jpg"
            alt="ninja-not-logged-in"
            style={{ height: "50px" }}
          />
        </div>
        <div style={{ order: 2, flexGrow: 10 }}>
          <h1 className="text-header">
            {user != null ? user.username : "AnonymousNinja"} -{" "}
            {user != null ? clanName() : "You are clanless"}
          </h1>
        </div>
        <div style={{ order: 3 }}>
          <Link to="/login">
            <button className="button-header">{user != null ? 'logout.' : 'login.'}</button>
          </Link>
          <Link to="/">
            <button className="button-header">home.</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
