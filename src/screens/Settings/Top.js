import React, { Component } from 'react'
import { 
  Text, View, StyleSheet, Image
} from 'react-native'

import * as Styles from '../../config/styles'
import Entypo from 'react-native-vector-icons/Entypo'

export default class Top extends Component {
  render() {
    return (
      <View style={styles.box}>
        <View style={styles.container}>
          <View style={styles.top}>
            <Image 
              source={require('../../res/images/icon.png')} 
              style={styles.image}
            />
            <Text style={styles.welcome}>Xin chào Duy!</Text>
            <Text style={styles.phone}>0829 000095</Text>
          </View>
          
          <View style={styles.bot}>
            <Entypo style={{marginRight: 15}}  name="facebook-with-circle" color={Styles.Colors.blue} size={20} />
            <Text style={Styles.TextTitle}>Liên kết với tài khoản Facebook</Text>
          </View>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  box: {
    ...Styles.BoxBorder,
    ...Styles.BoxShadow,
    backgroundColor: 'white',
    height: 130,
    padding: 10,
    marginTop: 60,
    marginBottom: 8,  
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
  image: {
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
  },
  bot: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 5,
    alignItems: 'center',
  }
});