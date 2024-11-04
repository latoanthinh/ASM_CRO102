import React from 'react';
import Login_Screen from './SRC/Screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from './SRC/Screens/SignUp';
import Home_Screen from './SRC/Screens/Home';
import Find_Screen from './SRC/Screens/Find';
import Profile_Screen from './SRC/Screens/Profile';
import Settings_Screen from './SRC/Screens/Settings';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const HomeStack = () => {
    return (
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home_Screen} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Find') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerShown: false,
          tabBarActiveTintColor: '#2c3e50',
          tabBarInactiveTintColor: '#7f8c8d',
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        {/* <Tab.Screen name="Find" component={Find_Screen} />
        <Tab.Screen name="Profile" component={Profile_Screen} />
        <Tab.Screen name="Settings" component={Settings_Screen} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;