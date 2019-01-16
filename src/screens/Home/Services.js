import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import * as Styles from '../../config/styles'
import ServiceItem from '../../components/Services/ServiceItem'

export default class Services extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ServiceItem />
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
    backgroundColor: Styles.Colors.white,
  },
})