import { ADD_RFC, ADD_REQ, EDIT_RFC, GET_ALL } from '../Actions/types'

const initialState = {
    rfc:[]
}
export default (state = initialState, action) => {
    switch(action.type){
        case ADD_RFC:
        return{
           ...state,
            // info: action.rfc
        }

        case ADD_REQ:
        return{
            ...state
        }
        // case EDIT_RFC:
        // return{
        //     ...state,
        //     info:action.editRfc
        // }

        
        // case GET_ALL:
        // return{
        //     ...state,
        //     info:action.info
        // }
        
    default:
    //console.log(state)
    return state
    }
}