import React, { Component } from 'react'
import {
  Text, View, StyleSheet, ScrollView, StatusBar, Image
} from 'react-native'

import * as Styles from '../../config/styles'
import Header from '../../components/Header/Home'
import Top from './Top'
import ListItem from './ListItem'
import Logout from './Logout'

export default class index extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: Styles.Colors.grayBack}}>
        <StatusBar barStyle="light-content" />
        <Header isLogin={true} />
        <View style={{top: -1000, zIndex: -1}}>
          <View style={Styles.ViewTop} />
          <ScrollView showsVerticalScrollIndicator={false} style={{top: -130, paddingHorizontal: 15, marginBottom: 50,}}>
            <Top />
            <ListItem />
            <Logout />
          </ScrollView>
        </View>
      </View>
    )
  }
}
