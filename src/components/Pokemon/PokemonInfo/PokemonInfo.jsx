import React, { Component } from 'react';

class PokemonInfo extends Component {
  state = {
    pokemon: null,
    loading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevstate) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;

    if (prevName !== nextName) {
      console.log('Changed the pokemon`s name');
      //   console.log('prevName: ', prevName);
      //   console.log('nextName: ', nextName);

      this.setState({ loading: true });
      //   setTimeout(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(
            new Error(`We don't have a pokemon named ${nextName}`)
          );
        })
        .then(pokemon => this.setState({ pokemon }))
        // .then(response => response.json())
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
      //   }, 1000);
    }
  }

  render() {
    const { pokemon, loading, error } = this.state;
    const { pokemonName } = this.props;
    return (
      <div>
        {/* {error && <h2>We don`t have a pokemon named {pokemonName}</h2>} */}
        {error && <h2>{error.message}</h2>}
        {loading && <p>Please, wait</p>}
        {!pokemonName && <p>Please, write the name of the Pokémon</p>}
        {pokemon && (
          <div>
            <p>{pokemon.name}</p>{' '}
            <img
              src={pokemon.sprites.other['official-artwork'].front_default}
              alt={pokemon.name}
              width="250"
            />
          </div>
        )}
      </div>
    );
  }
}

export default PokemonInfo;
