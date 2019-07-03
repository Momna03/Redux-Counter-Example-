import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'

class Decrease extends Component {
  
  static navigationOptions = {
    title: 'Counter Decrease',
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
        <TouchableOpacity onPress={() => { this.props.decreaseCounter() }}>
          <Text style={styles.welcome}>Decrease</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    decreaseCounter: () => dispatch({ type: 'DECREASE_COUNTER' }),
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

export default connect(null, mapDispatchToProps)(Decrease)