import { View, Text, StatusBar, StyleSheet } from 'react-native'
import React from 'react'
import Search from '../components/Home/Search'
import LittleBook from '../components/Home/LittleBook'
import Post from '../components/Home/Post'
import BottomTab, {bottomTabIcons} from '../components/Home/BottomBar'
import { ScrollView } from 'react-native-gesture-handler'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
     <Search/>
     
     <LittleBook/>
     
     <Post/>
     
      <BottomTab icons={bottomTabIcons}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginTop: StatusBar.currentHeight
    }
})

export default HomeScreen