import React, { Component } from 'react';
import axios from 'axios';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import Card from '@clipmx/card';
import '../components/Registro.scss'
import {addRfc} from '../redux/Actions/actions'
import swal from 'sweetalert2'


class RegistraRFC extends Component {
 componentDidMount() {
    /* axios
      .post('http://localhost:4200/', this.state.info)
      .then(res => {
        console.log(res, this.props);
      })
      .catch(err => console.log(err)); */
  }


  submitForm = values => {
    if(values.rfc === ''){
      swal({
        type:'error',
        title:'Something went wrong',
        text:'Write your RFC'
      })
    }else{
      swal({
        type: 'success',
        title: 'RFC added',
        text: 'Added: ' + values.rfc
      })
      this.props.addRfc(values.rfc);
    }

    this.props.recibirRFC(values.rfc)


    

    // axios
    //   .post('http://localhost:4200/', values)
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => console.log(err));

  };
  


  render() {
    console.log(this.state)
    // const ProfileMenu = props => {
    const { handleSubmit } = this.props;

    return (
      <div className='body'>
        <Card className='card'>
        <form title="Registra RFC" onSubmit={handleSubmit(this.submitForm)}>
          <div>
          <h1>Solicita tu factura</h1>
          </div>
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
            

              <br/>
              <br/>

              <button className='btn' type="submit">Registrar</button>


              {/* this.state.info.RFC.length !== 0 ?
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

export default connect(null, {addRfc})(
  reduxForm({
    form: 'registra rfc',
  })(RegistraRFC)
);;

// export default reduxForm ({
//   form: 'simple'
// })(ProfileMenu)
