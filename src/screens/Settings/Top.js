import React, { Component } from 'react'
import { 
  Text, View, StyleSheet, Image
} from 'react-native'

import * as Styles from '../../config/styles'

export default class Top extends Component {
  render() {
    return (
      <View style={styles.box}>
        <View style={styles.container}>
          <View style={styles.top}>
            <Image 
              source={require('../../res/images/icon.png')} 
              style={styles.iamge}
            />
            <Text style={styles.welcome}>Xin chào Duy!</Text>
            <Text style={styles.phone}>0829 000095</Text>
          </View>
          
          <View style={styles.bot}>

          </View>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  box: {
    ...Styles.BoxBorder,
    backgroundColor: 'white',
    padding: 10,
    marginTop: 60,
    marginBottom: 5,  
  },
  container: {
    top: -40,
  },
  top: {
    alignItems: 'center',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: Styles.Colors.gray,
  },
  iamge: {
    width: 60,
    height: 60,
  },
  welcome: {
    color: Styles.Colors.green,
    fontSize: Styles.FontSize.header,
    fontWeight: '700',
    lineHeight: 30
  },
  phone: {
    fontSize: Styles.FontSize.normal,
    fontWeight: '400',
  }
});