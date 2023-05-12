import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { POSTS } from "../../data/Posts";

const Post = () => {
  return (
    <View style={{}}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 10,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View style={styles.dot}></View>
          <Text style={{ fontSize: 24, fontWeight: 600, marginLeft: 30 }}>
            Có thể bạn quan tâm
          </Text>
        </View>
        <View style={{ flexDirection: "column", justifyContent: "center" }}>
          <TouchableOpacity>
            <Image
              source={{
                uri: "https://img.icons8.com/?size=512&id=37220&format=png",
              }}
              style={{ height: 30, width: 30 }}
            />
          </TouchableOpacity>
        </View>
      </View >

            <View>
              <FlatList data={POSTS} renderItem={renderItem} numColumns={2} style={{height:435,alignContent:'center'}} />
            </View>
    </View>
  );
};
const renderItem = ({ item }) => (
  <View style={styles.container}>
    <View>
      <Image source={{ uri: item.imagePost }} style={styles.image} />
      
    </View>
    <View>
    <Text style={styles.textTitle} numberOfLines={2}>
        {item.title}
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  image: {
    width: 147,
    height: 115,
    alignItems: "center",
    marginTop: 15,
  },
  container: {
    width: 180,
    height: 170,
    margin: 12,
    alignItems: "center",
    alignContent:'center',
    backgroundColor: "#A8ABEB",
    shadowColor:'red',
    shadowOffset:{
        width:0,
        height:2
    },
    shadowOpacity:0.25,
    shadowRadius:10,
    elevation:5
  },
  dot: {
    width: 7,
    height: "100%",
    backgroundColor: "#6368D0",
  },
  textTitle:{
    fontSize:14,
    textAlign:'center'
  }
});

export default Post;
