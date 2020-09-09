import React from 'react'
import { View, TextInput, Image, StyleSheet, Text } from 'react-native'
import { Colors } from '../Utils/Colors'

export default class TextInputView extends React.Component {

    constructor(props) {
        super(props)

    }

    render() {
        return (
            <View
                style={styles.mainView}
            >
                <View style={styles.subViewStyle} >
                    <TextInput
                        style={styles.textInputStyle}
                        value={this.props.value}

                        secureTextEntry={this.props.secureTextEntry}
                        keyboardType={this.props.keyboardType || 'default'}

                        onChangeText={this.onChangeTextHandler}
                    />
                    <Image
                        source={this.props.source}
                    />
                </View>
                {this.props.error ? <Text style={styles.txtStyle}>{this.props.error}</Text> : null}
            </View>
        )
    }

    onChangeTextHandler = (text) => {
        this.props.onChangeText(text)
    }
}

export const styles = StyleSheet.create({
    mainView: {
        marginBottom: 10,
        marginHorizontal: 30
    },
    subViewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        flexDirection: 'row',

        marginTop: 10,
        marginBottom: 5,
        borderRadius: 20,
        shadowOffset: { width: 0, height: 0 },
        shadowColor: Colors.black,
        shadowOpacity: 0.3,
        backgroundColor: Colors.white,
    },
    textInputStyle: {
        flex: 1, height: 30
    },
    txtStyle: {
        color: Colors.red, paddingHorizontal: 10
    }
})