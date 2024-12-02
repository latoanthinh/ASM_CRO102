import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, ScrollView, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../store/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../Styles/LoginStyles';

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorUsername, setErrorUsername] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const { userToken, error } = useSelector((state) => state.user);

    const onClick_Login = async () => {
        let hasError = false;

        // Kiểm tra tên đăng nhập
        if (username.trim() == '') {
            setErrorUsername('Tên đăng nhập không được để trống!');
            hasError = true;
        } else {
            setErrorUsername('');
        }

        // Kiểm tra mật khẩu
        if (password.trim() == '') {
            setErrorPassword('Mật khẩu không được để trống!');
            hasError = true;
        } else {
            setErrorPassword('');
        }

        if (!hasError) {
            setLoading(true);
            try {
                await dispatch(loginUser({ email: username, password })).unwrap();
                if (userToken) {
                    console.log('Đăng nhập thành công', userToken);
                    await AsyncStorage.setItem('userToken', userToken);
                    navigation.navigate('Home');
                }
            } catch (err) {
                setErrorPassword(error || 'Đăng nhập không thành công');
                console.error('Có lỗi xảy ra khi đăng nhập', err);
            } finally {
                setLoading(false);
            }
        }
    };

    const goToSignUp = () => {
        navigation.navigate('SignUp');
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <Image style={styles.arrow_back} source={require('../assets/Icons/arrow_left.png')} />
                <View style={styles.imageContainer}>
                    <Image source={require('../assets/Images/background.png')} style={styles.image} />
                </View>
                <Text style={styles.text_wellcome}>Chào mừng bạn</Text>
                <Text style={styles.text_Login}>Đăng nhập tài khoản</Text>
                <View style={styles.formContainer}>
                    <TextInput
                        style={[styles.input, errorUsername ? styles.input_error : null]}
                        placeholder="Email..."
                        value={username}
                        onChangeText={setUsername}
                    />
                    {errorUsername ? <Text style={styles.error_message}>{errorUsername}</Text> : null}

                    <TextInput
                        style={[styles.input, errorPassword ? styles.input_error : null]}
                        placeholder="Mật khẩu..."
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />
                    {errorPassword ? <Text style={styles.error_message}>{errorPassword}</Text> : null}

                    <TouchableOpacity style={styles.button} onPress={onClick_Login} disabled={loading}>
                        {loading ? (
                            <ActivityIndicator size="small" color="#fff" />
                        ) : (
                            <Text style={styles.buttonText}>Đăng Nhập</Text>
                        )}
                    </TouchableOpacity>

                    <View style={styles.text_horizontal}>
                        <Text>Bạn không có tài khoản?</Text>
                        <TouchableOpacity onPress={goToSignUp}>
                            <Text style={styles.forgotPassword}>Tạo tài khoản</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default LoginScreen;