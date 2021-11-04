import React, {useEffect, useState} from 'react'
import { Text, View, FlatList, TouchableOpacity, AccessibilityInfo, Alert, ScrollView, ImageBackground, StyleSheet, Dimensions} from 'react-native';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
const showPostStack = createNativeStackNavigator();

const ShowPost = () => {

  const route = useRoute()
  const name = route.params.name;
  const desc = route.params.desc;
  const image = route.params.image;
  return (

<View>
       
  
       <ImageBackground
        
       style = {styles.newImage}
       
       source = {{ uri:image }}>
       <View style = {styles.innerTidyCard}>
         <Text style = {styles.name}>{name}</Text>
         <Text style = {styles.desc}>{desc}</Text>
         </View>
      </ImageBackground>
      </View>
  )
}



export default ShowPost;

const styles = StyleSheet.create({
  pressedContainer: {
    width: screenWidth-20,
    height: screenHeight-30,
    borderRadius:10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    
  },
  innerTidyCard: {
    padding: 10,
    
    }, 
    
    name : {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    
    }, 
    
    desc: {
      fontSize: 18,
      color: 'white',
      lineHeight:25,
    },
  newImage: {
height:screenHeight+10,
width:screenWidth+10,
borderRadius:10,
overflow:'hidden',
justifyContent: 'flex-end',

  }
})