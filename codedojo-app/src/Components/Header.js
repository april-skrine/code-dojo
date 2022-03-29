import React from "react";
import { Link } from "react-router-dom";

function Header({ user, handleLogout, isAuthenticated }) {
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
            src="https://res.cloudinary.com/april-skrine/image/upload/v1648572697/Phase%204%20Project/clan1_njxb66.jpg"
            alt="ninja-not-logged-in"
            style={{ height: "50px" }}
          />
        </div>
        <div style={{ order: 2, flexGrow: 10 }}>
          <h1 className="text-header">
            {user ? user.username : "AnonymousNinja"} -{" "}
            {user ? clanName() : "No clan."}
          </h1>
        </div>
        <div style={{ order: 3 }}>
          {user ? (
            <button className="button-header" onClick={handleLogout}>
              logout.
            </button>
          ) : (
            <Link to="/login">
              <button className="button-header">login.</button>
            </Link>
          )}
          {/* <Link to="/">
            <button className="button-header">home.</button>
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
