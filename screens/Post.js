import  React, { useState, useEffect} from 'react';
import { Text, View, FlatList, TextInput, StyleSheet,  Pressable, Image, Dimensions, ScrollView} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import addImage from '/Users/lake/Desktop/MobileDev/Tidy2/screens/components/AddImage.js'
import { useNavigation, useRoute } from '@react-navigation/native';

const PostStack = createNativeStackNavigator();
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;



function Post() {
  const navigation = useNavigation();
  const [text, setText] = useState('');
  const [descText, setDesc] = useState('');
  const [isLoading, setLoading] = useState('');
  const route = useRoute();
  const defaultImage = require('/Users/lake/Desktop/MobileDev/Tidy2/assets/farming.jpeg');

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
      const data = {title : text, descText, image:route.params.image};
      navigation.navigate('Home', data);
     

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