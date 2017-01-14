import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import NaviBar from './NaviBar';

export default class Page1 extends Component {
    render() {
        let naviStatus = [0, 0, 1, 0];
        return (
            <View style={styles.container}>
                <NaviBar naviBarStatus={naviStatus} onNaviBarPress={ this.onNaviBarPress } navigator={this.props.navigator}/>
                <Text style={styles.whatLeft}>Page3</Text>
            </View>
        )
    }

    onNaviBarPress (aNumber, navigator){
        switch(aNumber){
            case 0:
                navigator.replace({
                    name: 'Page1',
                });
               return;
            case 1:
                navigator.replace({
                    name: 'Page2',
                });
                return;
            case 2:
                return;
            case 3:
                navigator.replace({
                    name: 'Page4',
                });
                return;
        }
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
    },
    whatLeft: {
        flex: 1,
        borderTopWidth: 1,
        borderColor: 'black',
    }
})