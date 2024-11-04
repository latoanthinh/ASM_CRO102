import React from 'react';
import Login_Screen from './SRC/Screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from './SRC/Screens/SignUp';
import Home_Screen from './SRC/Screens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import Search_Screen from './SRC/Screens/Search';
import Notification_Screen from './SRC/Screens/Notification';
import User_Screen from './SRC/Screens/User';
import styles from './SRC/Styles/Bottom_TabStyles';

function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const HomeStack = () => {
    return (
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home_Screen} />
        <Stack.Screen name="Search" component={Search_Screen} />
        <Stack.Screen name="Bell" component={Notification_Screen} />
        <Stack.Screen name="User" component={User_Screen} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            const iconStyle = focused ? styles.focusedTabIcon : styles.tabIcon;
            if (route.name === 'Home') {
              return <Image source={require('./SRC/assets/Icons/home.png')} style={iconStyle} />;
            } else if (route.name === 'Search') {
              return <Image source={require('./SRC/assets/Icons/search.png')} style={iconStyle} />;
            } else if (route.name === 'Bell') {
              return <Image source={require('./SRC/assets/Icons/bell.png')} style={iconStyle} />;
            } else if (route.name === 'User') {
              return <Image source={require('./SRC/assets/Icons/user.png')} style={iconStyle} />;
            }
          },
          headerShown: false,
          tabBarActiveTintColor: '#2c3e50',
          tabBarInactiveTintColor: '#7f8c8d',
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar,
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Search" component={Search_Screen} />
        <Tab.Screen name="Bell" component={Notification_Screen} />
        <Tab.Screen name="User" component={User_Screen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;