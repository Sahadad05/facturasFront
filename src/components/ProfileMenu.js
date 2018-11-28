import React, { Component } from 'react';
import axios from 'axios';
// import { Field, reduxForm } from 'redux-form'

class ProfileMenu extends Component {

  // periodo = React.createRef()

  state={
    info:{
      mes:'',
      tipo:'',
      rfc:'',
      frecuencia:''
    }
  }

  // const frecuencia = this.periodo.current.checked ? 'una vez' : 'mensual'

    componentDidMount() {
      axios.post('http://localhost:3000/', this.state.info)
        .then(res=>{
          console.log(res)

        })
        .catch(err => console.log(err))
    }

  onSubmit=(event) =>{
    event.preventDefault()
    axios.post('http://localhost:3000/', this.state.info)
        .then(res=>{
          console.log(res)

        })
        .catch(err => console.log(err))
  }
  
  onChange=(e) =>{
    const valor = e.target.value
    const key = e.target.name
    const info =this.state.info
    info[key]=valor
    console.log(info)
    this.setState({info})
  }


  render() { 
    // let ProfileMenu = props => {
    //   const { handleSubmit } = props


    var elementos = document.getElementsByName("frecuencia")
    for (var i=0; i<elementos.length; i++)

    

    return (
      <div>
      <form title='Solicita tu factura' onSubmit={this.onSubmit}>
        <h1>Solicita tu factura</h1>
        <label>RFC</label>        

        {/* {this.state.info.RFC.length!==0?}
        <div>
        <input
        value={this.state.info.RFC}
        disabled
        />
        <button>Editar</button> 
        </div> 
        : */}
        
        <div>
        <input
        type= 'text'
        placeholder= 'RFC'
        name='rfc'
        id= 'rfc'
        onChange={this.onChange}
        />  
        <button>Registrar</button>
        </div>
        <br/>
        
        <br/>
        <select name='tipo' id='hola' onChange={this.onChange}>
        <option disabled selected>Tipo</option>
        <option>Comisiones</option>
        <option>Transacciones</option>

        </select>

        <select name='mes' onChange={this.onChange}>
        <option disabled selected> Mes</option>
        <option>Enero</option>
        <option>Febrero</option>
        <option>Marzo</option>
        <option>Abril</option>
        <option>Mayo</option>
        <option>Junio</option>
        <option>Julio</option>
        <option>Agosto</option>
        <option>Septiembre</option>
        <option>Octubre</option>
        <option>Noviembre</option>
        <option>Diciembre</option>
        </select>
          <br/>

        <div name='frecuencia' onChange={this.onChange}>
          <label>Frecuencia:</label>
            <input type="radio" name="frecuencia" value="una vez" id='frecuencia_unavez'/> Una vez
            <input type="radio" name="frecuencia" value="mensual" id='frecuencia_mensual'/> Mensual
          
          
          </div>


        <button type='submit'>Solicitar</button>


      </form>



      </div>
    

    );
  }
}

export default ProfileMenu
