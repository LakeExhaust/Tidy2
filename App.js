import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '/Users/lake/Desktop/MobileDev/Tidy2/screens/Home.js';
import Post from './screens/Post';





const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
export default function App() {
  return (
   
    <NavigationContainer>
     
         
    <Tab.Navigator>
     
      <Tab.Screen name="Home" component={Home} options={{
          headerShown: false}} />
            <Tab.Screen name="Post" component={Post} options={{
          headerShown: false}} />
 
      
     
      
    </Tab.Navigator>
    </NavigationContainer>
   
  )
}
