import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  StatusBar
} from "react-native";
import React from "react";
import HeaderBack from "../components/HeaderBack";

const ShowScreen1 = ({navigation}) => (
  <View
    style={{
      flex: 1,
      flexDirection: "column",
      backgroundColor: "white",
      marginTop: StatusBar.currentHeight
    }}
  >
    <HeaderBack navigation={navigation}/>
    <View style={{flex:1,flexDirection:'column',justifyContent: 'space-around'}}>
      <View>
        <Image source={require("../assets/ShowScreen1.png")} />
      </View>
      <View>
        <Text style={styles.textStyle}>Chia sẻ sách - kết nối với những người yêu sách</Text>
      </View>
      <View style={{alignItems:'center'}} >
        <Image source={require('../assets/Slide1.png')} />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <TouchableOpacity onPress={() => navigation.push('ShowScreen2')}>
          <Text style={styles.buttom}> Tiếp tục </Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  buttom: {
    width: 214,
    height: 65,
    borderRadius: 25,
    backgroundColor: "#6368D0",
    color: "white",
    textAlign: "center",
    fontSize: 22,
    textAlignVertical: "center",
  },
  textStyle:{
    fontSize:27,
    textAlign: 'center'
  }
});

export default ShowScreen1;
