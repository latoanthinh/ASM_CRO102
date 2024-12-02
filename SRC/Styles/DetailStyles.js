import { StyleSheet } from "react-native";

const DetailStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    detail_header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 10,
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
        color: 'black',
        backgroundColor: '#fefefe',
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
        color: 'black',
    },
    detail_chitiettxt_container: {
        marginTop: 10,
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
        marginTop: 10,
        width: '40%',
    },
    detail_soluong: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 16,
    },
    button: {
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
        marginBottom: 10,
    },
    detail_button_text: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10,
        fontWeight: 'bold',
        color: 'white',
    },
    size_selection_container: {
        marginTop: 20,
        marginHorizontal: 16,
    },
    size_selection_title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    size_buttons_container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    size_button: {
        borderWidth: 1,
        borderColor: '#007537',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10,
    },
    size_button_selected: {
        backgroundColor: '#007537',
    },
    size_button_text: {
        color: '#007537',
        fontWeight: 'bold',
    },
    size_button_text_selected: {
        color: 'white', 
        fontWeight: 'bold',
    },
});

export default DetailStyles;