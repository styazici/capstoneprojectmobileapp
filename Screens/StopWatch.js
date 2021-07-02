import React from 'react';
import Heading from '../Components/Heading'
import MainContainer from '../Components/MainContainer'
import { StyleSheet,Text, ImageBackground } from 'react-native';
import {Stopwatch} from 'react-native-stopwatch-timer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Input from '../Components/input';
import RegisterButton from '../Components/RegisterButton';


export default function StopWatch({navigation}) {
    const [isStopwatchStart, setIsStopwatchStart] = React.useState(false);
    const [resetStopwatch, setResetStopwatch] = React.useState(false);
    const [movementRepeat, setMovementRepeat] = React.useState('');
    const [movementName, setMovementName] = React.useState('');
    return (
      <ImageBackground source={require('../assets/background3.jpg')} style={styles.background}>
        <MainContainer>
        <Heading style={styles.title}>WORK OUT</Heading> 

        <Input
            style= {styles.input} 
            placeholder= {'Movement Name'} 
           
            value = {movementName}
            onChangeText = {setMovementName}
          />  
        <Input
            style= {styles.input} 
            placeholder= {'Movement Repetition'} 
            keyboardType= {'numeric'}
            value = {movementRepeat}
            onChangeText = {setMovementRepeat}
          />
          
        
          <Stopwatch
            laps
            msecs
            
            start={isStopwatchStart}
            // To start
            reset={resetStopwatch}
            // To reset
            options={options}
            // Options for the styling
        /*   getTime={(time) => {
             console.log(time);
            }}
        */
          />

          <TouchableOpacity
            onPress={() => {
              setIsStopwatchStart(!isStopwatchStart);
              setResetStopwatch(false);
            }}>
            <Text style={styles.buttonText}>
              {!isStopwatchStart ? 'START' : 'STOP'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIsStopwatchStart(false);
              setResetStopwatch(true);
            }}>
            <Text style={styles.buttonText}>RESET</Text>
          </TouchableOpacity> 

          <RegisterButton
            title= {"PRESS HERE TO SEE MUSCLE GRAPHS"}
            style= {styles.registerButton}
            onPress= {() => {
            navigation.navigate('Graphs');
         }}
        />  
    </MainContainer>
    </ImageBackground>
    )
}
const styles = StyleSheet.create({
    input: {
    marginTop: 40,
    width: '60%',
    textAlign: 'center',
    alignItems: 'center',
    marginLeft: 80
    },
    title: {
      textAlign: 'center',
      fontSize: 35,
      fontWeight: 'bold',
      padding: 20,
      color: '#f0f8ff'
    },
    
    buttonText: {
    textAlign: 'center',
      fontSize: 20,
      marginTop: 10,
      fontWeight: 'bold',
      color: '#f0ffff'
    },
    registerButton: {
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 50,
      marginTop: 100
    },
    background: {
      flex: 1,
      resizeMode: "cover",
      
  },
    
  });
  
  const options = {
    container: {
      backgroundColor: '#CD5C5C',
      padding: 5,
      borderRadius: 5,
      width: 200,
      alignItems: 'center',
      marginLeft: 100,
      marginTop: 40
    },
    text: {
      fontSize: 25,
      color: '#FFF',
      marginLeft: 7,
    },
    
    
  };
