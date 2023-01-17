import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllPlacesScreen from './screens/AllPlacesScreen';
import AddPlaceScreen from './screens/AddPlaceScreen';
import IconButton from './components/ui/IconButton';
import { Colors } from './constsnts/colors';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: Colors.primary500 },
            headerTintColor: Colors.gray700,
            contentStyle: { backgroundColor: Colors.gray700 }
          }}>
          <Stack.Screen
            name="AllPlaces"
            component={AllPlacesScreen}
            options={({ navigation }) => ({
              title: 'Your Favorite Places',
              headerRight: ({ tintColor }) => (
                <IconButton
                  icon="add"
                  color={tintColor}
                  size={24}
                  onPress={() => navigation.navigate('AddPlace')}
                />
              )
            })}
          />
          <Stack.Screen
            name="AddPlace"
            component={AddPlaceScreen}
            options={{ title: 'Add a new Place' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
