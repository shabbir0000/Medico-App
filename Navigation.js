import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Report from './assets/Component/Report';
import Home from './assets/Component/Home';

import  'react-native-gesture-handler';


const Navigation = () => {
    const Stack = createStackNavigator();
   
    const screenoption = {
        headerShown:false,
    }

  return (
     
   <NavigationContainer>
    <Stack.Navigator initialRouteName='Home' screenOptions={screenoption}>
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='Report' component={Report}/>
     
      </Stack.Navigator>
   </NavigationContainer>
  


  )
}

export default Navigation