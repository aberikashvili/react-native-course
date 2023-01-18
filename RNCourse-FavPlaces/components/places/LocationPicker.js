import { Alert, Image, StyleSheet, Text, View } from 'react-native';
import { getCurrentPositionAsync, useForegroundPermissions, PermissionStatus } from 'expo-location';
import { Colors } from '../../constsnts/colors';
import OutlinedButton from '../ui/OutlinedButton';
import { getAddress, getMapPreview } from '../../util/location';
import { useCallback, useEffect, useState } from 'react';
import { useIsFocused, useNavigation, useRoute } from '@react-navigation/native';

const LocationPicker = ({ onPickLocation }) => {
  const isFocused = useIsFocused();
  const route = useRoute();
  const navigation = useNavigation();

  const [pickedLocation, setPickedLocation] = useState();
  const [status, requestPermission] = useForegroundPermissions();

  useEffect(() => {
    if (isFocused && route.params) {
      const mapPickedLocation = {
        latitude: route.params.pickedLatitude,
        longitude: route.params.pickedLongitude
      };

      setPickedLocation(mapPickedLocation);
    }
  }, [route, isFocused]);

  useEffect(() => {
    const handleLocation = async () => {
      if (pickedLocation) {
        const address = await getAddress(pickedLocation.latitude, pickedLocation.longitude);
        onPickLocation({ ...pickedLocation, address });
      }
    };

    handleLocation();
  }, [pickedLocation, onPickLocation]);

  const verifyPermissions = async () => {
    if (status === PermissionStatus.UNDETERMINED || status === PermissionStatus.DENIED) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }

    // if (locationPermissionInformation.status === PermissionStatus.DENIED) {
    //   Alert.alert(
    //     'Insufficient Permissions',
    //     'You need to grant location permissions to use this app.'
    //   );

    //   return false;
    // }

    return true;
  };

  const pickLocationhandler = useCallback(() => {
    const handlePickLocation = async () => {
      const hasPermission = await verifyPermissions();

      if (!hasPermission) {
        return;
      }

      const location = await getCurrentPositionAsync();
      const { latitude, longitude } = location.coords;

      setPickedLocation({ latitude, longitude });
    };

    handlePickLocation();
  }, []);

  const pickOnMapHandler = () => navigation.navigate('Map');

  let locationPreview = <Text>No location picked yet.</Text>;

  if (!!pickedLocation) {
    locationPreview = (
      <Image
        style={styles.image}
        source={{ uri: getMapPreview(pickedLocation.latitude, pickedLocation.longitude) }}
      />
    );
  }

  return (
    <View>
      <View style={styles.mapPreview}>{locationPreview}</View>
      <View style={styles.actions}>
        <OutlinedButton icon="location" onPress={pickLocationhandler}>
          Locate User
        </OutlinedButton>
        <OutlinedButton icon="map" onPress={pickOnMapHandler}>
          Pick on Map
        </OutlinedButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mapPreview: {
    wofth: '100%',
    height: 200,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary100,
    borderRadius: 4,
    overflow: 'hidden'
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: '100%'
  }
});

export default LocationPicker;
