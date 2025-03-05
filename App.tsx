import React from 'react';
import {SafeAreaView} from 'react-native';
import DrawingCanvas from './drawingCanvas';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <DrawingCanvas />
    </SafeAreaView>
  );
};

export default App;