import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const StartScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
      <Image 
        source={require('./../assets/Logo.png')}
        style ={styles.logo}
      />
      </TouchableOpacity>
      <Text style={styles.textStyle}>Chào mừng bạn đến với LBooK</Text>
      <View style={{flex:1 ,justifyContent:'center',alignContent:'center'}}>
        <TouchableOpacity>
            <Text style={styles.buttonSame1}>Bắt đầu</Text>
        </TouchableOpacity>
       </View>
       <View style={{flex:1 ,justifyContent:'center',alignContent:'center'}}>
        <TouchableOpacity>
            <Text style={styles.buttonSame2}>Đăng nhập</Text>
        </TouchableOpacity>
       </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'space-between',
        // alignContent: 'center',
        flexDirection: "column",
    },
    logo:{
        position: 'absolute',
        width: 300 ,
        height: 300,
        left: 57,
        // alignContent: 'center',
        top: 150,
    },
    textStyle:{
        position: 'absolute',
        width: 350,
        height:30,
        top:520,
        left:33,
        color: '#FEEB8E',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize:22,
        textAlign: 'center',
        shadowColor:400,
    },
    buttonSame1:{
        flex: 1,
        position: 'absolute',
        width: 380,
        height: 70,
        top: 670,
        left: 16,
        borderRadius:25,    
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center',
        fontSize:22,    
        textAlignVertical: 'center' 
    },
    buttonSame2:{
        flex: 1,
        position: 'absolute',
        width: 380,
        height: 70,
        top: 750,
        left: 16,
        borderRadius:25,    
        backgroundColor: 'white',
        color: 'black',
        textAlign: 'center',
        fontSize:22,    
        textAlignVertical: 'center' 
    }    
})

export default StartScreen