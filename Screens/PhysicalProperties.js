import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import MainContainer from '../Components/MainContainer'
import Heading from '../Components/Heading'
import Input from '../Components/input';
import LoginButton from '../Components/LoginButton';
import { RadioButton } from 'react-native-paper';
import RegisterButton from '../Components/RegisterButton'


export default function PhysicalProperties({navigation}) {
    const [age, setAge] = React.useState('');
    const [height, setHeight] = React.useState('');
    const [weight, setWeight] = React.useState('');
    const [checked, setChecked] = React.useState('first');

    const calculate = () => {
      console.log("age: " + age)
      console.log("height: " + height)
      console.log("weight: " + weight)
      console.log("Boy Kütle Index: " + (weight/(height*height)*10000))

      if (age<18 || weight<=0 || height<=0 || age===null || weight ===null || height===null) {
        alert("INVALID ENTRY OR UNFILLED FIELD!")
      }
      else if ((weight/(height*height)*10000) < 18.49 ) {
        alert("You are below ideal weight")
      }
      else if ((weight/(height*height)*10000) > 18.5 && (weight/(height*height)*10000) < 24.99 ) {
        alert("You are at the ideal weight for exercise. You're perfect for climbing.")
      }
      else if ((weight/(height*height)*10000) > 25 && (weight/(height*height)*10000) < 29.99 ) {
        alert("You're above your ideal weight for exercise.")
      }
      else if ((weight/(height*height)*10000) > 30 ) {
        alert("You're well above to your ideal weight. You aren't suitable for climbing.")
      }
      else 
       alert("Invalid entry. Please try again.")
    }
  
    return (
    
    <ImageBackground source={require('../assets/background3.jpg')} style={styles.background}>
    <MainContainer>
    <Heading style={styles.title}>BODY MASS INDEX (BMI)</Heading>
    
    <View style={styles.checkboxContainer}>
     <RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
        style={styles.checkbox}
      />
      <Text style={styles.label}>MALE</Text>
      <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
        style={styles.checkbox}
      /> 
      <Text style={styles.label}>FEMALE</Text>
    </View>
      
      <Input
      style= {styles.input} 
      placeholder= {'Enter Your Age'} 
      keyboardType= {'numeric'}
      value = {age}
      onChangeText = {setAge}
      />
      <Input
      style= {styles.input} 
      placeholder= {'Enter Your Height(cm)'} 
      keyboardType= {'numeric'}
      value = {height}
      onChangeText = {setHeight}
      />
      <Input
      style= {styles.input} 
      placeholder= {'Enter Your Weight(kg)'} 
      keyboardType= {'numeric'}
      value = {weight}
      onChangeText = {setWeight}
      />
      <LoginButton
      title= {'calculate!'} 
      style= {styles.loginButton} 
      onPress= {() => {
        calculate();
      }}
      />
      <RegisterButton 
      title= {"SKIP TO EXERCISE TYPE!"}
      style={styles.registerButton}
       onPress= {() => {
         navigation.navigate('VideoScreen');
         }}
      />
      </MainContainer>
      </ImageBackground>
        
    ) 
}
const styles = StyleSheet.create({
    
    checkboxContainer: {
      flexDirection: "row",
      marginBottom: 20,
      marginTop: 35,
      alignItems: 'center',
      justifyContent: 'center'
    },
    input: {
        marginVertical: 8,
    },
    checkbox: {
      alignSelf: "center",
    },
    label: {
      margin: 8,
      fontWeight: 'bold',
      fontSize: 18,
      color: '#fff8dc'
    },
    loginButton: {
        marginVertical: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 50
    },
    registerButton: {
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 50
      
    },
      title: {
          padding: 25,
          fontWeight: 'bold',
          textAlign: 'center' ,
          marginTop: 30,
          color: '#fff8dc'
      },
      background: {
        flex: 1,
        resizeMode: "cover",
        
    }
  });
