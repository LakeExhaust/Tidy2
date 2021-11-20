import  React, { useState, useEffect} from 'react';
import { Text, View, TextInput, StyleSheet,  Pressable, Image, Dimensions, ScrollView} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import addImage from '/Users/lake/Desktop/MobileDev/Tidy2/screens/components/AddImage.js'
import { useNavigation, useRoute } from '@react-navigation/native';

//This is the class for making a post
//It has a stack navigator exporting the screen to app
const PostStack = createNativeStackNavigator();
//Here dimensions of the screeen are saved
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;



function Post() {
  //For navigation
  const navigation = useNavigation();
  //The text state variable is for name of the poster
  const [text, setText] = useState('');
  //The desc variable is the description of the post
  const [descText, setDesc] = useState('');
  //State variable to check if data has loaded
  const [isLoading, setLoading] = useState('');
  //For receiving data
  const route = useRoute();
//Default image if the user hasn't pick or taken a picture
  const defaultImage = require('/Users/lake/Desktop/MobileDev/Tidy2/assets/farming.jpeg');

  //On start check if the image is null then wait for it or setLoading true meaning it has been loaded
  
  
  useEffect(async () => {
   try {
    if(route.params.image==0) {
    await route.params.image
    } else {
      setLoading(true);
      
    }
  } catch (error) {
    console.log(error)
  }

  });
 

    return (
 //The different state variables are set elements
 /*
 The pressable on pressed declares the data with all the data and navigates to home
 Second pressable goes the addImage screen
 */
    <View>
  <ScrollView>
     <TextInput style = {styles.input}
       
        placeholder="Title"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />

<TextInput style = {styles.desc}
       
       placeholder="Description"
       onChangeText={descText => setDesc(descText)}
       defaultValue={descText}
     />
    
    <Pressable style = {styles.button}
    onPress={() => { 
      const data = {id: 4, name : text, image:route.params.image, desc:descText};
     console.log(' The data is ' + data.image.image)
   
      navigation.navigate('Home', {data:{id: 4, name : text, image:route.params.image, desc:descText}});
   
  
    
    

     }} >
   <Text style = {styles.text}>Next</Text>
   
   </Pressable>

   <Pressable style = {styles.button} onPress={() => { 
    navigation.navigate('addImage')
   }}>
     
   <Text style = {styles.text}>Add Image</Text>
   
    
   </Pressable>
   <Image style = {styles.newImage} source = {{uri:isLoading == true ? route.params.image : defaultImage }}></Image>
  
   </ScrollView>
    
    </View>
    
    )

  }


function PostStackScreen() {
    return (
     
      <PostStack.Navigator>
      <PostStack.Screen name ="Post" component={Post}/>
      <PostStack.Screen name ="addImage"  component={addImage}/>
      </PostStack.Navigator>
      
    );
  }


export default PostStackScreen;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    width: 255,
  },

  desc: {
    height: 150,
    width: 500,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20
   
  },
  button: {
    width: 160,
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
    newImage: {
      height:'50%',
      width:'30%',
     borderRadius:10,
     overflow:'hidden',
     justifyContent: 'center',
     alignItems: 'center'
     
         }
    
    
});