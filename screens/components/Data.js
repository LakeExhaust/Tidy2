//The data for posts
import React, {Component, useState, useEffect} from 'react'
export let Data = [
    {id: 1, name:'Paula Scheer', image: require("/Users/lake/Desktop/MobileDev/Tidy2/assets/bedroom.jpeg"), desc:"Help me tidying my room",  },
    {id: 2, name:'Tom Wilford', image: require("/Users/lake/Desktop/MobileDev/Tidy2/assets/farming.jpeg"),  desc:"Help me tidying my farm",  },
    {id: 3, name:'Alexios Pap', image: require("/Users/lake/Desktop/MobileDev/Tidy2/assets/living.jpeg"),  desc:"Help me tidying my living space",  }
  ];
 

  export const getArray = () => {
    const [array, setArray] = useState(Data);
    return {
      array,
      setArray
    }
  }
  

  