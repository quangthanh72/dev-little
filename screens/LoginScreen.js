import { View, Text, Image, StyleSheet, StatusBar } from "react-native";
import React from "react";
import LoginForm from "../components/Login/LoginForm";
import HeaderBack from "../components/HeaderBack";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.contain}>
      <HeaderBack navigation={navigation} />
      <View style={styles.logoContainer}>
        <Image source={require("../assets/LoginLogo.png")} />
      </View>
      <LoginForm navigation={navigation} />
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
    marginTop: 30,
  },
});
export default LoginScreen;
