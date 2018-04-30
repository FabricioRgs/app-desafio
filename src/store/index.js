import { createStore, applyMiddleware, compose } from 'redux';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import createSagaMiddleware from 'redux-saga';

import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

import sagas from './sagas';
import reducers from './ducks';

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const navigationMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);

const middleware = [
  sagaMiddleware,
  navigationMiddleware
];

const enhancers = [];
enhancers.push(applyMiddleware(...middleware));

// configure persistance
const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ['user']
};
const persistedReducers = persistReducer(persistConfig, reducers);

const createAppropriateStore = __DEV__ ? console.tron.createStore : createStore;

export default function configureStore() {
  // finalize store setup
  let store = createAppropriateStore(persistedReducers, compose(...enhancers));;
  sagaMiddleware.run(sagas);
  let persistor = persistStore(store);
  return { store, persistor };
}
