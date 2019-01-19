import React, { Component } from 'react'
import {
  Text, View, StyleSheet, ScrollView, StatusBar, Image
} from 'react-native'

import Header from '../../components/Header/Home'
import UserServices from '../../components/Services/UserServices';
import * as Styles from '../../config/styles'

import UserInfo from './UserInfo'
import MainFeature from './MainFeature'
import CheckLogin from './CheckLogin'
import EmtyBalance from './EmtyBalance'
import Banner from './Banner'
import Services from './Services'
import Service from '../../components/Services/ServiceItem';
import BuyCard from './BuyCard';

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
        {/* Main View */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <MainFeature />
          {this.state.isLogin ? <EmtyBalance login={this.login}/> :
                                <CheckLogin logout={this.login}/>}
          {this.state.isLogin && <UserServices />}
          <Banner />
          <BuyCard />

          <Services />
        </ScrollView>

      </View>
    )
  }
}