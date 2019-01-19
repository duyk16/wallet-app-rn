import React, { Component } from 'react'
import {
  Text, View, TouchableOpacity, StyleSheet, ScrollView, Image
} from 'react-native'

var img = require('../../res/images/Logo_Viettel.png')

import * as Styles from '../../config/styles'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default class BuyCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.icon}>
            <AntDesign name="creditcard" color={Styles.Colors.blue} size={20} />
          </View>
          <View>
            <Text style={{...Styles.TextTitle, fontWeight: '600'}}>Mua thẻ nhanh</Text>
            <Text style={Styles.TextNormal}>Thanh toán nhanh với tài khoản chính</Text>
          </View>
        </View>
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Card name="Viettel" price="500.000 đ" />
            <Card name="Vinaphone" price="500.000 đ" />
            <Card name="Viettel" price="100.000 đ" />
          </ScrollView>
        </View>

      </View>
    )
  }
}

class Card extends Component {
  render() {
    const {name, price} = this.props
    const imageViettel = require('../../res/images/Logo_Viettel.png')
    const imageVinaphone = require('../../res/images/Logo_Vinaphone.png')
    
    return (
      <View style={styles.cardContainer}>
        <View>
          <Image 
            source={name == "Viettel" ? imageViettel : imageVinaphone}
            style={{maxWidth: 50, maxHeight: 40}} 
            resizeMode="contain"
          />
        </View>
        <Text style={{fontSize: Styles.FontSize.display1, fontWeight: '600', lineHeight: 20}}>{price}</Text>
        <Text style={Styles.TextNormal}>Hoàn tiền: 12.500 gem</Text>
      </View>
    )
  };
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 10,
    ...Styles.BoxBorderBottom,
    borderBottomWidth: 10,
  },
  icon: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    ...Styles.BoxBorder, 
    ...Styles.BoxCenter,
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 15,
    margin: 10,
  }
});