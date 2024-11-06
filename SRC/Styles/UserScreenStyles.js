import { StyleSheet } from 'react-native';

const UserScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
    },
    profilePic: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 16,
    },
    userInfo: {
        flex: 1,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    email: {
        fontSize: 14,
        color: '#666',
    },
    section: {
        backgroundColor: '#fff',
        padding: 16,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '400',
        marginBottom: 10,
        color: '#7F7F7F',
        width: '90%',
        height: 42,
        borderBottomWidth: 1,
        borderColor: '#ABABAB'
    },
    menuItem: {
        paddingVertical: 12,
    },
    menuItemText: {
        fontSize: 16,
        color: '#333',
    },

    logoutText: {
        color: '#FF0000',
        fontSize: 16,
        fontWeight: '500',
    },
    tilte: {
        width: '100%',
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text_tilte: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '500'
    }
});

export default UserScreenStyles;