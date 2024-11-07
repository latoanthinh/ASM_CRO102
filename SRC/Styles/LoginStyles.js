import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    imageContainer: {
        position: 'absolute',
        bottom: 500,
        justifyContent: 'center',
        width: '100%',
        height: 350,
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    formContainer: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 16,
        marginBottom: 16,
    },
    button: {
        backgroundColor: '#007b00',
        height: 50,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    //Login Button
    buttonText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 20,
    },
    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 16,
        alignItems: 'center',
    },
    socialIcon_gg: {
        width: 20,
        height: 20,
        marginHorizontal: 8,
        alignItems: 'center',
    },
    socialIcon_fb: {
        width: 32,
        height: 32,
        marginHorizontal: 8,
    },
    forgotPassword: {
        color: '#009245',
        fontSize: 11,
        fontWeight: '500'
    },

    text_horizontal: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },

    container_horizontal: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
    },
    line_margin: {
        margin: 10
    },

    text_wellcome: {
        width: 250,
        height: 45,
        textAlign: 'center',
        alignSelf: 'center',
        verticalAlign: 'middle',
        fontSize: 30,
        fontWeight: '700',
        marginTop: 200
    },
    // Text Đăng Nhập
    text_Login: {
        width: 250,
        height: 45,
        textAlign: 'center',
        alignSelf: 'center',
        verticalAlign: 'middle',
        fontSize: 18,
        fontWeight: '400',
    },
    text_remember: {
        color: '#949090',
        fontSize: 11,
        fontWeight: '500'
    },
    text_horizontal_remember: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 8
    },
    checkbox_size: {
        width: 18,
        height: 18,
        marginRight: 5
    },
    error_message: {
        color: '#ff0000',
        fontSize: 12,
        marginBottom: 10
    },
    input_error: {
        borderColor: 'red',
        borderWidth: 1
    },
    checkbox_checked: {
        tintColor: '#4CAF50',
    },
    arrow_back: {
        width: 32,
        height: 32,
        position: 'absolute',
        zIndex: 1,
        backgroundColor: 'rgba(248, 238, 192, 0.5)',
        borderRadius: 50,
        top: 20,
        left: 20
    }
});

export default styles;