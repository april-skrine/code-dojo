import React, {useState} from 'react'


function UserProfile({user, clanName, deleteUser}) {

  const [newBio, setNewBio] = useState("")
  const username = user?.username
  const clan = clanName()
  const bio = user?.bio

  const submitBio = (e) => {
    e.preventDefault();
    fetch(`/users/${user.id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        bio: newBio,
      }),
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then(r => r.json())
  window.location.reload()
  }

  return (
    <div className="home-background">
      <div className="home-container"
        style={{marginTop: '200px'}}>
        <div className="bio-container">
          <div className="bio-container-elements">
            <h1 style={{
                fontFamily: "manga", 
                fontSize: '60px', 
                color: '#b21e1c', 
                marginBottom: '-15px'}}
            >
              {username}
            </h1>
            <h2 style={{fontFamily: "manga", fontSize: '30px'}}>{clan}</h2>
            <p style={{fontFamily: "oswald", fontSize: '20px'}}>{bio}</p>
            <form onSubmit={submitBio}>
              <textarea className="bio-textarea" onChange={(e) => setNewBio(e.target.value)}>
              </textarea>
              <p></p>
              <div className="button-flex-box">
              <button type="submit" className="button-bio">
                save bio.
              </button>
              </div>
            </form>
            </div>
            </div>
            <button onClick={deleteUser} className="button-header" style={{marginLeft: '0px', marginRight: '0px'}}>
              delete profile.
            </button>
      </div>
    </div>
  )
}

export default UserProfile