import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import CategoriesScreen from '../screens/CategoriesScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import CustomDrawerContent from './CustomDrawerContent';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#dc382f' },
        headerTintColor: 'white',
        sceneContainerStyle: { backgroundColor: '#302d2d' },
        drawerStyle: {
          backgroundColor: '#253955'
        },
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: '#a19e9e'
      }}
      drawerContent={CustomDrawerContent}>
      <Drawer.Screen
        name="MealsCategories"
        component={CategoriesScreen}
        options={{
          drawerLabel: 'All Categories',
          title: 'All Categories',
          drawerIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerLabel: 'My Favorites',
          title: 'My Favorites',
          drawerIcon: ({ color, size }) => <Ionicons name="star" color={color} size={size} />
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
