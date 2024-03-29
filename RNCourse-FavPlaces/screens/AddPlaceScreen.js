import PlaceForm from '../components/places/PlaceForm';
import { insertPlace } from '../util/database';

const AddPlaceScreen = ({ navigation }) => {
  const createPlaceHandler = async (place) => {
    await insertPlace(place);
    navigation.navigate('AllPlaces');
  };

  return <PlaceForm onCreatePlace={createPlaceHandler} />;
};

export default AddPlaceScreen;
