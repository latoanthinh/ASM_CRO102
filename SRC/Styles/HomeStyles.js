import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f6f6',

    },
    horizontal_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        padding: 10
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
        height: 200,
        position: 'absolute',
        top: 100
    },
    container_green_text: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: 10,
        bottom: 40
    },
    text_green: {
        color: '#007537',
        fontSize: 16,
        fontWeight: '500',
    },
    flatlist_container: {
        marginHorizontal: 10,
        backgroundColor: '#fff',
        paddingBottom: 10
    },
    text_1: {
        marginTop: 80,
        marginHorizontal: 10,
        fontSize: 24,
        fontWeight: '500',
        color: '#221f1f',
    },
    flatlist_styles: {
        marginLeft: 10,
        padding: 10,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        height: '100%'
    },
    product_name: {
        fontSize: 14,
        fontWeight: '400'
    },
    product_uudiem: {
        fontSize: 14,
        marginTop: 5,
        color: '#888888'
    },
    product_price: {
        fontSize: 16,
        fontWeight: '500',
        marginTop: 5,
        color: '#007537'
    }
})
export default styles;