/**
 * Using ScrollView
 */

import React, { Component } from 'react';
import { AppRegistry, ScrollView, Image, Text } from 'react-native'

class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
  render() {
      return(
        <ScrollView>
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Image source={require('./img/tree.png')} />
          <Image source={require('./img/tree.png')} />
          <Image source={require('./img/tree.png')} />
          <Image source={require('./img/tree.png')} />
          <Image source={require('./img/tree.png')} />
          <Text style={{fontSize:96}}>If you like</Text>
          <Image source={require('./img/tree.png')} />
          <Image source={require('./img/tree.png')} />
          <Image source={require('./img/tree.png')} />
          <Image source={require('./img/tree.png')} />
          <Image source={require('./img/tree.png')} />
        </ScrollView>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => IScrolledDownAndWhatHappenedNextShockedMe);
