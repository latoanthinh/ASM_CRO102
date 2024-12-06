import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './SRC/store/store';
import Login_Screen from './SRC/Screens/Login';
import SignUpScreen from './SRC/Screens/SignUp';
import Home_Screen from './SRC/Screens/Home';
import Search_Screen from './SRC/Screens/Search';
import Notification_Screen from './SRC/Screens/Notification';
import User from './SRC/Screens/User';
import TabBar from './SRC/Components/TabBar';
import Category from './SRC/Screens/Category';
import Detail_Screen from './SRC/Screens/Detail';
import ChinhSuaThongTin from './SRC/Screens/EditUser';
import Cart from './SRC/Screens/Cart';
import Payment from './SRC/Screens/Payment';
import Welcome from './SRC/Screens/Wellcome';

const Stack = createNativeStackNavigator();

function App() {
  const screens = [
    { name: 'HomeTab', component: Home_Screen },
    { name: 'Search', component: Search_Screen },
    { name: 'Bell', component: Notification_Screen },
    { name: 'User', component: User },
  ];

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Welcome' component={Welcome} />
          <Stack.Screen name="Login" component={Login_Screen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="Home" component={TabBar} initialParams={{ screens }} />
          <Stack.Screen name="Category" component={Category} />
          <Stack.Screen name="Detail" component={Detail_Screen} />
          <Stack.Screen name="Search" component={Search_Screen} />
          <Stack.Screen name="Bell" component={Notification_Screen} />
          <Stack.Screen name="Edit_User" component={ChinhSuaThongTin} />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="Payment" component={Payment} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;