import React, { Component } from 'react';
import ProfileMenu from './components/ProfileMenu';
import RegistraRFC from './components/RegistraRFC';
import './components/Registro.scss'

class App extends Component {

  state = {
    rfc: '',
    mes: '',
    tipo: '',
    frecuencia : ''
  }

  recibirRFC = (x) => {
    this.setState({rfc: x});
    console.log(this.state)
  }

  guardarInfo = (info) =>{
    this.setState({
      mes:info.mes,
      tipo: info.tipo,
      frecuencia: info.frecuencia,
    })
    console.log(info)
  }
  
    


  render() {
    return (
      <div className='l-box'>
        <div className="App">
          <RegistraRFC recibirRFC={this.recibirRFC} />
          <ProfileMenu info={this.state} guardarInfo={this.guardarInfo} />
        </div>
        </div>
    );
  }
}

export default App;
