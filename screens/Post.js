import  React, { useState } from 'react';
import { Text, View, FlatList, TextInput, StyleSheet,  Pressable, Alert  } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const PostStack = createNativeStackNavigator();

function Post() {
  const [text, setText] = useState('');
  const [descText, setDesc] = useState('');
    return (
    <View>
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
    <Pressable style = {styles.button}>
   <Text style = {styles.text}>Next</Text>
   </Pressable>
         
    </View>
    )
}

function PostStackScreen() {
    return (
     
      <PostStack.Navigator>
      <PostStack.Screen name ="Post" component={Post}/>
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
    
});