import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Increase from './Increase'
import Decrease from './Decrease'
import Display from './Display';
import { createAppContainer, createStackNavigator } from 'react-navigation'

const initialState = {
  counter: 10
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE_COUNTER': {
      console.log('in increase counter')
      return { counter: state.counter + 1 }
    }
    case 'DECREASE_COUNTER':
      return { counter: state.counter - 1 }
  }
  return state;
}
const store = createStore(reducer)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container></Container>
      </Provider>
    );
  }
}
const AppNavigator = createStackNavigator(
  {
    increase: Increase,
    decrease: Decrease,
    mainScreen: {
      screen: Display,
      navigationOptions: {
        header: null,
      }
    }
  },
  {
    initialRouteName: 'mainScreen'
  }
);

const Container = createAppContainer(AppNavigator);
