import React, {useState, useEffect, Component } from 'react';
import { TextInput, Text,View, Dimensions, StyleSheet, FlatList,  TouchableOpacity, Alert, Button, ScrollView, ImageBackground} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import {comments} from '/Users/lake/Desktop/MobileDev/Tidy2/screens/components/Comments.js';


export default function Comment()  {
  const [array, setArray] = useState(comments)
  const [text, setText] = useState('')
 

const addEntry = (data) => {
  
  setArray([...array, data]);
}

useEffect(() => {
  const data = localStorage.getItem("array");
  if (data) {
    setArray(JSON.parse(data));
  }
}, []);

 useEffect(() => {
  localStorage.setItem("array", JSON.stringify(array));
});


return (
<ScrollView>
<TextInput style ={styles.input}
      value = {text}
      onChangeText={text => setText(text)}
    
      onKeyPress={ (event) => {
                if(event.nativeEvent.key == "Enter"){
                  console.log('User hit enter')
                  const data = {id:4, name:"Default", profilePic:require('/Users/lake/Desktop/MobileDev/Tidy2/assets/profilePics/defaultUser.jpeg'), comment:text}
                  addEntry(data)
                  } 
      }
              }
      />

{array.map((item, index) => (
   
      
    
  
    
       <View>
       
    
     
      <View style = {styles.topContainer}>
     
     
      <ImageBackground style = {styles.profilePic} source = {{ uri: item.profilePic}}>
      </ImageBackground>
     
      <Text style = {styles.name}>{item.name}
      </Text>
     
      
     
    
     <Text style = {styles.bottomText}>{item.comment}</Text>
     
      </View>
      
      </View>
     
       
     
    
  
    ))}
  </ScrollView>
);
}



    

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginBottom: 20
},
  
    name: {
      fontSize: 15,
      fontWeight: "bold",
      marginLeft: 10,
     

    }, 

   
    bottomText: {
      color: "#999",
      marginLeft: 10
    },
    profilePic: {
      width: 80,
      height: 80,
      borderRadius: 150 / 2,
      overflow: "hidden",
      borderWidth: 3,
      borderColor: "red",
      marginLeft: 10,

      
    },
    topContainer: {
      flex: 1,
      justifyContent: "flex-end",
      marginBottom:10

  },
  })

