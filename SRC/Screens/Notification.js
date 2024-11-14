import React from "react";
import { View, Text, Image, Pressable, TouchableOpacity } from 'react-native';
import styles from "../Styles/NotificationStyles";
import { useNavigation } from "@react-navigation/native";

const Notification_Screen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                    <Image style={styles.icon_back} source={require('../assets/Icons/arrow_left_2.png')} />
                <Text style={styles.headerText}>THÔNG BÁO</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.message}>Hiện chưa có thông báo nào cho bạn.</Text>
            </View>
        </View>
    );
}

export default Notification_Screen;