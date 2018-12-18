import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';

import registroReducer from './registroReducer';

const rootReducer = combineReducers({
    form: formReducer,
    registro: registroReducer,
});


export default rootReducer;


// export default combineReducers({
// info: registroReducer
// })