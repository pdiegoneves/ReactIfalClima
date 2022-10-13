import React, { useState } from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, View, Text } from 'react-native';
import axios from "axios"
import Card from './src/components/card'
import getBgImage from './src/domain/getBgImage'

export default function App() {
  const [temperatura, setTemperatura] = useState(0)
  const [temperaturaMinima, setTemperaturaMinima] = useState(0)
  const [temperaturaMaxima, setTemperaturaMaxima] = useState(0)
  const [cidade, setCidade] = useState('')
  const [dataAtual, setDataAtual] = useState('')
  const [horaAtual, setHoraAtual] = useState('')
  const [condicao, setCondicao] = useState('')
  const [condicaoDesc, setCondicaoDesc] = useState('')


  const baseURL = "https://api.hgbrasil.com/weather?woeid=455880?key=96c1f578"
  let dados = {}
  const data = axios.get(baseURL)
  .then(res => {
      setCidade(res.data.results.city)
      setTemperatura(res.data.results.temp)
      setDataAtual(res.data.results.date)
      setHoraAtual(res.data.results.time)
      setTemperaturaMinima(res.data.results.forecast[0].min)
      setTemperaturaMaxima(res.data.results.forecast[0].max)
      setCondicao(res.data.results.condition_code)
      setCondicaoDesc(res.data.results.forecast[0].description)
  })

  return (
    <View style={styles.container}>
    <ImageBackground source={getBgImage(condicao)} resizeMode="cover" style={styles.image}>
      <StatusBar style="auto" />
        <Card 
          cidade = { cidade }
          temperatura = { temperatura }
          data = { dataAtual }
          hora = { horaAtual }
          temperaturaMinima = { temperaturaMinima }
          temperaturaMaxima = { temperaturaMaxima }
          condicao = { condicao }
          condicaoDesc = { condicaoDesc }
        />
        </ImageBackground>
        </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00d4ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%"
  },
});
