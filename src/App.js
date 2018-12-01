import React, { Component } from 'react';
import ProfileMenu from './components/ProfileMenu'
import RegistraRFC from './components/RegistraRFC';

class App extends Component {
  render() {
    return (
      <div className="App">
          <RegistraRFC/>
          <ProfileMenu/>

      </div>
    );
  }
}

export default App;
