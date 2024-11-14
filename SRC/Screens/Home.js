import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, Pressable } from 'react-native';
import styles from '../Styles/HomeStyles';
import { useNavigation } from '@react-navigation/native';

const Home_Screen = () => {
    const navigation = useNavigation();
    const Product_data = [
        { id: 1, name: 'Spider Plant', image: require('../assets/Images/product_1.png'), uudiem: 'Ưa bóng', price: 250000 },
        { id: 2, name: 'Cây Kiểng', image: require('../assets/Images/product_2.png'), uudiem: 'Ưa nước', price: 350000 },
        { id: 3, name: 'Cẩm Tú Cầu', image: require('../assets/Images/product_3.png'), uudiem: 'Ưa bóng', price: 450000 },
        { id: 4, name: 'Xương Rồng mini', image: require('../assets/Images/product_4.png'), uudiem: 'Ưa nước', price: 500000 },
        { id: 5, name: 'Hoa Lan', image: require('../assets/Images/product_1.png'), uudiem: 'Ưa bóng', price: 650000 },
        { id: 6, name: 'Hoa Ly', image: require('../assets/Images/product_2.png'), uudiem: 'Ưa nước', price: 700000 },
    ];

    const goToDetail = () => {
        console.log('>>>>>>>>>>>>>>>> Go To Detail')
        navigation.navigate('Detail');
    }
    const goToCategory = () => {
        console.log('>>>>>>>>>>>>>>>>>>> Go To Category')
        navigation.navigate('Category');
    }
    const Render_Flalist_Product = ({ item }) => (
        <TouchableOpacity onPress={goToDetail}>
            <View style={styles.flatlist_container}>
                <Image source={item.image} style={styles.product_image} />
                <Text style={styles.product_name}>{item.name}</Text>
                <Text style={styles.product_uudiem}>{item.uudiem}</Text>
                <Text style={styles.product_price}>{item.price.toLocaleString()} VND</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.horizontal_container}>
                <Text style={styles.text_planta}>Planta - tỏa sáng không gian nhà bạn</Text>
                <View style={styles.icon_view}>
                    <Image source={require('../assets/Icons/shopping-cart.png')} />
                </View>
            </View>
            <Image style={styles.bg} source={require('../assets/Images/home_bg.png')} />
            <View style={styles.container_green_text}>
                <Pressable onPress={goToCategory}>
                    <Text style={styles.text_green}>Xem hàng mới về</Text>
                </Pressable>
                <Image source={require('../assets/Icons/arrow_green.png')} />
            </View>
            <Text style={styles.text_1}>Cây trồng</Text>
            <FlatList
                style={styles.flatlist_styles}
                data={Product_data}
                renderItem={Render_Flalist_Product}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                numColumns={2}
            />
        </View>
    );
};

export default Home_Screen;