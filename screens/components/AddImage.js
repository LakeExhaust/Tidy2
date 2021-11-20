import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
/*
Modified Expo documentation
The main things that we declare setCamera and setImage state variables
In the takeImage method a image gets taken
pickImage the user picks a image
these methods gets called on different buttons
on confirm button it sends data to the Post class
*/
export default function AddImage() {
  const [hasPermission, setHasPermission] = useState(null);
  const [ImagePermission, setImagePermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');

      const imageStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setImagePermission(imageStatus.status === 'granted');
    })();
    
  }, []);

  const takeImage = async () => {
  if(camera) {
      const data = await camera.takePictureAsync(null);
      console.log(" Image has been taken "  +  data.uri)
      setImage(data.uri)
  }
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1,1],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  if (hasPermission === null  || ImagePermission==false) {
    return <View />;
  }
  if (hasPermission === false || ImagePermission==false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
    <View style={styles.container}>
    <Camera style={styles.fixedRatio} type={type} ratio = {'1:1'} ref = {ref => setCamera(ref)}>
      
      </Camera>
      </View>
  
    <Button
    //style={styles.button}
    title = "Flip Image"
    onPress={() => {
      setType(
        type === Camera.Constants.Type.back
          ? Camera.Constants.Type.front
          : Camera.Constants.Type.back
      );
    }}>
   
  </Button>
  <Button
    //style={styles.button}
    title = "Take a pic"
    onPress={() => {
      takeImage()
    }}/>
    <Button
    //style={styles.button}
    title = "Select a pic"
    onPress={() => {
      pickImage()
    }}/>
      <Button
    //style={styles.button}
    title = "Confirm"
    onPress={() => {
     navigation.navigate('Post', {image: image})
    }}/>
   {image && <Image source = {{uri:image}} style = {styles.camera}></Image>}
  </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
  },
 

    fixedRatio: {
        flex:1,
        aspectRatio:1,
    },
  
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});