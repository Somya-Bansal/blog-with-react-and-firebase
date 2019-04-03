import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { Provider } from 'react-redux';
// import App from './components/App'
import Routes from './routes'
import registerServiceWorker from './utils/registerServiceWorker'
import configureStore from './store/configureStore';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';

const persistedState = loadState();

const store = configureStore(persistedState);
store.subscribe(throttle(()=>{
    saveState({
        currentUser: store.getState().currentUser,
        blogPosts: store.getState().blogPosts
    });
}, 1000));

ReactDOM.render(
    <Provider store={store}>
        <Routes history={browserHistory} />
    </Provider>,
        document.querySelector('#root')
);

registerServiceWorker();
