import React from 'react';
import { View } from 'react-native';

import Styles from './styles/style.js';
import ListC from './components/ListC.js';

const App = (props) => {
    
  return (
    <View style={Styles.container}>
      <ListC/>
    </View>
	)
}

export default App;