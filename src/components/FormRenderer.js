/* eslint-disable no-unreachable */
/* eslint-disable no-lone-blocks */
import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { RadioButton } from 'react-native-paper';
import DrawingField from './DrawingField';

const FormRenderer = ({ fields }) => {
  return (
    <View>
      {fields.map((field, index) => {
        switch (field.$.type) {
          case 'text':
            return (
              <View key={index}>
                <Text>{field.$.label}</Text>
                <TextInput style={{ borderWidth: 1, marginBottom: 10 }} />
              </View>
            );
          case 'datetime':
            return (
              <View key={index}>
                <Text>{field.$.label}</Text>
                <TextInput style={{ borderWidth: 1, marginBottom: 10 }} placeholder="YYYY-MM-DD" />
              </View>
            );
          case 'radio':
            return (
              <View key={index}>
                <Text>{field.$.label}</Text>
                <RadioButton.Group>
                  {field.option.map((opt, i) => (
                    <RadioButton.Item key={i} label={opt.$.label} value={opt.$.value} />
                  ))}
                </RadioButton.Group>
              </View>
            );
          case 'drawing':
            return <DrawingField key={index} label={field.$.label} />;
          default:
            return null;
        }
      })}
    </View>
  );
};

export default FormRenderer;
