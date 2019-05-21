import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

	createPokemonCards = () => {
		let searchKey = this.props.searchh
		if(this.props.pokemon !== null){
			let searchedArray = this.props.pokemon
				if(searchKey !== null) {
				searchedArray = searchedArray.filter(pokemon => {
					if(pokemon.name.search(searchKey) >= 0)
						return pokemon
				})
			}
			return searchedArray.map(pokemon => {
			return <PokemonCard {...pokemon} />
		})
		}
	}


  render() {
  	console.log("rerendere")
    return (
      <Card.Group itemsPerRow={6}>
             {this.createPokemonCards()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
