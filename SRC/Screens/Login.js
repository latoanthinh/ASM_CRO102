import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, ScrollView, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../Styles/LoginStyles';

const LoginScreen = () => {
    const [email, setEmail] = useState('thinh@gmail.com');
    const [password, setPassword] = useState('123456');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const navigation = useNavigation();

    const onClick_Login = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let hasError = false;

        if (email.trim() === '') {
            setErrorEmail('Email không được để trống!');
            hasError = true;
        } else if (!emailRegex.test(email)) {
            setErrorEmail('Email không hợp lệ!');
            hasError = true;
        } else {
            setErrorEmail('');
        }

        if (password.trim() === '') {
            setErrorPassword('Mật khẩu không được để trống!');
            hasError = true;
        } else if (password.length < 6) {
            setErrorPassword('Mật khẩu phải có ít nhất 6 ký tự!');
            hasError = true;
        } else {
            setErrorPassword('');
        }

        if (!hasError) {
            console.log('Đăng nhập thành công');
            setEmail('');
            setPassword('');
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
                <Image style={styles.arrow_back} source={require('../assets/Icons/arrow_left.png')} />
                {/* Background */}
                <View style={styles.imageContainer}>
                    <Image source={require('../assets/Images/background.png')} style={styles.image} />
                </View>
                <Text style={styles.text_wellcome}>Chào mừng bạn</Text>
                <Text style={styles.text_Login}>Đăng nhập tài khoản</Text>
                {/* Form Đăng Nhập */}
                <View style={styles.formContainer}>
                    <TextInput
                        style={[styles.input, errorEmail ? styles.input_error : null]}
                        placeholder="Email hoặc số điện thoại"
                        value={email}
                        onChangeText={setEmail}
                    />
                    {errorEmail ? <Text style={styles.error_message}>{errorEmail}</Text> : null}

                    <TextInput
                        style={[styles.input, errorPassword ? styles.input_error : null]}
                        placeholder="Mật khẩu"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />
                    {errorPassword ? <Text style={styles.error_message}>{errorPassword}</Text> : null}

                    {/* Ghi Nhớ Tài khoản */}
                    <View style={styles.text_horizontal_remember}>
                        <Pressable onPress={toggleCheckbox} style={styles.text_horizontal_remember}>
                            <Image
                                style={styles.checkbox_size}
                                source={isChecked ? require('../assets/Icons/checked.png') : require('../assets/Icons/checkbox.png')}
                            />
                            <Text style={styles.text_remember}>Nhớ tài khoản</Text>
                        </Pressable>
                        <Text style={styles.forgotPassword}>Quên mật khẩu?</Text>
                    </View>
                    <Pressable style={styles.button} onPress={onClick_Login}>
                        <Text style={styles.buttonText}>Đăng Nhập</Text>
                    </Pressable>
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