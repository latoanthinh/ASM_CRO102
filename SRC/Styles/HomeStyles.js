import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

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
    cart_icon: {
        
    },
    bg: {
        width: '100%',
        height: 200,
        position: 'absolute',
        top: 100
    }
})
export default styles;