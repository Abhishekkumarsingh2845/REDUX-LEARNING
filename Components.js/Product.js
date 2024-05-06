import { View, Text ,Button} from 'react-native'
import React from 'react'
import {useDispatch} from 'react-redux';
import { addtocard } from './Action';

const Product = (props) => {
    const item=props.item
    const dispatch = useDispatch();

    const handleaddtocard =(item)=> {
       dispatch(addtocard(item));
    }
  return (
    <View >
            <Text style={{fontSize:30}}>{item.name}</Text> 
            <Text style={{fontSize:30}}>{item.price}</Text> 
            
            <Button title="ADD TO CART"onPress={()=>handleaddtocard(item)}/>
          
          </View>
  )
}

export default Product