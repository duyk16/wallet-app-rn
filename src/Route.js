import React, { Component } from 'react'
import {
  createBottomTabNavigator, createAppContainer
} from 'react-navigation'

import * as Styles from './config/styles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import Home from './screens/Home'
import Explorer from './screens/Explorer'
import News from './screens/News'
import Notification from './screens/Notification'
import Settings from './screens/Settings'

const iconSize = 25
const AppNavigator = createBottomTabNavigator(
  {
    HOME: { 
      screen: Home,
      navigationOptions: () => ({
        tabBarLabel: 'Trang chủ',
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          let name = focused ? "home" : "home-outline"
          let color = focused ? Styles.Colors.green : 'gray'

          return <MaterialCommunityIcons name={name} color={color} size={iconSize}/>
        }
      })
    },
    EXPLORER: {
      screen: Explorer,
      navigationOptions: () => ({
        tabBarLabel: 'Khám phá',
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          let name = focused ? "compass" : "compass-outline"
          let color = focused ? Styles.Colors.green : 'gray'

          return <MaterialCommunityIcons name={name} color={color} size={iconSize}/>
        }
      })
    },
    NEWS: {
      screen: News,
      navigationOptions: () => ({
        tabBarLabel: 'Tin tức',
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          let name = focused ? "ios-paper" : "md-paper"
          let color = focused ? Styles.Colors.green : 'gray'

          return <Ionicons name={name} color={color} size={iconSize}/>
        }
      })
    },
    NOTIFICATION: {
      screen: Notification,
      navigationOptions: () => ({
        tabBarLabel: 'Thông báo',
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          let name = focused ? "notifications" : "notifications-none"
          let color = focused ? Styles.Colors.green : 'gray'
          return <MaterialIcons name={name} color={color} size={iconSize}/>
        }
      })
    },
    SETTINGS: {
      screen: Settings,
      navigationOptions: () => ({
        tabBarLabel: 'Cài đặt',
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          let name = focused ? "settings" : "settings-outline"
          let color = focused ? Styles.Colors.green : 'gray'
          return <MaterialCommunityIcons name={name} color={color} size={iconSize}/>
        }
      })
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Styles.Colors.green,
      inactiveTintColor: 'gray',
      labelStyle: {
        fontSize: 11,
      },
      style: {
        paddingTop: 5
      }
    },
    initialRouteName: 'SETTINGS',
  }
)

export default createAppContainer(AppNavigator)