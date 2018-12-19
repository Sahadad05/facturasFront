import React, { Component } from 'react';
import axios from 'axios';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import Card from '@clipmx/card';
// import uuid from 'uuid';
import '../components/Registro.scss';
import Registro from './Registro';
import {addReq} from '../redux/Actions/actions'



class ProfileMenu extends Component {
  submitForm = values => {
  
    this.props.addReq(values)

  //  axios
  //     .post('http://localhost:4200/', values)
  //     .then(res => {
  //       console.log(res);
  //     })
  //     .catch(err => console.log(err));

  }; 

  mes = React.createRef()
  tipo = React.createRef()
  frecuencia = React.createRef()

  recibirInfo = () => {
    
    const info = {
      mes: this.mes.current.value,
      tipo: this.tipo.current.value,
      frecuencia: this.frecuencia.current.value
    }
    this.props.guardarInfo(info)
  }

  enviarInfo = (e) => {
    e.preventDefault()
    console.log(this.props.info)
    axios
      .post('http://localhost:4200/', this.props.info)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));

  }

  render() {
    // var elementos = document.getElementsByName("frecuencia")
    // for (var i=0; i<elementos.length; i++)

    // const ProfileMenu = props => {

    const { handleSubmit } = this.props;


    return (
      <div className="body">
        <Card className="card2">
          <form
            title="solicita tu factura" 
            // onSubmit={handleSubmit(this.submitForm)}
            onChange={this.recibirInfo}
            onSubmit={this.enviarInfo}
          >
            <div>
              <Registro />
              <br />
              <br />
              <br />
              <Field ref={this.tipo} name="tipo" component="select">
                <option value="">Tipo</option>
                <option value="Comisiones">Comisiones</option>
                <option value="Transacciones">Transacciones</option>
              </Field>

              <Field ref={this.mes} name="mes" component="select">
                <option value="">Mes</option>
                <option value="Enero">Enero</option>
                <option value="Febrero">Febrero</option>
                <option value="Marzo">Marzo</option>
                <option value="Abril">Abril</option>
                <option value="Mayo">Mayo</option>
                <option value="Junio">Junio</option>
                <option value="Julio">Julio</option>
                <option value="Agosto">Agosto</option>
                <option value="Septiembre">Septiembre</option>
                <option value="Octubre">Octubre</option>
                <option value="Noviembre">Noviembre</option>
                <option value="Diciembre">Diciembre</option>
              </Field>
            </div>
            <br />
            <div>
              <label>Frecuencia: </label>
              <label>
                <Field
                  name="frecuencia"
                  component="input"
                  type="radio"
                  value="una vez"
                  ref={this.frecuencia}
                />
                {''}
                Una vez
              </label>
              <label>
                <Field
                  name="frecuencia"
                  component="input"
                  type="radio"
                  value="mensual"
                  ref={this.frecuencia}
                />
                {''}
                Mensual
              </label>
            </div>
            <br />
            <button className="btn2" 
            type="submit">
              Solicitar
            </button>

          </form>
        </Card>
      </div>
    );
  }
}








export default connect(null, {addReq})(
  reduxForm({
   form: 'solicita tu factura',
  })(ProfileMenu)
);

// export default reduxForm ({
//   form: 'simple'
// })(ProfileMenu)
