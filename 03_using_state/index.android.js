/**
 * Using State
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


class DynamicGreeting extends Component {
  constructor(props) {
    super(props);
    let index = 0;
    this.state = {
      index: index,
      name: props.names[0],
    };
    // Toggle the state every second
    setInterval(() => {
      let index = this.state.index + 1;
      this.setState({
        index: index,
        name: props.names[index % props.names.length],
      });
    }, 1000);
  }
  render() {
    return (
      <Text style={styles.welcome}>Hello {this.state.name}!</Text>
    );
  }
}

export default class Hello extends Component {
  render() {
    return (
      <View style={styles.container}>
        <DynamicGreeting names={['Little Tree', 'Ariel',]} />
        <DynamicGreeting names={['1', '2', '3', '4', '5']} />
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
});

AppRegistry.registerComponent('AwesomeProject', () => Hello);
