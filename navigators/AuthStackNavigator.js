import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Screens/Login'; 
import Register from '../Screens/Register';
import MainScreen from '../Screens/MainScreen';
import PhysicalProperties from '../Screens/PhysicalProperties';
import VideoScreen from '../Screens/VideoScreen';
import StopWatch from '../Screens/StopWatch';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Graphs from '../Screens/Graphs';


const AuthStack =  createStackNavigator();
const LoginStack = createStackNavigator();

export default function AuthStackNavigator() {
  return (    
        <AuthStack.Navigator 
        mode= {'modal'}
        screenOptions={{
            headerShown: false,
          }}>

          <AuthStack.Screen name={'LoginStack'} >
            {
              () => (
                <LoginStack.Navigator 
                mode= {'card'}  
                screenOptions={{
                  headerShown: false,
                }}>
                <LoginStack.Screen name={'Login'} component= {Login} />
                </LoginStack.Navigator>
             )
            }
          </AuthStack.Screen>

          <AuthStack.Screen name={'Register'} component= {Register} />
          <AuthStack.Screen name={'MainScreen'} component= {MainScreen} />
          <AuthStack.Screen name={'PhysicalProperties'} component= {PhysicalProperties}/>
          <AuthStack.Screen name={'VideoScreen'} component= {VideoScreen} />
          <AuthStack.Screen name={'StopWatch'} component= {StopWatch} />
          <AuthStack.Screen name={'Graphs'} component= {Graphs} />
        </AuthStack.Navigator>
        
  );
}



