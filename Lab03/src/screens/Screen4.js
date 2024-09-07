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
const Screen4 = () => {
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
                flexwrap: "nowrap",
            }}>
                <Text style={{
                    width: 154,
                    height: 70,
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    fontSize: 60,
                    lineHeight: 70,
                    textAlign: 'center',
                }}>CODE</Text>
            </View>
            <View style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",

            }}>
                <Text style={{
                    width: 302,
                    height: 53,
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    fontSize: 20,
                    lineHeight: 23,
                    textAlign: 'center',
                }}>
                    VERIFICATION
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
                    Enter ontime password sent on{'\n'}++849092605798
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
                    <Text style={{
                        width: 50,
                        height: 50,
                        borderStyle: 'solid',
                        borderWidth: 1,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.25,
                        shadowRadius: 5,
                        elevation: 3,
                    }} ></Text>
                    <Text style={{
                        width: 50,
                        height: 50,
                        borderStyle: 'solid',
                        borderWidth: 1,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.25,
                        shadowRadius: 5,
                        elevation: 3,
                    }} ></Text>
                    <Text style={{
                        width: 50,
                        height: 50,
                        borderStyle: 'solid',
                        borderWidth: 1,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.25,
                        shadowRadius: 5,
                        elevation: 3,
                    }} ></Text>
                    <Text style={{
                        width: 50,
                        height: 50,
                        borderStyle: 'solid',
                        borderWidth: 1,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.25,
                        shadowRadius: 5,
                        elevation: 3,
                    }} ></Text>
                    <Text style={{
                        width: 50,
                        height: 50,
                        borderStyle: 'solid',
                        borderWidth: 1,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.25,
                        shadowRadius: 5,
                        elevation: 3,

                    }} ></Text>
                    <Text style={{
                        width: 50,
                        height: 50,
                        borderStyle: 'solid',
                        borderWidth: 1,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.25,
                        shadowRadius: 5,
                        elevation: 3,
                    }} ></Text>
                </View>
                <Pressable style={stylebtn.button}>
                    <Text style={stylebtn.text}>VERIFY CODE</Text>
                </Pressable>
            </View>
            <View style={{
                flex: 1,
            }}>
            </View>
        </LinearGradient>
    );
};

export default Screen4;
