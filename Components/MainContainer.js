import React from 'react'
import {StyleSheet, View} from 'react-native'

export default function AuthContainer({children}) {
    return (
        <View style= {style.cointainer}>{children}</View>
    )
}

const style = StyleSheet.create({
    cointainer: {
        padding: 25,
        
    }
})
