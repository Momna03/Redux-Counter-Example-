import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'

class Display extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{this.props.counter}</Text>

        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.buttonStyle} onPress={() => { this.props.navigation.navigate('increase') }}>
            <Text style={styles.buttonText}>Increase Button</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle} onPress={() => { this.props.navigation.navigate('decrease') }}>
            <Text style={styles.buttonText}>Decrease Button</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter
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
    top: '20%',
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  buttonView: {
    marginTop: '30%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    bottom: '10%',
  },
  buttonStyle: {
    width: '80%',
    height: '20%',
  },
  buttonText: {
    color: 'black',
  },
});

export default connect(mapStateToProps)(Display)