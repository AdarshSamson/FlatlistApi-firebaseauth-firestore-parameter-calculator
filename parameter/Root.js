import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Page1 from "./Page1";
import Page2 from "./Page2";

const Stack=createStackNavigator();
 
const Root = ()=>{
    return(
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
            name='Page1'
            component={Page1}
            ></Stack.Screen>
             <Stack.Screen 
            name='Page2'
            component={Page2}
            ></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
)}
export default Root;