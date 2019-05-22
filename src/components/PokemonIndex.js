import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      search: '',
      pokemon: []
    }

    fetch('http://localhost:3000/pokemon')
      .then(res => res.json())
      .then(poks => this.setState({ pokemon: poks }))

  }

  handleFormSubmit = (newPok) => {
    let savePok = {
      abilities: ["overgrow", "chlorophyll"],
      height: 10,
      id: 1,
      moves: [],
      name: newPok.name,
      sprites: { front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png", back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" },
      stats: [{ name: 'hp', value: 10 }],
      types: ["grass", "poison"],
      weight: 130
    }

    this.setState({
      pokemon: [savePok, ...this.state.pokemon]
    })

    console.log(newPok, this.state.pokemon);

  }

  handleChange = (e, { value }) => {
    console.log(value)
    this.setState({ search: value })
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.handleChange, 500)} showNoResults={false} />
        <br />
        <PokemonForm handleSubmit={this.handleFormSubmit} />
        <br />
        <PokemonCollection pokemon={this.state.pokemon} filter={this.state.search} />
        <br />
      </div>
    )
  }
}

export default PokemonPage
