import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "../auth/Login"
import Signup from "../auth/Signup";
import Dashboard from "../auth/Dashboard";
const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Signup"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#3740FE',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen 
        name="Signup" 
        component={Signup} 
        options={{ title: 'Signup' }}
      />       
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options=
         { {title: 'Login',headerShown:'false'}}
          
        
      />
      <Stack.Screen 
       name="Dashboard" 
       component={Dashboard} 
       options= { {title: 'Dashboard',headerShown:'false'}}
      />
    </Stack.Navigator>
  );
}
export default function Appp() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}