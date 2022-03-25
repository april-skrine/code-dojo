import React, { useState } from "react";

function Signup({ setCurrentUser }) {
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newClan, setNewClan] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    const newUser = {
      username: newUsername,
      password: newPassword,
      clan_id: parseInt(newClan.clans),
    };
    console.log(newUser);
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((r) => r.json())
      .then((user) => setCurrentUser(user));
  }

  const handleClanId = (event, result) => {
    const { name, value } = result || event.target;
    setNewClan({ ...newClan, [name]: value });
  };

  // function handleClanId(e) {
  //   setNewClan(e.target.value);
  //   if (newClan === "Vanilla Vipers") {
  //     setNewClanId = 1;
  //   } else if (newClan === "React Ronin") {
  //     setNewClanId = 2;
  //   } else if (newClan === "Ruby Red Pandas") {
  //     setNewClanId = 3;
  //   } else if (newClan === "Rails Rabbits") {
  //     setNewClanId = 4;
  //   }
  // }

  console.log(newClan.clans);

  return (
    <div>
      <div>
        <form onSubmit={onSubmit}>
          <input type="text" onChange={(e) => setNewUsername(e.target.value)} />
          <input
            type="password"
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <select
            name="clans"
            id="clans"
            defaultValue={"DEFAULT"}
            onChange={handleClanId}
          >
            <option value="DEFAULT" disabled>
              Select...
            </option>
            <option value="1">Vanilla Vipers</option>
            <option value="2">React Ronin</option>
            <option value="3">Ruby Red Pandas</option>
            <option value="4">Rails Rabbits</option>
          </select>
          <button type="submit">SIGN UP</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
