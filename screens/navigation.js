import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import StartScreen from "./StartScreen";
import ShowScreen1 from "./ShowScreen1";
import ShowScreen2 from "./ShowScreen2";
import LoginScreen from "./LoginScreen";

const Stack = createStackNavigator();

const screenOptionS = {
  headerShown: false,
};

const SignedInStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="StartScreen"
        screenOptions={screenOptionS}
      >
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="ShowScreen1" component={ShowScreen1} />
        <Stack.Screen name="ShowScreen2" component={ShowScreen2} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SignedInStack;
