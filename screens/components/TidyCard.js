import React, {useState, Component} from 'react';
import { Text, View, ImageBackground, Dimensions, StyleSheet, FlatList ,  TouchableOpacity, Alert} from 'react-native';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

function TidyCard(props) {
  const {name, image, desc} = props.data;
  const [pressedValue, setPressedValue] = useState(false);
  return (
    <TouchableOpacity onPress = { () =>
      setPressedValue(true)
     }>
    <View style={pressedValue == true ? styles.pressedContainer: styles.containerForCard}>
       
  
    <ImageBackground  
    style = {pressedValue == true ? styles.newImage: styles.image}
    source = {{ uri: image.source}}>
    <View style = {styles.innerTidyCard}>
      <Text style = {styles.name}>{name}</Text>
      <Text style = {styles.desc}>{desc}</Text>
      </View>
   </ImageBackground>
 
   </View>
   </TouchableOpacity>
  
  
  )
}



const styles = StyleSheet.create({
 image: {
  height:130,
  width:screenWidth-50,
  },   
  containerForCard: {
    width:screenWidth-50,
    margin: 5,
    flex: 1,
    backgroundColor: 'pink',
    height:200,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
	width: 0,
	height: 6,
},
shadowOpacity: 0.37,
shadowRadius: 7.49,
elevation: 12,
    },
    innerTidyCard: {
        padding: 10,
        
        }, 
        
        name : {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        
        }, 
        
        desc: {
          fontSize: 18,
          color: 'white',
          lineHeight:25,
        },
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
     height:screenHeight+10,
     width:screenWidth+10,
    borderRadius:10,
    overflow:'hidden',
    justifyContent: 'flex-end',
    
        }
   
    })

export default TidyCard;
