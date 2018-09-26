'use strict'
import React, { Component } from 'react'
import {
    AppRegistry, StatusBar, View
} from 'react-native'
import { Icon, Text } from 'native-base'
import Home                         from './screens/Home'
import Profile                      from './screens/Profile'
import StackMatches                 from './screens/StackMatches'
import colors                       from './resources/styles/colors'

import { TabNavigator, TabBarBottom } from 'react-navigation'

const tabBarOptions = {
    activeTintColor: colors.txtMainRed,
    inactiveTintColor: '#dadfe6',
    style: {
        backgroundColor: colors.bgWhite
    },
    showLabel: false
}

class TabIcon extends Component {
    render() {
        return <Icon {...this.props } style={{ color: this.props.color, fontSize: 26 }} />
    }
}

const TabIndexNavigator = TabNavigator({
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <TabIcon name='ios-contact' color={tintColor} />
            )
        }
    },
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <TabIcon name='people' color={tintColor} />
            )
        }
    },
    StackMatches: {
        screen: StackMatches,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <TabIcon name='ios-text' color={tintColor} />
            )
        }
    },
    // Inbox: {
    //     screen: Inbox,
    //     navigationOptions: {
    //         tabBarLabel: 'INBOX',
    //         tabBarIcon: ({ tintColor }) => (
    //             <TabIcon name='bubble' color={tintColor} />
    //         )
    //     }
    // },
}, {
    tabBarOptions: tabBarOptions,
    tabBarPosition: 'top',
    animationEnabled: true,
    initialRouteName: 'Home',
    swipeEnabled: false,
    tabBarComponent: TabBarBottom
})

class App extends Component {
    static navigationOptions = {
        gesturesEnabled: false
    }

    render() {
        return (
            <View style={{ flex: 1}}>
                <StatusBar hidden={true} />
                <TabIndexNavigator />
            </View>
        )
    }
}

AppRegistry.registerComponent('Tinder', () => App)
