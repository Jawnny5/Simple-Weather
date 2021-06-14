import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location'
import { LocationEventEmitter } from 'expo-location/build/LocationEventEmitter';
import WeatherInfo from './components/WeatherInfo';
import WeatherDeets from './components/WeatherDeets';
import UnitsPicker from './components/UnitsPicker'
import { colors } from './utils';
import ReloadButton from './components/ReloadButton';
import { WEATHER_KEY } from '@env' //modified

const BASE_W_URL = 'https://api.openweathermap.org/data/2.5/onecall?'

export default function App() {

  const [errorMsg, setErrorMsg] = useState(null)
  const [currentWeather, setCurrentWeather] = useState(null)
  const [unitSystem, setUnitSystem] = useState('imperial')
  useEffect(() => {
    load()
  }, [unitSystem])

  async function load(){
    setCurrentWeather(null)
    setErrorMsg(null)
    try {
      let { status } = await Location.requestForegroundPermissionsAsync()

      if(status !== 'granted'){
        setErrorMsg('Access To Location Needed To Continue')
        return
      }
      const location = await Location.getCurrentPositionAsync()

      const { latitude, longitude} = location.coords

      const weatherURL = `${BASE_W_URL}lat=${latitude}&lon=${longitude}&units=${unitSystem}&appid=${WEATHER_KEY}`
      console.log(weatherURL)
      

      const response = await fetch(weatherURL)

      const result = await response.json()

      if(response.ok){
        setCurrentWeather(result)
      } else {
        setErrorMsg(result.message)
      }

      // alert(`Latitude: ${latitude}, Longitude: ${longitude}`) 
    } catch (error) {
      setErrorMsg(error.message)
    }
  }

  if(currentWeather){
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.main}>
          <UnitsPicker unitSystem={unitSystem} setUnitSystem={setUnitSystem} />
          <ReloadButton load={load}/>
         <WeatherInfo currentWeather={currentWeather}/>
        </View>
        <WeatherDeets currentWeather={currentWeather} />
      </View>
    );
  } else if(errorMsg) {
    return (
      <View style={styles.container}>
        <Text>{errorMsg}</Text>
        <StatusBar style="auto" />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <ActivityIndicator size='large' style={colors.SECONDARY_COLOR}/>
        <StatusBar style='auto' />
      </View>  
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  main: {
    justifyContent: 'center',
    flex: 1
  }
});
