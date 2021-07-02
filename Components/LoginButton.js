import React from 'react'
import {  Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function LoginButton({title, style, onPress}) {
    return (
        <TouchableOpacity style= {[styles.container, style]} onPress= {onPress}>
            <Text style= {styles.text}>
                {title.toUpperCase()}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#CD5C5C',
        width: '75%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderRadius: 8,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    }
})
