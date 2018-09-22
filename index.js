// Import a library to help create a component
import React from 'react';
import ReactNative from 'react-native';
import { Text, AppRegistry } from 'react-native';
import Header from './src/components/header.js'

// Create a component

const App () => {
  return (
    <Text> Some text </Text>
  );
};

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
