import React, { Component } from 'react';
import axios from 'axios';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import Button from '@clipmx/clip-ui/Button';
import { Form } from 'antd';
import Card from '@clipmx/card';
import uuid from 'uuid'
import Registro from './Registro'
import '../components/Registro.scss'


const FormItem = Form.Item;

class RegistraRFC extends Component {
  state = {
    info: {
      id : uuid (),
      rfc: '',
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
  };
  

  render() {
    // var elementos = document.getElementsByName("frecuencia")
    // for (var i=0; i<elementos.length; i++)

    // const ProfileMenu = props => {
    const { handleSubmit } = this.props;

    return (
      <div className='body'>
        <Card className='card'>
        <form title="Registra RFC" onSubmit={handleSubmit(this.submitForm)}>
          <h1>Solicita tu factura</h1>
          <div>
            <label>RFC</label>
            <div>
              <Field 
              className='input'
                type="text"
                placeholder="*RFC"
                name="rfc"
                component='input'
              />
              <Button className='btn' type="submit">Registrar</Button>

              <Registro />

              {/* {this.state.info.RFC.length !== 0 ?}
              <div>
              <input
              value={this.state.info.rfc}
              disabled
              />

              <button>Editar</button> 

              </div> */}

            </div>
            </div>
           
        </form>
        </Card>
      </div>
    );
  }
}

export default connect(null)(
  reduxForm({
    form: 'registra rfc',
  })(RegistraRFC)
);;

// export default reduxForm ({
//   form: 'simple'
// })(ProfileMenu)
