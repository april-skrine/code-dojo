import React from "react";
import { Link } from "react-router-dom";

function Header({ user, handleLogout, clanName }) {
  function setAvatar() {
    let avatarURL = "";
    if (user?.clan_id === 1) {
      avatarURL =
        "https://res.cloudinary.com/april-skrine/image/upload/v1648572697/Phase%204%20Project/clan2_n8wqb2.jpg";
    } else if (user?.clan_id === 2) {
      avatarURL =
        "https://res.cloudinary.com/april-skrine/image/upload/v1648572697/Phase%204%20Project/clan4_ef9jze.jpg";
    } else if (user?.clan_id === 3) {
      avatarURL =
        "https://res.cloudinary.com/april-skrine/image/upload/v1648572697/Phase%204%20Project/clan3_y97dyu.jpg";
    } else if (user?.clan_id === 4) {
      avatarURL =
        "https://res.cloudinary.com/april-skrine/image/upload/v1648572697/Phase%204%20Project/clan5_k3vdpt.jpg";
    }
    return avatarURL;
  }

  return (
    <div>
      <div className="header-container">
        <div style={{ order: 1 }}>
          <img
            src={
              user
                ? setAvatar()
                : "https://res.cloudinary.com/april-skrine/image/upload/v1648572697/Phase%204%20Project/clan1_njxb66.jpg"
            }
            alt="ninja-avatar"
            style={{ height: "50px", marginLeft: "15px" }}
          />
        </div>
        <div style={{ order: 2, flexGrow: 10 }}>
          <h1 className="text-header">
            {user ? user.username : "AnonymousNinja"} -{" "}
            {user ? clanName() : "No clan."}
          </h1>
        </div>
        <div style={{ order: 3 }}>
          <Link to="/home">
            {user && <button className="button-header">home.</button>}
          </Link>
          <Link to="/UserProfile">
            {user && <button className="button-header">view profile.</button>}
          </Link>
          {user ? (
            <button className="button-header" onClick={handleLogout}>
              logout.
            </button>
          ) : (
            <Link to="/login">
              <button className="button-header">login.</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
