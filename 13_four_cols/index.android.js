/**
 * A simple four columns layout, a modified example from React Native跨平台移动应用开发
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    Alert
} from 'react-native';

import NaviBar from './NaviBar';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';

class NaviExample extends Component {
    configureScene (route){
        return Navigator.SceneConfigs.FadeAndroid;
    }

    renderScene (router, navigator){
        //Alert.alert('Alert Title', JSON.stringify(router));
        this._navigator = navigator;

        switch( router.name ){
            case 'Page1':
                return <Page1 navigator={navigator} />;
            case 'Page2':
                return <Page2 navigator={navigator} />;
            case 'Page3':
                return <Page3 navigator={navigator} />;
            case 'Page4':
                return <Page4 navigator={navigator} />;
        }
    }

    render() {
        return (
        <Navigator
            initialRoute={{name: 'Page1'}}
            configureScene={this.configureScene}
            renderScene={this.renderScene}
        />
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

AppRegistry.registerComponent('AwesomeProject', () => NaviExample);
