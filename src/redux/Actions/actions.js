import { ADD_RFC, ADD_REQ, EDIT_RFC, GET_ALL } from "./types";
// import axios from "axios";

// const baseUrl = `http://localhost:4200/`;

export const addRfc = registro => dispatch => {
  console.log(registro, "Estas hasta acá");
  dispatch({ type: ADD_RFC, rfc: registro });
};

export const addReq = request => dispatch => {
  console.log(request, 'Si funciona el action');
  dispatch({type: ADD_REQ, info:request})
}

// export const editRfc = id => dispatch => {
//   axios
//     .put(`${baseUrl}update_rfc/${id}`)
//     .then(res => {
//       dispatch({ type: EDIT_RFC, rfc: res.data });
//     })
//     .catch(err => {console.log(err)});
// };

// export const get_all = registro => dispatch => {
//   axios.get(`${baseUrl}all`).then(res => {
//     dispatch({ type: GET_ALL, rfc: res.data });
//   });
// };



export const getRfc = () =>{
  return {
    type: ADD_RFC, ADD_REQ
  }
}