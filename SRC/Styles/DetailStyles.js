import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    container_horizontal: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    image_arrow: {
        width: 24,
        height: 24,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    cart_icon: {
        width: 24,
        height: 24,
    },
    image_detail: {
        width: '100%',
        height: 300,
        resizeMode: 'contain',
    },
    arrow_left: {
        position: 'absolute',
        top: '50%',
        left: 20,
        transform: [{ translateY: -12 }],
        width: 24,
        height: 24,
    },
    arrow_right: {
        position: 'absolute',
        top: '50%',
        right: 20,
        transform: [{ translateY: -12 }],
        width: 24,
        height: 24,
    },
    product_info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    info_item: {
        backgroundColor: '#f2f2f2',
        padding: 10,
        borderRadius: 4,
    },
    info_text: {
        fontSize: 16,
        color: '#333',
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    product_details: {
        marginVertical: 20,
    },
    details_title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    details_item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 8,
    },
    details_label: {
        fontSize: 16,
        color: '#666',
    },
    details_value: {
        fontSize: 16,
        color: '#333',
    },
    payment_container: {
        marginVertical: 20,
    },
    quantity_and_total: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    quantity_container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantity_label: {
        fontSize: 16,
        marginRight: 10,
    },
    quantity_value: {
        fontSize: 16,
        marginHorizontal: 10,
    },
    button_minus: {
        padding: 8,
        backgroundColor: '#f2f2f2',
        borderRadius: 4,
    },
    button_plus: {
        padding: 8,
        backgroundColor: '#f2f2f2',
        borderRadius: 4,
    },
    button_text: {
        fontSize: 16,
    },
    total_price: {
        fontSize: 16,
    },
    button_buy: {
        backgroundColor: '#007bff',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 4,
        alignItems: 'center',
    },
});

export default styles;