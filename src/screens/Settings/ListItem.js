import React, { Component } from 'react'
import { 
  Text, View, StyleSheet, Image
} from 'react-native'

import * as Styles from '../../config/styles'
import Item from './Item'

export default class ListItem extends Component {
  render() {
    return (
      <View style={styles.box}>
        <Item />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  box: {
    ...Styles.BoxBorder,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 10,
  }
});