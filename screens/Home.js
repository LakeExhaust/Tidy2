import React, {useState, useEffect} from 'react';
import { Text, View, FlatList, TouchableOpacity, AccessibilityInfo, Alert, ScrollView, Button} from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TidyCard from '/Users/lake/Desktop/MobileDev/Tidy2/screens/components/TidyCard.js';
import Data from '/Users/lake/Desktop/MobileDev/Tidy2/screens/components/Data.js';
import showPost from '/Users/lake/Desktop/MobileDev/Tidy2/screens/showPost.js'
import addImage from '/Users/lake/Desktop/MobileDev/Tidy2/screens/components/AddImage.js'
import Post from '/Users/lake/Desktop/MobileDev/Tidy2/screens/Post.js';
import { useNavigation, useRoute } from '@react-navigation/native';


const HomeStack = createNativeStackNavigator();

 
function HomeScreen() {

  const navigation = useNavigation();
  
  const route = useRoute();
 
   
  return (
  <View>
  
 <ScrollView>
   <TidyCard/>
 </ScrollView>
 
 </View>
   
 
    ) 
}
function HomeStackScreen() {
    return (
     
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={HomeScreen}/>
        <HomeStack.Screen name="showPost" component={showPost} options={{
          headerShown: false}} /> 
        
           
              
      </HomeStack.Navigator>
      
    );
  }

  
  
  
  export default HomeStackScreen;
  