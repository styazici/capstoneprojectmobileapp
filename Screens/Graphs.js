import React from 'react'
import { StyleSheet, ImageBackground, Image, Dimensions } from 'react-native'
import Heading from '../Components/Heading'
import ImageZoom from 'react-native-image-pan-zoom';

export default function Graphs() {
    

    return (
        <ImageBackground source={require('../assets/background3.jpg')} style={styles.background}>
        
            <Heading style={styles.title} > GRAPHS </Heading>
            
            
        
            <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={782}
                       imageHeight={678}
                       style={styles.imagezoom}
                       
                       >
                <Heading style={styles.titlepinch} > Extensor Digitorum Pinch Graph </Heading>
                <Image style={styles.image}
                       source={require('../assets/ExtensorDigitorumPinch.jpg')}/>
                
                <Heading style={styles.titlepinch} > Extensor Digitorum Crimp Graph </Heading>   
                <Image style={styles.image2}
                       source={require('../assets/ExtensorDigitorumCrimp.jpg')}/>
                
                <Heading style={styles.titlepinch} > Flexor Digitorum Superficialis Crimp Graph </Heading>   
                <Image style={styles.image2}
                       source={require('../assets/FlexorDigitorumSuperficialisCrimp.jpg')}/>
            
            </ImageZoom>
            
            
        </ImageBackground> 
        
    )
}
const styles = StyleSheet.create ({
    title: {
        textAlign: 'center',
        fontSize: 35,
        fontWeight: 'bold',
        padding: 20,
        color: '#f0f8ff'
      },
      background: {
        flex: 1,
        resizeMode: "cover",     
    },
    image: {
        width: 782,
        height: 678,
        resizeMode: 'stretch',
        flex: 1,
    },
    image2: {
        width: 782,
        height: 678,
        resizeMode: 'stretch',
        flex: 1,
        marginTop: 20
    },
    imagezoom: {
        alignItems: 'center',
        justifyContent: 'flex-start',
       
    },
    titlepinch: {
        textAlign: 'center',
        fontSize: 21,
        fontWeight: 'bold',
        padding: 10,
        color: '#CD5C5C'
    }
});