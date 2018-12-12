import React, { Component } from 'react';
// import Button from '@clipmx/clip-ui/Button';
import { connect } from 'react-redux';
import '../components/Registro.scss'



class Registro extends Component {
    
  editarRfc = () =>{
    console.log(`Editando RFC... ${this.props.info.rfc}`)
  }
  
  render() {
    // const  { rfc }  = this.props.registro;

      return (
        <div>
            <h3>RFC: {}</h3>
            <button className='btn2' onClick= {this.editarRfc}>
              Editar
            </button>
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