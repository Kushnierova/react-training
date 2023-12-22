import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './Pokemon.module.css';
import PokemonForm from './PokemonForm';
import PokemonInfo from './PokemonInfo';

class Pokemon extends Component {
  //   state = {
  //     pokemon: null,
  //     loading: false,
  //   };
  //   componentDidMount() {
  //     this.setState({ loading: true });
  //     fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  //       .then(res => res.json())
  //       .then(pokemon => this.setState({ pokemon }))
  //       .finally(() => this.setState({ loading: false }));
  //   }

  //   render() {
  //     const { pokemon, loading } = this.state;
  //     return (
  //       <div className={css.container}>
  //         {/* <ToastContainer autoClose={3000} /> */}
  //         {loading && <h1>Waiting</h1>}
  //         {pokemon && <div>{pokemon.name}</div>}
  //       </div>
  //     );
  //   }
  state = {
    pokemonName: '',
  };

  handleFormSubmit = pokemonName => {
    // console.log(pokemonName);
    this.setState({ pokemonName });
  };

  render() {
    const { pokemonName } = this.state;
    return (
      <div className={css.container}>
        <div>
          <PokemonForm onSubmit={this.handleFormSubmit} />
        </div>
        <div>
          <PokemonInfo pokemonName={pokemonName} />
        </div>
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
export default Pokemon;