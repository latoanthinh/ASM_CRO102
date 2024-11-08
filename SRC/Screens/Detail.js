import React from "react";
import { FlatList, Image, Text, View, TouchableOpacity, Pressable, ScrollView } from "react-native";
import styles from "../Styles/DetailStyles";

const Detail_Screen = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.container_horizontal}>
                    <Image style={styles.image_arrow} source={require('../assets/Icons/arrow_left.png')} />
                    <Text style={styles.tiltle}>Spider Plant</Text>
                    <Image style={styles.cart_icon} source={require('../assets/Icons/shopping-cart.png')} />
                </View>
                <View>
                    <Image style={styles.image_detail} source={require('../assets/Images/product_1.png')} />
                    <Image source={require('../assets/Icons/arrow_left.png')} />
                </View>
            </View>
        </ScrollView>
    );
}
export default Detail_Screen;