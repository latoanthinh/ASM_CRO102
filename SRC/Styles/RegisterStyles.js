import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    imageContainer: {
        width: '100%',
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    text_wellcome: {
        textAlign: 'center',
        fontSize: 24,
        marginVertical: 5,
        fontWeight: 'bold',
    },
    text_Login: {
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 10,
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
    termsText: {
        marginVertical: 16,
        textAlign: 'center',
        color: '#000',
    },
    linkText: {
        color: '#007b00',
        textDecorationLine: 'underline',
    },
    button: {
        backgroundColor: '#007b00',
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    container_horizontal: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 16,
        justifyContent: 'center',
    },
    line_margin: {
        width: 100,
        height: 1,
        marginHorizontal: 10,
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
    text_horizontal: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 16,
        alignItems: 'center',
    },
    forgotPassword: {
        color: '#007b00',
        marginLeft: 5,
    },
});

export default styles;