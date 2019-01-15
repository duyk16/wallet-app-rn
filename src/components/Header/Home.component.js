import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Home extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}> Ví Appota </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: "#449d47",
    alignItems: 'center',
  },
  headerText: {
    paddingTop: 30,
    fontSize: 13,
    color: '#fff',
    fontWeight: '500',
  },
})