import React from 'react'
import { StyleSheet, View, ImageBackground } from 'react-native'
import MainContainer from '../Components/MainContainer'
import Heading from '../Components/Heading'
import YoutubePlayer from 'react-native-youtube-iframe';
import LoginButton from '../Components/LoginButton';

export default function VideoScreen({navigation}) {
    return (
    <ImageBackground source={require('../assets/signupbackground.jpg')} style={styles.background}>
     <MainContainer >
         <Heading style={styles.title}> TUTORIALS </Heading>
         <Heading style={styles.title2}>
                OPEN HANDED PINCHING
        </Heading>
         <View>
         <YoutubePlayer
                
             height={230}
             play={false}
             videoId={'j9C9Dqa-x5c'}
         />
         </View>
         <Heading style={styles.title2}>
                CRIMPING
        </Heading>
         <View>
         <YoutubePlayer
             height={230}
             play={false}
             videoId={'ViqlLDmurk0'}
         />
         </View>
         <LoginButton
            title= {'START WORKING OUT!'} 
            style= {styles.loginButton} 
            onPress= {() => {
                navigation.navigate('StopWatch');
            }}
      />
     </MainContainer>
     </ImageBackground>   
    )
}
const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        textAlign: 'center'
    },
    title2: {
        padding: 25,
        fontSize: 20,
        fontWeight: 'bold'
    },
    loginButton: {
        marginVertical: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 50
    },
    background: {
        flex: 1,
        resizeMode: "cover",  
    }
    
    
    
});
