import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Picker } from '@react-native-community/picker'

export default function UnitsPicker({unitSystem, setUnitSystem}) {
  return (
    <View style={styles.unitSystem}>
      <Picker selectedValue={unitSystem} itemStyle={{fontSize: 12}}onValueChange={(item) => {
        setUnitSystem(item)
      }}>
        <Picker.Item label='C°' value='metric' />
        <Picker.Item label='F°' value='imperial'/>
      </Picker>
    </View>
  )
}

const styles = StyleSheet.create({
  unitSystem: {
    position: 'absolute',
    top: 5, 
    left: 20,
    height: 50,
    width: 100
  }
})
