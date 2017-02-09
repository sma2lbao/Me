/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
  TouchableHighlight,
} from 'react-native';

import Login from './me_android/login/login';

import Sign from './me_android/signup/signup';

import Walk from './me_android/walkthrough/walkthrough';

import Home from './me_android/home/homeWithMenu';

import Create from './me_android/create/create';

import Calendar from './me_android/calendar/calendar';

import Menu from './me_android/menu/menu';

import Setting from './me_android/setting/settingWithMenu';

export default class Me extends Component {
  constructor(props){
    super(props);
  }
  renderSceen(route,navigator){
    switch(route.title){
      case 'Login': return(<Login 
      onForwardSign={() => {
        navigator.push({title:'Sign'});
      }}
      onLoginSuccess={() => {
        navigator.push({title:'Walkthrough'});
      }}
      />);
      case 'Sign' : return(<Sign
        onBack={() => {
          navigator.pop();
        }}
      />);
      case 'Walkthrough' : return(
        <Walk
          onNext={
            () => {
              navigator.push({title:'Home'});
            }
          }
          onSkip={
            () => {
              navigator.push({title:'Home'});
            }
          }
        />
      );
      case 'Home' : return(
        <Home 
        onPlus={
          () => {
            navigator.push({title:'Create'});
          }
        }
        handleSetting={
          () => {
            navigator.push({title:'Setting'});
          }
        }
        handleHome={
          () => {
            navigator.push({title:'Home'});
          }
        }
        />
      );
      case 'Create' : return(
        <Create 
          onColse={
            () => {
              navigator.pop();
            }
          }
        />
      );
      case 'Menu' : return(
        <Menu />
      );
      case 'Setting' : return(
        <Setting 
          handleHome={
            () => {
              navigator.push({title: 'Home'});
            }
          }
          handleSetting={
            () => {
              navigator.push({title:'Setting'});
            }
          }
        />
      );
    }
  }
  render(){
    return(
      <Navigator
        initialRoute={{title: 'Login'}}
        renderScene={this.renderSceen}
      />
    );
  }
}
AppRegistry.registerComponent('Me', () => Me);
