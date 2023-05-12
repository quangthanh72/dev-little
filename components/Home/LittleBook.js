import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import React from "react";
import { BOOKS } from "../../data/Book";
import { TouchableOpacity } from "react-native-gesture-handler";

const LittleBook = () => {
  return (
    <View style={{ marginTop: 10 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.dot}></View>
          <Text style={{ fontSize: 24, fontWeight: 600, marginLeft: 30 }}>
            Sách gần đây
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
      </View>

      <View style={{ marginTop: 10 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {BOOKS.map((book, index) => (
            <View key={index} style={{ alignItems: "center" }}>
              <TouchableOpacity>
                <Image source={{ uri: book.image }} style={styles.book} />
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={{ width: 80, marginHorizontal: 10 }}>
                  <Text style={styles.Name} numberOfLines={2}>
                    {" "}
                    {book.name}{" "}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  book: {
    height: 120,
    width: 80,
    marginHorizontal: 13,
  },
  dot: {
    width: 7,
    height: "100%",
    backgroundColor: "#6368D0",
  },
  Name: {
    // flexWrap:'wrap',
    // textAlign: 'justify'
  },
});

export default LittleBook;
