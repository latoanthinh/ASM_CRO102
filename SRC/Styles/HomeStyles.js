import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f6f6',

    },
    horizontal_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: "#fff"
    },
    text_planta: {
        fontSize: 24,
        fontWeight: '500',
        width: 223,
        height: 77,
        marginTop: 60,
        zIndex: 1
    },
    icon_view: {
        width: 48,
        height: 46,
        backgroundColor: '#ffffff',
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',

    },
    bg: {
        width: '100%',
        height: 150,
    },
    text_green: {
        color: '#007537',
        fontSize: 16,
        fontWeight: '500',
    },
    flatlist_container: {
        marginHorizontal: 10,
        backgroundColor: '#fff',
        paddingBottom: 10,
        marginBottom: 10,
        borderRadius: 10
    },
    text_1: {
        fontSize: 16,
        fontWeight: '500',
        color: '#221f1f',
    },
    flatlist_styles: {
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        height: 'auto',
    },
    product_name: {
        fontSize: 14,
        fontWeight: '400'
    },
    product_uudiem: {
        fontSize: 14,
        color: '#888888'
    },
    product_price: {
        fontSize: 16,
        fontWeight: '500',
        marginTop: 5,
        color: '#007537'
    },
    product_image: {
        width: 155,
        height: 134,
        backgroundColor: '#f6f6f6',
        borderRadius: 16
    },
    addToCartButton: {
        backgroundColor: '#007537',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
    addToCartButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    productContainer: {
        flex: 1,
        alignItems: 'center',
        marginVertical: 10,
        paddingHorizontal: 5,
    },
    cartContainer: {
        position: 'absolute',
        top: 40,
        right: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

    cartIcon: {
        width: 20,
        height: 20,
    },

    cartCount: {
        position: 'absolute',
        right: 0,
        top: 10,
        backgroundColor: 'red',
        borderRadius: 10,
        width: 10,
        height: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: 'white',
    },

    cartCountText: {
        color: 'white',
        fontSize: 8,
        fontWeight: 'bold',

    },
})
export default styles;