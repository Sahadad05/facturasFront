import React, { Component } from 'react';
// import Button from '@clipmx/clip-ui/Button';
import { connect } from 'react-redux';
import '../components/Registro.scss'
// import { editRfc } from '../redux/Actions/actions'

class Registro extends Component {
    
  // editRfc = () =>{
  //   console.log(`Editando RFC... ${this.props.info.rfc}`)
  // }

  render() {
     const  { rfc }  = this.props.registro;
    //  console.log(this.registro.rfc, 'ya casi')

      return (
        <div>
            <td>RFC: {}</td>

            {/* <button className='btn2' onClick= {this.editRfc}>
              Editar
            </button> */}
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


// export default connect(mapStateToProps, { editRfc })(Registro);


// const  mapStateToProps = ({registro}) => ({
        
// })
//   export default connect(mapStateToProps)(Registro)