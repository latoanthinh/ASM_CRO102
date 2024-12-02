import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, selectCategories, selectLoading, selectError } from '../store/categorySlice';
import { fetchProductsByCategory, selectProducts, selectProductLoading, selectProductError } from '../store/productSlice';
import styles from "../Styles/CategoryStyles";
import { FlatList, Image, Text, View, Pressable, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Category = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const categories = useSelector(selectCategories);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);
    const products = useSelector(selectProducts);
    const productLoading = useSelector(selectProductLoading);
    const productError = useSelector(selectProductError);
    const [selectedCategory, setSelectedCategory] = React.useState(null);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    const handleCategoryPress = (category) => {
        setSelectedCategory(category.name);
        dispatch(fetchProductsByCategory(category.name)); // Gọi API theo tên danh mục
    };

    const Flatlist_Category = ({ item }) => {
        return (
            <Pressable style={styles.flatlist_container} onPress={() => handleCategoryPress(item)}>
                <Text style={styles.text_title}>
                    {item.name}
                </Text>
            </Pressable>
        );
    };

    const Product_render = ({ item }) => {
        return (
            <View style={styles.flatlist_container_product}>
                <Image
                    source={item.image ? { uri: item.image } : require('../assets/Images/product_1.png')}
                    style={styles.product_image}
                />
                <Text style={styles.product_name}>{item.name}</Text>
                <Text style={styles.product_uudiem}>{item.description}</Text>
                <Text style={styles.product_price}>{item.price.toLocaleString()} VND</Text>
            </View>
        );
    };

    const goBack = () => {
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <View style={styles.container_horizontal}>
                <Pressable onPress={goBack}>
                    <Image style={styles.image_arrow} source={require('../assets/Icons/arrow_left.png')} />
                </Pressable>
                <Text style={styles.title}>Bán Chạy</Text>
                <Image style={styles.cart_icon} source={require('../assets/Icons/shopping-cart.png')} />
            </View>

            {loading ? (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color="#007537" />
                </View>
            ) : error ? (
                <Text style={{ color: 'red', textAlign: 'center' }}>Error: {error}</Text>
            ) : (
                <FlatList
                    data={categories}
                    renderItem={Flatlist_Category}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 10 }}
                />
            )}

            <Text style={styles.category_title}>{selectedCategory ? `Sản phẩm trong danh mục: ${selectedCategory}` : 'Chọn danh mục để xem sản phẩm'}</Text>

            {productLoading ? (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color="#007537" />
                </View>
            ) : productError ? (
                <Text style={{ color: 'red', textAlign: 'center' }}>Error: {productError}</Text>
            ) : (
                <FlatList
                    data={products}
                    renderItem={Product_render}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                />
            )}
        </View>
    );
};

export default Category;