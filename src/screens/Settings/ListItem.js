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
        {icon: 'dribbble', title: 'Giới thiệu ví Appota', details: 'Ứng dụng giải trí miễn phí'},
        {icon: 'message1', title: 'Góp ý', details: 'Gửi ý kiến đóng góp của bạn'},
        {icon: 'filetext1', title: 'Chính sách', details: 'Các điều khoản sử dụng dịch vụ'},
        {icon: 'lock1', title: 'Điều kiện tham gia', details: 'Các quy định với của hàng'},
        {icon: 'Safety', title: 'Các cam kết', details: 'Cam kết sử dụng dịch vụ'},
      ]
    }
  }

  render() {
    const { listItem2 } = this.state
    const length2 = listItem2.length
    return (
      <View style={styles.box}>
        {listItem2.map((item, key) => (
          <Item icon={item.icon} 
            title={item.title} 
            details={item.details} 
            key={key} 
            last={length2 - 1 === key}
          />
        ))}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  box: {
    ...Styles.BoxBorder,
    ...Styles.BoxShadow,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 70,
  }
});