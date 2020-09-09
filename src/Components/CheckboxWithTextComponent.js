import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CheckBox from '@react-native-community/checkbox';

export default class CheckboxWithTextComponent extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={[styles.mainContainer, this.props.style]}>
                <CheckBox
                    // disabled={false}
                    style={styles.checkBoxStyle}
                    onValueChange={(index) => { console.log(index) }}
                />
                <Text style={styles.txtStyle}>{this.props.label}</Text>
                {this.props.text ? <Text>{this.props.text}</Text> : null}
            </View>
        )
    }
}

export const styles = StyleSheet.create({
    mainContainer:{
        flexDirection: 'row', alignItems: 'center', marginVertical:5
    },
    checkBoxStyle:{
        width: 20, height: 20
    },
    txtStyle:{
        flex:1,marginHorizontal: 10
    }
})