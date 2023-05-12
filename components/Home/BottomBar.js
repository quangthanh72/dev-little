import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Divider } from "react-native-elements";

export const bottomTabIcons = [
  {
    name: "Home",
    inactive: "https://img.icons8.com/?size=512&id=i6fZC6wuprSu&format=png",
    active: "https://img.icons8.com/?size=512&id=1iF9PyJ2Thzo&format=png",
  },
  {
    name: "Notification",
    inactive: "https://img.icons8.com/?size=512&id=11642&format=png",
    active: "https://img.icons8.com/?size=512&id=11668&format=png",
  },
  {
    name: "Chat",
    inactive: "https://img.icons8.com/?size=512&id=38977&format=png",
    active: "https://img.icons8.com/?size=1x&id=37966&format=png",
  },
  
  {
    name: "Profile",
    inactive:
      "https://img.icons8.com/?size=512&id=114140&format=png",
    active: "https://img.icons8.com/?size=1x&id=114064&format=png",
  },
];

const BottomTab = ({ icons }) => {
  const [activeTab, setActiveTab] = useState("Home");

  const Icon = ({ icon }) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image source={{uri: activeTab === icon.name ? icon.active : icon.inactive}} 
      style={styles.icon } />
    </TouchableOpacity>
  );
  return (
    <View style={styles.wrapper}>
        <Divider color="black" width={1} orientation="vertical" />
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position:'relative',
    width:'100%',
    marginBottom:'0%',
    zIndex:999,
    backgroundColor: '#fff'
  },

  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
    paddingTop: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  
});

export default BottomTab;