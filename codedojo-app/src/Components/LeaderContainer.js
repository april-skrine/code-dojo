import React, {useState, useEffect} from 'react'

function LeaderContainer() {

  const [leaderboard, setLeaderboard] = useState([])

  useEffect(() => {
    fetch("/clans")
      .then((r) => r.json())
      .then(data => setLeaderboard(data));
}, [])

const clanNames = leaderboard.map(c => Object.keys(c))
const scores = leaderboard.map(c => Object.values(c))

  return (
    <div>
        <p><b>{clanNames[0]}</b> has scored {scores[0]} points</p>
        <p><b>{clanNames[1]}</b> has scored {scores[1]} points</p>
        <p><b>{clanNames[2]}</b> has scored {scores[2]} points</p>
        <p><b>{clanNames[3]}</b> has scored {scores[3]} points</p>
    </div>
  )
}

export default LeaderContainer;