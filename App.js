import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import StartScreen from "./screens/StartScreen";
import ShowScreen1 from "./screens/ShowScreen1";
import ShowScreen2 from "./screens/ShowScreen2"
import SignedInStack from "./screens/navigation";

export default function App() {
  
  return (
  <SignedInStack/>
  );
}


