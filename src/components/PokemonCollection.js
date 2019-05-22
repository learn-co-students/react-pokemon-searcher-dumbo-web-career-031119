import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {


	filterCheck() {
		console.log(this.props);

		if (this.props.filter === '') {
			return this.props.pokemon.map(pok => <PokemonCard pok={pok} key={pok.id} />)
		} else {
			return this.props.pokemon.map(pok => pok.name.includes(this.props.filter) ? <PokemonCard pok={pok} id={pok.id} /> : null)
		}
	}

	render() {
		return (
			<Card.Group itemsPerRow={6}>
				{this.filterCheck()}
			</Card.Group>
		)
	}
}

export default PokemonCollection
