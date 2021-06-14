import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { colors } from '../utils'

export default function ReloadButton({ load }) {
  return (
    <View style={styles.button}>
      <Ionicons onPress={load} name="ios-refresh-circle-sharp" size={24} color={colors.SECONDARY_COLOR} />
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 60,
    right: 30,
    color: colors.PRIMARY_COLOR
  }
})
