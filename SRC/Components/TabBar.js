import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

const TabBarIcon = ({ route, focused }) => {
  let icon;

  switch (route.name) {
    case 'Home':
      icon = require('../assets/Icons/home.png');
      break;
    case 'Search':
      icon = require('../assets/Icons/search.png');
      break;
    case 'Bell':
      icon = require('../assets/Icons/bell.png');
      break;
    case 'User':
      icon = require('../assets/Icons/user.png');
      break;
    default:
      icon = require('../assets/Icons/home.png');
  }

  return (
    <View style={styles.iconContainer}>
      <Image source={icon} style={[styles.icon, focused && styles.focusedIcon]} />
      {focused && <View style={styles.dot} />} {/* Dấu chấm khi tab được chọn */}
    </View>
  );
};

const TabBar = ({ route }) => {
  const { screens } = route.params;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => (
          <TabBarIcon route={route} focused={focused} />
        ),
        headerShown: false,
        tabBarActiveTintColor: '#2c3e50',
        tabBarInactiveTintColor: '#7f8c8d',
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      })}
    >
      {screens.map((screen, index) => (
        <Tab.Screen key={index} name={screen.name} component={screen.component} />
      ))}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    borderTopWidth: 0,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    backgroundColor: 'white',
    height: 70,
    paddingBottom: 10,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  focusedIcon: {
    tintColor: '#DC3545',
  },
  dot: {
    position: 'absolute',
    bottom: -10,
    width: 4,
    height: 4,
    borderRadius: 3,
    backgroundColor: '#DC3545',
  },
});

export default TabBar;