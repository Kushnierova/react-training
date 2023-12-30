import { useState } from 'react';
import css from './PokemonForm.module.css';
import { toast } from 'react-toastify';
import { ImSearch } from 'react-icons/im';
// Якщо кастомна іконка то
// import {ReactComponent as MyIcon} from './'

const styles = { form: { marginBottom: 20 } };

function PokemonForm({ onSubmit }) {
  const [pokemonName, setPokemonName] = useState('');

  const handleNameChange = e => {
    setPokemonName(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (pokemonName.trim() === '') {
      toast.error('string is empty');
      return;
    }
    onSubmit(pokemonName);
    setPokemonName('');
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        name="pokemonName"
        value={pokemonName}
        onChange={handleNameChange}
      />
      <button type="submit" className={css.btn}>
        <ImSearch style={{ marginRight: 8 }} />
        Search
      </button>
    </form>
  );
}

// class OldPokemonForm extends Component {
//   state = {
//     pokemonName: '',
//   };
//   handleNameChange = e => {
//     this.setState({ pokemonName: e.currentTarget.value.toLowerCase() });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     if (this.state.pokemonName.trim() === '') {
//       toast.error('string is empty');
//       return;
//     }
//     this.props.onSubmit(this.state.pokemonName);
//     this.setState({ pokemonName: '' });
//   };
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit} style={styles.form}>
//         <input
//           type="text"
//           name="pokemonName"
//           value={this.pokemonName}
//           onChange={this.handleNameChange}
//         />
//         <button type="submit" className={css.btn}>
//           <ImSearch style={{ marginRight: 8 }} />
//           Search
//         </button>
//       </form>
//     );
//   }
// }
export default PokemonForm;
