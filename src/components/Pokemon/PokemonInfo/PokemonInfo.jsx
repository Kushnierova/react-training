import React, { Component } from 'react';

class PokemonInfo extends Component {
  componentDidUpdate(prevProps, prevstate) {
    if (prevProps.pokemonInfo !== this.props.pokemonInfo) {
      console.log();
    }
  }

  render() {
    return (
      <div>
        <h1>Pokemon Info</h1>
        <p>{this.props.pokemonInfo}</p>
      </div>
    );
  }
}

export default PokemonInfo;
