import { View, Text, Image, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import React, { useState } from 'react';
import styles from '../Styles/DetailStyles';
import { useNavigation, useRoute } from '@react-navigation/native';

function Detail() {
    const route = useRoute();
    const { product } = route.params;
    const [value, setValue] = useState(1);
    const [selectedSize, setSelectedSize] = useState('S');

    const navigation = useNavigation();

    const goBackHome = () => {
        navigation.navigate('Home');
    };

    const handleIncrease = () => {
        setValue(value + 1);
    };

    const handleDecrease = () => {
        if (value > 1) {
            setValue(value - 1);
        }
    };

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    };

    const handleAddToCart = () => {
        const cartItem = {
            product,
            quantity: value,
            selectedSize,
        };
        navigation.navigate('Cart', { cartItem });
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.detail_header}>
                    <Pressable onPress={goBackHome}>
                        <Image source={require('../assets/Icons/arrow_left.png')} style={styles.detail_header_back} />
                    </Pressable>
                    <Text style={styles.detail_header_text}>{product.name}</Text>
                    <Image source={require('../assets/Icons/shopping-cart.png')} style={styles.shopping_cart} />
                </View>

                <View style={styles.detail_content}>
                    <View style={styles.detail_content_image_container}>
                        <Image
                            source={product.image ? { uri: product.image } : require('../assets/Images/product_1.png')}
                            style={styles.detail_content_image}
                        />
                    </View>

                    <View style={styles.detail_content_text_container}>
                        <View style={styles.detail_content_text_container_text}>
                            <Text style={styles.detail_content_text_container_text_title}>{product.name}</Text>
                            <Text style={styles.detail_content_text_container_text_title}>{product.description}</Text>
                        </View>
                        <View style={styles.detail_content_text_container_text_price_container}>
                            <Text style={styles.detail_content_text_container_text_price}>
                                {product.price.toLocaleString()} VND
                            </Text>
                        </View>
                    </View>

                    <View style={styles.size_selection_container}>
                        <Text style={styles.size_selection_title}>Chọn kích thước:</Text>
                        <View style={styles.size_buttons_container}>
                            {['S', 'M', 'L', 'XXL'].map((size) => (
                                <TouchableOpacity
                                    key={size}
                                    style={[
                                        styles.size_button,
                                        selectedSize === size && styles.size_button_selected
                                    ]}
                                    onPress={() => handleSizeSelect(size)}
                                >
                                    <Text
                                        style={[
                                            styles.size_button_text,
                                            selectedSize === size && styles.size_button_text_selected
                                        ]}
                                    >
                                        {size}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>

                    <View style={styles.detail_chonmua_container}>
                        <View style={styles.detail_chonmua_container_text}>
                            <Text style={styles.detail_chonmua_text}>Đã chọn {value} sản phẩm</Text>
                            <Text style={styles.detail_tamtinh_text}>Tạm tính</Text>
                        </View>

                        <View style={styles.detail_big_container}>
                            <View style={styles.detail_soluong_container}>
                                <View style={styles.detail_soluong}>
                                    <TouchableOpacity onPress={handleDecrease}>
                                        <Text style={styles.buttonText}>-</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.value}>{value}</Text>
                                    <TouchableOpacity onPress={handleIncrease}>
                                        <Text style={styles.buttonText}>+</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <Text style={styles.detail_giatamtinh}>
                                {(value * product.price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                            </Text>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.detail_button} onPress={handleAddToCart}>
                        <Text style={styles.detail_button_text}>Thêm vào giỏ hàng</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

export default Detail;