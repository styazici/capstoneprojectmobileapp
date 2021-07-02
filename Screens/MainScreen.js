import React from 'react'
import {StyleSheet,Text, ImageBackground } from 'react-native';
import MainContainer from '../Components/MainContainer';
import Heading from '../Components/Heading';
import LoginButton from '../Components/LoginButton';
import ImageDetails from '../Components/ImageDetails';


export default function MainScreen({navigation}) {
    return (
        <ImageBackground source={require('../assets/mainscreenbackground.jpg')} style={styles.background}>
        <MainContainer>
            <Heading style={styles.title1}>
              WELCOME TO FT USING GUIDE!
            </Heading>

            <ImageDetails imageSource={require('../assets/giphy.gif')} style={styles.gif}  />

            <Heading style={styles.title}>
                Step 1
            </Heading>
            <Text style={styles.text}>
                Calculate Body/Mass Index to see whether you are appropriate for climbing or not,
                and watch tutorials!
            </Text>
            <Heading style={styles.title}>
                Step 2
            </Heading>
            <Text style={styles.text}>
                Save your exercises, use stopwatch and
                Analyze the muscle graphs!
            </Text>

            <LoginButton 
                title= {'START!'} 
                style= {styles.startButton} 
                onPress= {() => {
                navigation.navigate('PhysicalProperties');
      }} />
        </MainContainer>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    title: {
        padding: 26,
        fontSize: 30,
        fontWeight: 'bold',
        
        textAlign: 'center',
        
        color: '#CD5C5C'
        
},
    title1: {
        padding: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#CD5C5C'
        
        
    },
    text: {
        fontSize: 20,
        fontWeight: '700',
        color: '#f0ffff'
    },
    startButton: {
    marginLeft: 50,
    marginVertical: 30,
    alignItems: 'center',
    backgroundColor: '#CD5C5C'
    
},
    gif: {
     width: 360,
     height: 216,
     marginLeft: 12,  
 },
 background: { 
    flex: 1,
  resizeMode: "cover",
 }
})