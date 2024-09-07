import React from 'react';
import { Text, View, Pressable,Image, TextInput } from 'react-native';

const stylebtn = {
  button: {
    backgroundColor: '##E53935',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 5,
    width: 330,
    height: 45,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  }
};
const YourApp = () => {
  return (
    <View style={{flex: 1,backgroundColor: "rgba(49, 170, 82, 0.19)"}}>
      <View style={{
        flex:1,
        justifyContent: "center",
        alignItems: "center",
      }}>
        <Text style={{
            width: 73,
            height: 29,
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: 25,
            lineHeight: 29,
            textAlign: 'center',
        }}
        >LOGIN</Text>
      </View>
      <View style={{
        flex:1,
        justifyContent: "space-around",
        alignItems: "center",
       
      }}>
        <TextInput style={{
            width: 330,
            height: 54,  
            backgroundColor: '#rgba(196, 196, 196, 0.3)',
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: '#rgba(196, 196, 196, 0.3)',
            paddingLeft: 20,
        }} placeholder="Email">
        </TextInput>
        <View style={{flexDirection: 'row',
            width: 330,
            backgroundColor: '#rgba(196, 196, 196, 0.3)',
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: '#rgba(196, 196, 196, 0.3)',
            justifyContent: "center",
            alignItems: "center",
            flexWrap: 'nowrap',
        }}
         ><TextInput style={{
            width: 292,
            height: 54,  
            paddingLeft: 35,
        }} placeholder="Password">
        </TextInput>
        <Image style={{
            width: 38,
            height: 36,
            marginRight: 30,
        }} source={require('../assets/eye1.png')} />
        </View>
      </View>
      <View style={{
        flex:1,
        justifyContent: "space-around",
        alignItems: "center",
      }}>
        <View style={{backgroundColor:"#E53935",
        }}>
        <Pressable style={stylebtn.button}>
          <Text style={stylebtn.text}>LOGIN</Text>
        </Pressable>
        </View>
        <Text style={{
            width: 260,
            height: 20,
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: 14,
            lineHeight: 16,
            textAlign: 'center',
        }}>When you agree to terms and conditions
        </Text>
        <Text style={{
            width: 260,
            height: 20,
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: 14,
            lineHeight: 16,
            textAlign: 'center',
            color: '#5D25FA',
        }}>For got your password?
        </Text>
        <Text style={{
            width: 260,
            height: 20,
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: 14,
            lineHeight: 16,
            textAlign: 'center',
        }}>Or login with
        </Text>
      </View>
      <View style={{
        flex:1,
      }}>

      </View>

    </View>
  );
};
export default YourApp;