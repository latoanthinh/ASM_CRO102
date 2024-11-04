import React from 'react';
import Login_Screen from './SRC/Screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from './SRC/Screens/SignUp';
import Home_Screen from './SRC/Screens/Home';

function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login_Screen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name='Home' component={Home_Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;