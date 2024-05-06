import React from 'react';
import { View, Text,Button,ScrollView } from 'react-native';
import Product from './Components.js/Product';
import Header from './Components.js/Header';

const App = () => {
  const products = [
    {
      name: "sam",
      price: 10,
    },
    {
      name: "ram",
      price: 20,
    },
    {
      name: "kam",
      price: 30,
    }
  ];

  return (
    <ScrollView>
      <Header />
      {
        products.map((item) => 
          <Product item={item}/>
        )
      }
    
    </ScrollView>
  );
}

export default App;
