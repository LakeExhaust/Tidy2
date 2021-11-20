import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '/Users/lake/Desktop/MobileDev/Tidy2/screens/Home.js';
import Post from './screens/Post';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ControlUI from '/Users/lake/Desktop/MobileDev/Tidy2/screens/components/ControlUI.js'


/*
The App.js class holds all the tabs for the app
   
*/

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
export default function App() {
  return (
   
    <NavigationContainer>
     
         
    <Tab.Navigator>
     
      <Tab.Screen name="Home" component={Home} options={{
          headerShown: false,  tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          )
      }}
      />
   

      
     
      
    </Tab.Navigator>
    </NavigationContainer>
   
  )
}
