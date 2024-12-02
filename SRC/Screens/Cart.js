import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import styles from '../Styles/CartStyles';

function Cart() {
    const navigation = useNavigation();
    const route = useRoute();
    const { cartItem } = route.params || {};

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        if (cartItem) {
            setCartItems(prevItems => {
                const existingItem = prevItems.find(item => item.product.id === cartItem.product.id);
                if (existingItem) {
                    return prevItems.map(item =>
                        item.product.id === existingItem.product.id
                            ? { ...item, quantity: item.quantity + cartItem.quantity }
                            : item
                    );
                }
                return [...prevItems, cartItem];
            });
        }
    }, [cartItem]);

    const handleIncrease = (index) => {
        const updatedCart = [...cartItems];
        updatedCart[index].quantity += 1;
        setCartItems(updatedCart);
    };

    const handleDecrease = (index) => {
        const updatedCart = [...cartItems];
        if (updatedCart[index].quantity > 1) {
            updatedCart[index].quantity -= 1;
            setCartItems(updatedCart);
        }
    };

    const handleRemove = (index) => {
        const updatedCart = cartItems.filter((_, i) => i != index);
        setCartItems(updatedCart);
    };

    const totalPrice = cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Image source={require('../assets/Icons/arrow_left_2.png')} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Giỏ hàng</Text>
            </View>

            {cartItems.length == 0 ? (
                <Text style={styles.emptyCartText}>Giỏ hàng trống!</Text>
            ) : (
                cartItems.map((cartItem, index) => (
                    <View key={index} style={styles.itemContainer}>
                        <Image
                            source={cartItem.product.image ? { uri: cartItem.product.image } : require('../assets/Images/product_1.png')}
                            style={styles.productImage}
                        />
                        <View style={styles.productDetails}>
                            <Text style={styles.productName}>{cartItem.product.name}</Text>
                            <Text style={styles.productSize}>Kích thước: {cartItem.selectedSize}</Text>
                            <Text style={styles.productPrice}>{cartItem.product.price.toLocaleString()}đ</Text>
                            <View style={styles.quantityContainer}>
                                <TouchableOpacity onPress={() => handleDecrease(index)} style={styles.quantityButton}>
                                    <Text style={styles.quantityButtonText}>-</Text>
                                </TouchableOpacity>
                                <Text style={styles.productQuantity}>{cartItem.quantity}</Text>
                                <TouchableOpacity onPress={() => handleIncrease(index)} style={styles.quantityButton}>
                                    <Text style={styles.quantityButtonText}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => handleRemove(index)} style={styles.removeButton}>
                            <Text style={styles.removeButtonText}>Xóa</Text>
                        </TouchableOpacity>
                    </View>
                ))
            )}

            <View style={styles.totalContainer}>
                <Text style={styles.totalLabel}>Tạm tính:</Text>
                <Text style={styles.totalPrice}>{totalPrice.toLocaleString()}đ</Text>
            </View>

            <TouchableOpacity 
                style={styles.checkoutButton} 
                onPress={() => navigation.navigate('Payment', { cartItems })}
            >
                <Text style={styles.checkoutButtonText}>Tiến hành thanh toán</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Cart;