import './index.css'

const LatestMatch = props => {
  const {data} = props
  const {
    id,
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = data
  console.log(manOfTheMatch)

  return (
    <div className="latest_div">
      <div className="team_left">
        <p>{competingTeam}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        className="rival_team_logo"
        alt={competingTeam}
      />
      <div className="team_right">
        <p>FirstInning</p>
        <p>{firstInnings}</p>
        <p>SecondInning</p>
        <p>{secondInnings}</p>
        <p>Man of The Match</p>
        <p>{manOfTheMatch}</p>
        <p>umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
