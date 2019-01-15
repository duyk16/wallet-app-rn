import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class MainFeature extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}></View>
        <View style={styles.boxContainer}>
          <View style={styles.col}>
            <View style={styles.box}></View>
            <Text>Quét mã</Text>
          </View>
          <View style={styles.col}>
            <View style={styles.box}></View>
          </View>
          <View style={styles.col}>
            <View style={styles.box}></View>
          </View>
          <View style={styles.col}>
            <View style={styles.box}></View>
          </View>          
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    height: 111,
    borderBottomWidth: 3,
    borderBottomColor: "#f4f3f9",
  },
  top: {
    height: "50%",
    backgroundColor: "#449d47",
  },
  boxContainer: {
    top: -50,
    flexDirection: 'row',
    marginVertical: 2,
    marginHorizontal: 8,
  },
  col: {
    height: 100,
    flex: 1/4,
    alignItems: 'center',
    marginHorizontal: 8,
    borderColor: '#f4f3f9',
    backgroundColor: 'red',
    zIndex: 100000,
  },
  box: {
    height: 50,
  },
  text: {
    marginTop: 10,
  }
})