import React, {useState} from 'react'
import { Text, View, ImageBackground, StyleSheet, Dimensions, Image, TouchableOpacity, Button, ScrollView, TextInput} from 'react-native';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import heart from '/Users/lake/Desktop/MobileDev/Tidy2/assets/icons/baseline_favorite_border_black_24dp.png'
import Comment from '/Users/lake/Desktop/MobileDev/Tidy2/screens/Comment.js';
import ControlUI from '/Users/lake/Desktop/MobileDev/Tidy2/screens/components/ControlUI.js';


const showPostStack = createNativeStackNavigator();

const showPost = () => {
  const [text, setText] = useState();
  const route = useRoute()
  const name = route.params.item.name;
  const desc = route.params.item.desc;
  const image = route.params.item.image;
  const [isPressed, setPressed] = useState(false);
  const navigation = useNavigation();
  return (

<View style = {styles.pressedContainer}>
  
<Button style = {styles.backButton} onPress={() => navigation.goBack()} title="Back" />
<ScrollView>
       <ImageBackground
        
       style = {styles.newImage}
       
       source = {{ uri:image }}>
        
         <Text style = {styles.name}>{name}</Text>
         <Text style = {styles.desc}>{desc}</Text>
         <TouchableOpacity  
   
   onPress = { () =>
   setPressed(true)
   
  } >
         

       
       </TouchableOpacity>
       <ControlUI></ControlUI>
    
      </ImageBackground>
      <Text style = {styles.title}>
        Comments Section
      </Text>
     
      <Comment></Comment>
     </ScrollView>
      </View>
  )
}



export default showPost;

const styles = StyleSheet.create({
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
height:screenHeight,
width:screenWidth,
borderRadius:10,
justifyContent: 'flex-start',
resizeMode:'cover'

  },
  innerTidyCard: {
    padding: 10,
    
    }, 
    
    name : {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    
    
    }, 
    
    desc: {
      fontSize: 18,
      color: 'white',
      lineHeight:25,
    },
    heart: {
      resizeMode:'contain',
      width:50,
      height:50,
      position:'absolute',
      justifyContent:'center',
      alignItems:'center',
      margin:50,
      right:5,
      bottom:15,
     
     
    },
   
    redheart: {
      resizeMode:'contain',
      width:50,
      height:50,
      position:'absolute',
      justifyContent:'center',
      alignItems:'center',
      margin:50,
      right:5,
      bottom:15,
      color:'red'
     
     
    },
    backButton: {
      width: '20%',
      height: '25%',
      left:1,
      color:'red'
    },
    title: {
      fontSize: 25,
      fontWeight: "bold",
      left: 20,
     

    }, 
})