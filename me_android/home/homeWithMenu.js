import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	Touchable,
	Dimensions,
	DrawerLayoutAndroid,
} from 'react-native';

import Menu from './../menu/menu';
import Home from './home'
var DimensionsWidth = Dimensions.get('window').width;
var DimensionsHeight = Dimensions.get('window').height;
export default class HomeWithMenu extends Component{
	constructor(props){
		super(props);
		this.pressMenu=this.pressMenu.bind(this);
	}
	pressMenu(){
		this.refs.drawer.openDrawer();
	}
	render(){
		return(
			<DrawerLayoutAndroid
				ref={'drawer'}
				drawerWidth={DimensionsWidth*0.8}
				drawerPosition={DrawerLayoutAndroid.positions.Left}
				renderNavigationView={() => <Menu handleSetting={this.props.handleSetting} handleHome={this.props.handleHome} />}
			>
				<Home onMenu={this.pressMenu} onPlus={this.props.onPlus} />
			</DrawerLayoutAndroid>
		);
	}
}