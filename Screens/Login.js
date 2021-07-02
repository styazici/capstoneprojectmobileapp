
import React  from 'react';
import { StyleSheet,ImageBackground } from 'react-native';
import Heading from '../Components/Heading';
import Input from '../Components/input'
import LoginButton from '../Components/LoginButton';
import RegisterButton from '../Components/RegisterButton';
import Error from '../Components/Error';
import AuthContainer from '../Components/AuthContainer';
import ImageDetails from '../Components/ImageDetails';




export default function Login({navigation}) {
  
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  

  return (
    <ImageBackground source={require('../assets/deneme12.jpg')} style={styles.background}>
    <AuthContainer>
  
      <Heading style={styles.title1}>FOREARM TRAINER</Heading>
      <Error error= {''}/>
      
      <ImageDetails imageSource={require('../assets/ForearmTrainerIcon.png')}/>


      <Input 
      style= {styles.input} 
      placeholder= {'Enter your email address'} 
      keyboardType= {'email-address'}
      value = {email}
      onChangeText = {setEmail}
      />
      
      <Input 
      style= {styles.input} 
      placeholder= {'Please enter your password'} secureTextEntry
      value = {password}
      onChangeText = {setPassword}
      />
      
      <LoginButton 
      title= {'login'} 
      style= {styles.loginButton} 
      onPress= {() => {
        navigation.navigate('MainScreen');
      }} />

      <RegisterButton 
      title= {"CLICK HERE TO SIGN UP!"}
       onPress= {() => {
         navigation.navigate('Register');
         }}
        />

    </AuthContainer>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    
},
    input: {
        marginVertical: 8,
},

    loginButton: {
        marginVertical: 25,
    },
    title1: {
      fontWeight: 'bold',
    }
    }
);
