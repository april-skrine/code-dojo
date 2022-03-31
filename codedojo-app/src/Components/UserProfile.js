import React, {useState} from 'react'

function UserProfile({user, clanName}) {

  const [newBio, setNewBio] = useState("")
  const username = user?.username
  const clan = clanName()
  const bio = user?.bio

  const submitBio = (e) => {
    e.preventDefault();
    fetch("/users", {
      method: 'PATCH',
      body: JSON.stringify({
        bio: newBio,
      }),
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then(r => r.json())
  .then(data => console.log(data))
  }

  return (
    <div className="home-background">
      <div className="home-container">
        <div className="home-container-child-leader"
            style={{marginTop: '200px', width: '200px'}}>
            <p style={{fontSize: '50px'}}>{username}</p>
            <p>{clan}</p>
            <p>{bio}</p>
            <form onSubmit={submitBio}>
              <textarea onChange={(e) => setNewBio(e.target.value)}>
              </textarea>
              <button type="submit">
                save bio.
              </button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default UserProfile