import React, { Component } from 'react'
import { 
  Text, View, StyleSheet, Image
} from 'react-native'

import * as Styles from '../../config/styles'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'


export default class ListItem extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.icon}>
          <AntDesign name="mobile1" color={Styles.Colors.gray} size={30} />
        </View>
        <View style={styles.content}>
          <View style={{width: 250}}>
            <Text>Phiên bản</Text>
            <Text>4.2.0 b410</Text>
          </View>
          <View >
            <Entypo name="chevron-thin-right" color={Styles.Colors.gray} size={30} />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: Styles.Colors.gray,
    borderBottomWidth: 1,
    marginLeft: 5,
  }
});