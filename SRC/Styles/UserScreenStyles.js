import { StyleSheet } from 'react-native';

const UserScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    profilePic: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 16,
    },
    userInfo: {
        flex: 1,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 4,
        color: '#212529',
    },
    email: {
        fontSize: 16,
        color: '#6c757d',
    },
    section: {
        backgroundColor: '#fff',
        padding: 16,
        marginVertical: 8,
        borderRadius: 8,
        elevation: 1,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 10,
        color: '#495057',
        borderBottomWidth: 1,
        borderColor: '#dee2e6',
        paddingBottom: 4,
    },
    menuItem: {
        paddingVertical: 12,
    },
    menuItemText: {
        fontSize: 16,
        color: '#343a40',
    },
    logoutText: {
        color: '#dc3545',
        fontSize: 16,
        fontWeight: '500',
    },
    title: {
        width: '100%',
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    text_title: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: '600',
        color: 'black',
    },
    modalView: {
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        width: '90%',
        height: 200,
        alignSelf: 'center',
        borderRadius: 10,
        padding: 20
    }
});

export default UserScreenStyles;