import React , {Component} from 'React';
import {
	View,
	Text,
	Image,
	StyleSheet,
	TouchableOpacity,
	Dimensions
} from 'react-native';

const {height, width} = Dimensions.get('window');
const weight = width*0.02;
const styles = StyleSheet.create({
	header:{
		flex:1,
	},
	main:{
		flex:2,
	}
});

export default class Settings extends Component{
	constructor(props){
		super(props);
		this.state = {};
	}
	render(){
		return(
			<View style={{flex:1}}>
				<View style={styles.header}>
				<Image sizeMode='contain' style={{flex:1}} source={require('./header.png')}>
					<View style={{flex: 1,alignItems:'center',flexDirection:'row'}}>
						<Image resizeMode='contain' style={{left:weight*2,width:3*weight,height:2.5*weight}} source={require('./menu.png')} >
							<TouchableOpacity style={{flex:1}} onPress={this.props.handleMenu}>
							</TouchableOpacity>
						</Image>
						<Image resizeMode='contain' style={{left:width-18*weight,width:3*weight}} source={require('./camera.png')} />
						<Image resizeMode='contain' style={{left:width-15*weight,width:3*weight}} source={require('./elipse.png')} />
					</View>

					<View style={{flex:2, justifyContent:'center'}}>
						<Text style={{fontSize:42,color:'white',left: 3*weight}}>
							Settings
						</Text>
					</View>

					<View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
						<Text style={{color:'white',fontSize:16,left:3*weight}}>
							GENERAL
						</Text>

						<Text style={{color:'white',fontSize:16,left:10*weight}}>
							ALERTS
						</Text>

						<Text style={{color:'white',fontSize:16,left:17*weight}}>
							SOCIAL
						</Text>
					</View>
				</Image>
				</View>
				<View style={styles.main}>
					<View style={{flex:1,flexDirection:'row',alignItems:'center',marginLeft:3*weight}}>
						<Image source={require('./username.png')} />
						<Text style={{marginLeft:3*weight}}>Adam Lane</Text>
					</View>

					<View style={{flex:1,flexDirection:'row',alignItems:'center',marginLeft:3*weight}}>
						<Image source={require('./email.png')} />
						<Text style={{marginLeft:3*weight}}>adam@invisionapp.com</Text>
					</View>

					<View style={{flex:1,flexDirection:'row',alignItems:'center',marginLeft:3*weight}}>
						<Image source={require('./password.png')} />
						<Text style={{marginLeft:3*weight}}>........</Text>
					</View>

					<View style={{flex:1,flexDirection:'row',alignItems:'center',marginLeft:3*weight}}>
						<Image source={require('./birthday.png')} />
						<Text style={{marginLeft:3*weight}}>Adam Lane</Text>
					</View>

					<View style={{flex:1,flexDirection:'row',alignItems:'center',marginLeft:3*weight}}>
						<Image source={require('./location.png')} />
						<Text style={{marginLeft:3*weight}}>杭州</Text>
					</View>

					<View style={{flex:2.5,alignItems:'center',justifyContent:'flex-end'}}>
						<View style={{width:width*0.8,height:height*0.08,borderRadius:height*0.08*0.5,backgroundColor:'#f36',justifyContent:'center',alignItems:'center', marginBottom:30}}>
							<Text>Logout</Text>
						</View>
					</View>
				</View>
			</View>
		);
	}
}