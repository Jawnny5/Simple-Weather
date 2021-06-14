import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { colors } from '../utils'

const { PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR } = colors

export default function WeatherInfo({currentWeather}) {
  const { 
          current: { temp },
          current: { weather: [details]},
          timezone 
         } = currentWeather
  const {icon} = details
  const {description} = details
  const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`
  return (
    <View style={styles.weatherInfo}>
      <Text style={styles.location}>{timezone}</Text>
      <Image source={{uri: iconUrl}} style={styles.weatherIcon} />
      <Text style={styles.weatherDescription}>{description}</Text>
      <Text style={styles.textPrimary}>{temp}°</Text>
    </View>
  )
} 

const styles = StyleSheet.create({
  weatherInfo: {
    alignItems: 'center',
  },
  location: {
    fontSize: 28,
    color: PRIMARY_COLOR
  },
  weatherIcon: {
    width: 100,
    height: 100
  },
  weatherDescription: {
    textTransform: 'uppercase',
    fontSize: 20,
    color: PRIMARY_COLOR,
    fontWeight: '500',
    marginTop: 10
  },
  textPrimary: {
    fontSize: 40,
    color: SECONDARY_COLOR
  },
})

