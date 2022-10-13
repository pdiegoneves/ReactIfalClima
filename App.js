import React, { useState } from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, View, Text } from 'react-native';
import axios from "axios"
import Card from './src/components/card'

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
        <Text>codigo condição { condicao }</Text>
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


function getBgImage(condition){
  switch(condition) {
    case '0 ': return { uri: "https://novaimprensa.com/wp-content/uploads/2021/03/tempestade.jpg" }
    case '1 ': return { uri: "https://reactjs.org/logo-og.png" }
    case '2 ': return { uri: "https://reactjs.org/logo-og.png" }
    case '3 ': return { uri: "https://reactjs.org/logo-og.png" }
    case '4 ': return { uri: "https://reactjs.org/logo-og.png" }
    case '5 ': return { uri: "https://reactjs.org/logo-og.png" }
    case '6 ': return { uri: "https://reactjs.org/logo-og.png" }
    case '7 ': return { uri: "https://reactjs.org/logo-og.png" }
    case '8 ': return { uri: "https://reactjs.org/logo-og.png" }
    case '9 ': return { uri: "https://reactjs.org/logo-og.png" }
    case '10': return { uri: "https://reactjs.org/logo-og.png" }
    case '11': return { uri: "https://reactjs.org/logo-og.png" }
    case '12': return { uri: "https://reactjs.org/logo-og.png" }
    case '13': return { uri: "https://reactjs.org/logo-og.png" }
    case '14': return { uri: "https://reactjs.org/logo-og.png" }
    case '15': return { uri: "https://reactjs.org/logo-og.png" }
    case '16': return { uri: "https://reactjs.org/logo-og.png" }
    case '17': return { uri: "https://reactjs.org/logo-og.png" }
    case '18': return { uri: "https://reactjs.org/logo-og.png" }
    case '19': return { uri: "https://reactjs.org/logo-og.png" }
    case '20': return { uri: "https://reactjs.org/logo-og.png" }
    case '21': return { uri: "https://reactjs.org/logo-og.png" }
    case '22': return { uri: "https://reactjs.org/logo-og.png" }
    case '23': return { uri: "https://reactjs.org/logo-og.png" }
    case '24': return { uri: "https://reactjs.org/logo-og.png" }
    case '25': return { uri: "https://reactjs.org/logo-og.png" }
    case '26': return { uri: "https://reactjs.org/logo-og.png" }
    case '27': return { uri: "https://reactjs.org/logo-og.png" }
    case '28': return { uri: "https://images.unsplash.com/photo-1532178910-7815d6919875?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" }
    case '29': return { uri: "https://reactjs.org/logo-og.png" }
    case '30': return { uri: "https://reactjs.org/logo-og.png" }
    case '31': return { uri: "https://reactjs.org/logo-og.png" }
    case '32': return { uri: "https://reactjs.org/logo-og.png" }
    case '33': return { uri: "https://reactjs.org/logo-og.png" }
    case '34': return { uri: "https://reactjs.org/logo-og.png" }
    case '35': return { uri: "https://reactjs.org/logo-og.png" }
    case '36': return { uri: "https://reactjs.org/logo-og.png" }
    case '37': return { uri: "https://reactjs.org/logo-og.png" }
    case '38': return { uri: "https://reactjs.org/logo-og.png" }
    case '39': return { uri: "https://reactjs.org/logo-og.png" }
    case '40': return { uri: "https://reactjs.org/logo-og.png" }
    case '41': return { uri: "https://reactjs.org/logo-og.png" }
    case '42': return { uri: "https://reactjs.org/logo-og.png" }
    case '43': return { uri: "https://reactjs.org/logo-og.png" }
    case '44': return { uri: "https://reactjs.org/logo-og.png" }
    case '45': return { uri: "https://reactjs.org/logo-og.png" }
    case '46': return { uri: "https://reactjs.org/logo-og.png" }
    case '47': return { uri: "https://reactjs.org/logo-og.png" }
    case '48': return { uri: "https://reactjs.org/logo-og.png" }
  }
  
}