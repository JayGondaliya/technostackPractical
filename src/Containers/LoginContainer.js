import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import { Assets } from '../Assets/index'
import { Metrics } from '../Utils/Metrics'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Colors } from '../Utils/Colors'
import TabView from '../Components/TabView'
import TextInputView from '../Components/TextInputView'
import CheckboxWithTextComponent from '../Components/CheckboxWithTextComponent'
import ThemeButton from '../Components/ThemeButton'
import { callApi } from '../Utils/ServiceManager'
import { URL } from '../Utils/Constant'
import Validation from '../Utils/ValidationHelper'

class LoginContainer extends React.Component {

    constructor(props) {
        super(props)

        this.validationHelper = new Validation()
    }

    state = {
        selectedIndex: 0,
        shouldPerformHandler: false,
        strEmail: "",
        strPassword: ""
    }

    render() {
        return (
            <View style={styles.mainView}>
                <Image
                    style={styles.imageStyle}
                    resizeMode={'cover'}
                    source={Assets.login_banner}
                />

                <TabView
                    onChangeIndexes={this.onChangeTabViewIndex}
                />

                <TextInputView
                    value={this.state.strEmail}
                    onChangeText={this.onChangeEmailHandler}
                    source={Assets.ic_user}
                    error={this.state.shouldPerformHandler && 
                        this.validationHelper.emailValidate(this.state.strEmail, "Please enter email").trim()}
                />

                <TextInputView
                    value={this.state.strPassword}
                    secureTextEntry={true}
                    onChangeText={this.onChangePasswordHandler}
                    source={Assets.ic_password}
                    error={this.state.shouldPerformHandler &&
                        this.validationHelper.passwordValidate(this.state.strPassword, "Please enter password").trim()}
                />

                <CheckboxWithTextComponent
                    style={styles.checkboxStyle}
                    text={"Forgot Password?"}
                    label={"Remenber Me"} />

                <CheckboxWithTextComponent
                    style={styles.checkboxStyle}
                    label={"I accept the Terms & condition"} />

                <ThemeButton
                    label={'Login'} 
                    onPress={this.onSubmitHandler}
                    />

                <View style={styles.bottomViewStyle}>
                    <Text style={styles.primarytextStyle}>{"Privacy Policy"}</Text>
                    <Text style={styles.txtStyle}>{"AND"}</Text>
                    <Text style={styles.primarytextStyle}>{"Terms & Condition"}</Text>
                </View>

            </View>
        )
    }

    onChangeTabViewIndex = (index) => {
        this.setState({ selectedIndex: index })
    }

    onChangeEmailHandler = (text) => {
        this.setState({
            strEmail: text,
            shouldPerformHandler: false
        })
    }

    onChangePasswordHandler = (text) => {
        this.setState({
            strPassword: text,
            shouldPerformHandler: false
        })
    }

    onSubmitHandler = () => {
        this.setState({shouldPerformHandler: true})
        if(this.state.strEmail !== "" && this.state.strPassword !== "" && 
        this.validationHelper.emailValidate(this.state.strEmail, "please enter email").trim() == "" &&
        this.validationHelper.passwordValidate(this.state.strPassword, "please enter password").trim() == ""){

            let objLoginData = {
                username:this.state.strEmail,
                password: this.state.strPassword,
                url:'wertyu.fiiviq.com',
                multiple_user_login : {
                    app_version: "1.0",
                    device_model : "SM-N750",
                    device_name : "samsung",
                    device_token : "asdasdasd",
                    device_type : "android",
                    device_uid : "5fd489c904abbaee",
                    device_version : "5.1.1"
                  }
            }
            console.log("request ::::::: ", objLoginData)
            callApi(URL,objLoginData, this.onSuccessResponse, this.onFailureResponse )
            // this.props.navigation.navigate("profile")
        }
    }

    onSuccessResponse = (response) => {
        console.log("Response success :::::::: ", response)
        this.props.navigation.navigate("profile")
    }

    onFailureResponse = (error) => {
        console.log("Response Failure :::::::: ", error)
    }

}

export default LoginContainer

export const styles = StyleSheet.create({
    mainView: {
        flex: 1, backgroundColor: Colors.white,

    },
    checkboxStyle: {
        marginHorizontal: 40
    },
    imageStyle: {
        height: "30%", width: Metrics.screeWidth
    },
    primarytextStyle:{
        color:Colors.primary
    },
    txtStyle:{
        marginHorizontal:5, color: Colors.grey
    },
    bottomViewStyle:{
        flexDirection: 'row', alignItems:'center', justifyContent:'center'
    }
})