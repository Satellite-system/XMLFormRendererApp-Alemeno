import React, { useRef } from 'react';
import { View, Button, Text } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const DrawingField = ({ label }) => {
  const paths = useRef([]);

  const handleDraw = () => {
    // Simulate drawing logic here (extend with gesture handling)
    paths.current.push("M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80");
  };

  return (
    <View>
      <Text>{label}</Text>
      <Svg height="200" width="200">
        {paths.current.map((d, index) => (
          <Path key={index} d={d} stroke="black" fill="none" />
        ))}
      </Svg>
      <Button title="Draw" onPress={handleDraw} />
    </View>
  );
};

export default DrawingField;
