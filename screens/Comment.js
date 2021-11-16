import React, {useState, useEffect } from 'react';
import { TextInput, Text,View, Dimensions, StyleSheet, FlatList,  TouchableOpacity, Alert, Button, ScrollView, ImageBackground} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Comments from '/Users/lake/Desktop/MobileDev/Tidy2/screens/components/Comments.js'


export default function Comment() {
  const data = {id:4, name:"Default", profilePic:require('/Users/lake/Desktop/MobileDev/Tidy2/assets/profilePics/defaultUser.jpeg'), comment:'Hey'};
const comments = Comments;


  //const [comment, setComment] = useState([]);
  /*
  useEffect(() => {
    // storing input name
    let cancel = false;
    if(cancel)
    setComment(localStorage.getItem("test"));

  }, []);
  */
  /*
  const [id,setId] = useState('');
  const [name,setName] = useState('');
  const [profilePic,setProfilePic] = useState('');
  const [comment,setComment] = useState('');

var commentBox = {
  id:id,
  name : name,
  profilePic : profilePic,
  comment : comment
};
*/

return (
<ScrollView>

{comments.getData.map((item, index) => (
   
      
    
  
    
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

