import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

//import createNavigator from 'navigation/routes';

import { PersistGate } from 'redux-persist/lib/integration/react';
import Navigator from 'navigation';

import 'config/ReactotronConfig';
import 'config/DevToolsConfig';

import configureStore from 'store';
let { store, persistor } = configureStore();

export default class App extends Component {

  render() {

    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigator />
        </PersistGate>
      </Provider>
    );
  }
}
