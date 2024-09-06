import React from 'react';
import { Text, View, Pressable } from 'react-native';

const stylebtn = {
  button: {
    backgroundColor: '#FFD700',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 5,
    width: 119,
    height: 48,
  },
  text: {
    fontWeight: 'bold',
    color: '#000000',
  }
};
const YourApp = () => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View style={{
        flex: 3,
        backgroundColor: "#00CCF9",
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
        backgroundColor: "#00CCF9",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <Text style={{
          width: 180,
          height: 58,
          fontfamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: 700,
          fontSize: 25,
          lineHeight: 29,
          textAlign: 'center',
        }}>GROW YOUR BUSINESS</Text>
      </View>
      <View style={{
        flex: 1,
        backgroundColor: "#00CCF9",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <Text style={{
          width: 302,
          height: 36,
          fontfamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: 700,
          fontSize: 15,
          lineHeight: 18,
          textAlign: 'center',
        }}>We will help you to grow your business using online server</Text>
      </View>
      <View style={{
        flex: 1,
        backgroundColor: "#00CCF9",
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
    </View>
  );
};
export default YourApp;