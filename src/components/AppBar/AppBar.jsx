// import { useContext } from 'react';
// import Navigation from '../Navigation/Navigation'
// // import UserMenu from './'
// import authContext from '../Contexts/Contexts';
// // import styles

// const { useLayoutEffect } = require("react");

// export default function Appbar() {
//   const {isLoggedIn, user, onLogIn, onLogOut} = useContext(authContext);

// useLayoutEffect


//   return (
//     <header>
//       <Navigation />
//       {isLoggedIn ? (
//         <UserMenu onLogOut={onLogOut} user={user} />
//       ) : (
//         <button type="button" onClick={onLogIn}>
//           Ввійти
//         </button>
//       )}
//     </header>
//   );
//   //   return (
//   //     <authContext.Consumer>
//   //       {({ isLoggedIn, user, onLogIn, onLogOut }) => (
//   //         <header>
//   //           <Navigation />
//   //           {isLoggedIn ? (
//   //             <UserMenu onLogOut={onLogOut} user={user} />
//   //           ) : (
//   //             <button type='button' onClick={onLogIn}>Ввійти</button>
//   //           )}
//   //         </header>
//   //       )}
//   //     </authContext.Consumer>
//   //   );
// }
