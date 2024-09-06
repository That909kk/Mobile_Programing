import React from 'react';
import { View } from 'react-native';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
const App = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* <Screen1/> */}
      <Screen2/>
      {/* <Screen3/> */}
    </View>
  );
};

export default App;