import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";

const Search = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <TouchableOpacity onPress={() => navigation.push('StartScreen')}>
          <Image
            source={{
              uri: "https://us-tuna-sounds-images.voicemod.net/6a9b3c5d-3cf4-436f-b462-ffcd2f4154ac-1665671787017.jpg",
            }}
            style={styles.icon}
          />
          </TouchableOpacity>
        </View>
        <View style={{backgroundColor:'white',borderRadius:15,width:270,height:35}}>
        <TextInput 
        placeholder="Bạn có muốn đăng ?"
        placeholderTextColor="#444"
        style={{marginLeft:20,marginTop:3}}
        />
        </View>
        <View>
            <Image source={{uri: 'https://img.icons8.com/?size=512&id=qItA4cPLu8rh&format=png'}} style={{width:30,height:35,alignItems:'center' }} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 20,
    marginHorizontal: 10,
    height: 72,
    backgroundColor: "#9EA2EB",
    borderRadius: 20,
  },
  icon: {
    width: 35,
    height: 35,
    borderRadius: 90,
    borderWidth: 2,
    borderColor: "orange",
  },
  header:{
    flexDirection:'row',
    justifyContent:'space-around'
  }
});

export default Search;
