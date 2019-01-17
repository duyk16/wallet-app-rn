import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import * as Styles from '../../config/styles'


export default class UserInfo extends Component {
  render() {
    return (
      <View style={styles.userInfo}>
          <View style={styles.userBalance}>
            <Text style={styles.balanceLabel}>
              TK Ví
            </Text>
            <View style={Styles.ViewRow}>
              <Text style={styles.balanceText}> 0 </Text>
              <FontAwesome
                name="diamond"
                color={Styles.Colors.yellow}
                size={12}
              />
            </View>
          </View>

          <View style={styles.userInfoCenter}>
            <Text style={{textAlign: 'center', textAlignVertical: 'center'}}>
            <FontAwesome 
              name="user-circle-o"
              color={Styles.Colors.white}
              size={28}
            /></Text>
          </View>
          
          <View style={styles.userBalance}>
            <Text style={styles.balanceLabel}>
              TK Hoàn tiền
            </Text>
            <View style={Styles.ViewRow}>
              <Text style={styles.balanceText}> 0 </Text>
              <FontAwesome
                name="diamond"
                color={Styles.Colors.yellow}
                size={12}
              />
            </View>

          </View>
        </View>

    );
  }
}

const styles = StyleSheet.create({
  userInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Styles.Colors.green2,
    height: 45,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Styles.Colors.green2,
    marginBottom: 4,
    marginHorizontal: 15,
  },
  userInfoCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Styles.Colors.green,
    borderRadius: 25,
    height: 45,
    width: 45,
  },
  userBalance: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  balanceLabel: {
    color: Styles.Colors.white,
    fontSize: Styles.FontSize.display1,
    fontWeight: '500',
  },
  balanceText: {
    color: Styles.Colors.yellow,
    fontSize: Styles.FontSize.title,
    fontWeight: '700',
  },
})