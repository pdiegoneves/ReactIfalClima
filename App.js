import React, { useState } from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import axios from "axios"
import Card from './src/components/card'

export default function App() {
  const [temperatura, setTemperatura] = useState(0)
  const [cidade, setCidade] = useState('')


  const baseURL = "https://api.hgbrasil.com/weather?woeid=455880"
  let dados = {}
  const data = axios.get(baseURL)
  .then(res => {
      dados = {...res.data}
      setCidade(dados.results.city_name)
      setTemperatura(dados.results.temp)
  })


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Card 
        cidade = { cidade }
        temperatura = { temperatura }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00b4d8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
