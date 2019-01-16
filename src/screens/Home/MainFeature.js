import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import * as Styles from '../../config/styles'

export default class MainFeature extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}></View>
        <View style={styles.bot}></View>
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
    backgroundColor: Styles.Colors.green,
  },
  bot: {
    height: "50%",
    backgroundColor: Styles.Colors.white,
  },
  boxContainer: {
    top: -100,
    flexDirection: 'row',
    marginVertical: 2,
    marginHorizontal: 8,
  },
  col: {
    flex: 1/4,
    alignItems: 'center',
    marginHorizontal: 8,
  },
  box: {
    width: "100%",
    height: 65,
    ...Styles.BoxBorder,
    ...Styles.BoxShadow,
    backgroundColor: Styles.Colors.white,
  },
  text: {
    marginTop: 10,
    fontSize: Styles.FontSize.title,
    color: Styles.Colors.black,
    fontWeight: '400',
  }
})