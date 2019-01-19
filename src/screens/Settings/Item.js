import React, { Component } from 'react'
import { 
  Text, View, StyleSheet, TouchableOpacity
} from 'react-native'

import * as Styles from '../../config/styles'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'


export default class ListItem extends Component {
  render() {
    const borderBot = this.props.last ? {} : {
      borderBottomColor: Styles.Colors.gray,
      borderBottomWidth: 1,
    }
    return (
      <TouchableOpacity activeOpacity={0.7} >
        <View style={styles.container}>
          <View style={styles.icon}>
            <AntDesign name={this.props.icon} color={Styles.Colors.grayText} size={20} />
          </View>
          <View style={{ ...styles.content, ...borderBot }}>
            <View>
              <Text style={{...Styles.TextTitle, fontWeight: '500', lineHeight: 25}}> {this.props.title} </Text>
              <Text style={{...Styles.TextNormal, color: 'gray'}}> {this.props.details} </Text>
            </View>
            <View style={{justifyContent: 'center'}}>
              <Entypo name="chevron-thin-right" color={Styles.Colors.gray} size={20} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  icon: {
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    paddingVertical: 12,
    paddingHorizontal: 5,
  },
  text: {}
});