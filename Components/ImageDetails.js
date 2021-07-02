import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

export default function ImageDetails({style, ...props}) {
    return (
        <View>
            <Image 
            {...props}
            style={[styles.imageStyle, style]}
            source={props.imageSource}/>
        </View>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        alignItems: 'center',
        justifyContent: 'center',
    }

});

