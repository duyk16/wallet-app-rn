import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

import * as Styles from '../../config/styles'

export default class Banner extends Component {
  render() {
    return (
      <View style={{...Styles.BoxBorderBottom, backgroundColor: Styles.Colors.white}}>
        <Image 
          source={require('../../res/images/banner1.png')}
          style={{width: '100%', height: 125}}
          resizeMode='contain'
        />
      </View>
    )
  }
}
