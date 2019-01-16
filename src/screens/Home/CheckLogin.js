import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign'

import * as Styles from '../../config/styles'

export default class CheckLogin extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.leftBox}>
          <AntIcon name="book" color={Styles.Colors.pink} size={45}/>
        </View>
        <View style={styles.rightBox}>
          <Text style={Styles.TextTitle}>Bạn chưa đăng nhập</Text>
          <Text style={Styles.TextNormal}>Mời bạn đăng nhập để sử dụng đầy đủ tính năng của ứng dụng. Xin vui lòng bấm vào đây!</Text>          
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 85,
    flexDirection: 'row',
    borderBottomWidth: 3,
    borderBottomColor: "#f4f3f9",
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: Styles.Colors.white,
  },
  leftBox: {
    flex: 1/5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightBox: {
    flex: 4/5,
    justifyContent: 'center',
  },
})