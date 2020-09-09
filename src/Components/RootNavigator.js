import { createAppContainer } from "react-navigation"
import { createStackNavigator, HeaderTitle } from "react-navigation-stack"
import LoginContainer from "../Containers/LoginContainer"
import ProfileContainer from "../Containers/ProfileContainer"

export const BASE_STACK_NAVIGATOR = createStackNavigator({

    login:{
        screen: LoginContainer
    },
    profile:{
        screen: ProfileContainer
    }
},{
    initialRouteName:"login",
    headerMode:'none'
})

export const AppNavigator = createAppContainer(BASE_STACK_NAVIGATOR)    