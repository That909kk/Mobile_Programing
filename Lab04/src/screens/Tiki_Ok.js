import React from 'react';
import { Text, View, Pressable, Image, TextInput } from 'react-native';
import { useState } from 'react';
const stylebtn = {
    buttonsl: {
        width: 14.22,
        height: 16,
        backgroundColor: 'lightgray',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 1,
    },
    text: {
        color: '#000000',
        textAlign: 'center',
        lineHeight: 14,
    },
    buttonAd: {
        width: 99,
        height: 45,
        backgroundColor: '#0A5EB7',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
    },
    textad: {
        width: 75,
        height: 23,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 23,
        textAlign: 'center',
        color: '#FFFFFF',
    },
    buttonthdh: {
        backgroundColor: '#E53935',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: 331,
        height: 45,
        borderRadius: 2,
    },
    textthdh: {
        width: 208,
        height: 23,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 23,
        textAlign: 'center',
        color: '#FFFFFF',
    }
};
const YourApp = () => {
    const [quantity, setQuantity] = useState(1);
    const pricePerItem = 141800;
    const totalPrice = quantity * pricePerItem;
    const formatCash = (str) => {
        return Intl.NumberFormat().format(str) + " đ";
    }
    const handleIncrease = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };
    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    }
    return (
        <View
            style={{
                flex: 1,
            }}>
            <View style={{
                flex: 3,
                flexDirection: "column",
            }}>
                <View style={{
                    flex: 2,
                    backgroundColor: "white",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                }}>
                    <Image style={{
                        width: 104,
                        height: 127,
                        marginLeft: 10,
                    }} source={require('../assets/sach.png')} />
                    <View style={{
                        flex: 1,
                        justifyContent: "start",
                        alignItems: "start",
                        paddingLeft: 15,
                    }}>
                        <Text style={{
                            flex: 0.5,
                            justifyContent: 'start',
                            alignItems: 'start',
                            width: 191,
                            height: 14,
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: '700',
                            fontSize: 12,
                            lineHeight: 14,
                            textAlign: 'center',
                            paddingTop: 20,
                        }}
                        >Nguyên hàm tích phân và ứng dụng</Text>
                        <Text style={{
                            flex: 0.5,
                            justifyContent: 'start',
                            alignItems: 'start',
                            width: 138,
                            height: 14,
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: '700',
                            fontSize: 12,
                            lineHeight: 14,
                            textAlign: 'center',
                        }}
                        >Cung cấp bởi Tiki Trading</Text>
                        <Text style={{
                            flex: 0.5,
                            justifyContent: 'start',
                            alignItems: 'start',
                            width: 84,
                            height: 21,
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: '700',
                            fontSize: 18,
                            lineHeight: 21,
                            textAlign: 'center',
                            color: 'red',
                            
                        }}
                        >141.800 đ</Text>
                        
                        <View style={{
                            flex: 0.5,
                            justifyContent: 'start',
                            alignItems: 'center',
                            flexDirection: 'row',
                            marginBottom: 10, 
                        }}>
                            <View style={{
                                position: 'absolute',
                                marginLeft: 27,
                                width: 1.5,
                                height: 50,
                                backgroundColor: '#808080',
                                transform: [{ rotate: '-90deg' }],
                            }}>
                            </View>
                            <Text style={{
                                width: 56,
                                height: 14,
                                fontFamily: 'Roboto',
                                fontStyle: 'normal',
                                fontWeight: '700',
                                fontSize: 12,
                                lineHeight: 14,
                                textAlign: 'left',
                                color: '#808080',
                                marginLeft: 3,
                            }}
                            >141.800 đ</Text>
                        </View>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: 5,
                        }}>
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                paddingLeft: 5,
                            }}
                            >
                                <Pressable style={stylebtn.buttonsl} onPress={handleDecrease}>
                                    <Text style={stylebtn.text}>-</Text>
                                </Pressable>
                                <Text style={{
                                    width: 9,
                                    height: 18,
                                    fontFamily: 'Roboto',
                                    fontStyle: 'normal',
                                    fontWeight: '700',
                                    fontSize: 15,
                                    lineHeight: 18,
                                    textAlign: 'center',
                                    marginLeft: 5,
                                    marginRight: 5,
                                }}
                                >{quantity}</Text>
                                <Pressable style={stylebtn.buttonsl} onPress={handleIncrease}>
                                    <Text style={stylebtn.text}>+</Text>
                                </Pressable>
                            </View>
                            <Text style={{
                                flex: 1,
                                width: 46,
                                height: 14,
                                fontFamily: 'Roboto',
                                fontStyle: 'normal',
                                fontWeight: '700',
                                fontSize: 12,
                                lineHeight: 14,
                                textAlign: 'center',
                                color: '#134FEC',
                            }}>
                                Mua sau
                            </Text>
                        </View>

                    </View>

                </View>
                <View style={{
                    flex: 0.5,
                }}>
                    <View style={{
                        flex: 0.5,
                        flexDirection: 'row',
                        justifyContent: 'start',
                        alignItems: 'center',
                        paddingLeft: 10,
                    }}>
                        <Text style={{
                            width: 107,
                            height: 14,
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: '700',
                            fontSize: 12,
                            lineHeight: 14,
                            textAlign: 'center',
                            color: '#011627',
                        }}
                        >Mã giảm giá đã lưu</Text>
                        <Text style={{
                            width: 74,
                            height: 14,
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: '700',
                            fontSize: 12,
                            lineHeight: 14,
                            textAlign: 'center',
                            color: '#134FEC',
                            marginLeft: 10,
                        }} >Xem tại đây</Text>
                    </View>
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                    
                }}>
                    <View style={{
                        position: 'relative',
                        width: 208,
                        height: 45,

                    }}>
                        <TextInput placeholder={"Mã giảm giá"}
                            placeholderTextColor="#011627"
                            style={{
                                width: 208,
                                height: 45,
                                backgroundColor: '#F2F2F2',
                                borderColor: '#808080',
                                borderWidth: 1,
                                borderStyle: 'solid',
                                borderRadius: 2,
                                paddingLeft: 45,
                            }}>
                        </TextInput>
                        <View style={{
                            position: 'absolute',
                            width: 32,
                            height: 16,
                            backgroundColor: '#F2DD1B',
                            left: 10,
                            top: '50%',
                            transform: [{ translateY: -8 }],
                        }}></View>
                    </View>
                    <Pressable style={stylebtn.buttonAd}>
                        <Text style={stylebtn.textad}>Áp dụng</Text>
                    </Pressable>
                </View>
            </View>
            <View style={{
                flex: 0.75,
                backgroundColor: 'lightgray',
                justifyContent: "center",
                alignItems: "center",
                flexDirection: 'row',
            }}>
                <View style={{
                    flex: 1,
                    width: 360,
                    height: 51,
                    backgroundColor: 'white',
                    justifyContent: "space-around",
                alignItems: "center",
                flexDirection: 'row',
                flexwrap: 'nowrap',
                }}>
                    <Text style={{
                        width: 227,
                        height: 14,
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        fontSize: 12,
                        lineHeight: 14,
                        textAlign: 'center',
                        color: '#011627',
                    }}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
                    <Text style={{
                        width: 74,
                        height: 14,
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        fontSize: 12,
                        lineHeight: 14,
                        textAlign: 'center',
                        color: '#134FEC',
                    }}>Nhập tại đây?</Text>
                </View>
            </View>
            <View style={{
                flex: 2,
                backgroundColor: 'lightgray',
                justifyContent: "start",
                alignItems: "center",
            }}>
                <View style={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: 'white',
                    width: 360,
                    height: 51,
                    flexDirection: 'row',
                }}>
                    <Text style={{
                        width: 73,
                        height: 21,
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        fontSize: 18,
                        lineHeight: 21,
                        textAlign: 'center',
                        color: '#011627',
                        marginLeft: 10,
                    }}>
                    Tạm tính
                    </Text>
                    <Text style={{
                        width: 84,
                        height: 21,
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        fontSize: 18,
                        lineHeight: 21,
                        textAlign: 'center',
                        color: 'red',
                        marginRight: 10,
                    }}
                    >{formatCash(totalPrice)}</Text>
                </View>
            </View>
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}>
                <View style={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: 'white',
                    width: 360,
                    height: 51,
                    flexDirection: 'row',}}
                >
                    <Text style={{
                        width: 89,
                        height: 21,
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        fontSize: 18,
                        lineHeight: 21,
                        textAlign: 'center',
                        color: '#808080',
                        marginLeft: 10,
                    }}>Thành tiền</Text>
                    <Text style={{
                        width: 84,
                        height: 21,
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        fontSize: 18,
                        lineHeight: 21,
                        textAlign: 'center',
                        color: 'red',
                        marginRight: 10,
                    }}
                    >{formatCash(totalPrice)}</Text>
                </View>
                <View style={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 25,
                }}
                >
                    <Pressable style={stylebtn.buttonthdh}>
                        <Text style={stylebtn.textthdh}>Tiến hành đặt hàng</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};
export default YourApp;