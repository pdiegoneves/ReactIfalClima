import React, { useState } from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import axios from "axios"
import Card from './src/components/card'
import MiniCard from "./src/components/mini-card";

export default function App() {
  const [temperatura, setTemperatura] = useState(0)
  const [temperaturaMinima, setTemperaturaMinima] = useState(0)
  const [temperaturaMaxima, setTemperaturaMaxima] = useState(0)
  const [cidade, setCidade] = useState('')
  const [dataAtual, setDataAtual] = useState('')
  const [horaAtual, setHoraAtual] = useState('')
  const [condicao, setCondicao] = useState('')
  const [condicaoDesc, setCondicaoDesc] = useState('')
  const [semana, setSemana] = useState([{}])


  const baseURL = "https://api.hgbrasil.com/weather?key=96c1f578?woeid=455880"
  let dados = {}
  const data = axios.get(baseURL)
  .then(res => {
      dados = {...res.data}
      setCidade(dados.results.city)
      setTemperatura(dados.results.temp)
      setDataAtual(dados.results.date)
      setHoraAtual(dados.results.time)
      setTemperaturaMinima(dados.results.forecast[0].min)
      setTemperaturaMaxima(dados.results.forecast[0].max)
      setCondicao(dados.results.condition_code)
      setCondicaoDesc(dados.results.forecast[0].description)
      setSemana(...dados.results.forecast)
  })
  {console.log(semana)}

  return (
    <View style={styles.container}>
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
  {/* <MiniCard style={styles.miniCard}
        data = { semana[1].date }
        temperaturaMinima = { temperaturaMinima }
        temperaturaMaxima = { temperaturaMaxima }
        condicao = { condicao }
        condicaoDesc = { condicaoDesc }
   /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00d4ff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
