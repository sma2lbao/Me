import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
	TouchableOpacity,
	Vibration
} from 'react-native';

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
	pageBg:{
		width:ScreenWidth,
		height:ScreenHeight,
	},
	headInfo:{
		flex:1,
		flexDirection:'row',
	},
	headMenu:{
		flex:1,
		marginTop:ScreenWidth*0.08,
		marginLeft:ScreenWidth*0.04,
		justifyContent:'flex-start',
	},
	headPhoto:{
		flex:1,
		marginTop:ScreenWidth*0.08,
		marginRight:ScreenWidth*0.04,
		alignItems: 'flex-end',
	},
	photoDetail:{
		width:ScreenWidth*0.08,
		height:ScreenWidth*0.08,
	},
	dateInfo:{
		flex:2,
		flexDirection:'row',
		alignItems:'center',
	},
	dateCaledar:{
		flex:3,
		marginLeft:ScreenWidth*0.04,
	},
	dateLocal:{
		flex:1,
	},
	dateLocalHead:{
		flexDirection:'row',
	},
	noteInfo:{
		flex:6,
	},
	noteDetail:{
		flexDirection:'row',
		alignItems:'flex-start',
	},
	noteTime:{
		flex:1,
		justifyContent:'flex-start',
		alignItems:'center',
	},
	noteBody:{
		flex:4,
		justifyContent:'flex-start',
		alignItems:'flex-start',
	},
	noteMember:{
		flexDirection:'row',
		justifyContent:'flex-start',
		alignItems:'center',
	},
	memberDetail:{
		marginTop:ScreenWidth*0.04,
		marginRight:ScreenWidth*0.02,
		width:ScreenWidth*0.08,
		height:ScreenWidth*0.08,
	},
	bottomInfo:{
		flex:1,
		justifyContent: 'center',
        alignItems: 'flex-end',
	},
	plusDetail:{
		borderRadius:ScreenWidth*0.12*0.5,
		width:ScreenWidth*0.12,
		height:ScreenWidth*0.12,
		marginBottom:ScreenWidth*0.12,
		marginRight:ScreenWidth*0.04,
		backgroundColor:'#f36',
		justifyContent: 'center',
        alignItems: 'center',
	}
});

export default class Home extends Component{
	constructor(props){
		super(props);
		this.state = {
			location:'杭州',
			date:'',
			week:'',
		};
	}
	componentDidMount(){
		navigator.geolocation.getCurrentPosition(
	      (position) =>{
	      	fetch('http://169.254.177.230:3000/home',{
		    	method:'POST',
		    	headers:{
				  'Accept': 'application/json',
				  'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					location: position
				})
	    	})
		    .then((response) => response.json())
		    .then((data) => {
		    	alert(data.location);
		    	this.setState({
		    		location: data.location,
		    		date: data.date,
		    		week: data.week
		    	});
		    })
		    .catch((error) => {
		    	alert('网络错误');
		    	alert('获取得location为：'+JSON.stringify(position));
		    });
	      },
	      (error) => {alert('获取地理位置错误'+error.message)},
	      {
	        enableHighAccuracy: true,
	        timeout:20000,
	        maximumAge:1000
	      }
	    );
	}
	render(){
		return(
			<Image style={styles.pageBg} source={require('./bg.png')}>
				<View style={styles.headInfo}>
					<TouchableOpacity onPress={this.props.onMenu}>
					<View style={styles.headMenu}>
						<Image style={{width:ScreenWidth*0.06}} resizeMode='contain' source={require('./menu.png')} />
					</View>
					</TouchableOpacity>
					<View style={styles.headPhoto}>
						<TouchableOpacity onPress = {() => Vibration.vibrate()}>
						<Image style={styles.photoDetail} resizeMode='contain' source={require('./p1.png')} />
						</TouchableOpacity>
					</View>
				</View>

				<View style={styles.dateInfo}>
					<View style={styles.dateCaledar}>
						<Text style={{fontSize:30}}>{this.state.week}</Text>
						<Text>{this.state.date}</Text>
					</View>
					<View style={styles.dateLocal}>
						<View style={styles.dateLocalHead}>
							<Image style={{width:ScreenWidth*0.06}} resizeMode='contain' source={require('./sunny.png')}></Image>
							<Text style={{fontSize:30,color:'white'}}> 58.</Text>
						</View>
						<View><Text>{this.state.location}</Text></View>
					</View>
				</View>

				<View style={styles.noteInfo}>
					<View style={styles.noteDetail}>
						<View style={styles.noteTime}>
							<Text style={{fontSize:25}}>8</Text>
							<Text>AM</Text>
						</View>
						<View style={styles.noteBody}>
							<Text style={{fontSize:20}}>Design Meeting</Text>
							<Text style={{fontSize:18}}>Hangouts</Text>
							<View style={styles.noteMember}>
								<Image style={styles.memberDetail} source={require('./p2.png')} resizeMode='contain' />
								<Image style={styles.memberDetail} source={require('./p2.png')} resizeMode='contain' />
								<Image style={styles.memberDetail} source={require('./p2.png')} resizeMode='contain' />
							</View>
						</View>
					</View>
				</View>

				<View style={styles.bottomInfo}>
					<TouchableOpacity onPress={this.props.onPlus}>
						<View style={styles.plusDetail}>
							<Image style={{width:ScreenWidth*0.06}} resizeMode='contain' source={require('./plus.png')} />
						</View>
					</TouchableOpacity>
				</View>
			</Image>
		);
	}
}