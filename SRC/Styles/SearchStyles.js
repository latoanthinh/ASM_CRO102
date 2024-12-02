import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f6f6',
    },
    view_horizontal: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text_center: {
        alignSelf: 'center',
    },
    text_16_500: {
        fontSize: 16,
        fontWeight: '500',
        color: '#333333',
    },
    arrow_icon: {
        width: 24,
        height: 24,
        position: 'absolute',
        left: 10,
    },
    input: {
        width: '90%',
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#000000',
        fontSize: 16,
        paddingHorizontal: 10,
        paddingBottom: 8,
        backgroundColor: 'transparent',
        color: '#333333',
        marginLeft: 10,
    },
    search_view: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    search_icon: {
        width: 24,
        height: 24,
        position: 'absolute',
        right: 20,
    },
    filter_view: {
        width: '100%',
        marginTop: 30,
        paddingStart: 10,
    },
    filter_title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333333',
    },
    view_filter_results: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderRadius: 8,
        marginTop: 5,
    },
    result_text: {
        flex: 1,
        marginLeft: 10,
        fontSize: 16,
        color: '#333333',
    },
});

export default styles;