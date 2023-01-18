import { useIsFocused } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import PlacesList from '../components/places/PlacesList';

const AllPlacesScreen = ({ route }) => {
  const isFocused = useIsFocused();
  const [loadedPlaces, setLoadedPlaces] = useState([]);

  useEffect(() => {
    if (isFocused && route.params) {
      setLoadedPlaces((currentPlaces) => [...currentPlaces, route.params.place]);
    }
  }, [isFocused, route]);

  return <PlacesList places={loadedPlaces} />;
};

export default AllPlacesScreen;
