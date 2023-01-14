import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';

// const Drawer = createDrawerNavigator();
const BottomTabs = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <Drawer.Navigator
        options={{
          headerStyle: { backgroundColor: '#3c0a6b' },
          headerTintColor: 'white',
          drawerActiveBackgroundColor: '#f0e1ff',
          drawerActiveTintColor: '#3c0a6b'
          // drawerStyle: { backgroundColor: '#cccccc' }
        }}>
        <Drawer.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            drawerLabel: 'Welcome Screen',
            drawerIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />
          }}
        />
        <Drawer.Screen
          name="User"
          component={UserScreen}
          options={{
            drawerLabel: 'User Screen',
            drawerIcon: ({ color, size }) => <Ionicons name="person" color={color} size={size} />
          }}
        />
      </Drawer.Navigator> */}
      <BottomTabs.Navigator>
        <BottomTabs.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            tabBarLabel: 'Welcome Screen',
            tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />
          }}
        />
        <BottomTabs.Screen
          name="User"
          component={UserScreen}
          options={{
            tabBarLabel: 'User Screen',
            tabBarIcon: ({ color, size }) => <Ionicons name="person" color={color} size={size} />
          }}
        />
      </BottomTabs.Navigator>
    </NavigationContainer>
  );
};

export default App;
