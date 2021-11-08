import React, {useState } from 'react';
import { Text, View, ImageBackground, Dimensions, StyleSheet, FlatList,  TouchableOpacity, Alert, Button} from 'react-native';
import Data from '/Users/lake/Desktop/MobileDev/Tidy2/screens/components/Data.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation, useRoute } from '@react-navigation/native';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const TidyCard = () =>  {
  const navigation = useNavigation();

 
  return (
  <View>
  {Data.map((item, index) => {
    
  return (
   
    <TouchableOpacity  
   
      onPress = { () =>
 
     navigation.navigate('showPost', {item: {name: item.name, image: item.image, desc: item.desc}})
     

     } >
    
    <View style={ styles.containerForCard}>
       
  
    <ImageBackground
      key = {item.id}
    style = {styles.image}
    
    source = {{ uri: item.image}}>
    <View style = {styles.innerTidyCard}>
      <Text style = {styles.name}>{item.name}</Text>
      <Text style = {styles.desc}>{item.desc}</Text>
      </View>
   </ImageBackground>
  
   </View>
   </TouchableOpacity>
     
    
    
    
  
  )
    })}
    </View>
  )
}

const ShowPost = () => {

  const route = useRoute()
  return (

  <Text>{route.params.item.name}</Text> 
  )
}

const styles = StyleSheet.create({
 image: {
  height:130,
  width:screenWidth-50,
  },   
  containerForCard: {
    width:screenWidth-50,
    margin: 5,
    flex: 1,
    backgroundColor: 'pink',
    height:200,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
	width: 0,
	height: 6,
},
shadowOpacity: 0.37,
shadowRadius: 7.49,
elevation: 12,
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
        newImage: {
     height:screenHeight+10,
     width:screenWidth+10,
    borderRadius:10,
    overflow:'hidden',
    justifyContent: 'flex-end',
    
        }
   
    })

export default TidyCard

