import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React from "react";
import { LinearGradient } from "react-native-linear-gradient";

const StartScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity>
          <Image source={require("./../assets/Logo.png")} style={styles.logo} />
        </TouchableOpacity>
      </View>
      <Text style={styles.textStyle}>Chào mừng bạn đến với LBooK</Text>
      <View style={styles.button}>
        <View>
          <TouchableOpacity onPress={() => navigation.push("ShowScreen1")}>
            <Text style={styles.buttonSame1}>Bắt đầu</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.push("LoginScreen")}>
            <Text style={styles.buttonSame2}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
  logo: {
    width: 300,
    height: 320,
    marginTop: 100,
    marginLeft: 30,
  },
  textStyle: {
    width: 350,
    height: 30,
    margin: 15,
    color: "blue",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 22,
    textAlign: "center",
    shadowColor: 400,
  },
  buttonSame1: {
    width: 380,
    height: 70,
    borderRadius: 25,
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
    fontSize: 22,
    textAlignVertical: "center",
    marginBottom:15
  },
  buttonSame2: {
    width: 380,
    height: 70,
    borderRadius: 25,
    backgroundColor: "blue",
    color: "black",
    textAlign: "center",
    fontSize: 22,
    textAlignVertical: "center",
    marginBottom:15
  },
  button: {
    alignItems: "center",
    marginTop:180
  },
});

export default StartScreen;
