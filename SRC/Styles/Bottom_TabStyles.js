import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  tabBar: {
    height: 60,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  tabIcon: {
    width: 24,
    height: 24,
  },
  focusedTabIcon: {
    width: 30,
    height: 30,
  },
});

export default styles;