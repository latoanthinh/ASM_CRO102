import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    header: {
        width: '100%',
        height: 50,
        padding: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    headerText: {
        color: '#221F1F',
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center'
    },
    icon_back: {
        tintColor: '#221F1F',
        marginLeft: 10,
        position: 'absolute',
        left: 10
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    message: {
        fontSize: 16,
        color: '#333',
    },
});

export default styles;