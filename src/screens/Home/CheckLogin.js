import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

import AntIcon from 'react-native-vector-icons/AntDesign'
import * as Styles from '../../config/styles'

export default class CheckLogin extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity 
          style={styles.leftBox}
          activeOpacity={0.7}
          onPress={this.props.logout}
          >
          <AntIcon 
            name="book" 
            color={Styles.Colors.pink} 
            size={45}
            />
        </TouchableOpacity>
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
    ...Styles.BoxBorderBottom,
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