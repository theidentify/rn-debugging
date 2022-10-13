import React from 'react';
import {Button, View, Text} from 'react-native';
import HomeScreen from './src/HomeScreen';
import {store} from './src/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
};

export default App;
