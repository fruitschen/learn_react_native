/**
 * Using Props
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


class Greeting extends Component {
  render() {
    return (
      <Text style={styles.welcome}>Hello {this.props.name}!</Text>
    );
  }
}

export default class Hello extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Greeting name='Little Tree' />
        <Greeting name='Ariel' />
        <Greeting name='Fruits' />
        <Greeting name={'1+1=' + (1+1)} />
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
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

AppRegistry.registerComponent('AwesomeProject', () => Hello);
