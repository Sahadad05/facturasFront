import reducer from 'redux-form'

function reducer (state, action) {
  switch (action, type) {
    case 'ADD_RFC'
    return state.concat(action.rfc)
    case 'EDIT_RFC'
    default :
    return state
  }

}