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
        <View style={{...styles.detailsRowBox, borderRightWidth: 1, borderRightColor: BORDER_COLOR}}>
          <Text><Text style={{fontWeight:'700'}}>RH:</Text> { humidity }</Text>
        </View>
        <View style={{...styles.detailsRowBox, borderRightWidth: 1, borderRightColor: BORDER_COLOR}}>
          <Text><Text style={{fontWeight:'700'}}>Feels Like:</Text> { feels_like }</Text>
        </View>
        <View style={{...styles.detailsRowBox, borderRightWidth: 1, borderRightColor: BORDER_COLOR}}>
          <Text><Text style={{fontWeight:'700'}}>Wind Speed:</Text> { wind_speed }m/s</Text>
        </View>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 'auto',
  },
  detailsRowBox: {
    padding: 10,
  }
})