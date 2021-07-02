import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import AuthStackNavigator from './navigators/AuthStackNavigator';


const RootStack = createStackNavigator();

export default function() {
  return (
    
      <NavigationContainer>
        <RootStack.Navigator >
          <RootStack.Screen  

          component= {AuthStackNavigator} 
          name={"FT"} 
          options={{
            headerShown: false,
          }}
          />
        </RootStack.Navigator>
      </NavigationContainer> 
      

  );
}


