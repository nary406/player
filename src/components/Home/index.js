import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {dashBoard: [], isLoading: true}

  componentDidMount() {
    this.getDashBoard()
  }

  getDashBoard = async () => {
    const {dashBoard} = this.state
    const response = await fetch('https://apis.ccbp.in/ipl')
    const teamsData = await response.json()

    const updatedData = teamsData.teams.map(item => ({
      id: item.id,
      name: item.name,
      teamImageUrl: item.team_image_url,
    }))

    this.setState({dashBoard: updatedData, isLoading: false})
  }

  getTabsList = () => {
    const {dashBoard} = this.state
    const teamCard = dashBoard.map(item => (
      <TeamCard list={item} key={item.id} />
    ))
    return teamCard
  }

  render() {
    const {isLoading, dashBoard} = this.state

    return (
      <div>
        {isLoading ? (
          <div className="loader_2" testid="loader">
            <Loader type="Oval" color="#000000" height={50} width={50} />
          </div>
        ) : (
          <div className="team_match_div_2">
            <div className="ipl_heading">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="swing_pic"
              />
              <h1>IPL Dashboard</h1>
            </div>
            <ul className="unorder_list">{this.getTabsList()} </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
