import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Pressable } from 'react-native';

const ChinhSuaThongTin = () => {
    const navigation = useNavigation();
    

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const goBack = () => {
        navigation.navigate('Home');
    };

    const isFormFilled = name && email && address && phone;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable style={styles.image} onPress={goBack}>
                    <Image source={require('../assets/Icons/arrow_left.png')} />
                </Pressable>
                <Text style={styles.title}>CHỈNH SỬA THÔNG TIN</Text>
            </View>
            <View style={styles.content}>
                <Image style={styles.avt} source={require('../assets/Images/avt.jpg')} />
                <Text style={styles.label}>Thông tin sẽ được lưu cho lần mua kế tiếp.</Text>
                <Text style={styles.label}>Bấm vào thông tin để chỉnh sửa.</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Tên"
                        value={name}
                        onChangeText={setName}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Địa chỉ"
                        value={address}
                        onChangeText={setAddress}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Số điện thoại"
                        value={phone}
                        onChangeText={setPhone}
                    />
                </View>
                <TouchableOpacity style={[styles.button, { backgroundColor: isFormFilled ? '#007BFF' : '#7D7B7B' }]}>
                    <Text style={styles.buttonText}>LƯU THÔNG TIN</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        backgroundColor: '#fff',
        padding: 10,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    image: {
        position: 'absolute',
        top: 10,
        left: 10,
    },
    title: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    },
    content: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 24,
    },
    label: {
        fontSize: 16,
        color: '#6c757d',
        marginBottom: 8,
    },
    inputContainer: {
        marginVertical: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ced4da',
        borderRadius: 4,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginVertical: 8,
    },
    button: {
        paddingVertical: 12,
        alignItems: 'center',
        borderRadius: 4,
        position: 'absolute',
        bottom: 10,
        width: '90%',
        height: 50,
        alignSelf: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    avt: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderColor: '#ced4da',
        borderWidth: 1,
        marginBottom: 16,
        alignSelf: 'center',
    }
});

export default ChinhSuaThongTin;