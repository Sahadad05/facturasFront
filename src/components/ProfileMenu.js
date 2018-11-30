import React, { Component } from 'react';
import axios from 'axios';
import { Field, reduxForm } from 'redux-form'
// import { connect } from 'react-redux';



export class ProfileMenu extends Component {
  
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

  handleSubmit=(e) =>{
    e.preventDefault()
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
    // var elementos = document.getElementsByName("frecuencia")
    // for (var i=0; i<elementos.length; i++)
    
    
    // const ProfileMenu = props => {
     const { handleSubmit } = this.props

    return (
    
      <div>
      <form title='Solicita tu factura' onSubmit={handleSubmit}>
      <h1>Solicita tu factura</h1>
      <div>
        <label>RFC</label>     
        <div>   
        <Field
        type= 'text'
        placeholder= '*RFC'
        name='rfc'
        value= 'rfc'
        onChange={this.onChange}
        component="input"
        />  
        <button type='submit'>Registrar</button>


         {/* {this.state.info.RFC.length!==0?}
        <div>
        <input
        value={this.state.info.rfc}
        disabled
        />
        <button>Editar</button> 
        </div> 
        : */}


        </div>
        </div>

        {/* <br/> */}
        
        <br/>
        <div>
        <Field name='tipo' component='select' id='hola' onChange={this.onChange}>
        <option disabled selected>Tipo</option>
        <option>Comisiones</option>
        <option>Transacciones</option>
        </Field>
        {/* </div>

        <div> */}
          <Field name='mes' component='select' onChange={this.onChange}>
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
        </Field>
        </div>
<br/>
        <div>
        <label>Frecuencia:         </label>
        <label>
        <Field
          name='frecuencia' 
          onChange={this.onChange}
          component="input"
          type= 'radio'
          value='una vez'
          />{''}
          Una vez
          </label>
          <label>
          <Field
          name='frecuencia' 
          onChange={this.onChange}
          component="input"
          type= 'radio'
          value='mensual'
          />{''}
          Mensual
          </label>
          </div>
          <br/>
        <button type='submit' >Solicitar</button>
      </form>
      </div>
     )}
}
  
 ProfileMenu = reduxForm({
   form:'simple'
 }) (ProfileMenu)

 export default ProfileMenu

// export default reduxForm ({
//   form: 'simple'
// })(ProfileMenu)


