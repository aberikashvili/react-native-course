import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import * as Location from 'expo-location';

import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [errorMsg, setErrorMsg] = useState();
  const [currentLocation, setCurrentLocation] = useState();

  const getUserLocationHandler = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});

    console.log('LOCATION', location);

    const { latitude, longitude } = location.coords;

    setCurrentLocation({ latitude, longitude });
  };

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        {currentLocation && (
          <View>
            <Text>
              Your location is: {currentLocation.latitude}, {currentLocation.longitude}
            </Text>
          </View>
        )}

        {errorMsg && <Text style={styles.error}>{errorMsg}</Text>}

        <Button title="Get Location" onPress={getUserLocationHandler} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  error: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center'
  }
});
