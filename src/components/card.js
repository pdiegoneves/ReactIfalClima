import React, { useState } from "react"
import { StyleSheet, Text, View } from "react-native"


export default function(props) {


    return (
        <View style={styles.card}>
            <Text>Tempo agora em {props.cidade}</Text>
            <Text>{ props.temperatura }° </Text>
            <Text></Text>
        </View>
    )

    

    
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ccc',
        borderRadius: 20,
        padding: 15
    }
})


async function getData() {
    
}