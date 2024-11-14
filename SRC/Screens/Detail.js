import React from "react";
import { FlatList, Image, Text, View, TouchableOpacity, Pressable, ScrollView } from "react-native";
import styles from "../Styles/DetailStyles";

const Detail_Screen = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.container_horizontal}>
                    <Image style={styles.image_arrow} source={require('../assets/Icons/arrow_left.png')} />
                    <Text style={styles.title}>Spider Plant</Text>
                    <Image style={styles.cart_icon} source={require('../assets/Icons/shopping-cart.png')} />
                </View>
                <View>
                    <Image style={styles.image_detail} source={require('../assets/Images/product_1.png')} />
                    <Image style={styles.arrow_left} source={require('../assets/Icons/arrow_left.png')} />
                    <Image style={styles.arrow_right} source={require('../assets/Icons/arrow_left.png')} />
                </View>
                <View style={styles.product_info}>
                    <View style={styles.info_item}>
                        <Text style={styles.info_text}>Ưa Bóng</Text>
                    </View>
                    <View style={styles.info_item}>
                        <Text style={styles.info_text}>Cây Trồng</Text>
                    </View>
                </View>
                <Text style={styles.price}>250.000đ</Text>
                {/* Chi tiết sản phẩm */}
                <View style={styles.product_details}>
                    <Text style={styles.details_title}>Chi tiết sản phẩm</Text>
                    <View style={styles.details_item}>
                        <Text style={styles.details_label}>Kích Cỡ</Text>
                        <Text style={styles.details_value}>Nhỏ</Text>
                    </View>
                    <View style={styles.details_item}>
                        <Text style={styles.details_label}>Xuất xứ</Text>
                        <Text style={styles.details_value}>Châu phi</Text>
                    </View>
                    <View style={styles.details_item}>
                        <Text style={styles.details_label}>Tình trạng</Text>
                        <Text style={styles.details_value}>còn 156 sp</Text>
                    </View>
                </View>
                {/* View thanh toán */}
                <View style={styles.payment_container}>
                    {/* số lượng sản phẩm */}
                    <View style={styles.quantity_and_total}>
                        <View style={styles.quantity_container}>
                            <Text style={styles.quantity_label}>Số lượng sản phẩm</Text>
                            <Pressable style={styles.button_minus}>
                                <Text style={styles.button_text}>-</Text>
                            </Pressable>
                            <Text style={styles.quantity_value}>0</Text>
                            <Pressable style={styles.button_plus}>
                                <Text style={styles.button_text}>+</Text>
                            </Pressable>
                        </View>
                        <Text style={styles.total_price}>Tạm tính: 0đ</Text>
                    </View>
                    {/* button Chọn Mua */}
                    <Pressable style={styles.button_buy}>
                        <Text style={styles.button_text}>Chọn Mua</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    );
}
export default Detail_Screen;