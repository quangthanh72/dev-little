import { View, Text, Image, StyleSheet, StatusBar } from "react-native";
import React from "react";
import HeaderBack from "../components/HeaderBack";
import SignupForm from "../components/Signup/SignupForm";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.contain}>
      <HeaderBack navigation={navigation} />
      <View style={styles.logoContainer}>
        <Image source={require("../assets/LoginLogo.png")} />
      </View>
      <SignupForm navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "white",
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 100,
  },
});
export default LoginScreen;
