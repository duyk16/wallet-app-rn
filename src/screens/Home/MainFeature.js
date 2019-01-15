import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import { Colors, FontSize } from '../../config/style'

export default class MainFeature extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}></View>
        <View style={styles.boxContainer}>
          <View style={styles.col}>
            <View style={styles.box}></View>
            <Text style={styles.text}>Quét mã</Text>
          </View>
          <View style={styles.col}>
            <View style={styles.box}></View>
            <Text style={styles.text}>Quét mã</Text>
          </View>
          <View style={styles.col}>
            <View style={styles.box}></View>
            <Text style={styles.text}>Quét mã</Text>
          </View>
          <View style={styles.col}>
            <View style={styles.box}></View>
            <Text style={styles.text}>Quét mã</Text>
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
    backgroundColor: Colors.green,
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
    borderColor: Colors.green,
    backgroundColor: 'red',
  },
  box: {
    height: 55,
  },
  text: {
    marginTop: 20,
    fontSize: 12,
    color: Colors.black,
    fontWeight: '400',
  }
})