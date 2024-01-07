import React, { Component } from 'react';
import authContext from './authContexts';

export default class AuthProvider extends Component {
  state = {
    user: null,
    logIn: () => {
      this.setState({ user: 'Mango' });
    },
    logOut: () => {
      this.setState({ user: null });
    },
  };

  render() {
    return (
      <authContext.Provider value={this.state}>
        {this.props.children}
      </authContext.Provider>
    );
  }
}

// import { useState, useMemo } from 'react';
// import authContext from './Contexts';
// import avatar from './avatar.jpg';

// export default function Provider({ children }) {
//   const [user, setUser] = useState(null);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const onLogIn = () => {
//     setUser({ name: 'Cat', avatar });
//     setIsLoggedIn(true);
//   };

//   const onLogOut = () => {
//     setUser(null);
//     setIsLoggedIn(false);
//   };

//   const providerValue = useMemo(() => {
//     return { user, isLoggedIn, onLogIn, onLogOut };
//   }, [isLoggedIn, user]);

//   return (
//     <authContext.Provider value={providerValue}>
//       {children}
//     </authContext.Provider>
//   );
// }
