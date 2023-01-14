import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#dc382f' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#302d2d' }
          }}>
          <Stack.Screen
            name="MealsCategories"
            options={{
              title: 'All Categories'
            }}
            component={CategoriesScreen}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {}
});

export default App;
