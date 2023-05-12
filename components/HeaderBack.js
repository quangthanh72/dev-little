import { View, Text, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const headerBack = ({ navigation }) => (
  <View>
    <View style={{alignItems:'flex-start'}}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={{
            uri: "https://img.icons8.com/?size=512&id=40217&format=png",
          }}
          style={{ width: 30, height: 30 }}
        />
      </TouchableOpacity>
    </View>
  </View>
);

export default headerBack;
