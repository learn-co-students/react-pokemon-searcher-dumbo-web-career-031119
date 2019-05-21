import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {


  state = {
    pokemon: null,
    search: null
  }


  componentDidMount() {
    // console.log("adfdsfs")
    // debugger
    if(this.state.pokemon === null) {
      this.getAllPokemon()
    }
  }

  getAllPokemon = () => {
      fetch('http://localhost:3000/pokemon')
      .then(resp => resp.json())
        .then((pokemon) => {
          this.setState({
            pokemon: pokemon
          })
        })
  }

  updateSearch = (event) => {
    // debugger
    this.setState({
      ...this.state,
      search: event.target.value
    })
  }


  addPokemon = (pokemon) => {
    fetch('http://localhost:3000/pokemon', {
      method: "POST",
      headers: {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
      },
      body: JSON.stringify({...pokemon})
    }).then(resp => resp.json()).then((opokemon)=> {
      debugger
      this.setState({
        pokemon: [...this.state.pokemon, opokemon]
      })
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.updateSearch} showNoResults={false} />
        <br />
        <PokemonCollection pokemon={this.state.pokemon} searchh={this.state.search}/>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
      </div>
    )
  }
}


export default PokemonPage
