import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import { TextInput } from 'react-native-paper';
import Svg, { Defs, RadialGradient, Rect, Stop } from 'react-native-svg';
import { CheckBox } from 'react-native-elements';
import React, { useState } from 'react';

const stylebtn = {
    button: {
        width: 269,
        height: 55,
        backgroundColor: '#3B3B98',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 45,

    },
    text: {
        width: 259,
        height: 21,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 21,
        textAlign: 'center',
        color: '#FFFFFF',
    },
};

const YourApp = () => {
    const [isLowerCaseChecked, setIsLowerCaseChecked] = useState(false);
    const [isUpperCaseChecked, setIsUpperCaseChecked] = useState(false);
    const [isNumberChecked, setIsNumberChecked] = useState(false);
    const [isSpecialSymbolChecked, setIsSpecialSymbolChecked] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordLength, setPasswordLength] = useState('8');

    const generatePassword = () => {
        let characters = '';
        if (isLowerCaseChecked) characters += 'abcdefghijklmnopqrstuvwxyz';
        if (isUpperCaseChecked) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (isNumberChecked) characters += '0123456789';
        if (isSpecialSymbolChecked) characters += '!@#$%^&*()_+[]{}|;:,.<>?';

        let generatedPassword = '';
        const length = parseInt(passwordLength, 10); // Convert to integer
        for (let i = 0; i < length; i++) {
            generatedPassword += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        setPassword(generatedPassword);
    };

    return (
        <View style={{ flex: 1, width: 360, height: 640 }}>
            <Svg height="100%" width="100%" style={StyleSheet.absoluteFill}>
                <Defs>
                    <RadialGradient
                        id="grad"
                        cx="50%"
                        cy="50%"
                        rx="145%"
                        ry="145%"
                        fx="50%"
                        fy="50%"
                        gradientUnits="userSpaceOnUse"
                    >
                        <Stop offset="26.56%" stopColor="#3B3B98" stopOpacity="1" />
                        <Stop offset="87.36%" stopColor="rgba(196, 196, 196, 0)" stopOpacity="0" />
                    </RadialGradient>
                </Defs>
                <Rect width="100%" height="100%" fill="url(#grad)" />
            </Svg>
            <View style={styles.content}>
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 322,
                    height: 605,
                    backgroundColor: '#23235B',
                    borderRadius: 15,
                    marginTop: 20,
                    marginBottom: 20
                }}>
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 297,
                        height: 605,
                        marginTop: 20,
                    }}
                    >
                        <Text style={{
                            flex: 0.5,
                            width: 181,
                            height: 64,
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: '700',
                            fontSize: 25,
                            lineHeight: 29,
                            textAlign: 'center',
                            color: '#FFFFFF',
                            marginTop: 20,
                        }}
                        >PASSWORD GENERATOR</Text>
                        <Text style={{
                            marginTop: 20,
                            width: 297,
                            height: 55,
                            backgroundColor: '#151537',
                            textAlign: 'center',
                            color: 'yellow',
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: '700',
                            fontSize: 16,
                            lineHeight: 30,
                            padding: 10,
                        }}
                        >{password}</Text>
                        <View style={{
                            flex: 3,
                            marginTop: 20,
                            width: 297,
                            height: 605,
                        }}
                        >
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginBottom: 20,
                            }}>
                                <Text style={{
                                    width: 180,
                                    height: 24,
                                    fontFamily: 'Roboto',
                                    fontStyle: 'normal',
                                    fontWeight: '700',
                                    fontSize: 20,
                                    lineHeight: 23,
                                    color: '#FFFFFF',
                                }}
                                >Password length</Text>
                                <TextInput keyboardType="numeric"
                                    value={passwordLength}
                                    onChangeText={setPasswordLength}
                                    style={{
                                        width: 118,
                                        height: 33,
                                        backgroundColor: '#FFFFFF',
                                        marginRight: 20,
                                    }}></TextInput>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                marginTop: 10,
                                justifyContent: 'space-between',
                                marginBottom: 20
                            }}>
                                <Text style={{
                                    width: 250,
                                    height: 24,
                                    fontFamily: 'Roboto',
                                    fontStyle: 'normal',
                                    fontWeight: '700',
                                    fontSize: 20,
                                    lineHeight: 23,
                                    color: '#FFFFFF',

                                }}
                                >Include lower case letters</Text>
                                <CheckBox
                                    checked={isLowerCaseChecked}
                                    onPress={() => setIsLowerCaseChecked(!isLowerCaseChecked)}
                                    containerStyle={{
                                        backgroundColor: 'white',
                                        borderWidth: 0,
                                        padding: 0,
                                        borderRadius: 0,
                                        width: 20, height: 20
                                    }}
                                    checkedColor="#FFFFFF"
                                    uncheckedColor="#FFFFFF"
                                    checkedIcon={
                                        <Image source={require('../assets/check.png')} style={{ width: 20, height: 20 }} />
                                    }
                                />
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                marginTop: 10,
                                justifyContent: 'space-between',
                                marginBottom: 20
                            }}>
                                <Text style={{
                                    width: 250,
                                    height: 24,
                                    fontFamily: 'Roboto',
                                    fontStyle: 'normal',
                                    fontWeight: '700',
                                    fontSize: 20,
                                    lineHeight: 23,
                                    color: '#FFFFFF',
                                }}
                                >Include upcase letters</Text>
                                <CheckBox
                                    checked={isUpperCaseChecked}
                                    onPress={() => setIsUpperCaseChecked(!isUpperCaseChecked)}
                                    containerStyle={{
                                        backgroundColor: 'white',
                                        borderWidth: 0,
                                        padding: 0,
                                        borderRadius: 0,
                                        width: 20, height: 20
                                    }}
                                    checkedColor="#FFFFFF"
                                    uncheckedColor="#FFFFFF"
                                    checkedIcon={
                                        <Image source={require('../assets/check.png')} style={{ width: 20, height: 20 }} />
                                    }
                                />
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                marginTop: 10,
                                justifyContent: 'space-between',
                                marginBottom: 20
                            }}>
                                <Text style={{
                                    width: 250,
                                    height: 24,
                                    fontFamily: 'Roboto',
                                    fontStyle: 'normal',
                                    fontWeight: '700',
                                    fontSize: 20,
                                    lineHeight: 23,
                                    color: '#FFFFFF',
                                }}
                                >Include number</Text>
                                <CheckBox
                                    checked={isNumberChecked}
                                    onPress={() => setIsNumberChecked(!isNumberChecked)}
                                    containerStyle={{
                                        backgroundColor: 'white',
                                        borderWidth: 0,
                                        padding: 0,
                                        borderRadius: 0,
                                        width: 20, height: 20
                                    }}
                                    checkedColor="#FFFFFF"
                                    uncheckedColor="#FFFFFF"
                                    checkedIcon={
                                        <Image source={require('../assets/check.png')} style={{ width: 20, height: 20 }} />
                                    }
                                />
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                marginTop: 10,
                                justifyContent: 'space-between',
                                marginBottom: 20
                            }}>
                                <Text style={{
                                    width: 250,
                                    height: 24,
                                    fontFamily: 'Roboto',
                                    fontStyle: 'normal',
                                    fontWeight: '700',
                                    fontSize: 20,
                                    lineHeight: 23,
                                    color: '#FFFFFF',
                                }}
                                >Include special symbol</Text>
                                <CheckBox
                                    checked={isSpecialSymbolChecked}
                                    onPress={() => setIsSpecialSymbolChecked(!isSpecialSymbolChecked)}
                                    containerStyle={{
                                        backgroundColor: 'white',
                                        borderWidth: 0,
                                        padding: 0,
                                        borderRadius: 0,
                                        width: 20, height: 20
                                    }}
                                    checkedColor="#FFFFFF"
                                    uncheckedColor="#FFFFFF"
                                    checkedIcon={
                                        <Image source={require('../assets/check.png')} style={{ width: 20, height: 20 }} />
                                    }
                                />
                            </View>
                        </View>
                        <View>
                            <Pressable style={stylebtn.button} onPress={generatePassword}>
                                <Text style={stylebtn.text}>GENERATE PASSWORD </Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 360,
        height: 640,
        backgroundColor: 'transparent',
    },
});

export default YourApp;