import React, { Component } from 'react';
import Button from '@clipmx/clip-ui/Button';
import { connect } from 'react-redux';
import '../components/Registro.scss'



class Registro extends Component {
    
  editarRfc = () =>{
    console.log(`Editando RFC... ${this.props.info.rfc}`)
  }
  
  render() {
    const  { rfc }  = this.props.registro;

      return (
        <div>
            <h3>RFC: {rfc}</h3>
            <Button className='button' onClick= {this.editarRfc}>
              Editar
            </Button>
        </div>
      );
    }
  }
  

function mapStateToProps(state) {
  return{
      registro: state.registro,
  }
}

export default connect(mapStateToProps)(Registro);