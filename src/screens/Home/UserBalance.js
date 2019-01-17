import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

import Entypo from 'react-native-vector-icons/Entypo'

import * as Styles from '../../config/styles'

export default class CheckLogin extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity 
          style={styles.leftBox} 
          activeOpacity={0.7}
          onPress={this.props.login}
          >
          <Entypo 
            name="credit" 
            color={Styles.Colors.violet} 
            size={45}/>
        </TouchableOpacity>
        <View style={styles.rightBox}>
          <Text style={Styles.TextTitle}>Tài khoản chính của bạn hết Gem</Text>
          <Text style={Styles.TextNormal}>Bạn có muốn nạp thêm Gem và tài khoản chính không? Xin vui lòng bấm vào đây!</Text>          
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