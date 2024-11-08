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

});

export default styles;