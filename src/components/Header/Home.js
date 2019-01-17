import React, { Component } from 'react'
import { 
  Text, View, StyleSheet, TouchableOpacity
} from 'react-native'

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import * as Styles from '../../config/styles'

export default class Home extends Component {
  render() {
    return (
      <View>
        <View style={styles.lineTop}></View>
        <View style={styles.status}>
          { /* Left Item */ }
          {this.props.isLogin && 
          <View style={styles.itemLeft}>        
            <TouchableOpacity activeOpacity={0.7}>
              <FontAwesome 
                name="user-o"
                color={Styles.Colors.white}
                size={20}
              />
            </TouchableOpacity>
          </View>}
          {/* Main Item */}
          <View style={styles.itemCenter}>
            <Text style={styles.headerText}>Ví Appota</Text>
          </View>
          {/* Right Item */}
          {this.props.isLogin && 
          <View style={styles.itemRight}>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.textRight}>VIP 0</Text>
            </TouchableOpacity>
          </View>}
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  lineTop: {
    height: 25,
  },
  status: {
    flexDirection: 'row',
    height: 30,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  itemLeft: {
    justifyContent: 'flex-start',
  },
  itemCenter: {
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemRight: {
    justifyContent: 'flex-end',
  },
  textRight: {
    fontSize: Styles.FontSize.small,
    color: Styles.Colors.white,
    fontWeight: '500',
  },
  headerText: {
    fontSize: Styles.FontSize.display2,
    color: Styles.Colors.white,
    fontWeight: '500',
  },
  
})