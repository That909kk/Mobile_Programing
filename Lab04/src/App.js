import React from 'react';
import { View } from 'react-native';
import Tiki from './screens/Tiki_Ok.js';
import Gener from './screens/GenerPass.js';
// import Screen2 from './screens/Screen2';
// import Screen3 from './screens/Screen3';
// import Screen4 from './screens/Screen4';
// import Screen5 from './screens/Screen5';
const App = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* <Tiki/> */}
      <Gener/>
    </View>
  );
};

export default App;