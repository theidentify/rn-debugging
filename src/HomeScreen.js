import React from 'react';
import {View, Button, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment} from './counterSlice';

const HomeScreen = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  const onPressRed = () => {
    throw new Error('[RN] Red error');
  };

  const onPressYellow = () => {
    console.warn('[RN] This is a warning');
  };

  const onPressChrome = () => {
    console.log('[RN] Hi hi');
  };

  const onPressApi = () => {
    debugger;
    fetch('https://reactnative.dev/movies.json')
      .then(res => res.json())
      .then(json => {
        debugger;
        console.log(json, 'response');
        return json.movies;
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View style={{flex: 1, padding: 20}}>
      <Button onPress={onPressRed} title="Red Box" color="red" />
      <Button onPress={onPressYellow} title="Yellow Box" color="yellow" />
      <Button onPress={onPressChrome} title="Chrome" color="green" />
      <View style={{height: 60}} />
      <Button onPress={onPressApi} title="Api calling" color="black" />

      <View style={{height: 60}} />
      <Text style={{color: 'black', fontSize: 50, textAlign: 'center'}}>
        {count}
      </Text>
      <Button
        onPress={() => dispatch(increment())}
        title="Redux action"
        color="orange"
      />
    </View>
  );
};

// Debugger:
// Android: Cmd + M / Ctrl + M -> Mac / Window
// IOS: Ctrl + Cmd + Z / Ctrl + Fn + Z -> Mac / Window
export default HomeScreen;
