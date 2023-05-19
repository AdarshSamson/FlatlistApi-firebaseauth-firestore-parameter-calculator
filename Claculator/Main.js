import React,{Component} from "react";
import { View,Text,StyleSheet ,TextInput,} from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";



export default class Main extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View  style={{paddingTop:120,paddingRight:-420,marginRight:-160,marginBottom:-444,marginTop:304}}>
                <TextInput style={{ width:'60%',
        height:40,
       borderWidth: 1,
       borderRadius:8,
       borderColor:'black',
       width:150,
       fontSize:15}}
       placeholder=""
       placeholderTextColor={'white'}
       >
                    
                    
                </TextInput></View>
                
                <View style={{paddingTop:520,paddingRight:320,marginRight:23}}>
                 <Text style={styles.hometext}>
                C
            </Text>
            <Text style={{fontSize:45,fontWeight:'bold',color:'white'}}>
                7
            </Text>
            <Text style={{fontSize:45,fontWeight:'bold',color:'white'}}>
                4
            </Text>
            <TouchableHighlight underlayColor={'red'}>
            <Text style={{fontSize:45,fontWeight:'bold',color:'white'}}>
                1
            </Text></TouchableHighlight>
            </View>
            <View style={{flexDirection:"column",marginTop:-245,marginLeft:59}}>
            <Text style={{fontSize:45,fontWeight:'bold',color:'white'}}>
                +/-
            </Text>
            <Text style={{fontSize:45,fontWeight:'bold',color:'white'}}>
                8
            </Text>
            <Text style={{fontSize:45,fontWeight:'bold',color:'white'}}>
                5
            </Text>
            <Text style={{fontSize:45,fontWeight:'bold',color:'white'}}>
                2
            </Text>
            <Text style={{fontSize:45,fontWeight:'bold',color:'white'}}>
                0
            </Text>
            <View style={{marginTop:-298,marginLeft:100,marginBottom:96}}>
            <Text style={{fontSize:45,fontWeight:'bold',color:'white'}}>
                %
            </Text>
            <TouchableHighlight>
            <Text style={{fontSize:45,fontWeight:'bold',color:'white'}}>
                9
            </Text></TouchableHighlight>
            <Text style={{fontSize:45,fontWeight:'bold',color:'white'}}>
                6
            </Text>
            <Text style={{fontSize:45,fontWeight:'bold',color:'white'}}>
                3
            </Text>
            <Text style={{fontSize:45,fontWeight:'bold',color:'white',marginLeft:-12}}>
            00
            </Text>
            </View>
            <View style={{flexDirection:"column",marginTop:-400,marginLeft:180,marginBottom:96,backgroundColor:'black',borderRadius:30,borderWidth:6,justifyContent:'center',alignItems:'center',}}>
            <Text style={{fontSize:45,fontWeight:'bold',color:'white'}}>
                /
            </Text>
            <Text style={{fontSize:45,fontWeight:'bold',color:'white'}}>
                x
            </Text>
            <Text style={{fontSize:45,fontWeight:'bold',color:'white'}}>
                -
            </Text>
            <TouchableHighlight>
            <Text style={{fontSize:45,fontWeight:'bold',color:'white'}}>
                +
            </Text></TouchableHighlight>
            <View style={{borderRadius:50,backgroundColor:'yellow',width:50,height:50,alignItems:'center',justifyContent:'center'}}>
                <TouchableHighlight >
                    
                    <Text style={{fontSize:45,fontWeight:'bold',color:'black',alignItems:'center',justifyContent:'center'}}>
                =
            </Text>
                    
                </TouchableHighlight>
           </View>
            </View>
            </View >
           
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'grey'
    },
  hometext:{
      fontSize:45,
      fontWeight:'bold',
      color:'white'
  }  
})