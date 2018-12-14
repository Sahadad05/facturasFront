import { ADD_RFC, EDIT_RFC, GET_ALL } from '../Actions/types'


// const reducer (state, action) {
//   switch (action, type) {
//     case 'ADD_RFC'
//     return state.concat(action.rfc)
//     case 'EDIT_RFC'
//     default :
//     return state
//   }

// }



const initialState = {
    info:[]
}
export default (state = initialState, action) => {
    switch(action.type){
        case ADD_RFC:
        return{
           ...state,
            info: action.rfc
        }
        case EDIT_RFC:
        return{
            ...state,
            info:action.editRfc
        }

        
        case GET_ALL:
        return{
            ...state,
            info:action.info
        }
        
    default:
    console.log(state)

    return state
    }
}