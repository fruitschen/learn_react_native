import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, Dimensions, StyleSheet } from 'react-native';

let totalWidth = Dimensions.get('window').width;
let naviButtonWidth = totalWidth / 4;
let naviButtonHeight = naviButtonWidth * 0.75;

export default class NaviBar extends Component {
    render() {
        let buttonColors = this.props.naviBarStatus.map(function(aNumber){
            if (aNumber == 0) return 'white';
            return 'gray';
        });

        return (
            <View style={styles.naviRow}>
                <TouchableHighlight onPress={() => this._naviTab_0_Pressed()}>
                    <View style={[styles.button, {backgroundColor: buttonColors[0]}]}>
                        <Text style={styles.textStyle1}>Col 1</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => this._naviTab_1_Pressed()}>
                    <View style={[styles.button, {backgroundColor: buttonColors[1]}]}>
                        <Text style={styles.textStyle1}>Col 2</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => this._naviTab_2_Pressed()}>
                    <View style={[styles.button, {backgroundColor: buttonColors[2]}]}>
                        <Text style={styles.textStyle1}>Col 3</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => this._naviTab_3_Pressed()}>
                    <View style={[styles.button, {backgroundColor: buttonColors[3]}]}>
                        <Text style={styles.textStyle1}>Col 4</Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }

    _naviTab_0_Pressed(){
        this.props.onNaviBarPress(0, this.props.navigator)
    }

    _naviTab_1_Pressed() {
        this.props.onNaviBarPress(1, this.props.navigator)
    }

    _naviTab_2_Pressed() {
        this.props.onNaviBarPress(2, this.props.navigator)
    }

    _naviTab_3_Pressed() {
        this.props.onNaviBarPress(3, this.props.navigator)
    }
}

NaviBar.propTypes = {
    naviBarStatus: PropTypes.arrayOf(PropTypes.number).isRequired,
    onNaviBarPress: PropTypes.func.isRequired,
};

let styles = StyleSheet.create({
    naviRow: {
        flexDirection: 'row',
    },
    button: {
        width: naviButtonWidth,
        height: naviButtonHeight,
        justifyContent: 'center',
    },
    textStyle1: {
        fontSize: 20,
        textAlign: 'center',
    },

});

