import React, { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import verificarCondicao from "../domain/verificarCondicao"

export default function(props) {


    return (
        <View style={styles.card}>
            <Text style={styles.title}>{ props.data }</Text>
            <Text>🔻{ props.temperaturaMinima }° 🔺{ props.temperaturaMaxima }°</Text>
            <Text>{ props.condicaoDesc }</Text>
        </View>
    )

    

    
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: 5,
        padding: 5
    },
    condicao: {
        fontSize: 20,
        textAlign: 'center'
    },
    title: {
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})
