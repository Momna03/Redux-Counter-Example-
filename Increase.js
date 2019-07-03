import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'

class Increase extends Component {

  static navigationOptions = {
    title: 'Counter Increase',
    headerStyle: {
      backgroundColor: 'white',
      height: 50,
    },
    headerTintColor: 'gray',
    headerTitleStyle:
    {
      color: '#0A9BC9',
      fontSize: 22,
      alignSelf: 'center'
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => { this.props.increaseCounter() }}>
          <Text style={styles.welcome}>Increase</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    increaseCounter: () => dispatch({ type: 'INCREASE_COUNTER' }),
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default connect(null, mapDispatchToProps)(Increase)