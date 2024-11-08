import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20
    },
    container_horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
    },
    image_arrow: {
        width: 24,
        height: 24,
    },
    tiltle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10
    },
    cart_icon: {
        width: 24,
        height: 24,
        tintColor: '#212121',
        marginLeft: 10
    },
    flatlist_container: {
        flex: 1,
        justifyContent: 'center',
        height: 40,
        marginBottom: 20
    },
    text_tilte: {
        fontSize: 14,
        fontWeight: '400',
        width: 'auto',
        padding: 10,
        height: 40,
        borderRadius: 10,
    },
    focused: {
        backgroundColor: '#009245',
        borderRadius: 10,
        width: 'auto',
        height: 40,
    },
    focused_text: {
        color: '#fff',
    },
    flatlist_container_product: {
        width: 150,
        height: 217,
        borderRadius: 10,
        justifyContent: 'center',
        marginLeft: 10,
        alignContent: 'center',
        marginBottom: 25
    },
    product_image: {
        backgroundColor: '#F6F6F6',
        width: 155,
        height: 134,
        borderRadius: 8,
        overflow: 'hidden',
    },
    product_name: {
        fontSize: 14,
        fontWeight: '400',
        color: '#212121',
        marginTop: 10,
    },
    product_uudiem: {
        fontSize: 14,
        marginTop: 5,
        color: '#888888',
    },
    product_price: {
        fontSize: 16,
        fontWeight: '500',
        marginTop: 5,
        color: '#007537',
    },
});
export default styles;