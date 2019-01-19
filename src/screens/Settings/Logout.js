import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

import * as Styles from '../../config/styles'

export default class Logout extends Component {
  render() {
    return (
      <TouchableOpacity activeOpacity={0.7}>
        <View style={styles.box}>
          <Text style={styles.text}>Đăng xuất</Text>
        </View>
      </TouchableOpacity>
    )
  }
}
const styles = StyleSheet.create({
  box: {
    ...Styles.BoxBorder,
    ...Styles.BoxShadow,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 10,
  },
  text: {
    textAlign: 'center',
    color: 'red',
    fontWeight: '300',
  }
});