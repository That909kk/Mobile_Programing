import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const stylebtn = {
  button: {
    backgroundColor: '#FFD700',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 119,
    height: 48,
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
        flex: 3,
        justifyContent: "center",
        alignItems: "center",
      }}>
        <Text style={{
          width: 140,
          height: 140,
          borderWidth: 15,
          borderColor: 'black',
          borderStyle: 'solid',
          borderRadius: 70,
        }}> </Text>
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
          GROW YOUR BUSINESS
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
          We will help you to grow your business using online server
        </Text>
      </View>
      <View style={{
        flex: 1,
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "center",
      }}>
        <Pressable style={stylebtn.button}>
          <Text style={stylebtn.text}>LOGIN</Text>
        </Pressable>
        <Pressable style={stylebtn.button}>
          <Text style={stylebtn.text}>SIGN UP</Text>
        </Pressable>
      </View>
      <View style={{
        flex: 1,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "start",

      }}>
        <Text style={{
          width: 302,
          height: 53,
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: '700',
          fontSize: 18,
          lineHeight: 21,
          textAlign: 'center',
        }}>HOW WE WORK?</Text>
      </View>
    </LinearGradient>
  );
};

export default Screen2;