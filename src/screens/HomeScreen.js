/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{marginBottom: 50, fontSize: 32, textAlign: 'center'}}>Home Page</Text>
      <View
        style={{marginBottom: 50}}>
       <Button
        title="Render Form from XML File"
        onPress={() => navigation.navigate('XmlFileScreen')}
      />
      </View>
     <Button
        title="Render Form from XML Input"
        onPress={() => navigation.navigate('XmlInputScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'start',
    padding: 20,
    height: '100%',
  },
});

export default HomeScreen;
