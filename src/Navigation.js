import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Icon from 'react-native-vector-icons/FontAwesome'
import Splash from '../src/screen/Splash'
import Feed from '../src/screen/Feed'
import AddPhoto from '../src/screen/AddPhoto'
import Profile from '../src/screen/Profile'
import Login from './screen/Login'
import Register from '../src/screen/Register'

const authRouter = createStackNavigator({
    Login: { screen: Login, navigationOptions: { title: 'Login' } },
    Register: { screen: Register, navigationOptions: { title: 'Register' } },
}, {
    initialRouteName: 'Login'
}) 

const containerAuthRouter = createAppContainer(authRouter)

const loginOrProfileRoute = createSwitchNavigator({
    Profile: Profile,
    Auth: containerAuthRouter,
}, {
    initialRouteName: 'Auth'
})

const MenuRoutes = {
    Feed: {
        name: 'Feed',
        screen: Feed,
        navigationOptions: {
            title: 'Feed',
            tabBarIcon: ({ tintColor }) => 
                <Icon name='home'  size={30} color={tintColor} />
        }
    },
    Add: {
        name: 'AddPhoto',
        screen: AddPhoto,
        navigationOptions: {
            title: 'Add Picture',
            tabBarIcon: ({ tintColor }) =>
            <Icon name='camera' size={30} color={tintColor} />
        }
    },
    Profile: {
        name: 'Profile',
        screen: loginOrProfileRoute,
        navigationOptions: {
            title: 'Profile',
            tabBarIcon: ({ tintColor }) => 
            <Icon name='user' size={30} color={tintColor} />
        }
    }
}

const MenuConfig = {
    initialRouteName: 'Feed',
    tabBarIcon: {
        showLabel: false,
    }
}

const MenuNavigator = createBottomTabNavigator( MenuRoutes, MenuConfig )

const SplashRouter = createSwitchNavigator({
    Splash: Splash,
    App: MenuNavigator
}, {
    initialRouteName: 'Splash'
})

const container = createAppContainer(SplashRouter)

export default container