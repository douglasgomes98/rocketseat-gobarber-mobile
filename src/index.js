import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import './config/Reactotron';
import App from './App';
import { persistor, store } from './store';

export default function Index() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
        <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      </PersistGate>
    </Provider>
  );
}
