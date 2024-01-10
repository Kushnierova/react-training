import { Link, useSearchParams } from 'react-router-dom';
import css from './Dogs.module.css';
import { useState, useEffect } from 'react';

const Dogs = () => {
  const [dogs, setDogs] = useState([
    'dog-1',
    'dog-2',
    'dog-3',
    'dog-4',
    'dog-5',
  ]);
  const [searchParams, setSearchParams] = useSearchParams();
  // http://localhost:3000/dogs?a=5&b=10
  // console.log(searchParams.get('a'));

  const dogId = searchParams.get("dogId") ?? "";
  console.log(dogId);


  // useEffect(() => {
  //   // HTTP запрос, якщо потрібно
  //   console.log(dogId);
  // }, [dogId]);

  const updateQueryString = e => {
    const dogIdValue = e.target.value;
    if (dogIdValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ dogId: dogIdValue });

    // // Якщо в e.target.value "" то записуємо {}
    // setSearchParams({})
    // // А якщо e.target.value не "" то записуємо { dogId: e.target.value}
    // setSearchParams({ dogId: e.target.value })

  };

  const visibleDogs = dogs.filter(dog => dog.includes(dogId));
  return (
    <div className="container">
      <div className={css.container}>
        <input value={dogId} type="text" onChange={updateQueryString} />
        <button onClick={() => setSearchParams({ c: 'hello' })}>
          Change sp
        </button>

        <ul>
          {visibleDogs.map(dog => {
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
