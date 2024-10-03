import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Lab05_01 from './screens/Lab05Screen1.js';
import Lab05_02 from './screens/Lab05Screen2.js';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Product"
      screenOptions={{
        headerStyle:{
          height:50,
          backgroundColor:'white',

        }
      }}
      >
        <Stack.Screen name="Product" component={Lab05_01} />
        <Stack.Screen name="ProductDetail" component={Lab05_02} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;