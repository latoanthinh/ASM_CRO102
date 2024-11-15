import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import styles from '../Styles/DetailStyles';

function Detail() {
    const [value, setValue] = useState(1);
    const [totalPrice, setTotalPrice] = useState(250000);



    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.detail_header}>
                    <Image source={require('../assets/Icons/arrow_left.png')} style={styles.detail_header_back} />
                    <Text style={styles.detail_header_text}>Spider plant</Text>
                    <Image source={require('../assets/Icons/shopping-cart.png')} style={styles.shopping_cart} />
                </View>

                <View style={styles.detail_content}>
                    <View style={styles.detail_content_image_container}>
                        <Image source={require('../assets/Images/product_1.png')} style={styles.detail_content_image} />
                    </View>

                    <View style={styles.detail_content_text_container}>
                        <View style={styles.detail_content_text_container_text}>
                            <Text style={styles.detail_content_text_container_text_title}>Cây trồng</Text>
                            <Text style={styles.detail_content_text_container_text_title}>ưa bóng</Text>
                        </View>
                        <View style={styles.detail_content_text_container_text_price_container}>
                            <Text style={styles.detail_content_text_container_text_price}>250.000đ</Text>
                            <View style={styles.detail_chitiettxt_container}>
                                <Text style={styles.detail_chitiettxt}>Chi tiết sản phẩm</Text>
                                <Image source={require('../assets/Icons/Line.png')} style={styles.detail_line} />
                                <View style={styles.detail_chitiettxtcon_container}>
                                    <Text style={styles.detail_chitiettxtcon}>Kích cỡ</Text>
                                    <Text style={styles.detail_chitiettxtcon}>Nhỏ</Text>
                                </View>
                                <Image source={require('../assets/Icons/Line.png')} style={styles.detail_line2} />
                                <View style={styles.detail_chitiettxtcon_container}>
                                    <Text style={styles.detail_chitiettxtcon}>Xuất xứ</Text>
                                    <Text style={styles.detail_chitiettxtcon}>Châu Phi</Text>
                                </View>
                                <Image source={require('../assets/Icons/Line.png')} style={styles.detail_line2} />
                                <View style={styles.detail_chitiettxtcon_container}>
                                    <Text style={styles.detail_chitiettxtcon}>On Stock</Text>
                                    <Text style={styles.detail_chitiettxtcongreen}>còn 156sp</Text>
                                </View>
                                <Image source={require('../assets/Icons/Line.png')} style={styles.detail_line2} />
                            </View>
                        </View>
                    </View>

                    <View style={styles.detail_chonmua_container}>
                        <View style={styles.detail_chonmua_container_text}>
                            <Text style={styles.detail_chonmua_text}>Đã chọn 0 sản phẩm</Text>
                            <Text style={styles.detail_tamtinh_text}>Tạm tính</Text>
                        </View>

                        <View style={styles.detail_big_container}>
                            <View style={styles.detail_soluong_container}>
                                <View style={styles.detail_soluong}>
                                    <TouchableOpacity>
                                        <Text style={styles.buttonText}>-</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.value}>{value}</Text>
                                    <TouchableOpacity>
                                        <Text style={styles.buttonText}>+</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <Text style={styles.detail_giatamtinh}>{totalPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.detail_button}>
                        <Text style={styles.detail_button_text}>CHỌN MUA</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

export default Detail;