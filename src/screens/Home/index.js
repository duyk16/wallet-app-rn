import React, { Component } from 'react'
import {
  Text, View, StyleSheet, ScrollView
} from 'react-native'

import Header from '../../components/Header/Home.component'

import MainFeature from './MainFeature'

export default class Home extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Header />
        <ScrollView>
          <MainFeature />
          <View style={styles.container}>
            <Text style={styles.welcome}> Welcome to React Native! </Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  checkLogin: {
    height: 83,
    borderBottomWidth: 3,
    borderBottomColor: "#f4f3f9",
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
