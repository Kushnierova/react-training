import { useState, useEffect } from 'react';
import PokemonErrorView from '../PokemonErrorView';
import PokemonDataView from '../PokemonDataView';
import PokemonPendingView from '../PokemonPendingView';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

function PokemonInfo({ pokemonName }) {
// {
//   pokemon:null,
//   error:null,
//   status:Status.IDLE,
// }

  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    if (!pokemonName) {
      return;
    }

    setStatus('pending');

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(
          new Error(`We don't have a pokemon named ${pokemonName}`)
        );
      })
      .then(pokemon => {
        setPokemon(pokemon);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [pokemonName]);

  if (status === Status.IDLE) {
    return <p>Please, write the name of the Pokémon</p>;
  }

  if (status === Status.PENDING) {
    return <PokemonPendingView pokemonName={pokemonName} />;
  }

  if (status === Status.REJECTED) {
    return <PokemonErrorView message={error.message} />;
  }

  if (status === Status.RESOLVED) {
    return <PokemonDataView pokemon={pokemon} />;
  }
}

// // 'idle - просто'
// // 'pending - очікування'
// // 'resolved - виконано успішно'
// // 'rejected - відхилено(error)'

// class OldPokemonInfo extends Component {
//   state = {
//     pokemon: null,
//     // loading: false,
//     error: null,
//     status: 'idle',
//   };

//   componentDidUpdate(prevProps, prevstate) {
//     const prevName = prevProps.pokemonName;
//     const nextName = this.props.pokemonName;

//     if (prevName !== nextName) {
//       console.log('Changed the pokemon`s name');
//       //   console.log('prevName: ', prevName);
//       //   console.log('nextName: ', nextName);

//       this.setState({ status: 'pending' });
//     //   setTimeout(() => {
//         fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
//           .then(response => {
//             if (response.ok) {
//               return response.json();
//             }
//             return Promise.reject(
//               new Error(`We don't have a pokemon named ${nextName}`)
//             );
//           })
//           .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
//           // .then(response => response.json())
//           .catch(error => this.setState({ error, status: 'rejected' }));
//         //   .finally(() => this.setState({ loading: false }));
//     //   }, 1000);
//     }
//   }

//   render() {
//     // const { pokemon, loading, error, status } = this.state;
//     const { pokemon, error, status } = this.state;
//     const { pokemonName } = this.props;

//     if (status === 'idle') {
//       return <p>Please, write the name of the Pokémon</p>;
//     }

//     if (status === 'pending') {
//       return <PokemonPendingView pokemonName={pokemonName} />;
//     }

//     if (status === 'rejected') {
//       return <PokemonErrorView message={error.message} />;
//     }

//     if (status === 'resolved') {
//       return <PokemonDataView pokemon={pokemon} />;
//     }
//     // return (
//     //   <div>
//     //     {/* {error && <h2>We don`t have a pokemon named {pokemonName}</h2>} */}
//     //     {error && <h2>{error.message}</h2>}
//     //     {loading && <p>Please, wait</p>}
//     //     {!pokemonName && <p>Please, write the name of the Pokémon</p>}
//     //     {pokemon && (
//     //       <div>
//     //         <p>{pokemon.name}</p>{' '}
//     //         <img
//     //           src={pokemon.sprites.other['official-artwork'].front_default}
//     //           alt={pokemon.name}
//     //           width="250"
//     //         />
//     //       </div>
//     //     )}
//     //   </div>
//     // );
//   }
// }

export default PokemonInfo;
