import React, { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import verificarCondicao from "../domain/verificarCondicao"

export default function(props) {


    return (
        <View style={styles.card}>
            <Text style={styles.title}>{ props.data } - { props.hora }</Text>
            <Text>Tempo agora em {props.cidade}</Text>
            <Text>{ props.temperatura }° 🔻{ props.temperaturaMinima }° 🔺{ props.temperaturaMaxima }°</Text>

            <Text>{ props.condicaoDesc }</Text>
            <Text style={styles.condicao}>{ verificarCondicao(props.condicao)} </Text>
        </View>
    )

    

    
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: 20,
        padding: 15
    },
    condicao: {
        fontSize: 100,
        textAlign: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})
