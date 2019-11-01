import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import './config/Reactotron';
import Routes from './routes';
import { persistor, store } from './store';

export default function src() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes />
        <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      </PersistGate>
    </Provider>
  );
}
