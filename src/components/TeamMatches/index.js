import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {teamData: [], isLoading: true}

  componentDidMount() {
    this.getTeamMatches()
  }

  getFetchedData = data => ({
    id: data.id,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    date: data.date,
    firstInnings: data.first_innings,
    manOfTheMatch: data.man_of_the_match,
    matchStatus: data.match_status,
    result: data.result,
    secondInnings: data.second_innings,
    umpires: data.umpires,
    venue: data.venue,
  })

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const newData = {
      teamBannerUrl: data.team_banner_url,
      latestMatch: this.getFetchedData(data.latest_match_details),
      recentMatches: data.recent_matches.map(item => this.getFetchedData(item)),
    }
    this.setState({teamData: newData, isLoading: false})
  }

  renderLatestMatch = () => {
    const {teamData} = this.state
    const {latestMatch} = teamData
    return (
      <div>
        <LatestMatch data={latestMatch} />
      </div>
    )
  }

  renderRecentMatch = () => {
    const {teamData} = this.state
    const {recentMatches} = teamData

    return (
      <ul className="un_list">
        {recentMatches.map(item => (
          <MatchCard dataList={item} key={item.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {teamData, isLoading} = this.state
    const {teamBannerUrl} = teamData

    return (
      <div>
        {isLoading ? (
          <div className="loader_1" testid="loader">
            <Loader type="Oval" color="#000000" height={50} width={50} />
          </div>
        ) : (
          <div className="team_match_div">
            <img src={teamBannerUrl} className="top_image" alt="team banner" />
            <p>Latest Matches</p>
            {this.renderLatestMatch()}
            {this.renderRecentMatch()}
          </div>
        )}
      </div>
    )
  }
}
export default TeamMatches
