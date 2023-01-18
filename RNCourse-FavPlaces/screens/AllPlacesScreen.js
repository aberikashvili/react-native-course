import { useIsFocused } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import PlacesList from '../components/places/PlacesList';
import { fetchPlaces } from '../util/database';

const AllPlacesScreen = ({ route }) => {
  const isFocused = useIsFocused();
  const [loadedPlaces, setLoadedPlaces] = useState([]);

  useEffect(() => {
    const loadPlaces = async () => {
      const places = await fetchPlaces();

      setLoadedPlaces(places);
    };

    if (isFocused) {
      loadPlaces();
      // setLoadedPlaces((currentPlaces) => [...currentPlaces, route.params.place]);
    }
  }, [isFocused]);

  return <PlacesList places={loadedPlaces} />;
};

export default AllPlacesScreen;
