import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Login');
        }, 2000);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: 'https://i.pinimg.com/736x/aa/49/96/aa49969bcc5c1b0c0c18ae83ab81578d.jpg'
                }}
                style={styles.image} 
            />
            <ActivityIndicator size="large" color="#007537" style={styles.loadingIndicator} />
            <Text style={styles.loadingText}>Đang tải...</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    loadingIndicator: {
        marginTop: 20,
    },
    loadingText: {
        marginTop: 10,
        fontSize: 16,
        color: '#555',
    },
});

export default Welcome;