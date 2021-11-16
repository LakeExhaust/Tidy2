
import React, { useState, useEffect, Component } from 'react';



export default class Comments extends React.Component {
 
    constructor() {
      comments = [
        {id: 1, name:'Richard Dunn', profilePic: require("/Users/lake/Desktop/MobileDev/Tidy2/assets/profilePics/Richard.jpeg"), comment:"Nice, good job!",  },
        {id: 2, name:'Billy', profilePic: require("/Users/lake/Desktop/MobileDev/Tidy2/assets/profilePics/Billy.jpeg"),  comment:"Maybe, you could change how you sorted your books by genre?",  },
        {id: 3, name:'Chrissy101', profilePic: require("/Users/lake/Desktop/MobileDev/Tidy2/assets/profilePics/Chris.jpeg"),  comment:"This looks amazing",  }
      ];
      //Data on startup
      AsyncStorage.setItem('values', JSON.stringify(this.comments));
    }
    
    addNewItem(entry) {
      this.comments.push(entry);
      this.writeData(); 
    }
    
    writeData() {
      AsyncStorage.setItem('values', JSON.stringify(this.comments));
    }

    getData = async () => {
      try {
        const value = await AsyncStorage.getItem('test')
        if(value !== null) {
        return value
        }
      } catch(e) {
        // error reading value
      }
    }
    
}
  
  

 

  


 