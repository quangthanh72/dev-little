
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import StartScreen from './screens/StartScreen';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StartScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:StatusBar.currentHeight,
    backgroundColor:'#555ABF'
  },
});
