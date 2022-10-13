import React, { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import verificarCondicao from "../domain/verificarCondicao"


export default function(props) {


    return (
        <View style={styles.card}>
            <Text style={styles.title}>{ props.data } - { props.hora }</Text>
            <Text>Tempo agora em {props.cidade}</Text>
            <Text>{ props.temperatura }° 🔻{ props.temperaturaMinima }° 🔺{ props.temperaturaMaxima }°</Text>
            <View style={styles.condicaoGroup}>
            <Text style={styles.condicao}>{ verificarCondicao(props.condicao)} </Text>
            <Text style={styles.condicaoDesc}>{ props.condicaoDesc }</Text>
            </View>
        </View>
    )    
}



const styles = StyleSheet.create({
    card: {
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 20,
        padding: 15
    },
    condicaoGroup: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    condicao: {
        fontSize: 100,
        textAlign: 'center'
    },
    condicaoDesc:{
        textAlign: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})
