import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

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
                color={Styles.Colors.green} 
                size={32} />
            </View>
            <Text style={styles.text}>Quét mã</Text>
          </View>
          <View style={styles.col}>
            <View style={styles.box}>
              <MaterialCommunityIcons 
                name="gamepad"
                color={Styles.Colors.green} 
                size={32} />
            </View>
            <Text style={styles.text}>TT Game</Text>
          </View>
          <View style={styles.col}>
            <View style={styles.box}>
              <AntDesign
                name="qrcode"
                color={Styles.Colors.green}
                size={32} />
            </View>
            <Text style={styles.text}>Mã QR</Text>
          </View>
          <View style={styles.col}>
            <View style={styles.box}>
              <Feather 
                name="archive"
                color={Styles.Colors.green}
                size={32} />
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
    height: 110,
    ...Styles.BoxBorderBottom,
    top: -946
  },
  top: {
    height: 1000,
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
    paddingTop: 5,
    backgroundColor: Styles.Colors.white,
  },
  text: {
    marginTop: 10,
    fontSize: Styles.FontSize.title,
    color: Styles.Colors.black,
    fontWeight: '400',
  }
})