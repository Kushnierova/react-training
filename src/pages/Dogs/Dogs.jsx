import { Link, useSearchParams } from 'react-router-dom';
import css from './Dogs.module.css';

const Dogs = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // http://localhost:3000/dogs?a=5&b=10
  // console.log(searchParams.get('a'));

  const dogId = searchParams.get('dogId');
  console.log(dogId);

  //     useEffect(()=>{
  // HTTP запрос, якщо потрібно
  //     },[])

  return (
    <div className="container">
      <div className={css.container}>
        <input
          value={dogId}
          type="text"
          onChange={e => setSearchParams({ dogId: e.target.value })}
        />
        <button onClick={() => setSearchParams({ c: 'hello' })}>
          Change sp
        </button>

        <ul>
          {['dog-1', 'dog-2', 'dog-3', 'dog-4', 'dog-5'].map(dog => {
            return (
              <li key={dog} className={css.item}>
                <Link key={dog} to={`${dog}`}>
                  {dog}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Dogs;
