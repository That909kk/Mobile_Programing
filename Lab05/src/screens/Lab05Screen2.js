import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import { useState,useEffect } from "react";
import { useRoute, useNavigation,useFocusEffect } from '@react-navigation/native';
const style = {
    buttonXanh: {
        width: 85,
        height: 80,
        marginBottom: 5,
    },
    buttonXong: {
        width: 326,
        height: 44,
        backgroundColor: '#4D6DC1',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginLeft: 20,
    },
    textXong: {
        width: 105,
        height: 23,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 23,
        textAlign: 'center',
        color: 'white',
    },
};
const data = [
    {
        id: 1,
        name: 'Đỏ',
        color: 'red',
        img:require('../assets/RedSC.png'),
    },
    {
        id: 2,
        name: 'Đen',
        color: 'black',
        img:require('../assets/BlackSC.png'),
    },
    {
        id: 3,
        name: 'Xanh',
        color: 'blue',
        img:require('../assets/BlueSC.png'),
    },
    {
        id: 4,
        name: 'Lam',
        color: '#C5F1FB',
        img:require('../assets/WhiteSC.png'),
    },
];
const YourApp = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const {seclectedImage} = route.params;


    const [currentImage, setCurrentImage] = useState(data[2].img);
    const [currentNameColor, setCurrentNameColor] = useState(data[2].name);
    const handleChonMauPress = (currentImage) => {
        setCurrentImage(currentImage);
        setCurrentNameColor(currentNameColor);
    };
    const handleXongPress = () => {
        navigation.navigate('Product', { seclectedImage: currentImage });
    }
    useFocusEffect(
        React.useCallback(() => {
            if (route.params?.currentImage) {
                setCurrentImage(route.params.currentImage);
            }
        }, [route.params?.currentImage])
    );
    return (
        <View style={{
            flex: 1
        }}
        >
            <View style={{
                flex: 3,
                backgroundColor: 'white',
                flexDirection: 'row',
                justifyContent: 'start',
                alignItems: 'center',

            }}
            >
                <Image source={currentImage} style={{
                    width: 112, height: 132, marginLeft: 10
                }} />
                <View style={{

                    marginLeft: 10,
                    width: '100%',
                    height: '100%',
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    alignItems: 'start',

                }}>
                    <Text style={{
                        width: "100%",
                        height: 36,
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: 15,
                        lineHeight: 18,
                    }}
                    >Điện Thoại Vsmart Joy 3
                        Hàng chính hãng</Text>
                    <Text style={{
                        width: "100%",
                        height: 18,
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: 15,
                        lineHeight: 18,
                        color: '#000000',
                    }}
                    >Màu:{currentNameColor}
                    </Text>
                    <Text style={{
                        width: "100%",
                        height: 18,
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: 15,
                        lineHeight: 18,
                        color: '#000000',
                    }}
                    >Cung cấp bởi Tiki Tradding</Text>
                    <Text style={{
                        width: "100%",
                        height: 21,
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        fontSize: 18,
                        lineHeight: 21,
                        color: '#000000',
                    }}
                    >1.790.000 đ</Text>
                </View>
            </View>
            <View style={{
                flex: 7,
                backgroundColor: '#C4C4C4',
            }}
            >
                <View>
                    <Text style={{
                        width: "100%",
                        height: 21,
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: 18,
                        lineHeight: 21,
                        marginLeft: 10,
                    }}
                    >Chọn một màu bên dưới:</Text>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',

                    }}
                    >
                       {data.map((item) => (
                        <Pressable
                            key={item.id}
                            style={[style.buttonXanh, { backgroundColor: item.color }]}
                            onPress={() => handleChonMauPress(item.img, item.name)}>
                        </Pressable>
                    ))}
                    </View>
                </View>
                <Pressable style={style.buttonXong} onPress={handleXongPress}>
                    <Text style={style.textXong}>Xong</Text>
                </Pressable>
            </View>
        </View>

    );
}
export default YourApp;