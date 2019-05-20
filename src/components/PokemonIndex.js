import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  state = {
    pokemon: [],
    searchTerm: ""
  }
  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(pokemon => {
      this.setState({
        pokemon: pokemon
      })
    })
  }

  handleSearchChange = (e, {value}) => {
    this.setState({
      searchTerm: value
    })
  }

  addPokemon = (pokemon) => {
    this.setState({ pokemon: [...this.state.pokemon, pokemon] })
  }

  render() {
    const targetPokemon = this.state.pokemon.filter(pokemon => pokemon.name.includes(this.state.searchTerm))
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.handleSearchChange, 500)} showNoResults={false} />
        <br />
        <h1>Hello From Pokemon Collection</h1>
        <PokemonCollection pokemon={targetPokemon}/>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
      </div>
    )
  }
}

export default PokemonPage
