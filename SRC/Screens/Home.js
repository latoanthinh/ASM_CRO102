import React from 'react';
import { View, TextInput, Text, Image, ScrollView } from 'react-native';
import styles from '../Styles/HomeStyles';

const Home_Screen = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.horizontal_container}>
                    <Text style={styles.text_planta}>Planta - tỏa sáng không gian nhà bạn</Text>
                    <View>
                        <Image style={styles.cart_icon} source={require('../assets/Icons/shopping-cart.png')} />
                    </View>
                </View>
                <Image style={styles.bg} source={require('../assets/Images/home_bg.png')} />
            </View>
        </ScrollView>
    )
}

export default Home_Screen;