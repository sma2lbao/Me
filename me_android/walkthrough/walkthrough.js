import React, { Component } from 'React';
import {
	Text,
	View,
	Image,
	TouchableOpacity,
	StyleSheet
} from 'react-native';

var Dimensions = require('Dimensions');
var DimensionsWidth = Dimensions.get('window').width;
var DimensionsHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
	pageBg:{
		width:DimensionsWidth,
		height:DimensionsHeight,
	},
	mainInfo:{
		flex:2,
		justifyContent:'center',
		alignItems:'center',
	},
	bottomInfo:{
		flex:1,
		flexDirection:'row',
	},
	editBg:{
		width:DimensionsWidth*0.333,
		height:DimensionsWidth*0.333,
		backgroundColor:'rgba(255,255,255,0.1)',
		justifyContent:'center',
		alignItems:'center',
		borderRadius:DimensionsWidth*0.333*0.5,
	},
	buttonInfo:{
		flex:1,
		width:DimensionsWidth*0.5,
		justifyContent:'center',
		alignItems:'center',
	},
	buttonSkipDetail:{
		width:DimensionsWidth*0.4,
		justifyContent:'center',
		alignItems:'center',
		borderRadius:DimensionsHeight*0.06*0.5,
		borderColor:'rgba(255,255,255,0.4)',
		height:DimensionsHeight*0.06,
		borderWidth:1,
	},
	buttonNextDetail:{
		width:DimensionsWidth*0.4,
		justifyContent:'center',
		alignItems:'center',
		borderRadius:DimensionsHeight*0.06*0.5,
		borderColor:'rgba(255,255,255,0.4)',
		height:DimensionsHeight*0.06,
		backgroundColor:'#ff3366',
	},
});
export default class Walk extends Component{
	render(){
		return(
			<Image style={styles.pageBg} resizeMode="contain" source={require('./Background.png')}>
				<View style={styles.mainInfo}>
					<Text style={{fontSize:35,color:'white'}}>Walkthrough</Text>
				</View>

				<View style={styles.mainInfo}>
					<View style={styles.editBg}>
						<Image style={{width:DimensionsWidth*0.1,height:DimensionsWidth*0.1,}} resizeMode="contain" source={require('./edit.png')}></Image>
					</View>
				</View>

				<View style={styles.mainInfo}>
					<Text style={{color:'white'}}>
						The last task management app
					</Text>
					<Text style={{color:'white'}}>
						you'll ever need
					</Text>
				</View>

				<View style={styles.bottomInfo}>
					<TouchableOpacity onPress={this.props.onSkip}>
						<View style={styles.buttonInfo}>
							<View style={styles.buttonSkipDetail}>
								<Text style={{color:'white'}}>Skip</Text>
							</View>
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={this.props.onNext}>
						<View style={styles.buttonInfo}>
							<View style={styles.buttonNextDetail}>
								<Text style={{color:'white'}}>Next</Text>
							</View>
						</View>
					</TouchableOpacity>
				</View>
			</Image>
		);
	}
}