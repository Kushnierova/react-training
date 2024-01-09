import { Link, useSearchParams } from 'react-router-dom';
import css from './Dogs.module.css';

const Dogs = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  //     useEffect(()=>{
  // HTTP запрос, якщо потрібно
  //     },[])

  return (
    <div className="container">
      <div className={css.container}>
        <input type="text" />

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
