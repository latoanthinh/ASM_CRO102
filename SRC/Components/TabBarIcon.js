import React, { useRef, useEffect } from 'react';
import { View, Image, Animated, StyleSheet } from 'react-native';

const TabBarIcon = ({ route, focused }) => {
  const iconStyle = [
    styles.tabIcon,
    focused && styles.focusedTabIcon
  ];
  const dotAnimation = useRef(new Animated.Value(0)).current;
  const dotStyle = [
    styles.dot,
    {
      transform: [
        { scale: dotAnimation }
      ]
    }
  ];

  useEffect(() => {
    Animated.timing(dotAnimation, {
      toValue: focused ? 1 : 0,
      duration: 200,
      useNativeDriver: true
    }).start();
  }, [dotAnimation, focused]);

  if (route.name === 'Home') {
    return (
      <View style={styles.tabIconContainer}>
        <Image source={require('../assets/Icons/home.png')} style={iconStyle} />
        <Animated.View style={[dotStyle, styles.dotPosition]} />
      </View>
    );
  } else if (route.name === 'Search') {
    return (
      <View style={styles.tabIconContainer}>
        <Image source={require('../assets/Icons/search.png')} style={iconStyle} />
        <Animated.View style={[dotStyle, styles.dotPosition]} />
      </View>
    );
  } else if (route.name === 'Bell') {
    return (
      <View style={styles.tabIconContainer}>
        <Image source={require('../assets/Icons/bell.png')} style={iconStyle} />
        <Animated.View style={[dotStyle, styles.dotPosition]} />
      </View>
    );
  } else if (route.name === 'User') {
    return (
      <View style={styles.tabIconContainer}>
        <Image source={require('../assets/Icons/user.png')} style={iconStyle} />
        <Animated.View style={[dotStyle, styles.dotPosition]} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  tabIcon: {
    width: 24,
    height: 24,
  },
  focusedTabIcon: {
    tintColor: '#221F1F',
  },
  tabIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 5,
    backgroundColor: '#221F1F',
    position: 'absolute',
  },
  dotPosition: {
    bottom: -10,
    alignSelf: 'center'
  },
});

export default TabBarIcon;