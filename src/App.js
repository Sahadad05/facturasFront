import React, { Component } from 'react';
import ProfileMenu from './components/ProfileMenu';
import RegistraRFC from './components/RegistraRFC';
// import Registro from './components/Registro'
import './components/Registro.scss'

class App extends Component {
  render() {
    return (
      <div className='l-box'>
        <div className="App">
          <RegistraRFC />
          <ProfileMenu />
        </div>
        </div>
    );
  }
}

export default App;
