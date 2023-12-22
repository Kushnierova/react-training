import errorImage from '../error.jpg';

function PokemonErrorView({ message }) {
  return (
    <div role="alert">
      <h2>{message}</h2>
      <img src={errorImage} width="240" alt="sadcat" />
    </div>
  );
}

export default PokemonErrorView;
