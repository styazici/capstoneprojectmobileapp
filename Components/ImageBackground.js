import React from 'react'
import {ImageBackground,StyleSheet, View, Text } from 'react-native'

export default function ImageBackground2({...props}) {
    return (
        <View style={styles.container}>
            <ImageBackground {...props} source={props.backgroundSource} style={styles.image}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column"
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    text: {
      color: "white",
      fontSize: 42,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000a0"
    }
  });
