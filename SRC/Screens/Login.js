import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, ScrollView, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../Styles/LoginStyles';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const navigation = useNavigation();

    const onClick_Login = () => {
        if (email.trim() === '') {
            setError('Email không được để trống!');
            return;
        } else if (password.trim() === '') {
            setError('Password không được để trống!');
            return;
        } else {
            setError('');
            console.log('Login successful');
            navigation.navigate('Home');
        }
    };

    const goToSignUp = () => {
        navigation.navigate('SignUp');
    };

    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                {/* Background */}
                <View style={styles.imageContainer}>
                    <Image source={require('../assets/Images/background.png')} style={styles.image} />
                </View>
                <Text style={styles.text_wellcome}>Chào mừng bạn</Text>
                <Text style={styles.text_Login}>Đăng nhập tài khoản</Text>
                {/* Form Đăng Nhập */}
                <View style={styles.formContainer }>
                    <TextInput
                        style={[styles.input, error ? styles.input_error : null]}
                        placeholder="Email or phone number"
                        value={email}
                        onChangeText={setEmail}
                    />

                    <TextInput
                        style={[styles.input, error ? styles.input_error : null]}
                        placeholder="Password"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />
                    {error ? <Text style={styles.error_message}>{error}</Text> : null}

                    {/* Ghi Nhớ Tài khoản */}
                    <View style={styles.text_horizontal_remember}>
                        <Pressable onPress={toggleCheckbox} style={styles.text_horizontal_remember}>
                            <Image
                                style={styles.checkbox_size}
                                source={isChecked ? require('../assets/Icons/checked.png') : require('../assets/Icons/checkbox.png')}
                            />
                            <Text style={styles.text_remember}>Nhớ tài khoản</Text>
                        </Pressable>
                        <Text style={styles.forgotPassword}>Forgot Password?</Text>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={onClick_Login}>
                        <Text style={styles.buttonText}>Đăng Nhập</Text>
                    </TouchableOpacity>
                    {/* line */}
                    <View style={styles.container_horizontal}>
                        <Image style={styles.line_margin} source={require('../assets/Icons/Line.png')} />
                        <Text>Hoặc</Text>
                        <Image style={styles.line_margin} source={require('../assets/Icons/Line.png')} />
                    </View>
                    {/* icon gg + fb */}
                    <View style={styles.socialContainer}>
                        <TouchableOpacity>
                            <Image source={require('../assets/Icons/google.png')} style={styles.socialIcon_gg} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../assets/Icons/facebook.png')} style={styles.socialIcon_fb} />
                        </TouchableOpacity>
                    </View>
                    {/* tao tai khoan */}
                    <View style={styles.text_horizontal}>
                        <Text>Bạn không có tài khoản?</Text>
                        <Pressable onPress={goToSignUp}>
                            <Text style={styles.forgotPassword}> Tạo tài khoản</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default LoginScreen;