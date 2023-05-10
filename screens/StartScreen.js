import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar
} from "react-native";
import React from "react";
import { LinearGradient } from "react-native-linear-gradient";

const StartScreen = ({navigation}) => {
  return (
    <View style={styles.container } >
      <TouchableOpacity>
        <Image source={require("./../assets/Logo.png")} style={styles.logo} />
      </TouchableOpacity>
      <Text style={styles.textStyle}>Chào mừng bạn đến với LBooK</Text>
      <View
        style={{ flex: 1, justifyContent: "center", alignContent: "center" }}
      >
        <TouchableOpacity onPress={() => navigation.push('ShowScreen1')}>
          <Text style={styles.buttonSame1}>Bắt đầu</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{ flex: 1, justifyContent: "center", alignContent: "center" }}
      >
        <TouchableOpacity onPress={() => navigation.push('LoginScreen')} >
          <Text style={styles.buttonSame2}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    // alignContent: 'center',
    flexDirection: "column",
    backgroundColor: '#6368D0',
    marginTop: StatusBar.currentHeight
  },
  logo: {
    position: "absolute",
    width: 300,
    height: 320,
    left: 57,
    top: 100,
  },
  textStyle: {
    position: "absolute",
    width: 350,
    height: 30,
    top: 420,
    margin:15,
    color: "blue",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 22,
    textAlign: "center",
    shadowColor: 400,
  },
  buttonSame1: {
    flex: 1,
    position: "absolute",
    width: 380,
    height: 70,
    top: 600,
    margin:5,
    borderRadius: 25,
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
    fontSize: 22,
    textAlignVertical: "center",
  },
  buttonSame2: {
    flex: 1,
    position: "absolute",
    width: 380,
    height: 70,
    top: 680,
    margin:5,
    borderRadius: 25,
    backgroundColor: "blue",
    color: "black",
    textAlign: "center",
    fontSize: 22,
    textAlignVertical: "center",
  },
});

export default StartScreen;
