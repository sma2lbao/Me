import React, {Component} from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	Image,
	DrawerLayoutAndroid,
	Dimensions
} from 'react-native';

import Menu from '../menu/menu';
import Setting from './setting';

const {width, height} = Dimensions.get('window');

export default class SettingWithMenu extends Component{
	handleMenu(){
		this.refs.drawer.openDrawer();
	}
	render(){
		return(
			<DrawerLayoutAndroid
				ref={'drawer'}
				drawerWidth={width*0.8}
				drawerPosition={DrawerLayoutAndroid.positions.Left}
				renderNavigationView={() => <Menu handleSetting={this.props.handleSetting} handleHome={this.props.handleHome}/>}
			>
				<Setting handleMenu={this.handleMenu.bind(this)} />
			</DrawerLayoutAndroid>
		);
	}
} 