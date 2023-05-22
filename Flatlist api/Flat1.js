import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native-gesture-handler";

const Flat1 = () => {
  
const nf=[{
    name:'Hitman',
    year :2016,
    genre:'action',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsAP9KMEgSVwxMjcN9CoPxKr0Gc30vqEsSvgJCe9Os4d9fyHCT'
},
{
    name:'Hitman',
    year :2016,
    genre:'action',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsAP9KMEgSVwxMjcN9CoPxKr0Gc30vqEsSvgJCe9Os4d9fyHCT'
},
{
    name:'Hitman',
    year :2016,
    genre:'action',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsAP9KMEgSVwxMjcN9CoPxKr0Gc30vqEsSvgJCe9Os4d9fyHCT'
},
{
    name:'Hitman',
    year :2016,
    genre:'action',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsAP9KMEgSVwxMjcN9CoPxKr0Gc30vqEsSvgJCe9Os4d9fyHCT'
},
]




return (
    
    <View style={{flex:1,backgroundColor:'black'}}>
        <View style={{marginBottom:90,marginTop:35, alignItems:'center',justifyContent:'center',height:'45%',width:'100%',}}>
        <Image source={{uri:'https://images.hdqwalls.com/download/stranger-things-season-2-2017-poster-72-2160x3840.jpg'}} 
        style={{height:'172%',width:'98%',  resizeMode:'stretch',marginTop:60}} />
          <Text style={{bottom:133,color:'white'}}>hiiiiii</Text>  
        </View> 
         {/* <ScrollView horizontal={false}> 
        <View style={{marginTop:28}}>
       
            <FlatList
      style={styles.listStyle}
      horizontal
      inverted
      //   numColumns={2}
      showsHorizontalScrollIndicator={false}
      data={nf}
      renderItem={({ item }) => {
        console.log(item.name);
        return (
        
        <Text style={styles.textStyle}> {item.name} </Text>  

        );     
      }}
    />
   </View>
   
     <View style={{marginTop:-0}}>
        <Text style={{left:10,fontWeight:'600',fontStyle:'italic',color:'white'}}>Netflix top trending</Text>
    <FlatList
      style={styles.listStyle}
      horizontal
      inverted
      //   numColumns={2}
      showsHorizontalScrollIndicator={false}
      data={nf}
      renderItem={({ item }) => {
        console.log(item.name);
        return (    
        <Text style={styles.textStyle}> {item.name} </Text>        
        );  
      }}
    />
    
    </View>
    <View >
        <Text style={{left:32}}>Netflix top trending</Text>
    <FlatList
      style={styles.listStyle}
      horizontal
      inverted
      //   numColumns={2}
      showsHorizontalScrollIndicator={false}
      data={nf}
      renderItem={({ item }) => {
        console.log(item.name);
        return (    
        <Text style={styles.textStyle}> {item.name} </Text>        
        );  
      }}
    />
    
    </View>
    </ScrollView> */}
    </View> 
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    padding: 30,
  
    
    color: "red",
  },
  listStyle: {
    textAlign: "center",
    margin: 20,
    width: '100%',
    height: 140,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 10,
    
    borderColor: '#8e8e8e', 
    backgroundColor: 'black',
    
    
  },
});

export default Flat1;