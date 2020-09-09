import React, { useState } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { Colors } from '../Utils/Colors';
import { Metrics } from '../Utils/Metrics';


class TabView extends React.Component {

    constructor(props) {
        super(props)
    }

    state = {
        selectedIndex: 0
    }

    onChangeIndex = (index) => {
        this.setState({
            selectedIndex: index
        })
        this.props.onChangeIndexes(index)
    }
    render() {
        return (
            <View style={styles.mainView}>
                <TouchableOpacity
                    activeOpacity={1.0}
                    style={[styles.touchableStyle,
                    { borderBottomColor: this.state.selectedIndex == 0 ? Colors.primary : Colors.black }]}
                    onPress={() => this.onChangeIndex(0)}
                >
                    <Text
                        style={[styles.txtStyle,
                        { color: this.state.selectedIndex == 0 ? Colors.white : Colors.grey }]}>
                        {"Login"}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={1.0}
                    style={[styles.touchableStyle, { borderBottomColor: this.state.selectedIndex == 1 ? Colors.primary : Colors.black }]}
                    onPress={() => this.onChangeIndex(1)}
                >
                    <Text style={[styles.txtStyle, { color: this.state.selectedIndex == 1 ? Colors.white : Colors.grey }]}>{"SignUp"}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


export default TabView;

export const styles = StyleSheet.create({
    mainView: {
        flexDirection: 'row', backgroundColor: Colors.black, marginBottom: 20
    },
    touchableStyle: {
        width: Metrics.screeWidth * 0.5, height: 50, borderWidth: 2, alignItems: 'center', justifyContent: 'center'
    },
    txtStyle: {
        fontSize: 20
    }
})