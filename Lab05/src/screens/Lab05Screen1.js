import React from 'react';
import { Text, View, Pressable, Image, TextInput } from 'react-native';
import { useState } from 'react';
const stylebtn = {
    buttonNext: {
        flexDirection: 'row',
        width: 332,
        height: 34,

        backgroundColor: 'transparent',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#000000',
        marginLeft: 18,
    },
    textNext: {
        width: 200,
        height: 18,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 15,
        lineHeight:18,
        color: '#000000',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 2,
        marginLeft: 60,
    },
    buttonMua: {
        width: 326,
        height: 44,
        backgroundColor: '#EE0A0A',
        alignItems: 'center',
        justifyContent: 'center',  
        marginLeft: 20,
        borderRadius: 10,  
    },
    textMua: {
        width: 105,
        height: 23,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 23,
        textAlign: 'center',
        color: '#F9F2F2',
    },
};
const YourApp = () => {
    return (
        <View  style={{
            flex:1
        }}
        >
            <View style={{
                flex:7,
                justifyContent: 'center',
                alignItems: 'center',
            }}
            >
                <Image source={require('../assets/BlueSC.png')} style={{
                    width: 301, height: 361}}/>
            </View>
            <View style={{
                flex:2,
                justifyContent: 'center',
                alignItems: 'center',
            }}
            >
                <View style={{
                    flex:1,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <Text style={{
                        width: 288,
                        height:18,
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: 15,
                        lineHeight: 18,
                        color: '#000000',

                    }}>
                    Điện Thoại Vsmart Joy 3 - Hàng chính hãng
                    </Text>
                    <View style={{
                        flex:1,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <View style={{
                            flex:1,
                            flexDirection: 'row',
                            marginLeft: 32,
                        }}>
                            <Image source={require('../assets/star.png')} style={{
                            width: 23, height: 25}}/>
                            <Image source={require('../assets/star.png')} style={{
                            width: 23, height: 25}}/>
                            <Image source={require('../assets/star.png')} style={{
                            width: 23, height: 25}}/>
                            <Image source={require('../assets/star.png')} style={{
                            width: 23, height: 25}}/>
                            <Image source={require('../assets/star.png')} style={{
                            width: 23, height: 25}}/>
                        </View>
                        <Text style={{
                            flex:1,
                            width: 135,
                            height: 18,
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            fontSize: 15,
                            lineHeight: 18,
                            color: '#000000',
                        }}
                        >(Xem 828 đánh giá)</Text>
                    </View>
                    <View style={{
                        flex:1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'start',
                        width: 288,
                    }}>
                        <Text style={{
                            width: 99,
                            height: 21,
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: '700',
                            fontSize: 18,
                            lineHeight: 21,
                            color: '#000000',
                            textAlign: 'center',
                        }}
                        >1.790.000 đ</Text>
                            <Text style={{
                               width: 92,
                                height: 16,
                                fontFamily: 'Roboto',
                                fontStyle: 'normal',
                                fontWeight: '700',
                                fontSize: 12,
                                lineHeight: 14,
                                textAlign: 'center',
                                color: '#808080',
                                marginLeft: 20,
                                marginTop: 5,
                                textDecorationLine: 'line-through',
                            }}
                            >1.790.000 đ</Text>

                    </View>
                    <View style={{
                        flex:1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: 288,
                    }}>
                        <Text style={{
                            width: 146,
                            height: 14,
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: '700',
                            fontSize: 12,
                            lineHeight: 14,
                            color: '#FA0000',

                        }}
                        >Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
                        <Image source={require('../assets/ask.png')} style={{
                            width: 20, height: 20,marginLeft:10}}/>
                    </View>
                </View>
            </View>
            <View style={{
                flex:1,
            }}
            >
                <Pressable style={stylebtn.buttonNext}>
                    <Text style={stylebtn.textNext}>4 MÀU-CHỌN MÀU</Text>
                    <Image source={require('../assets/arrow.png')} style={{
                        width: 20, height: 20, marginRight: 10}}
                    />
                    </Pressable>
            </View>
            <View style={{
               flex:1,
            }}
            >
                <Pressable style={stylebtn.buttonMua}>
                    <Text style={stylebtn.textMua}>CHỌN MUA</Text>
                </Pressable>
            </View>
        </View>
    );
};
export default YourApp;