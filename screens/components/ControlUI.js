import React from 'react'
import { Text, View, ImageBackground, Dimensions, StyleSheet, FlatList,  TouchableOpacity, Alert, Button, Pressable, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export default function ControlUI() {
    const bookmark = require('/Users/lake/Desktop/MobileDev/Tidy2/assets/ControlUI/bookmark.png');
    const heart = require('/Users/lake/Desktop/MobileDev/Tidy2/assets/ControlUI/cards-heart.png');
    const share = require('/Users/lake/Desktop/MobileDev/Tidy2/assets/ControlUI/share.png');
    return (
        <View style = {styles.container}>
      <Pressable style = {styles.circle}   onPress={() => { 
       color:'red'
      }}
      >
      <ImageBackground style = {styles.image} source = {{uri:bookmark}}>
          
      </ImageBackground>
      </Pressable>

      <Pressable style = {styles.circle}>
      <ImageBackground style = {styles.image} source = {{uri:heart}}>
          
      </ImageBackground>
      </Pressable>

      <Pressable style = {styles.circle}>
      <ImageBackground style = {styles.image} source = {{uri:share}}>
          
      </ImageBackground>
      </Pressable>

   
        </View>
    )
}

const styles = StyleSheet.create({

circle: {
    width: 120,
    height: 100,
    borderRadius: 100/2, 
    backgroundColor:'white',
    shadowColor: "#000",
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent:'center',
    margin:10,
    
 
shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.29,
shadowRadius: 4.65,

elevation: 7,
}, 
image: {
    width: 100,
    height: 100,  
},
container: {
    flexDirection:"row",
    position: 'absolute',
    bottom:4,
    
   
},
input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

});
