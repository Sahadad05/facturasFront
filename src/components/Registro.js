import React, { Component } from 'react';
// import Button from '@clipmx/clip-ui/Button';
import { connect } from 'react-redux';
import '../components/Registro.scss'
import { editRfc } from '../redux/Actions/actions'



class Registro extends Component {
    
  editarRfc = () =>{
    console.log(`Editando RFC... ${this.props.info.rfc}`)
  }
  
  render() {
    const  { rfc }  = this.props.registro;
      return (
        <div>
            <h3>RFC: {rfc}</h3>
            <button className='btn2' onClick= {this.editRfc}>
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

export default connect(mapStateToProps, { editRfc })(Registro);


// const  mapStateToProps = ({registro}) => ({
        
// })
//   export default connect(mapStateToProps)(Registro)