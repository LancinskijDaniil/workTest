import React from 'react';
import {View} from 'react-native';

import {ImageList} from './src/component/imageList/ImageList';

const App: () => React$Node = () => {
  return (
    <View>
      <ImageList />
    </View>
  );
};

export default App;
