import { useState, useMemo } from 'react';
import css from './Friends.module.css';

const initualFriends = [
  'Aaran',
  'Aaren',
  'Aarez',
  'Aarman',
  'Aaron',
  'Aaron-James',
  'Aarron',
  'Aaryan',
  'Aaryn',
  'Aayan',
  'Aazaan',
  'Abaan',
  'Abbas',
  'Abdallah',
  'Abdalroof',
  'Abdihakim',
  'Abdirahman',
  'Abdisalam',
  'Abdul',
  'Abdul-Aziz',
];

function Friends() {
  const [count, setCount] = useState(0);
  const [friends] = useState(initualFriends);
  const [filter, setFilter] = useState('');

//   Використовуємо тут useMemo для того щоб під час натискання на button, не перерендивались Friends

  const visibleFriends = useMemo(() => {
    console.log('Filter friends' + Date.now());
    return friends.filter(friend => friend.toLowerCase().includes(filter));
  }, [filter, friends]);

  //   const visibleFriends = (() => {
  //     console.log('Filter friends' + Date.now());
  //     return friends.filter(friend => friend.toLowerCase().includes(filter));
  //   })();

  return (
    <div className="container">
      <div className={css.container}>


      <button onClick={() => setCount(c => c + 1)}>{count}</button>
      <hr />
      <input onChange={e => setFilter(e.target.value)} value={filter} />
      <ul className={css.inputs}>
        {visibleFriends.map((friend, idx) => (
          <li key={idx}>{friend}</li>
        ))}
      </ul>
            </div>
    </div>
  );
}

export default Friends;
