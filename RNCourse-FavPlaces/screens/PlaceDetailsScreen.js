import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import OutlinedButton from '../components/ui/OutlinedButton';
import { Colors } from '../constsnts/colors';
import { fetchPlaceDetails } from '../util/database';

const PlaceDetailsScreen = ({ route, navigation }) => {
  const [fetchedPlace, setFetchedPlace] = useState();

  const selectedPlaceId = route.params.placeId;

  const showOnMapHandler = () => {
    navigation.navigate('Map', {
      initialLatitude: fetchedPlace.location.latitude,
      initialLongitude: fetchedPlace.location.longitude
    });
  };

  useEffect(() => {
    const loadPLaceDetails = async () => {
      const place = await fetchPlaceDetails(selectedPlaceId);

      setFetchedPlace(place);

      navigation.setOptions({
        title: place.title
      });
    };

    loadPLaceDetails();
  }, [selectedPlaceId]);

  if (!fetchedPlace) {
    return (
      <View style={styles.fallback}>
        <Text>Loading place data...</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <Image source={{ uri: fetchedPlace.imageUri }} style={styles.image} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{fetchedPlace.address}</Text>
        </View>
        <OutlinedButton icon="map" onPress={showOnMapHandler}>
          View on Map
        </OutlinedButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  fallback: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    height: '35%',
    minHeight: 300,
    width: '100%'
  },
  locationContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  addressContainer: {
    padding: 20
  },
  address: {
    color: Colors.primary500,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16
  }
});

export default PlaceDetailsScreen;
