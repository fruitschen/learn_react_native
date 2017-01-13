/**
 * Using Alert
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Alert
} from 'react-native';

class AlertExample extends Component {
  constructor(props) {
    super(props);
    this.state = {option_selected: 'Nothing'};
  }

  buttonPressed(){
      Alert.alert('Alert Title', 'Alert text goes here. ');
      let t = 'Button one';
      this.setState({option_selected: t,});
  }

  redSelected(){
      this.setState({option_selected:'Red'})
  }

  yellowSelected(){
      this.setState({option_selected:'Yellow'})
  }

  alertWithOptions(){
      Alert.alert('Alert with options', 'here are the options', [
          {'text':'Red', onPress: () => this.redSelected()} ,
          {'text':'Yellow', onPress: () => this.yellowSelected()},
      ])

  }

  render() {
    return (
    <View style={styles.container}>
      <Text style={styles.button} onPress={() => this.buttonPressed()}>Click to trigger alert. </Text>
      <Text style={[styles.button, styles.button2]} onPress={() => this.alertWithOptions()}>Alert with options. </Text>
      <Text style={styles.selected}>Selected: {this.state.option_selected}</Text>
    </View>
    );
  }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    button: {
        top: 30,
        backgroundColor: 'gray',
        color: 'white',
        textAlign: 'center',
        fontSize: 30,
    },
    button2: {
        top: 50,
    },
    selected: {
        top: 80,
    }
})

AppRegistry.registerComponent('AwesomeProject', () => AlertExample);
