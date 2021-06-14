import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location'
import { LocationEventEmitter } from 'expo-location/build/LocationEventEmitter';

const WEATHER_KEY = 'ac1015366220c6a0a90c676bca30c91e'

export default function App() {

  const [errorMsg, setErrorMsg] = useState(null)

  useEffect(() => {
    load()
  }, [])

  async function load(){
    try {
      let { status } = await Location.requestPermissionsAsync()

      if(status !== 'granted'){
        setErrorMsg('Access To Location Needed To Continue')
        return
      }
      const location = await Location.getCurrentPositionAsync()
      const { latitude, longitude} = location.coords
      alert(`Latitude: ${latitude}, Longitude: ${longitude}`) 
    } catch (error) {

    }
  }

  return (
    <View style={styles.container}>
      <Text>Bam First Mobile Edit!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
