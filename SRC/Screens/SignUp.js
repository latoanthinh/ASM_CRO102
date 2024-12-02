import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, ScrollView, Pressable, ToastAndroid, ActivityIndicator } from 'react-native';
import styles from '../Styles/RegisterStyles';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../store/userSlice';

const SignUpScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false); 
    const [showConfirmPassword, setShowConfirmPassword] = useState(false); 
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { error } = useSelector((state) => state.user);

    const validateInput = () => {
        if (!name || !email || !password || !confirmPassword) {
            ToastAndroid.showWithGravity(
                'Vui lòng điền đầy đủ thông tin',
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM
            );
            return false;
        }

        if (password !== confirmPassword) {
            ToastAndroid.showWithGravity(
                'Mật khẩu không khớp',
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM
            );
            return false;
        }

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            ToastAndroid.showWithGravity(
                'Địa chỉ email không hợp lệ',
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM
            );
            return false;
        }

        return true;
    };

    const onClick_SignUp = async () => {
        if (!validateInput()) return;

        setLoading(true);
        try {
            await dispatch(registerUser({ name, email, password, confirm_password: password })).unwrap();
            ToastAndroid.showWithGravity(
                'Đăng ký thành công',
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM
            );
            navigation.navigate('Login');
        } catch (err) {
            ToastAndroid.showWithGravity(
                error ,
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM
            );
        } finally {
            setLoading(false);
        }
    };

    const goToLogin = () => {
        navigation.navigate('Login');
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <Pressable style={{ zIndex: 1 }} onPress={goToLogin}>
                    <Image style={styles.arrow_back} source={require('../assets/Icons/arrow_left.png')} />
                </Pressable>
                <View style={styles.imageContainer}>
                    <Image source={require('../assets/Images/background.png')} style={styles.image} />
                </View>
                <Text style={styles.text_wellcome}>Chào mừng bạn</Text>
                <Text style={styles.text_Login}>Đăng ký tài khoản</Text>
                {/* Form Đăng Ký */}
                <View style={styles.formContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Tên của bạn"
                        value={name}
                        onChangeText={setName}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <View style={styles.passwordContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Mật khẩu"
                            secureTextEntry={!showPassword}
                            value={password}
                            onChangeText={setPassword}
                        />
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                            <Image
                                source={showPassword ? require('../assets/Icons/eye_open.png') : require('../assets/Icons/eye_close.png')}
                                style={styles.eyeIcon}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.passwordContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Xác nhận mật khẩu"
                            secureTextEntry={!showConfirmPassword}
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                        />
                        <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                            <Image
                                source={showConfirmPassword ? require('../assets/Icons/eye_open.png') : require('../assets/Icons/eye_close.png')}
                                style={styles.eyeIcon}
                            />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.termsText}>
                        Để đăng ký tài khoản, bạn đồng ý với <Text style={styles.linkText}>Terms & Conditions</Text> và <Text style={styles.linkText}>Privacy Policy</Text>
                    </Text>
                    <TouchableOpacity style={styles.button} onPress={onClick_SignUp} disabled={loading}>
                        {loading ? (
                            <ActivityIndicator size="small" color="#fff" />
                        ) : (
                            <Text style={styles.buttonText}>Đăng Ký</Text>
                        )}
                    </TouchableOpacity>
                    {/* line */}
                    <View style={styles.container_horizontal}>
                        <Image style={styles.line_margin} source={require('../assets/Icons/Line.png')} />
                        <Text>Hoặc</Text>
                        <Image style={styles.line_margin} source={require('../assets/Icons/Line.png')} />
                    </View>
                    <View style={styles.socialContainer}>
                        <TouchableOpacity>
                            <Image source={require('../assets/Icons/google.png')} style={styles.socialIcon_gg} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../assets/Icons/facebook.png')} style={styles.socialIcon_fb} />
                        </TouchableOpacity>
                    </View>
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