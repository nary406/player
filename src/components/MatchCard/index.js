import {Component} from 'react'
import './index.css'

const MatchCard = props => {
  const {dataList} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = dataList
  console.log(result)
  return (
    <li>
      <div className="min_tab">
        <img
          src={competingTeamLogo}
          alt={competingTeam}
          className="mini_tab_logo"
        />
        <p>{competingTeam}</p>
        <p>{result}</p>
        <p>{matchStatus}</p>
      </div>
    </li>
  )
}

export default MatchCard
