import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import DrawerNavigator from './navigators/DrawerNavigator';
import MealDetailsScreen from './screens/MealDetailsScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import store from './store/redux/store';
// import FavoritesContextProvider from './store/context/favorites-context';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar style="light" />
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: '#dc382f' },
              headerTintColor: 'white',
              contentStyle: { backgroundColor: '#302d2d' }
            }}>
            <Stack.Screen
              name="Drawer"
              options={{
                title: 'All Categories',
                headerShown: false
              }}
              component={DrawerNavigator}
            />
            <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
            <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavoritesContextProvider> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {}
});

export default App;
