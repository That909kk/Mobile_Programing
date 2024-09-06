import React from 'react';
import { Text, View, Pressable, Image, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const stylebtn = {
    button: {
        backgroundColor: '#FFD700',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: 305,
        height: 45,
    },
    text: {
        fontWeight: 'bold',
        color: '#000000',
    }
};
const Screen2 = () => {
    return (
        <LinearGradient
            colors={['#C7F4F7', '#D1F4F6', '#E5F4F5', '#00CCF9']}
            style={{ flex: 1 }}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
        >
            <View style={{
                flex: 2,
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Image style={{
                    width: 105,
                    height: 117,
                }} source={require('../assets/O_Khoa.png')} />
            </View>
            <View style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
            }}>
                <Text style={{
                    width: 180,
                    height: 58,
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    fontSize: 25,
                    lineHeight: 29,
                    textAlign: 'center',
                }}>
                    FORGET PASSWORD
                </Text>
            </View>
            <View style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
            }}>
                <Text style={{
                    width: 302,
                    height: 36,
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    fontSize: 15,
                    lineHeight: 18,
                    textAlign: 'center',
                }}>
                    Provide your account’s email for which you want to reset your password
                </Text>
            </View>
            <View style={{
                flex: 1.5,
                justifyContent: "space-around",
                flexDirection: "column",
                alignItems: "center",
            }}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    flexwrap: 'nowrap',
                    width: 305,
                }}>
                    <Image style={{
                        width: 48,
                        height: 45,
                    }} source={require('../assets/Mail.png')} />
                    <TextInput style={{
                        width: 257,
                        height: 45,
                        backgroundColor: "#C4C4C4",
                    }} placeholder="  Email"></TextInput>
                </View>
                <Pressable style={stylebtn.button}>
                    <Text style={stylebtn.text}>NEXT</Text>
                </Pressable>
            </View>
            <View style={{
                flex: 1,
            }}>
            </View>
        </LinearGradient>
    );
};

export default Screen2;