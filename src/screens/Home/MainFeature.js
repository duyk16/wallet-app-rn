import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

import * as Styles from '../../config/styles'

export default class MainFeature extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}></View>
        <View style={styles.bot}></View>
        <View style={styles.boxContainer}>
          <View style={styles.col}>
            <View style={styles.box}>
              <MaterialCommunityIcons 
                name = "barcode-scan"
                color={Styles.Colors.green} size={35}                 
              />

            </View>
            <Text style={styles.text}>Quét mã</Text>
          </View>
          <View style={styles.col}>
            <View style={styles.box}>
              <MaterialCommunityIcons name="gamepad" color={Styles.Colors.green} size={35} />

            </View>
            <Text style={styles.text}>TT Game</Text>
          </View>
          <View style={styles.col}>
            <View style={styles.box}>
              <AntIcon name="qrcode" color={Styles.Colors.green} size={35} />
            </View>
            <Text style={styles.text}>Mã QR</Text>
          </View>
          <View style={styles.col}>
            <View style={styles.box}>
              <SimpleLineIcons name="briefcase" color={Styles.Colors.green} size={33} />

            </View>
            <Text style={styles.text}>Túi đồ</Text>
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
    ...Styles.BoxCenter,
    ...Styles.BoxBorder,
    ...Styles.BoxShadow,
    width: '100%',
    height: 63,
    backgroundColor: Styles.Colors.white,
  },
  text: {
    marginTop: 10,
    fontSize: Styles.FontSize.title,
    color: Styles.Colors.black,
    fontWeight: '400',
  }
})