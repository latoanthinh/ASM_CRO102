import { StyleSheet } from "react-native";

const DetailStyles = StyleSheet.create({
    detail_header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,
    },
    detail_header_back: {
        width: 30,
        height: 30,
    },
    detail_header_text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    shopping_cart: {
        width: 30,
        height: 30,
    },
    detail_content: {
        marginTop: 20,
    },
    detail_content_image_container: {
        width: 393,
        height: 300,
        backgroundColor: '#F5F5F5',
    },
    detail_content_image: {
        width: '100%',
        height: '100%',
    },

    detail_content_text_container: {
        marginVertical: 8,
    },
    detail_content_text_container_text: {
        flexDirection: 'row',
        flex: 1,
        marginHorizontal: 16,
    },
    detail_content_text_container_text_title: {
        fontSize: 16,
        width: 'auto',
        height: 30,
        color: '#fff',
        backgroundColor: '#009245',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        alignContent: 'center',
        marginLeft: 10
    },
    detail_content_text_container_text_price_container: {
        marginHorizontal: 16,
        marginTop: 30,
    },
    detail_content_text_container_text_price: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#007537',
    },
    detail_chitiettxt_container: {
        marginTop: 10,
    },
    detail_chitiettxt: {
        fontSize: 19,
        color: '#007537',
        fontWeight: 'bold',
    },
    detail_line: {
        width: '100%',
        marginTop: 10,
        height: 2,
        backgroundColor: '#333',
    },
    detail_line2: {
        width: '100%',
        marginTop: 10,
        height: 1,
        backgroundColor: '#333',
    },
    detail_chitiettxtcon: {
        marginTop: 10,
        fontSize: 16,
        color: '#3A3A3A',
        // fontWeight: 'bold',
    },
    detail_chitiettxtcongreen: {
        marginTop: 10,
        fontSize: 16,
        color: '#009245',
        // fontWeight: 'bold',
    },
    detail_chitiettxtcon_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 16,
    },
    detail_chonmua_container: {
        marginTop: 10,
    },
    detail_chonmua_container_text: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 16,
    },
    detail_chonmua_text: {

        fontSize: 16,
        color: '#000000',
    },
    detail_tamtinh_text: {
        fontSize: 16,
        color: '#000000',
    },
    detail_soluong_container: {
        // flexDirection: 'row',
        marginTop: 10,
        width: '40%',
    },
    detail_soluong: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 16,
    },
    button: {
        // backgroundColor: '#007aff',
        paddingHorizontal: 7,
        paddingVertical: 2,
        borderRadius: 5,
        borderWidth: 1,
    },
    buttonText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    },
    value: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 20,
    },
    detail_big_container: {
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    detail_giatamtinh: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 16,
    },
    detail_button: {
        width: '92%',
        height: 50,
        alignSelf: 'center',
        marginTop: 20,
        backgroundColor: '#007537',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 5,
        marginBottom: 10
    },
    detail_button_text: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10,
        fontWeight: 'bold',
        color: 'white',

    },
});

export default DetailStyles;