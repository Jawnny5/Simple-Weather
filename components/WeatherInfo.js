import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function WeatherInfo({currentWeather}) {
  const { 
          current: { temp },
          current: { weather: [details]},
          timezone 
         } = currentWeather
  const {icon} = details
  const {main} = details
  const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`
  return (
    <View style={styles.weatherInfo}>
      <Text>{timezone}</Text>
      <Image source={{uri: iconUrl}} style={styles.weatherIcon} />
      <Text>{main}</Text>
      <Text>{temp}</Text>
    </View>
  )
} 

const styles = StyleSheet.create({
  weatherInfo: {
    alignItems: 'center',
  },
  weatherIcon: {
    width: 100,
    height: 100
  }  
})

