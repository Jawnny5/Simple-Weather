import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Picker } from '@react-native-community/picker'

export default function UnitsPicker({unitSystem, setUnitSystem}) {
  return (
    <View>
      <Picker selectedValue={unitSystem} onValueChange={(item) => {
        setUnitSystem(item)
      }}>
        <Picker.Item label='Celsius' value='metric' />
        <Picker.Item label='Kelvin' value='standard'/>
        <Picker.Item label='Farenheit' value='Imperial'/>
      </Picker>
    </View>
  )
}
