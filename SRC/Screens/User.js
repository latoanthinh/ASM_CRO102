import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Modal, TextInput, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { launchImageLibrary } from 'react-native-image-picker';
import styles from '../Styles/UserScreenStyles';

const User = () => {
    const navigation = useNavigation();
    const [profilePic, setProfilePic] = useState(require('../assets/Images/avt.jpg'));
    const [email, setEmail] = useState('toanthinh@gmail.com');;

    const Logout = () => {
        navigation.navigate('Login');
    };
    const goToEditUser = () => {
        navigation.navigate('Edit_User');
    }

    const chooseImage = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                const source = { uri: response.assets[0].uri };
                setProfilePic(source);
            }
        });
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.text_title}>PROFILE</Text>
            </View>
            <View style={styles.header}>
                <TouchableOpacity onPress={chooseImage}>
                    <Image source={profilePic} style={styles.profilePic} />
                </TouchableOpacity>
                <View style={styles.userInfo}>
                    <Text style={styles.name}>La Toàn Thịnh</Text>
                    <Text style={styles.email}>{email}</Text>
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Chung</Text>
                <TouchableOpacity style={styles.menuItem} onPress={goToEditUser}>
                    <Text style={styles.menuItemText}>Chỉnh sửa thông tin</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <Text style={styles.menuItemText}>Cẩm nang trồng cây</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <Text style={styles.menuItemText}>Lịch sử giao dịch</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <Text style={styles.menuItemText}>Q & A</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Bảo mật và Điều khoản</Text>
                <TouchableOpacity style={styles.menuItem}>
                    <Text style={styles.menuItemText}>Điều khoản và Điều kiện</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <Text style={styles.menuItemText}>Chính sách quyền riêng tư</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={Logout} style={styles.menuItem}>
                    <Text style={[styles.menuItemText, styles.logoutText]}>Đăng xuất</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    );
};

export default User;