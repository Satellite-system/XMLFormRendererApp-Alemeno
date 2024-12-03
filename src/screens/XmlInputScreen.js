/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Button, TextInput } from 'react-native';
// import xml2js from 'xml2js';
// import FormRenderer from '../components/FormRenderer';
import WebView from 'react-native-webview';

const XmlInputScreen = () => {
  const [xmlInput, setXmlInput] = useState('');
  const [formFields, setFormFields] = useState(false);

  const handleRender = () => {
   setFormFields(true);
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        style={{ borderWidth: 1, padding: 10, height: 200 }}
        multiline
        value={xmlInput}
        onChangeText={setXmlInput}
        placeholder="Enter XML here"
      />
      <Button title="Render Form" onPress={handleRender} />
      {/* {formFields.length > 0 && <FormRenderer fields={xmlInput} />} */}
      {formFields &&  <WebView
    originWhitelist={['*']}
    source={{ html: xmlInput }}
    style={{ flex: 1 }}
  />}
    </View>
  );
};

export default XmlInputScreen;
