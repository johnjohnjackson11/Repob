import React, { Component } from 'react';
import { AppRegistry,StyleSheet, KeyboardAvoidingView, View, ActivityIndicator,
        TouchableOpacity, Image, Keyboard, TextInput,Alert} from 'react-native';
import Dimensions from 'Dimensions';
import { Container, Header, Content, Button, Text, Grid, Col } from 'native-base';

import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import Background from '../components/background';
import Logo from '../components/logo';

import usernameImg from '../src/img/username.png';
import passwordImg from '../src/img/password.png';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPass: true,
      press: false,
      username:'',
      password:''
    };
    this.showPass = this.showPass.bind(this);
  }
  showPass() {
    this.state.press === false
      ? this.setState({showPass: false, press: true})
      : this.setState({showPass: true, press: false});
  }
  login = () =>{
      const {username,password} = this.state;
      if(username==""){
        alert("Please enter name.");
      }
      else if(password==""){
      alert("Please enter password.");
      }
      else{
      fetch('http://192.168.0.13/assessment/login.php',{
        method:'post',
        header:{
          'Accept': 'application/json',
          'Content-type': 'application/json'
        },
        body:JSON.stringify({
          username: username,
          password: password
        })

      })
      .then((response) => response.json())
       .then((responseJson)=>{
         if(responseJson == "ok"){
           Alert.alert(
             'Success',
             'Welcome ' + username,
             [
               {text:'ok', onPress: () => this.props.navigation.navigate('HomeScreen') }
             ]
           );
         }else{
           alert(responseJson);
         }
       })
       .catch((error)=>{
       console.error(error);
       });
      }
      Keyboard.dismiss();
    }
  static navigationOptions = {
  header: null,
};
  render() {
    return (
      <Background>
        <Logo/>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.container}>
          <View style={styles.inputWrapper}>
            <Image source={require('../src/img/username.png')} style={styles.inlineImg} />
            <TextInput
              style={styles.input}
              placeholder='Enter Username'
              placeholderTextColor='#424242'
              underlineColorAndroid="transparent"
              onChangeText={username => this.setState({username})}
            />
          </View>

          <View style={styles.inputWrapper}>
            <Image source={require('../src/img/password.png')} style={styles.inlineImg} />
            <TextInput
              style={styles.input}
              secureTextEntry={this.state.showPass}
              placeholder='Enter Password'
              placeholderTextColor='#424242'
              underlineColorAndroid="transparent"
              onChangeText={password => this.setState({password})}
            />
          </View>
        	</View>
          <View style={styles.btncontainer}>
            <View style={styles.LoginBtn}>
           
               
            <Button small rounded danger
              
              onPress={this.login}
              >
              <Text> LOGIN </Text>
            </Button>
            
            </View>
            <View style={styles.RegBtn}>
            
           
            <Button small rounded danger
            
            
            onPress={() => this.props.navigation.navigate('RegisterScreen')}
            >
              <Text> REGISTER </Text>
            </Button>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Background>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 40;

const styles = StyleSheet.create({
    container: {
      flex: 2,
      alignItems: 'center',
    },
    btnEye: {
      position: 'absolute',
      top: 55,
      right: 28,
    },
    iconEye: {
      width: 25,
      height: 25,
      tintColor: 'rgba(0,0,0,0.2)',
    },
    input: {
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
      width: DEVICE_WIDTH - 40,
      height: 40,
      marginHorizontal: 10,
      
      paddingLeft: 45,
      borderRadius: 20,
      color: '#000000',
    },
    inputWrapper: {
      flex: 1,
    },
    inlineImg: {
      position: 'absolute',
      zIndex: 99,
      width: 22,
      height: 22,
      left: 25,
      top: 9,
    },
    btncontainer: {
      flexDirection: 'row',
      flex: 2,
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginHorizontal:10,
    },
    LoginBtn: {
        flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      //backgroundColor: '#d4e3fc',
      height: MARGIN,
      borderRadius: 20,
      padding: 20,
      marginHorizontal: 10,
      zIndex:100,
    },
    RegBtn: {
        flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      //backgroundColor: '#d4e3fc',
      height: MARGIN,
      borderRadius: 20,
      padding: 20,
      marginHorizontal: 10,
      zIndex:100,
    },
    btnText: {
      color:'black',
      fontWeight: 'bold',
    },
    text: {
      color: 'black',
      backgroundColor: 'transparent',
    },
  });

AppRegistry.registerComponent('repobsession', () => LoginScreen);
