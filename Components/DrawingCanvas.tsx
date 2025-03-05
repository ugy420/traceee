import React, { useState, useEffect } from 'react';
import { View, StyleSheet, PanResponder } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { getStroke } from 'perfect-freehand';
import { getSvgPathFromStroke } from '../utils/getSvgFromStroke';

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

interface DrawingCanvasProps {
  clear: Boolean;
}

const DrawingCanvas: React.FC<DrawingCanvasProps> = ({ clear }) => {
  const [points, setPoints] = useState<number[][]>([]);

  useEffect(() => {
    if (clear) {
      setPoints([]);
    }
  }, [clear]);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt) => {
      const { locationX, locationY } = evt.nativeEvent;
      setPoints(prev => [...prev, [locationX, locationY, 0.5]]);
    }
  });

  const stroke = getStroke(points, options);
  const pathData = getSvgPathFromStroke(stroke);

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
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
});

export default DrawingCanvas;