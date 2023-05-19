import React  from "react";
import { View,Text } from "react-native";

export default class Page2 extends React.Component{
    render(){
        



        return(
           <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
           
           
                <Text style={{fontSize:12,color:'red'}}>
                    passed value is :{this.props.route.params.key}
                </Text>
         
           </View>
        )
    }
}