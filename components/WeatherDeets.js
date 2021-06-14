import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../utils'

const { PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR } = colors

export default function WeatherDeets({ currentWeather }) {
  const { 
    current: { feels_like, humidity, wind_speed },

  } = currentWeather
  return (
    <View style={styles.details}>
      <View style={styles.detailsRow}>
        <Text style={{fontSize: 16}}>{ humidity }</Text>
        <Text style={{fontSize: 16}}>{ feels_like }</Text>
        <Text style={{fontSize: 16}}>{ wind_speed }</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  details: {
    marginBottom: 40,
    borderWidth: 2, 
    borderColor: BORDER_COLOR,
    borderRadius: 10
  }, 
  detailsRow: {
    marginLeft: 30,
    marginRight: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
})