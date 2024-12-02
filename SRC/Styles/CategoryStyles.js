import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    container_horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
    },
    image_arrow: {
        width: 24,
        height: 24,
        tintColor: '#212121',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#212121',
    },
    cart_icon: {
        width: 24,
        height: 24,
        tintColor: '#212121',
    },
    flatlist_container: {
        flex: 1,
        justifyContent: 'center',
        height: 40,
        marginBottom: 20,
        paddingHorizontal: 5,
    },
    text_title: {
        fontSize: 16,
        fontWeight: '500',
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
    },
    focused: {
        backgroundColor: '#009245',
        borderRadius: 10,
    },
    focused_text: {
        color: '#fff',
    },
    flatlist_container_product: {
        width: 150,
        height: 220,
        borderRadius: 10,
        justifyContent: 'center',
        marginLeft: 10,
        marginBottom: 25,
        backgroundColor: '#fff',
        elevation: 1, 
    },
    product_image: {
        backgroundColor: '#F6F6F6',
        width: '100%',
        height: 130,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden',
    },
    product_name: {
        fontSize: 14,
        fontWeight: '600',
        color: '#212121',
        marginTop: 5,
    },
    product_uudiem: {
        fontSize: 12,
        marginTop: 2,
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