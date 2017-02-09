import React , { Component } from 'react';
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	Dimensions,
	StyleSheet
} from 'react-native';

var DimensionsWidth = Dimensions.get('window').width;
var DimensionsHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
	pageBg:{
		width:DimensionsWidth*0.8,
		height:DimensionsHeight,
	},
	headInfo:{
		flex:2.5,
		justifyContent:'center',
		alignItems:'flex-start',
		paddingLeft:30
	},
	detailInfo:{
		flex:1,
		flexDirection:'row',
		alignItems:'center',
	},
	icon:{
		flex:2,
		justifyContent:'center',
		alignItems:'center',
	},
	name:{
		flex:5,
		justifyContent:'center',
		alignItems:'flex-start',
	},
	count:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
	},
	nameInfo:{
		fontSize:30,

	},
	fontInfo:{
		width:30,
		height:30,
	},
});
export default class Menu extends Component{
	handleSetting(){
		this.props.handleSetting();
	}
	handleHome(){
		this.props.handleHome();
	}
	render(){
		return(
			<View style={styles.pageBg}>
				<View style={styles.headInfo}>
					<Text style={styles.nameInfo}>Adam Lane</Text>
					<Text>adam@invisionapp.com</Text>
				</View>

				<View style={styles.detailInfo}>
				<TouchableOpacity style={styles.detailInfo}  onPress={this.handleHome.bind(this)}>
					<View style={styles.icon}>
						<Image style={styles.fontInfo} resizeMode='contain' source={require('./home.png')} />
					</View>
					<View style={styles.name}><Text>Home</Text></View>
					<View style={styles.count}><Text>5</Text></View>
				</TouchableOpacity>
				</View>
				<View style={styles.detailInfo}>
					<View style={styles.icon}>
						<Image style={styles.fontInfo} resizeMode='contain' source={require('./calendar.png')} />
					</View>
					<View style={styles.name}><Text>Calendar</Text></View>
					<View style={styles.count}><Text></Text></View>
				</View>
				<View style={styles.detailInfo}>
					<View style={styles.icon}>
						<Image style={styles.fontInfo} resizeMode='contain' source={require('./overview.png')} />
					</View>
					<View style={styles.name}><Text>Groups</Text></View>
					<View style={styles.count}><Text>16</Text></View>
				</View>
				<View style={styles.detailInfo}>
					<View style={styles.icon}>
						<Image style={styles.fontInfo} resizeMode='contain' source={require('./lists.png')} />
					</View>
					<View style={styles.name}><Text>Lists</Text></View>
					<View style={styles.count}><Text>18</Text></View>
				</View>
				<View style={styles.detailInfo}>
					<View style={styles.icon}>
						<Image style={styles.fontInfo} resizeMode='contain' source={require('./profile.png')} />
					</View>
					<View style={styles.name}><Text>Profile</Text></View>
					<View style={styles.count}><Text></Text></View>
				</View>
				<View style={styles.detailInfo}>
					<View style={styles.icon}>
						<Image style={styles.fontInfo} resizeMode='contain' source={require('./timeline.png')} />
					</View>
					<View style={styles.name}><Text>Timeline</Text></View>
					<View style={styles.count}><Text></Text></View>
				</View>

				
				<View style={styles.detailInfo}>
				<TouchableOpacity style={styles.detailInfo} onPress={this.handleSetting.bind(this)}>
					<View style={styles.icon}>
						<Image style={styles.fontInfo} resizeMode='contain' source={require('./setting.png')} />
					</View>
					<View style={styles.name}><Text>Settings</Text></View>
					<View style={styles.count}><Text></Text></View>
				</TouchableOpacity>
				</View>
				

				<View style={styles.detailInfo}>
					<View style={styles.icon}>
						<Image style={styles.fontInfo} resizeMode='contain' source={require('./logout.png')} />
					</View>
					<View style={styles.name}><Text>Logout</Text></View>
					<View style={styles.count}><Text></Text></View>
				</View>
			</View>
		);
	}
}