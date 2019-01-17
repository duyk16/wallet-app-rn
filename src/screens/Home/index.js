import React, { Component } from 'react'
import {
  Text, View, StyleSheet, ScrollView, StatusBar
} from 'react-native'

import Header from '../../components/Header/Home'

import UserInfo from './UserInfo'
import MainFeature from './MainFeature'
import CheckLogin from './CheckLogin';
import UserBalance from './UserBalance';
import Services from './Services';

export default class index extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      isLogin: false,
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
      <View style={{flex: 1, backgroundColor: '#449D47'}}>
        <StatusBar barStyle="light-content" />        
        <Header isLogin={this.state.isLogin} />
        {this.state.isLogin && <UserInfo />}
        <ScrollView>
          <MainFeature />
          {this.state.isLogin ? <UserBalance login={this.login}/> : <CheckLogin logout={this.login}/>}
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
  }
});
