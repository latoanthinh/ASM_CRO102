import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, Image, FlatList, TouchableOpacity, Pressable, ActivityIndicator } from 'react-native';
import { fetchProducts, selectProducts, selectProductLoading, selectProductError } from '../store/productSlice';
import styles from '../Styles/HomeStyles';
import { useNavigation, useRoute } from '@react-navigation/native';

const Home_Screen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();
    const products = useSelector(selectProducts);
    const loading = useSelector(selectProductLoading);
    const error = useSelector(selectProductError);
    const [cart, setCart] = useState(route.params?.cart || []);

    // Gọi API để lấy sản phẩm khi trang Home được tải
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    useEffect(() => {
        if (route.params?.cart) {
            setCart(route.params.cart);
        }
    }, [route.params?.cart]);

    const addToCart = (product) => {
        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct) {
            setCart(cart.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const goToCart = () => {
        navigation.navigate('Cart', { cart, updateCart: setCart });
    };

    const goToCategory = () => {
        navigation.navigate('Category');
    };

    const goToDetail = (product) => {
        navigation.navigate('Detail', { product });
    };

    const Render_Flalist_Product = ({ item }) => (
        <Pressable onPress={() => goToDetail(item)} style={styles.productContainer}>
            <View style={styles.flatlist_container}>
                <Image
                    source={item.image ? { uri: item.image } : require('../assets/Images/product_1.png')}
                    style={styles.product_image}
                />
                <Text style={styles.product_name}>{item.name}</Text>
                <Text style={styles.product_uudiem}>{item.description}</Text>
                <Text style={styles.product_price}>{item.price.toLocaleString()} VND</Text>
                <TouchableOpacity onPress={() => addToCart(item)} style={styles.addToCartButton}>
                    <Text style={styles.addToCartButtonText}>Thêm vào giỏ</Text>
                </TouchableOpacity>
            </View>
        </Pressable>
    );

    return (
        <View style={styles.container}>
            <Image
                style={styles.bg}
                source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/008/174/590/small_2x/fashion-advertising-web-banner-illustration-vector.jpg' }}
            />
            <View style={styles.horizontal_container}>
                <Text style={styles.text_1}>Best Seller</Text>
                <Pressable onPress={goToCategory}>
                    <Text style={styles.text_green}>Xem hàng mới về</Text>
                </Pressable>
            </View>

            <View style={styles.cartContainer}>
                <TouchableOpacity onPress={goToCart}>
                    <Image
                        source={require('../assets/Icons/shopping-cart.png')}
                        style={styles.cartIcon}
                    />
                    {cart.length > 0 && (
                        <View style={styles.cartCount}>
                            <Text style={styles.cartCountText}>
                                {cart.reduce((acc, item) => acc + item.quantity, 0)}
                            </Text>
                        </View>
                    )}
                </TouchableOpacity>
            </View>

            {loading ? (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color="#007537" />
                </View>
            ) : error ? (
                <Text>Error: {error}</Text>
            ) : products.length === 0 ? (
                <Text>Không có sản phẩm nào!</Text>
            ) : (
                <FlatList
                    style={styles.flatlist_styles}
                    data={products}
                    renderItem={Render_Flalist_Product}
                    keyExtractor={(item) => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    contentContainerStyle={{ paddingHorizontal: 10 }}
                />
            )}
        </View>
    );
};

export default Home_Screen;