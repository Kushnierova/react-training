import { ImSpinner } from 'react-icons/im';
import css from './PokemonPendingView.module.css';
import pendingImage from '../pending.jpg';
import PokemonDataView from '../PokemonDataView';

const styles = {};

function PokemonPendingView({ pokemonName }) {
  const pokemon = {
    name: pokemonName,
    sprites: {
      other: {
        'official-artwork': { front_default: pendingImage },
      },
    },
    stats: [],
  };
  return (
    <div role="">
      <div style={styles.spinner}>
        <ImSpinner size="32" className={css.iconSpin} />
        Please, wait...
      </div>
      <PokemonDataView pokemon={pokemon} />
    </div>
  );
}

export default PokemonPendingView;
