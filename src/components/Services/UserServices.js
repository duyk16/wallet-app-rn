import React, { Component } from 'react'
import { 
  Text, View, StyleSheet, TouchableOpacity, ScrollView
} from 'react-native'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import * as Styles from '../../config/styles'


export default class UserServices extends Component {
  render() {
    return (
      <View style={stylesMain.container}>
        <ScrollView 
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <Service 
            color={Styles.Colors.blue}
            colorBack={Styles.Colors.blueBack}
            text="Nhập mã giới thiệu"
            icon="user-friends"
          />
          <Service 
            color={Styles.Colors.orange}
            colorBack={Styles.Colors.orangeBack}
            text="Nhập mã giới thiệu"
            icon="gift"
          />
          <Service 
            color={Styles.Colors.green}
            colorBack={Styles.Colors.greenBack}
            text="Báo danh & Check-in"
            icon="user-plus"
          />
          <Service 
            color={Styles.Colors.orange2}
            colorBack={Styles.Colors.orangeBack2}
            text="Xếp hạng & nhận xét"
            icon="user-friends"
          />
        </ScrollView>
      </View>
    )
  }
}

class Service extends Component {
  render() {
    return (
      <View style={{
          ...stylesService.container, 
          backgroundColor: this.props.colorBack
        }}
      >
        <View style={stylesService.left}>
          <FontAwesome5 
            name={this.props.icon}
            color={this.props.color}
            size={25}
          />
        </View>
        <View style={stylesService.right}>
          <Text style={stylesService.text}>{this.props.text}</Text>
        </View>
      </View>
    )
  }
}

const stylesMain = StyleSheet.create({
  container: {
    backgroundColor: Styles.Colors.white,
    ...Styles.BoxBorderBottom,
    paddingVertical: 9,
  },
})
const stylesService = StyleSheet.create({
  container: {
    height: 44,
    width: 150,
    ...Styles.ViewRow,
    backgroundColor: 'red',
    marginHorizontal: 10,
    paddingHorizontal: 5,
  },
  text: {
    fontSize: Styles.FontSize.normal,
    fontWeight: '400',
    color: '#1a1a1a',
  },
  left: {
    flex: 1/3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  right: {
    flex: 2/3,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
  }
})
