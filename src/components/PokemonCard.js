import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    flipped: false
  }

  getHP(arr) {
    return arr.find(i => i.name === 'hp').value

  }

  flipCard = () => {
    this.setState({
      flipped: !this.state.flipped
    })
  }

  render() {
    return (
      <Card onClick={this.flipCard}>
        <div>
          <div className="image">
            <img src={this.state.flipped ? this.props.pok.sprites.back : this.props.pok.sprites.front} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pok.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.getHP(this.props.pok.stats)} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
