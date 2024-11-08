import React, { useState } from "react";
import styles from "../Styles/CategoryStyles"
import { FlatList, Image, Text, View, TouchableOpacity, Pressable } from "react-native";

const Category = () => {
    const [focusedCategory, setFocusedCategory] = useState(0);

    const Product_data = [
        { id: 1, name: 'Spider Plant', image: require('../assets/Images/product_1.png'), uudiem: 'Ưa bóng', price: 250000 },
        { id: 2, name: 'Cây Kiểng', image: require('../assets/Images/product_2.png'), uudiem: 'Ưa nước', price: 350000 },
        { id: 3, name: 'Cẩm Tú Cầu', image: require('../assets/Images/product_3.png'), uudiem: 'Ưa bóng', price: 450000 },
        { id: 4, name: 'Xương Rồng mini', image: require('../assets/Images/product_4.png'), uudiem: 'Ưa nước', price: 500000 },
        { id: 5, name: 'Hoa Lan', image: require('../assets/Images/product_1.png'), uudiem: 'Ưa bóng', price: 650000 },
        { id: 6, name: 'Hoa Ly', image: require('../assets/Images/product_2.png'), uudiem: 'Ưa nước', price: 700000 },
        { id: 7, name: 'Hoa Hồng', image: require('../assets/Images/product_3.png'), uudiem: 'Ưa bóng', price: 90000 },
        { id: 8, name: 'Hoa Dâm Bụt', image: require('../assets/Images/product_4.png'), uudiem: 'Ưa nước', price: 120000 },
        { id: 9, name: 'Cây Mai Kiểng', image: require('../assets/Images/product_4.png'), uudiem: 'Ưa nước', price: 150000 },
        { id: 10, name: 'Cây Đào', image: require('../assets/Images/product_4.png'), uudiem: 'Ưa nước', price: 180000 },
    ];

    const category_data = [
        { id: 1, tiltle: 'Tất cả' },
        { id: 2, tiltle: 'Hàng mới về' },
        { id: 3, tiltle: 'Ưa Sáng' },
        { id: 4, tiltle: 'Ưa Nước' },
        { id: 5, tiltle: 'Ưa Bóng' },
        { id: 6, tiltle: 'Xem Thêm' },
    ];

    // Render Flatlist UI
    const Product_render = ({ item }) => {
        return (
            <View style={styles.flatlist_container_product}>
                <Image source={item.image} style={styles.product_image} />
                <Text style={styles.product_name}>{item.name}</Text>
                <Text style={styles.product_uudiem}>{item.uudiem}</Text>
                <Text style={styles.product_price}>{item.price.toLocaleString()} VND</Text>
            </View>
        );
    }
    const Flatist_Category = ({ item, index }) => {
        const isFocused = index === focusedCategory;

        return (
            <Pressable
                style={[
                    styles.flatlist_container,
                    isFocused ? styles.focused : null,
                ]}
                onPress={() => setFocusedCategory(index)}
            >
                <Text style={[styles.text_tilte, isFocused ? styles.focused_text : null]}>
                    {item.tiltle}
                </Text>
            </Pressable>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.container_horizontal}>
                <Image style={styles.image_arrow} source={require('../assets/Icons/arrow_left.png')} />
                <Text style={styles.tiltle}>CÂY TRỒNG</Text>
                <Image style={styles.cart_icon} source={require('../assets/Icons/shopping-cart.png')} />
            </View>
            <FlatList
                data={category_data}
                renderItem={Flatist_Category}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
            <FlatList
                data={Product_data}
                renderItem={Product_render}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                numColumns={2}
            />
        </View>
    );
};

export default Category;