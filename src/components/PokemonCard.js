import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    clicked:false
  }


  clickedCard = () => {
    // event.persist()
    console.log("clicked")
    this.setState({
      clicked: !this.state.clicked
    })
  }


  getHP = () => {
    let statObj = this.props.stats.find(stat => {return stat.name === "hp"} )
    return statObj.value
  }

  render() {
    // debugger
    return (
      <Card>
        <div onClick={this.clickedCard}>
          <div className="image">
            <img alt="oh no!" src={this.state.clicked ? `${this.props.sprites.back}`:`${this.props.sprites.front}`}/>
          </div>
          <div className="content">
            <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.getHP()}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
