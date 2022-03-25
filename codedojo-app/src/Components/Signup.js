import React, {useState} from 'react'

function Signup({ setCurrentUser }) {
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newClan, setNewClan] = useState("")
  const [newClanId, setNewClanId] = useState("")

  function onSubmit(e) {
    e.preventDefault()
    const newUser = {
      username: newUsername,
      password: newPassword,
      clan: newClan,
      clan_id: newClanId
    }
    console.log(newUser)
    // fetch('/users', {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(newUser),
    // })
    //   .then((r) => r.json())
    //   .then((user) => setCurrentUser(user));
  }

  function handleClanId(e) {
    setNewClan(e.target.value)
    if (newClan === "Vanilla Vipers") {
      newClanId = 1
    } else if (newClan === "React Ronin") {
      newClanId = 2
    } else if (newClan === "Ruby Red Pandas") {
      newClanId = 3
    } else if (newClan === "Rails Rabbits") {
      newClanId = 4
    }
  }

  console.log(newClanId)
  console.log(newClan)

  return (
    <div>
      <div>
        <form onSubmit={onSubmit}>
            <input
              type="text"
              onChange={(e) => setNewUsername(e.target.value)} 
            />
            <input
              type="password"
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <select name="clans" id="clans" onChange={handleClanId}>
              <option value="Vanilla Vipers">Vanilla Vipers</option>
              <option value="React Ronin">React Ronin</option>
              <option value="Ruby Red Pandas">Ruby Red Pandas</option>
              <option value="Rails Rabbits">Rails Rabbits</option>
            </select>
            <button type="submit">SIGN UP</button>
        </form>
      </div>
    </div>
  )
}

export default Signup