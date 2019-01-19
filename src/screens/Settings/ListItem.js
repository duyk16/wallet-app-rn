import React, { Component } from 'react'
import { 
  Text, View, StyleSheet, Image
} from 'react-native'

import * as Styles from '../../config/styles'
import Item from './Item'

export default class ListItem extends Component {
constructor(props, context) {
  super(props, context)
  this.state = {
    listItem2: [
      {icon: 'mobile1', title: 'Phiên bản', details: '4.2.0 b410'},
      {icon: 'mobile1', title: 'Giới thiệu ví Appota', details: 'Ứng dụng giải trí miễn phí'},
      {icon: 'mobile1', title: 'Góp ý', details: 'Gửi ý kiến đóng góp của bạn'},
      {icon: 'mobile1', title: 'Chính sách', details: 'Các điều khoản sử dụng dịch vụ'},
      {icon: 'mobile1', title: 'Điều kiện tham gia', details: 'Các quy định với của hàng'},
      {icon: 'mobile1', title: 'Các cam kết', details: 'Cam kết sử dụng dịch vụ'},
    ]
  }
}


  render() {
    const {listItem2} = this.state
    return (
      <View style={styles.box}>
        {listItem2.map((item, key) => (
          <Item icon={item.icon} title={item.title} details={item.details} key={key} />
        ))}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  box: {
    ...Styles.BoxBorder,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginBottom: 10,
  }
});