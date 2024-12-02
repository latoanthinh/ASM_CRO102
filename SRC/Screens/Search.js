import React, { useState, useEffect } from "react";
import { View, Text, Image, TextInput, FlatList, TouchableOpacity, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/productSlice';
import styles from "../Styles/SearchStyles";

const Search_Screen = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [recentSearches, setRecentSearches] = useState([]);
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleSearch = (text) => {
        setSearchTerm(text);
    };

    const filteredResults = products.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDelete = (id) => {
        setRecentSearches(prevSearches => prevSearches.filter(item => item.id !== id));
    };

    const handleAddSearch = (item) => {
        if (item && !recentSearches.some(search => search.id === item.id)) {
            setRecentSearches(prevSearches => [...prevSearches, item]);
        }
    };

    const resultRender = ({ item }) => (
        <View style={styles.view_filter_results}>
            <Image source={{ uri: item.image }} style={styles.icon} />
            <Text style={styles.result_text}>{item.name}</Text>
            <TouchableOpacity onPress={() => handleDelete(item.id)}>
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
                    value={searchTerm}
                    onChangeText={handleSearch}
                />
                <Pressable onPress={() => filteredResults.length > 0 && handleAddSearch(filteredResults[0])}>
                    <Image style={styles.search_icon} source={require('../assets/Icons/search.png')} />
                </Pressable>
            </View>
            <View style={styles.filter_view}>
                <Text style={styles.filter_title}>Tìm kiếm gần đây</Text>
                <FlatList
                    data={recentSearches}
                    renderItem={resultRender}
                    keyExtractor={(item) => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    );
};

export default Search_Screen;