import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
	TouchableOpacity,
	TextInput,
	TimePickerAndroid,
	DatePickerAndroid,
	Picker
} from 'react-native';
var Dimensions = require('Dimensions');
var DimensionsWidth = Dimensions.get('window').width;
var DimensionsHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
	pageBg:{
		width:DimensionsWidth,
		height:DimensionsHeight,
	},
	headInfo:{
		flex:1,
	},
	headImage:{
		flex:1,
		width:DimensionsWidth,
		height:DimensionsHeight*0.333,
	},
	crossFont:{
		flex:1,
		justifyContent:'center',
		alignItems:'flex-start',
	},
	imageFont:{
		flex:1,
		justifyContent:'center',
		alignItems:'flex-end',
	},
	editFont:{
		position:'absolute',
		bottom:-30,
		right:25,
		zIndex:999,
	},
	editBg:{
		borderRadius:30,
		justifyContent:'center',
		alignItems:'center',
		width:60,
		height:60,
		backgroundColor:'#f36',
	},
	bodyInfo:{
		flex:2,
		paddingLeft:20,
		paddingRight:20,
	},
	fontInfo:{
		flexDirection:'row',
	},
	head:{
		flex:1,
		justifyContent:'center',
		alignItems:'flex-start',
	},
	dateDetail:{
		flex:1,
		flexDirection:'row',
		justifyContent:'flex-start',
		alignItems:'center',
	},
	dateDetailLeft:{
		flex:1,
		justifyContent:'center',
		alignItems:'flex-start',
	},
	dateDetailCenter:{
		flex:3,
		justifyContent:'center',
		alignItems:'flex-end',
	},
	dateDetailRight:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
	},
	sortInfo:{
		flex:2,
		flexDirection:'row',
		justifyContent:'flex-start',
		alignItems:'center',
	},
	sortInfoLeft:{
		flex:2,
		justifyContent:'center',
		alignItems:'flex-start',
	},
	sortInfoCenter:{
		flex:2,
		justifyContent:'center',
		alignItems:'flex-start',
	},
	sortInfoRight:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
	},
	locationInfo:{
		flex:1,
		flexDirection:'row',
		justifyContent:'flex-start',
		alignItems:'center',
	},
	notify:{
		flex:1,
		flexDirection:'row',
		justifyContent:'flex-start',
		alignItems:'center',
	},
	member:{
		flex:1,
		flexDirection:'row',
		justifyContent:'flex-start',
		alignItems:'center',
	},
	repeat:{
		flex:1,
		flexDirection:'row',
		justifyContent:'flex-start',
		alignItems:'center',
	},
	fontHead:{
		color:'#d0d0d0',
		fontSize:16,
	},
	infoTitle:{
		flex:1,
		justifyContent:'center',
		alignItems:'flex-start',
	},
	infoBody:{
		flex:1,
		justifyContent:'center',
		alignItems:'flex-end',
	},
});
export default class Create extends Component{
	constructor(props){
		super(props);
		this.state={
			title: 'Title',
			begin:'9:00am',
			end:'10:00am',
			year:'2016-09-08',
			loaction:'杭州',
			notice:'5',
			isRepeat:'no'
		};
	}
	getOclock(text){
		var val0 = this.state.notice;
		this.setState({
			notice:text
		});
		this.sendOclock(text,val0);
	}
	getIsrepeat(text){
		var val0 = this.state.isRepeat;
		this.setState({
			isRepeat:text
		});
		this.sendIsrepeat(text,val0);
	}
	async getYear(){
		try{
			const {action, year, month, day} = await DatePickerAndroid.open({
				date: new Date(),
			});

			if(action !== DatePickerAndroid.dismissedAction){
				let selectDate = year+"-"+(month+1)+"-"+day;
				this.sendDate(selectDate);
			}
		} catch({code, message}) {
			console.warn('Cannot open date picker', message);
		}
	}
	async getBeginTime(){
		try{
			const {action, hour, minute} = await TimePickerAndroid.open({
				hour:14,
				minute:0,
				is24Hour:false,
			});
			if(action !== TimePickerAndroid.dismissedAction){
				var begin = hour+':'+minute;
				this.sendBegin(begin);
			}
		} catch({code,message}) {
			alert("error"+message);
		}
	}
	async getEndTime(){
		try{
			const {action, hour, minute} = await TimePickerAndroid.open({
				hour:14,
				minute:0,
				is24Hour:true,
			});
			if(action !== TimePickerAndroid.dismissedAction){
				var end = hour+':'+minute;
				this.sendEnd(end);
			}
		} catch({code,message}) {
			alert("error"+message);
		}
	}
	sendTitle(){
		var title = this.state.title;
		fetch('http://169.254.177.230:3000/create/updateTitle',{
			method: 'POST',
			headers:{
				'Accept' : 'application/json',
				'Content-Type' : 'application/json'
			},
			body:JSON.stringify({
				title:title
			})
		})
		.then((responseText) => responseText.json())
		.then((data) => {
			if(data.code==1){
				alert('修改成功');
			}
			else{
				alert('修改失败');
			}
		})
		.catch((error) => {
			alert('网络错误');
		});
	}
	sendDate(text){
		fetch('http://169.254.177.230:3000/create/updateDate',{
			method: 'POST',
			headers:{
				'Accept' : 'application/json',
				'Content-Type' : 'application/json'
			},
			body:JSON.stringify({
				title:this.state.title,
				date: text
			})
		})
		.then((responseText) => responseText.json())
		.then((data) => {
			if(data.code==1){
				alert('修改成功');
				this.setState({
					year:text
				});
			}
			else{
				alert('修改失败');
			}
		})
		.catch((error) => {
			alert('网络错误');
			this.setState({
				year:text
			});
		});
	}
	sendBegin(text){
		fetch('http://169.254.177.230:3000/create/updateBegin',{
			method: 'POST',
			headers:{
				'Accept' : 'application/json',
				'Content-Type' : 'application/json'
			},
			body:JSON.stringify({
				title:this.state.title,
				begin:text
			})
		})
		.then((responseText) => responseText.json())
		.then((data) => {
			if(data.code==1){
				alert('修改成功');
				this.setState({
					begin:text
				});
			}
			else{
				alert('修改失败');
			}
		})
		.catch((error) => {
			alert('网络错误');
			this.setState({
				begin:text
			});
		});
	}
	sendEnd(text){
		alert(text);
		fetch('http://169.254.177.230:3000/create/updateEnd',{
			method: 'POST',
			headers:{
				'Accept' : 'application/json',
				'Content-Type' : 'application/json'
			},
			body:JSON.stringify({
				title:this.state.title,
				end:text
			})
		})
		.then((responseText) => responseText.json())
		.then((data) => {
			if(data.code==1){
				alert('修改成功');
				this.setState({
					end: text
				});
			}
			else{
				alert('修改失败');
			}
		})
		.catch((error) => {
			alert('网络错误');
			this.setState({
				end: text
			});
		});
	}
	sendLocation(){
		var location = this.state.loaction;
		fetch('http://169.254.177.230:3000/create/updateLocation',{
			method: 'POST',
			headers:{
				'Accept' : 'application/json',
				'Content-Type' : 'application/json'
			},
			body:JSON.stringify({
				title:this.state.title,
				location:location
			})
		})
		.then((responseText) => responseText.json())
		.then((data) => {
			if(data.code==1){
				alert('修改成功');
			}
			else{
				alert(location);
				alert('修改失败');
			}
		})
		.catch((error) => {
			alert('网络错误');
		});
	}
	sendOclock(text,val){
		var oclock = text;
		fetch('http://169.254.177.230:3000/create/updateOclock',{
			method: 'POST',
			headers:{
				'Accept' : 'application/json',
				'Content-Type' : 'application/json'
			},
			body:JSON.stringify({
				title:this.state.title,
				oclock:oclock
			})
		})
		.then((responseText) => responseText.json())
		.then((data) => {
			if(data.code==1){
				
			}
			else{
				alert('修改失败');
				this.setState({
					notice:val
				});
			}
		})
		.catch((error) => {
			alert('网络错误');
		});
	}
	sendIsrepeat(text,val){
		fetch('http://169.254.177.230:3000/create/updateIsrepeat',{
			method: 'POST',
			headers:{
				'Accept' : 'application/json',
				'Content-Type' : 'application/json'
			},
			body:JSON.stringify({
				title:this.state.title,
				isreapt:text
			})
		})
		.then((responseText) => responseText.json())
		.then((data) => {
			if(data.code==1){
				
			}
			else{
				alert('修改失败');
				this.setState({
					isRepeat:val
				});
			}
		})
		.catch((error) => {
			alert('网络错误');
		});
	}
	render(){
		return(
			<View style={styles.pageBg}>
				<View style={styles.headInfo}>
					<Image style={styles.headImage} resizeMode="cover" source={require('./headBg.png')}>
						<View style={styles.fontInfo}>
							<TouchableOpacity onPress={this.props.onColse}>
							<View style={styles.crossFont}>
								<Image resizeMode="contain" style={{width:25,marginTop:30,marginLeft:15}} source={require('./cross.png')} />
							</View>
							</TouchableOpacity>
							<View style={styles.imageFont}>
								<Image resizeMode="contain" style={{width:25,marginTop:30,marginRight:15}} source={require('./image.png')} />
							</View>
						</View>
						<View style={{justifyContent:'center',marginLeft:30,marginTop:40}}>
							<Text style={{fontSize:35,color:'white'}}>Design Meeting</Text>
						</View>
						<View style={styles.editFont}>
							<View style={styles.editBg}>
								<Image resizeMode='contain' style={{width:30}} source={require('./edit.png')} />
							</View>
						</View>
					</Image>
				</View>

				<View style={styles.bodyInfo}>
					<View style={styles.head}>
						<TextInput onSubmitEditing={this.sendTitle.bind(this)} blurOnSubmit={true} onChangeText={(text) => this.setState({title:text})} style={{width:DimensionsWidth*0.7}}>{this.state.title}</TextInput>
					</View>
					<View style={styles.dateDetail}>
						<View style={styles.dateDetailLeft}>
							<Text style={styles.fontHead}>Date</Text>
						</View>
						<View style={styles.dateDetailCenter}>
							<TouchableOpacity onPress={this.getYear.bind(this)}>
								<Text>{this.state.year}</Text>
							</TouchableOpacity>
						</View>
						<View style={styles.dateDetailRight}>
							<Image style={{width:20}} resizeMode='contain' source={require('./plus.png')} />
						</View>
					</View>
					<View style={styles.sortInfo}>
						<View style={styles.sortInfoLeft}>
							<Text style={styles.fontHead}>From</Text>
							<TouchableOpacity onPress={this.getBeginTime.bind(this)}>
								<Text>{this.state.begin}</Text>
							</TouchableOpacity>
						</View>

						<View style={styles.sortInfoCenter}>
							<Text style={styles.fontHead}>To</Text>
							<TouchableOpacity onPress={this.getEndTime.bind(this)}>
								<Text ref={'begin'}>{this.state.end}</Text>
							</TouchableOpacity>
						</View>

						<View style={styles.sortInfoRight}>
							<Image style={{width:20}} resizeMode='contain' source={require('./minus.png')} />
						</View>
					</View>
					<View style={styles.locationInfo}>
						<View style={styles.infoTitle}>
							<Text style={styles.fontHead}>Location</Text>
						</View>
						<View style={styles.infoBody}>
							<TextInput onSubmitEditing={this.sendLocation.bind(this)} onChangeText={(text) => this.setState({loaction:text})} blurOnSubmit={true} style={{width:DimensionsWidth*0.25,alignSelf:'flex-end'}}>{this.state.loaction}</TextInput>
						</View>
					</View>
					<View style={styles.notify}>
						<View style={styles.infoTitle}>
							<Text style={styles.fontHead}>Notification</Text>
						</View>
						<View style={styles.infoBody}>
							<Picker 
								style={{width:DimensionsWidth*0.25}}
								selectedValue = {this.state.notice}
								onValueChange = {this.getOclock.bind(this)}>
								<Picker.Item label='5分钟前' value='5' />
								<Picker.Item label='10分钟前' value='10' />
								<Picker.Item label='20分钟前' value='20' />
							</Picker>

						</View>
					</View>
					<View style={styles.member}>
						<View style={styles.infoTitle}>
							<Text style={styles.fontHead}>Who's going</Text>
						</View>
						<View style={styles.infoBody}>
							<View>
								<Image />
							</View>
						</View>
					</View>
					<View style={styles.repeat}>
						<View style={styles.infoTitle}>
							<Text style={styles.fontHead}>Repeat</Text>
						</View>
						<View>
							<Picker 
								style={{width:DimensionsWidth*0.25}}
								selectedValue = {this.state.isRepeat}
								onValueChange = {this.getIsrepeat.bind(this)}>
								<Picker.Item label='No' value='no' />
								<Picker.Item label='Yes' value='yes' />
							</Picker>
						</View>
					</View>
				</View>
			</View>
		);
	}
}