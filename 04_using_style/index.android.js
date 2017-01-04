/**
 * Using Style
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Hello extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.welcome, styles.red, styles.bold]}>
          Hello Little Tree!
        </Text>
        <Text style={styles.normal}>
          Some normal text.
        </Text>
        <Text style={styles.big}>
          Some big text.
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
  normal: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  big: {
    textAlign: 'center',
    color: '#333333',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  bold: {
    fontWeight: 'bold',
  }
});

AppRegistry.registerComponent('AwesomeProject', () => Hello);
