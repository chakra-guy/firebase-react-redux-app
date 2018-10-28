import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import rootReducer from './store/reducers/rootReducer';
import firebaseConfig from './config/firebaseConfig';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }), logger),
    reduxFirestore(firebaseConfig),
    reactReduxFirebase(firebaseConfig, {
      useFirestoreForProfile: true,
      userProfile: 'users',
      attachAuthIsReady: true,
    }),
  ),
);

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'));

  serviceWorker.unregister();
});
