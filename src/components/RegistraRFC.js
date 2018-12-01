import React, { Component } from 'react';
import axios from 'axios';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import Button from '@clipmx/clip-ui/Button';
import Input from '@clipmx/input';
import { Form } from 'antd';
import Card from '@clipmx/card';


const FormItem = Form.Item;

class RegistraRFC extends Component {
  state = {
    info: {
      mes: '',
      tipo: '',
      rfc: '',
      frecuencia: '',
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
      <div>
        <Card>
        <form title="Registra RFC" onSubmit={handleSubmit(this.submitForm)}>
          <h1>Solicita tu factura</h1>
          <div>
            <label>RFC</label>
            <div>
              <Field
                type="text"
                placeholder="*RFC"
                name="rfc"
                component='input'
              />
              <Button type="submit">Registrar</Button>

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
