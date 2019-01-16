import React, { Component } from 'react'
import { 
  Text, View, StyleSheet, TouchableOpacity 
} from 'react-native'

import * as Styles from '../../config/styles'

export default class Service extends Component {
  render() {
    return (
      <TouchableOpacity>
        <View>
          
        </View>
      </TouchableOpacity>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 3,
    borderBottomColor: "#f4f3f9",
    backgroundColor: Styles.Colors.white,
  },
})