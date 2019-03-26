import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { Provider } from 'react-redux';
// import App from './containers/App'
import Routes from './routes'
import registerServiceWorker from './utils/registerServiceWorker'
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Routes history={browserHistory} />
    </Provider>,
        document.querySelector('#root')
);

registerServiceWorker();
