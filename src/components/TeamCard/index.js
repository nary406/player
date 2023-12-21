import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'

class TeamCard extends Component {
  render() {
    const {list} = this.props
    const {id, name, teamImageUrl} = list

    return (
      <Link to={`/team-matches/${id}`}>
        <li className="list_item">
          <div className="team_div">
            <img src={teamImageUrl} className="team_logo" alt={name} />
            <p>{name}</p>
          </div>
        </li>
      </Link>
    )
  }
}

export default TeamCard
