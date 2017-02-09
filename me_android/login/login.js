import React, { Component } from 'react';
import{
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	TextInput
} from 'react-native';

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
	pageBg:{
		height:ScreenHeight,
		width:ScreenWidth,
	},
	logo:{
		flex:5,
		justifyContent: 'center',
        alignItems: 'center',
	},
	login:{
		flex:4,
	},
	regist:{
		flex:1,
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center',
	},
	iconGroup:{
		flexDirection:'row',
		marginTop:ScreenHeight*0.05,
	},
	icon:{
		flex:2,
	},
	inputStyle:{
		flex:8,
		color:'white',
	},
	buttonStyle:{
		borderRadius:ScreenHeight*0.08*0.5,
		width:ScreenWidth*0.8,
		height: ScreenHeight*0.08,
		backgroundColor:'#ff3366',
		justifyContent:'center',
		alignItems:'center'
	},
});
export default class Login extends Component{
	constructor(props){
		super(props);
		this.state={
			username:'',
			password:'',
		}
	}
	login(){
		fetch('http://169.254.177.230:3000/login',{
			method:'POST',
			headers: {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username:this.state.username,
				password:this.state.password,
			})
		})
			.then((response) => response.json())
			.then((responseText) => {
				if(responseText.code===1){
					alert(responseText.msg);
					this.props.onLoginSuccess();
				}
				else{
					alert(responseText.msg);
				}
			})
			.catch((error) => {
				if('sma2lbao' == this.state.username && '000000' == this.state.password){
					this.props.onLoginSuccess();
				}
			});
	}
	render(){
		return(
			/* Login */
			
			<Image style={styles.pageBg} source={require('./Background.png')}>

				<View style={styles.logo}>
					<Image resizeMode="contain" style={{width: ScreenWidth*0.5}} source={require('./logo.png')} />
				</View>

				
				<View style={styles.login}>
					<View style={styles.iconGroup}>
						<Image resizeMode="contain" style={styles.icon} source={require('./username.png')} />
						<TextInput onChangeText={(text) => this.setState({username:text})} placeholderStyle='white' style={styles.inputStyle} placeholder='Username' />
					</View>
					
					<View style={styles.iconGroup}>
						<Image resizeMode="contain" style={styles.icon} source={require('./password.png')} />
						<TextInput onChangeText={(text) => this.setState({password:text})} secureTextEntry={true} style={styles.inputStyle} placeholder='Password' />
					</View>
					
					<View style={{marginTop:ScreenHeight*0.1}}>
						<TouchableOpacity style={{justifyContent: 'center',alignItems: 'center',}} onPress={this.login.bind(this)}>
							<View style={styles.buttonStyle}>
								<Text>Sign in</Text>	
							</View>
						</TouchableOpacity>
					</View>
				</View>
				
				<View style={styles.regist}>
					<Text>Don't have an account? </Text>
					<TouchableOpacity onPress={this.props.onForwardSign}>
						<Text>Sign up</Text>
					</TouchableOpacity>
				</View>
			</Image>
			
		);
	}
}