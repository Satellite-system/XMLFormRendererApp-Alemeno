/* eslint-disable quotes */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Rect, Path, G } from 'react-native-svg';
// import convert from 'xml-js';

const XMLRenderer = ({ xmlString }) => {
  const json = xmlString;
  //convert.xml2js(xmlString, { compact: true });

  // Helper to map SVG elements
  const renderSvgElements = (elements) => {
    return elements.map((el, index) => {
      console.log("Element:::: ", el, " // Index = ", index);
      if (el.name === 'rect') {
        return (
          <Rect
            key={index}
            x={el.attributes.x}
            y={el.attributes.y}
            width={el.attributes.width}
            height={el.attributes.height}
            fill={el.attributes.fill}
            stroke={el.attributes.stroke}
          />
        );
      }

      if (el.name === 'path') {
        return (
          <Path
            key={index}
            d={el.attributes.d}
            fill={el.attributes.fill}
            stroke={el.attributes.stroke}
          />
        );
      }

      // Add more cases as needed for other SVG elements
      return null;
    });
  };

  return (
    <View style={styles.container}>
      <Svg width="100%" height="100%" viewBox="0 0 1122 1588">
        {renderSvgElements(json)}
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default XMLRenderer;
