import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const Another = () => {
  return (
    <View style={{marginBottom:40}}>
      <View style={styles.container}>
        <View style={styles.line}></View>
        <View style={{ marginHorizontal: 10 }}>
          <Text style={{ color: "black" }}> Or </Text>
        </View>
        <View style={styles.line}></View>
      </View>
      <View style={styles.logoContainer}>
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <Image source={{uri: 'https://img.icons8.com/?size=512&id=118497&format=png'}} style={styles.icon}/>
          </TouchableOpacity>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <Image source={{uri: 'https://img.icons8.com/?size=512&id=17949&format=png'}} style={styles.icon}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 45,
  },
  line: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: 115,
    alignSelf: "center",
  },
  logoContainer:{
    flexDirection:'row',
    justifyContent:'center',
    marginTop:50,
  },
  icon:{
    width:40,
    height:40,
    borderRadius:50,
  
  },
  iconContainer:{
    marginHorizontal:5
  }
});

export default Another;
