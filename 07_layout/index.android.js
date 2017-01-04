/**
 * Layout with Flexbox
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
      <View>
          <View style={{height: 75}}>
              <Text>flexDirection: 'row'</Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
              </View>
          </View>
          <View style={{height: 200}}>
              <Text>flexDirection: 'column'</Text>
              <View style={{flex: 1, flexDirection: 'column', height: 200}}>
                <View style={{width: 50, height: 50, backgroundColor: 'red'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
              </View>
          </View>
          <View style={{height: 75}}>
              <View style={{flex: 1}}>
                  <Text>justifyContent: 'center'</Text>
                  <View style={{flex: 1, justifyContent: 'center', flexDirection: 'row'}}>
                    <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
                  </View>
              </View>
          </View>
          <View style={{height: 75}}>
              <View style={{flex: 1}}>
                  <Text>justifyContent: 'space-around'</Text>
                  <View style={{flex: 1, justifyContent: 'space-around', flexDirection: 'row'}}>
                    <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
                  </View>
              </View>
          </View>

          <View style={{height: 75}}>
              <View style={{flex: 1}}>
                  <Text>justifyContent: 'space-between'</Text>
                  <View style={{flex: 1, justifyContent: 'space-between', flexDirection: 'row'}}>
                    <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
                  </View>
              </View>
          </View>

          <View style={{height: 75}}>
              <View style={{flex: 1}}>
                  <Text>justifyContent: 'space-between'</Text>
                  <View style={{flex: 1, alignItems: 'center'}}>
                    <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                  </View>
              </View>
          </View>

      </View>

    );
  }
}
AppRegistry.registerComponent('AwesomeProject', () => Hello);
