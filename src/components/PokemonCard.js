import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    clicked: false
  }

  getHp = () => {
    return this.props.stats.find(stat => stat.name === "hp").value
  }

  handleClick = () => {
    this.setState((prevState) => {return {
      clicked: !prevState.clicked
      }
    })
  }

  render() {

    return (
      <Card>
        <div onClick={this.handleClick}>
          <div className="image">
            <img src={this.state.clicked ?
                this.props.sprites.back
                :
                this.props.sprites.front} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              hp: {this.getHp()}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
