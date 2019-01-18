import React, { Component } from 'react'
import {
  Text, View, StyleSheet, ScrollView, StatusBar, Image
} from 'react-native'

import Header from '../../components/Header/Home'
import UserServices from '../../components/Services/UserServices';
import * as Styles from '../../config/styles'

import UserInfo from './UserInfo'
import MainFeature from './MainFeature'
import CheckLogin from './CheckLogin';
import EmtyBalance from './EmtyBalance';
import Services from './Services';
import Service from '../../components/Services/ServiceItem';

export default class index extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      isLogin: true,
    }
    this.login = this.login.bind(this)
  }
  login() {
    this.setState({
      isLogin: !this.state.isLogin
    })
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: Styles.Colors.gray}}>
        {/* Set status bar */}
        <StatusBar barStyle="light-content" />     

        <Header isLogin={this.state.isLogin} />
        {/* Show if user logged in */}
        {this.state.isLogin && <UserInfo />}
        <ScrollView showsVerticalScrollIndicator={false}>
          <MainFeature />
          {this.state.isLogin ? <EmtyBalance login={this.login}/> : <CheckLogin logout={this.login}/>}
          {this.state.isLogin && <UserServices />}
          <View style={{...Styles.BoxBorderBottom, backgroundColor: Styles.Colors.white}}>
            <Image 
              source={require('./banner1.png')}
              style={{width: '100%', height: 125}}
              resizeMode='contain'
            />
          </View>
          
          <Services />
          <View style={styles.container}>
            <Text style={styles.welcome}> Welcome to React Native! </Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  bannerImage: {
    width: '100%'
  },
});
