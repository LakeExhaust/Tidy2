import * as React from 'react';
import { Text, View, FlatList, TouchableOpacity, Button, StyleSheet, SafeAreaView, Platform, StatusBar  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TidyCard from '/Users/lake/Desktop/MobileDev/Tidy2/screens/components/TidyCard.js';
import Data from '/Users/lake/Desktop/MobileDev/Tidy2/screens/components/Data.js';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const HomeStack = createNativeStackNavigator();

function HomeScreen() {
  
  return (

  <View>
   <FlatList
    numColumns={2}
     data={Data}
   
     renderItem={({ item }) => {
   
         return <TidyCard data={item} />
        }}   
       
      />
      
  </View>
 
   
 
    ) 
}
function HomeStackScreen() {
    return (
     
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={HomeScreen}/>
        
      </HomeStack.Navigator>
      
    );
  }

  
  
  
  export default HomeStackScreen;
  const styles = StyleSheet.create({
    AndroidSafeArea: {
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
  });