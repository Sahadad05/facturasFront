import {ADD_RFC, EDIT_RFC, GET_ALL} from './types'
import axios from 'axios'
import swal from 'sweetalert2';


const baseUrl = `http://localhost:4200/`;


export const addRfc = (registro) => dispatch => {
  console.log('addRfc called');
  axios.post(`${baseUrl}newRfc`,registro )

  .then(res =>{
      dispatch({type:ADD_RFC, rfc:res.data})
      swal({
        type: 'success',
        title: 'RFC added',
        text: res.data.info
      })
  })
  .catch(err => {
      swal({
          type:'error',
          title:'Something went wrong',
          text:err.message
        })
  })
}

export const editRfc = (id) => dispatch => {
  axios.put(`${baseUrl}update_rfc/${id}`)
  .then(res =>{
      dispatch({type:EDIT_RFC, rfc:res.data})
      swal({
        type: 'success',
        title: 'Rfc Edited',
        text: {"rfc edited:":res.data}
      })
  })
  .catch(err => {
      swal({
          type:'error',
          title:'Something went wrong',
          text:err.message
        })
  })
}


export const get_all = (registro) => dispatch => {
  axios.get(`${baseUrl}all`)
  .then( res => {
      dispatch({type:GET_ALL, rfc:res.data})
  })
}
