import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../utils'
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'

const { PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR } = colors

export default function WeatherDeets({ currentWeather }) {
  const { 
    current: { feels_like, humidity, wind_speed, pressure },

  } = currentWeather
  return (
    <View style={styles.details}>
      <View style={styles.detailsRow}>
        <View style={{...styles.detailsRowBox, borderRightWidth: 1, borderRightColor: BORDER_COLOR}}>
        <MaterialCommunityIcons name="water-percent" size={20} color={SECONDARY_COLOR} />
          <Text><Text style={{fontWeight: '700'}}>RH:</Text> { humidity }</Text>
        </View>
        <View style={{...styles.detailsRowBox, borderRightWidth: 1, borderRightColor: BORDER_COLOR}}>
          <FontAwesome5 name='temperature-low' size={20} color={SECONDARY_COLOR}/>
          <Text><Text style={{fontWeight:'700'}}>Feels Like:</Text> { feels_like }</Text>
        </View>
        <View style={{...styles.detailsRowBox, borderRightWidth: 1, borderRightColor: BORDER_COLOR}}>
          <FontAwesome5 name='wind' size={20} color={SECONDARY_COLOR}/>
          <Text><Text style={{fontWeight:'700'}}>Wind Speed:</Text> { wind_speed }m/s</Text>
        </View>
        <View style={{...styles.detailsRowBox, borderRightWidth: 1, borderRightColor: BORDER_COLOR}}>
          <MaterialCommunityIcons name="gauge" size={20} color={SECONDARY_COLOR} />
          <Text><Text style={{fontWeight:'700'}}>Pressure:</Text> { pressure }m/s</Text>
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
    flex: 1,
    padding: 10,
    margin: 7,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  textSecondary: {
    fontSize: 16,
    color: PRIMARY_COLOR,
  }
})