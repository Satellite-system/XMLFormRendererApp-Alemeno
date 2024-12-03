import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import XmlFileScreen from './src/screens/XmlFileScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import XmlInputScreen from './src/screens/XmlInputScreen';

const Stack = createStackNavigator();

function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator>
         <Stack.Screen name="HomeScreen" component={HomeScreen} />
         <Stack.Screen name="XmlFileScreen" component={XmlFileScreen} />
        <Stack.Screen name="XmlInputScreen" component={XmlInputScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
