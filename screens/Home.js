import React, {useState, useEffect} from 'react';
import { Text, View, FlatList, TouchableOpacity, AccessibilityInfo, Alert, ScrollView, StyleSheet, Pressable} from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TidyCard from '/Users/lake/Desktop/MobileDev/Tidy2/screens/components/TidyCard.js';
import showPost from '/Users/lake/Desktop/MobileDev/Tidy2/screens/showPost.js'
import { useRoute, useNavigation } from '@react-navigation/core';
import {Data} from '/Users/lake/Desktop/MobileDev/Tidy2/screens/components/Data.js';
import Post from '/Users/lake/Desktop/MobileDev/Tidy2/screens/Post.js';


const HomeStack = createNativeStackNavigator();

function HomeScreen() {
/*
Here in the Homescreen, it shows our custom component in a scrollview 
which makes it possible to scroll through them
 */

const [array, setArray] = useState(Data)
const route = useRoute();
const navigation = useNavigation();
const [data, setData] = useState();

const addEntry = () => {
  if(data  !== 0) {
  setArray([...array, data]);
  }
 }

 useEffect(async () => {
  try {
   if(route.params.data==0) {

   await route.params.data;
    
     
   } else {
   return setData(route.params.data);
   }
 } catch (error) {
   console.log(error)
 }

 });
 








   
  return (
  <View>
  
 <ScrollView>
   <TidyCard array = {array} />
 </ScrollView>
 <View style = {styles.container}>
 <Pressable style = {styles.button}
    onPress={() => { 
     navigation.navigate('Post')
    
     }} 
     
     >
<Text style = {styles.text}>Make a Post</Text>
</Pressable>

<Pressable style = {styles.button} 
onPress={() => { 
  addEntry()
 }}
>

 
<Text style = {styles.text}>Add the Entry</Text>

</Pressable>
</View>
 
 </View>
   
 
    ) 
}
//Home has most of the secondary screens that will be used for navigation
function HomeStackScreen() {
    return (
     
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={HomeScreen}/>
        <HomeStack.Screen name="showPost" component={showPost} options={{
          headerShown: false}} /> 
        <HomeStack.Screen name="Post" component={Post} options={{
          headerShown: false}} /> 
        
        
           
              
      </HomeStack.Navigator>
      
    );
  }

  const styles = StyleSheet.create({
    button: {
      width: 260,
      height:50,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'red',
      margin:100,
     
    },
    text : {
      fontSize: 30,
      color: 'white',
      fontWeight: 'bold',
      
      },
      container: {
        flexDirection:"row",
        bottom:1
      
        
       
    },
  })
  //This gets exported to app screen
  
 export default HomeStackScreen;
  