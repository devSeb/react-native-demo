import React, { Component } from 'react';

import Login from './screens/Login.js';
import Secured from './screens/Secured.js';

export default class App extends Component {

  state = {
    isLoggedIn: false
  }

  render() {

    if (this.state.isLoggedIn)
      return <Secured
          onLogoutPress={() => this.setState({isLoggedIn: false})}
        />;
    else
      return <Login
          onLoginPress={() => this.setState({isLoggedIn: true})}
        />;
  }

}
