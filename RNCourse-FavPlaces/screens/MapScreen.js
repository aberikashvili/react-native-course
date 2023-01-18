import { useCallback, useLayoutEffect, useState } from 'react';
import { Alert, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import IconButton from '../components/ui/IconButton';

const MapScreen = ({ navigation }) => {
  const [selectedLocation, setSelectedLocation] = useState();

  const region = {
    latitude: 37.78,
    longitude: -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  };

  const selectLocationHandler = (event) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;

    setSelectedLocation({ latitude, longitude });
  };

  const savePickedLocationHandler = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert(
        'No location picked!',
        'You have to pick a location (by tapping on the map) first!'
      );

      return;
    }

    navigation.navigate('AddPlace', {
      pickedLatitude: selectedLocation.latitude,
      pickedLongitude: selectedLocation.longitude
    });
  }, [navigation, selectedLocation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <IconButton icon="save" size={24} color={tintColor} onPress={savePickedLocationHandler} />
      )
    });
  }, [navigation, savePickedLocationHandler]);

  return (
    <MapView initialRegion={region} style={styles.map} onPress={selectLocationHandler}>
      {selectedLocation && <Marker title="Picked Location" coordinate={selectedLocation} />}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

export default MapScreen;
