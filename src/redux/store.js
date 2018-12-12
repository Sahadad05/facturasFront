import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/reducers'


export default function configureStore(){
    return createStore(
        rootReducer,
        applyMiddleware(thunk),
        window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
        )
    
}
