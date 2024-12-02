import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Alert, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { WebView } from 'react-native-webview';
import { hmacSHA256 } from 'react-native-hmac';

const Payment = ({ route, navigation }) => {
    const { cartItems } = route.params;
    const [paymentLink, setPaymentLink] = useState(null);
    const clientID = 'f41492cb-7845-4b64-8e22-f47c1cdf662a';
    const apiKey = 'd77bf32d-cdde-491f-b525-04dd24e62b0c';
    const checkSum = 'ea3c2f08fcef19c9e4f0f9266401097f99c199132aeaa4e9d2697659526dc94e';

    const createPaymentLink = async () => {
        const amount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
        const cancelUrl = 'https://localhost:3000/cancel';
        const description = `Thanh Toán: ${amount}`;
        const orderCode = Date.now();
        const returnUrl = 'https://localhost:3000/success';

        const signature = await hmacSHA256(
            `amount=${amount}&cancelUrl=${cancelUrl}&description=${description}&orderCode=${orderCode}&returnUrl=${returnUrl}`,
            checkSum
        );

        const body = {
            orderCode,
            amount,
            description,
            cancelUrl,
            returnUrl,
            signature,
        };

        try {
            const response = await axios.post('https://api-merchant.payos.vn/v2/payment-requests', body, {
                headers: {
                    'x-client-id': clientID,
                    'x-api-key': apiKey,
                },
            });
            if (response.data.code == 0) {
                setPaymentLink(response.data.data.checkoutUrl);
            } else {
                Alert.alert('Lỗi', 'Không thể tạo link thanh toán');
            }
        } catch (error) {
            console.log(error);
            Alert.alert('Lỗi', 'Có lỗi xảy ra trong quá trình thanh toán');
        }
    };

    useEffect(() => {
    }, []);

    const handleNavigationChange = (navState) => {
        const { url } = navState;
        console.log('Current URL:', url);
        if (url.includes('/success')) {
            Alert.alert('Thành công', 'Bạn đã thanh toán thành công');
            navigation.navigate('Home');
        } else if (url.includes('/cancel')) {
            Alert.alert('Đã hủy thanh toán.');
            navigation.navigate('Cart');
        }
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.headerText}>Thông tin thanh toán</Text>
                <TouchableOpacity style={styles.checkoutButton} onPress={createPaymentLink}>
                    <Text style={styles.checkoutButtonText}>Tạo thanh toán</Text>
                </TouchableOpacity>
                {paymentLink && (
                    <WebView
                        source={{ uri: paymentLink }}
                        style={styles.webView}
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                        onNavigationStateChange={handleNavigationChange}
                    />
                )}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
        padding: 16,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    scrollView: {
        flex: 1,
        paddingHorizontal: 16,
        marginBottom: 16,
        marginBottom: 20,
    },
    itemContainer: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        marginBottom: 12,
    },
    productName: {
        fontSize: 18,
        fontWeight: '600',
    },
    productPrice: {
        fontSize: 16,
        color: '#ff5722',
    },
    productQuantity: {
        fontSize: 14,
        color: '#666',
    },
    checkoutButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 16,
    },
    checkoutButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    webView: {
        width: '100%',
        height: 800,
        borderRadius: 8,
        overflow: 'hidden',
    },
});

export default Payment;