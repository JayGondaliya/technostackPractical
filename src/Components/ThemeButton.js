import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Colors } from '../Utils/Colors'

export default class ThemeButton extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <TouchableOpacity style={styles.mainView}
            onPress={this.props.onPress}>
                <Text style={styles.labelStyle}>{this.props.label}</Text>
            </TouchableOpacity>
        )
    }
}

export const styles = StyleSheet.create({
    mainView: {
        marginVertical: 20,
        borderRadius: 20, 
        shadowOffset: { width: 0, height: 0 },
        shadowColor: Colors.black,
        shadowOpacity: 0.3,
        backgroundColor: Colors.white, 
        backgroundColor: Colors.primary, 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginHorizontal: 40, 
        borderRadius: 20
    },
    labelStyle:{
        marginVertical: 10, 
        color: Colors.white, 
        fontSize: 20, 
        fontWeight: '800'
    }
})