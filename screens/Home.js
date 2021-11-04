import React, {useState} from 'react';
import { Text, View, FlatList, TouchableOpacity, AccessibilityInfo, Alert, ScrollView} from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TidyCard from '/Users/lake/Desktop/MobileDev/Tidy2/screens/components/TidyCard.js';
import Data from '/Users/lake/Desktop/MobileDev/Tidy2/screens/components/Data.js';
import showPost from '/Users/lake/Desktop/MobileDev/Tidy2/screens/showPost.js'

const HomeStack = createNativeStackNavigator();

 
function HomeScreen() {
  
  return (
 <ScrollView>
   <TidyCard/>
 </ScrollView>
 
   
 
    ) 
}
function HomeStackScreen() {
    return (
     
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={HomeScreen}/>
        <HomeStack.Screen name="showPost" component={showPost} />
         
        
      </HomeStack.Navigator>
      
    );
  }

  
  
  
  export default HomeStackScreen;
  