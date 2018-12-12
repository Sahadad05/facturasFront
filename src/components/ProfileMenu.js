import React, { Component } from 'react';
import axios from 'axios';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
// import Button from '@clipmx/clip-ui/Button';
import { Form } from 'antd';
import Card from '@clipmx/card';
import uuid from 'uuid'
import '../components/Registro.scss'
import Registro from './Registro'


const FormItem = Form.Item;

class ProfileMenu extends Component {
  state = {
    info: {
      mes: '',
      tipo: '',
      frecuencia: '',
      id: uuid()
    },
  };

  // const frecuencia = this.periodo.current.checked ? 'una vez' : 'mensual'

  componentDidMount() {
    axios
      .post('http://localhost:3000/', this.state.info)
      .then(res => {
        console.log(res, this.props);
      })
      .catch(err => console.log(err));
  }

  submitForm = (values) => {
    console.log(values);
    //e.preventDefault();
    // axios
    //   .post('http://localhost:3000/', this.state.info)
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => console.log(err));
  };

  render() {
    // var elementos = document.getElementsByName("frecuencia")
    // for (var i=0; i<elementos.length; i++)

    // const ProfileMenu = props => {
    const { handleSubmit } = this.props;

    return (
      <div className='body'>
        <Card className='card2'>
        <form title="Solicita tu factura" onSubmit={handleSubmit(this.submitForm)}>
          <div>
          <Registro />
          <br/>
          <br/>
          <br/>
            <Field
              name="tipo"
              component="select"
            >
              <option value=''>
                Tipo
              </option>
              <option value='comisiones'>Comisiones</option>
              <option value='transacciones'>Transacciones</option>
            </Field>

            <Field
              name="mes"
              component="select"
            >
              <option value=""  >Mes</option>
              <option value="enero">Enero</option>
              <option value="febrero">Febrero</option>
              <option value="marzo">Marzo</option>
              <option value="abril">Abril</option>
              <option value="mayo">Mayo</option>
              <option value="junio">Junio</option>
              <option value="julio">Julio</option>
              <option value="agosto">Agosto</option>
              <option value="septiembre">Septiembre</option>
              <option value="octubre">Octubre</option>
              <option value="noviembre">Noviembre</option>
              <option value="diciembre">Diciembre</option>
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
                value='una vez'
              />
              {''}
              Una vez
            </label>
            <label>
              <Field
                name="frecuencia"
                component="input"
                type="radio"
                value='mensual'

              />
              {''}
              Mensual
            </label>
          </div>
          <br />
          <button className='btn2' type="submit">Solicitar</button>
        </form>
        </Card>
        </div>
    );
  }
}

export default connect(null)(
  reduxForm({
    form: 'simple',
  })(ProfileMenu)
);;

// export default reduxForm ({
//   form: 'simple'
// })(ProfileMenu)
