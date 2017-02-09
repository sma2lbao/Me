import React ,{ Component} from 'React';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Image,
	StyleSheet
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
	iconStyle:{},
	imgStyle:{
		height:ScreenWidth*0.3333,
		width:ScreenWidth*0.3333,
		justifyContent:'center',
		alignItems:'center',
		borderRadius:ScreenWidth*0.3333*0.5,
	},
	background:{
		height:ScreenHeight,
		width:ScreenWidth,
	},
	backInfo:{
		flex:1,
	},
	headInfo:{
		flex:1,
	},
	cameraInfo:{
		flex:2,
		justifyContent:'center',
		alignItems:'center',
	},
	cameraDetail:{
		backgroundColor:'rgba(255,255,225,0.1)',
		height:ScreenWidth*0.3333,
		width:ScreenWidth*0.3333,
		justifyContent:'center',
		alignItems:'center',
		borderRadius:ScreenWidth*0.3333*0.5,
	},
	textInfo:{
		flex:1,
		flexDirection:'row',
	},
	textHead:{
		marginTop:20,
		flex:1,
	},
	textBody:{
		flex:4,
	},
	buttonInfo:{
		flex:2,
		justifyContent:'center',
		alignItems:'center',
	},
	buttonDetail:{
		backgroundColor:'#ff3366',
		height:55,
		width:ScreenWidth*0.8,
		justifyContent:'center',
		alignItems:'center',
		borderRadius:27
	},

});

export default class Sign extends Component{
	constructor(props){
		super(props);
		this.takePhoto=this.takePhoto.bind(this);
		var icon = require('./camera.png');
		this.state={
			img: icon,
			imgStyle:styles.iconStyle,
			name:'',
			email:'',
			password:'',
			birthday:'',
		}
	}
	takePhoto(){
		var photoOptions ={
		  title:'',
		  cancelButtonTitle:'',
		  takePhotoButtonTitle:'拍照',
		  chooseFromLibraryButtonTitle:'选择',
		  mediaType:'photo',
		  // quality:0.75,
		  // allowsEditing:true,
		  // noData:false,
		  // storageOptions:{
		  //   skipBackup: true,
		  //   path:'image'
		  // }
		};
		ImagePicker.launchCamera(photoOptions,(response) =>{
			source = {
				uri:response.uri,
				isStatic:true,
			};
			this.setState({
				img:source,
				imgStyle:styles.imgStyle,
			});
		});
	}
	handleCreate(){
		fetch('http://169.254.177.230:3000/signup',{
			method:'POST',
			headers:{
				'Accept':'application/json',
				'Content-Type':'application/json'
			},
			body:JSON.stringify({
				name:this.state.name,
				email:this.state.email,
				password:this.state.password,
				birthday:this.state.birthday,
			})
		})
		.then((response) => response.json())
		.then((responseText) =>{
			if(1 ==responseText.code){
				alert(responseText.msg);
				this.props.onBack();	
			}
			else{
				alert(responseText.msg);
			}
			
		})
		.catch((error) => { 
			alert('网络错误');
		});
	}
	render(){
		return(
			<Image style={styles.background} source={require('./Background.png')}>

				<View style={styles.backInfo}>
					<TouchableOpacity onPress={this.props.onBack}>
						<Image style={{width:25,height:25,marginTop:25,marginLeft:15}} resizeMode="contain" source={require('./back.png')} />
					</TouchableOpacity>
				</View>

				<View style={styles.headInfo}>
					<Text style={{marginLeft:40,fontSize:30,color:'white'}}>New Account</Text>
				</View>

				
				<View style={styles.cameraInfo}>
					<TouchableOpacity onPress={this.takePhoto}>
					<View style={styles.cameraDetail}>
						<Image style={this.state.imgStyle} source={this.state.img} />
					</View>
					</TouchableOpacity>
				</View>
				

				<View style={styles.textInfo}>
					<Image resizeMode="contain" style={styles.textHead} source={require('./username.png')} />
					<TextInput onChangeText={(text) => this.setState({name:text})} style={styles.textBody} placeholder="Name" />
				</View>

				<View style={styles.textInfo}>
					<Image resizeMode="contain" style={styles.textHead} source={require('./email.png')} />
					<TextInput onChangeText={(text) => this.setState({email:text})} style={styles.textBody} placeholder="Email" />
				</View>

				<View style={styles.textInfo}>
					<Image resizeMode="contain" style={styles.textHead} source={require('./password.png')} />
					<TextInput onChangeText={(text) => this.setState({password:text})} secureTextEntry={true} style={styles.textBody} placeholder="Password" />
				</View>

				<View style={styles.textInfo}>
					<Image resizeMode="contain" style={styles.textHead} source={require('./birthday.png')} />
					<TextInput onChangeText={(text) => this.setState({birthday:text})} style={styles.textBody} placeholder="Birthday" />
				</View>

				<View style={styles.buttonInfo}>
					<TouchableOpacity onPress={this.handleCreate.bind(this)}>
						<View style={styles.buttonDetail}>
							<Text>Create</Text>
						</View>
					</TouchableOpacity>
				</View>
			</Image>
		);
	}
}