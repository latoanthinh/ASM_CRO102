import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f9f9f9',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        paddingBottom: 10,
    },
    backButton: {
        marginRight: 10,
    },
    backButtonText: {
        fontSize: 24,
        color: '#4CAF50',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1,
        color: '#333',
    },

    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
    },
    checkbox: {
        marginRight: 10,
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
    },
    checkboxText: {
        fontSize: 18,
        color: 'grey',
    },
    checkboxTextSelected: {
        fontSize: 18,
        color: '#4CAF50',
    },
    productImage: {
        width: 60,
        height: 60,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    productDetails: {
        flex: 1,
        marginLeft: 10,
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    productPrice: {
        fontSize: 14,
        color: '#888',
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    quantityButton: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#4CAF50',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    quantityButtonText: {
        fontSize: 18,
        color: '#4CAF50',
    },
    productQuantity: {
        fontSize: 14,
        marginHorizontal: 10,
    },
    removeButton: {
        marginLeft: 10,
    },
    removeButtonText: {
        color: 'red',
        fontWeight: 'bold',
    },
    totalContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    },
    totalLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    totalPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#4CAF50',
    },
    checkoutButton: {
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    checkoutButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    emptyCartText: {
        textAlign: 'center',
        fontSize: 18,
        color: 'red',
        marginTop: 20,
    },
});

export default styles;