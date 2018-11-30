import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css';
import {BrowserRouter} from 'react-router-dom';
import configureStore from './redux/store';
import {Provider} from 'react-redux';

const store = configureStore();

const WithRouter = () => <BrowserRouter><App /></BrowserRouter>;

const WithProvider = () => <Provider store={store}><WithRouter/></Provider>;

ReactDOM.render(<WithProvider/>, document.getElementById('root'));
// registerServiceWorker();


// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();



