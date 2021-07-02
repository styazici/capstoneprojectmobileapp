
import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import Heading from '../Components/Heading';
import Input from '../Components/input'
import LoginButton from '../Components/LoginButton';
import Error from '../Components/Error';
import AuthContainer from '../Components/AuthContainer';



export default function Register({navigation}) {

  
  
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');

  return (
    <ImageBackground source={require('../assets/background2.jpg')} style={styles.background}> 
    <AuthContainer>
    
      <Heading style= {styles.title}>SIGN UP</Heading>
      <Error error= {''}/>
      <Input 
      style= {styles.input} 
      placeholder= {'Your Name'} 
      keyboardType= {'default'}
      value = {name}
      onChangeText = {setName}
      />
      <Input 
      style= {styles.input} 
      placeholder= {'Enter your email address'} 
      keyboardType= {'email-address'}
      value = {email}
      onChangeText = {setEmail}
      />
      <Input 
      style= {styles.input} 
      placeholder= {'Enter Password'} 
      secureTextEntry
      value= {password}
      onChangeText = {setPassword}
      />
      <Input 
      style= {styles.input} 
      placeholder= {'Confirm Password'} 
      secureTextEntry
      />
      <LoginButton title= {'Register'} 
      style= {styles.loginButton} 
      onPress= {() => {
        navigation.navigate('Login');
      }} />
        
    
    </AuthContainer>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    input: {
        marginVertical: 8,
        backgroundColor: 'rgba(0.5, 0.5, 0.5, 0.5)'
},

    title: {
        marginBottom: 18,
        fontWeight: 'bold'
},
    loginButton: {
        marginVertical: 25,
    },
    background: { 
      flex: 1,
    resizeMode: "cover",
    }
    }
);
