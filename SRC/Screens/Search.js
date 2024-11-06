import React from "react";
import { View, Text, Image, TextInput, FlatList, TouchableOpacity } from 'react-native';
import styles from "../Styles/SearchStyles";

const Search_Screen = () => {
    const result_data = [
        { id: 1, name: 'Cẩm Tú Cầu' },
        { id: 2, name: 'Hoa Lan' },
        { id: 3, name: 'Hoa Ly' },
    ];

    const result_render = ({ item }) => (
        <View style={styles.view_filter_results}>
            <Image source={require('../assets/Icons/clock.png')} style={styles.icon} />
            <Text style={styles.result_text}>{item.name}</Text>
            <TouchableOpacity>
                <Image source={require('../assets/Icons/delete.png')} style={styles.icon} />
            </TouchableOpacity>
        </View>
    );


    return (
        <View style={styles.container}>
            <View style={styles.view_horizontal}>
                <Image style={styles.arrow_icon} source={require('../assets/Icons/arrow_left.png')} />
                <Text style={[styles.text_16_500, styles.text_center]}>Tìm Kiếm</Text>
            </View>
            <View style={styles.search_view}>
                <TextInput
                    style={styles.input}
                    placeholder="Tìm kiếm"
                    placeholderTextColor="#999"
                />
                <Image style={styles.search_icon} source={require('../assets/Icons/search.png')} />
            </View>
            <View style={styles.filter_view}>
                <Text style={styles.filter_title}>Tìm kiếm gần đây</Text>
                <FlatList
                    data={result_data}
                    renderItem={result_render}
                    keyExtractor={(item) => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    );
};

export default Search_Screen;