import React, { useState } from 'react';
import { View, StyleSheet, PanResponder, Button } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { getStroke } from 'perfect-freehand';
import { getSvgPathFromStroke } from './getSvgFromStroke';

const options = {
  size: 16,
  thinning: 0.5,
  smoothing: 0.5,
  streamline: 0.5,
  easing: (t: number) => t,
  start: {
    taper: 0,
    easing: (t: number) => t,
    cap: true,
  },
  end: {
    taper: 100,
    easing: (t: number) => t,
    cap: true,
  },
};

const DrawingCanvas = () => {
  const [points, setPoints] = useState<number[][]>([]);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gesture) => {
      setPoints(prev => [...prev, [gesture.moveX, gesture.moveY, 0.5]]);
    }
  });

  const stroke = getStroke(points, options);
  const pathData = getSvgPathFromStroke(stroke);

  const handleReset = () => {
    setPoints([]);
  };

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      <Button title="Reset" onPress={handleReset} />
      <Svg style={styles.svg}>
        <Path d={pathData} stroke="black" strokeWidth={1} fill="black" />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  svg: {
    flex: 1,
    backgroundColor: 'magenta',
    
  },
  button:{
    position: 'absolute',
    bottom: 0,
    left: 0,
  }
});

export default DrawingCanvas;