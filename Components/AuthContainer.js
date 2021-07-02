import React from 'react'
import {StyleSheet, View} from 'react-native'

export default function AuthContainer({children}) {
    return (
        <View style= {style.cointainer}>{children}</View>
    )
}

const style = StyleSheet.create({
    cointainer: {
        flex:1,
        padding: 35,
        paddingTop: 75,
        alignItems: 'center',
      
    }
})
