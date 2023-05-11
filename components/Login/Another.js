import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const Another = () => {
  return (
    <View style={styles.container} >
      <View style={styles.line}>
      </View>
      <View style={{marginHorizontal:10}}>
        <Text style={{color:'black'}}> Or </Text>
      </View>
      <View style={styles.line}>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop:45,

    },
    line:{
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: 115,
        alignSelf: 'center',
    }
})

export default Another