import React, { useState } from "react";
import { View,TextInput, Button,StyleSheet } from "react-native";

const Page1=({navigation})=>{
   
        
const[username,setUsername]=useState();


        return(
           <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <TextInput style={styles.hi}
            value={username}
            onChangeText={(username)=>setUsername(username)}
            placeholder="type here"
            />

           
            <Button 
            title="go"
            onPress={()=>navigation.navigate('Page2',{key:username})}/>
                
          
           </View>
        )
    }
export default Page1

const styles=StyleSheet.create({
    hi:{
        width:'80%',
        
        backgroundColor:'blue'
    }
})