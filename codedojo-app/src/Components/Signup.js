import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newClan, setNewClan] = useState("");

  const navigate = useNavigate();

  function onSubmit(e) {
    e.preventDefault();
    const newUser = {
      username: newUsername,
      password: newPassword,
      clan_id: parseInt(newClan.clans),
      bio: "No bio yet!"
    };
    if (newUser.username !== "") {
      if (newUser.password.length >= 5 && newUser.password.length <= 10) {
        fetch("/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        }).then((r) => r.json());
        alert("User Created Successfully");
        navigate("/login");
      } else {
        alert(
          "Password must be between 5 and 10 characters"
        );
      }
    } else {
      alert("Must enter a username");
    }
  }

  const handleClanId = (event, result) => {
    const { name, value } = result || event.target;
    setNewClan({ ...newClan, [name]: value });
  };

  return (
    <div>
      <div className="login-container">
        <div className="login-container-child">
          <img
            src="https://res.cloudinary.com/april-skrine/image/upload/v1648238629/Phase%204%20Project/cododojologin_mhzra9.jpg"
            alt="dojo"
          />
        </div>
        <div className="login-container-child">
          <form onSubmit={onSubmit}>
            <label
              style={{
                color: "#b21e1c",
                fontSize: "20px",
                fontFamily: "oswald",
                display: "block",
              }}
            >
              username:
            </label>
            <input
              type="text"
              onChange={(e) => setNewUsername(e.target.value)}
              className="input-boxes"
            />
            <label
              style={{
                color: "#b21e1c",
                fontSize: "20px",
                fontFamily: "oswald",
                display: "block",
              }}
            >
              password:
            </label>
            <input
              type="password"
              onChange={(e) => setNewPassword(e.target.value)}
              className="input-boxes"
            />
            <label
              style={{
                color: "#b21e1c",
                fontSize: "20px",
                fontFamily: "oswald",
                display: "block",
              }}
            >
              select your clan:
            </label>
            <select
              name="clans"
              id="clans"
              defaultValue={"DEFAULT"}
              onChange={handleClanId}
              className="input-dropdown"
            >
              <option value="DEFAULT" disabled></option>
              <option value="1">Vanilla Vipers</option>
              <option value="2">React Ronin</option>
              <option value="3">Ruby Red Pandas</option>
              <option value="4">Rails Rabbits</option>
            </select>
            <button type="submit" className="button-header">
              SIGN UP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
