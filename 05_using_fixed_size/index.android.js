/**
 * Using fixed size
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
        <View style={{width: 100, height: 100, backgroundColor: 'powderblue'}}>
            <Text style={[styles.welcome, styles.red, styles.bold]}>
              Hello Little Tree!
            </Text>
        </View>
        <View style={{width: 150, height: 150, backgroundColor: 'skyblue'}}>
            <Text style={styles.normal}>
              Some normal text.
            </Text>
        </View>
        <View style={{width: 200, height: 200, backgroundColor: 'steelblue'}}>
            <Text style={styles.big}>
              Some big text.
            </Text>
        </View>
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
