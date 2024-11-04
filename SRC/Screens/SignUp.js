import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, ScrollView, Pressable, ToastAndroid } from 'react-native';
import styles from '../Styles/RegisterStyles';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const onClick_SignUp = () => {
        if (fullName == '' || email == '' || password == '' || phone == '') {
            ToastAndroid.showWithGravity(
                'Vui lòng điền đầy đủ thông tin',
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM
            )
        } else {
            ToastAndroid.showWithGravity(
                'Đăng ký thành công',
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM
            )
            console.log('Sign Up: <<<<<<<<<<<<<<<<<<<', { fullName, email, phone, password });
            navigation.navigate('Login');
        }
    }
    const goToLogin = () => {
        navigation.navigate('Login')
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                {/* Background */}
                <View style={styles.imageContainer}>
                    <Image source={require('../assets/Images/background.png')} style={styles.image} />
                </View>
                <Text style={styles.text_wellcome}>Chào mừng bạn</Text>
                <Text style={styles.text_Login}>Đăng ký tài khoản</Text>
                {/* Form Đăng Ký */}
                <View style={styles.formContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Họ tên"
                        value={fullName}
                        onChangeText={setFullName}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Số điện thoại"
                        value={phone}
                        onChangeText={setPhone}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Mật khẩu"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />
                    <Text style={styles.termsText}>
                        Để đăng ký tài khoản, bạn đồng ý với <Text style={styles.linkText}>Terms & Conditions</Text> và <Text style={styles.linkText}>Privacy Policy</Text>
                    </Text>
                    <TouchableOpacity style={styles.button} onPress={onClick_SignUp}>
                        <Text style={styles.buttonText}>Đăng Ký</Text>
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
                    {/* đã có tài khoản */}
                    <View style={styles.text_horizontal}>
                        <Text>Bạn đã có tài khoản?</Text>
                        <Pressable onPress={goToLogin}>
                            <Text style={styles.forgotPassword}> Đăng nhập</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default SignUpScreen;