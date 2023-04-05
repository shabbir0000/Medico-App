import {} from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Report from './assets/Component/Report';
import Home from './assets/Component/Home';
import RootNavigation from './Navigation'
import  'react-native-gesture-handler';
import BottomTabs from './BottomTabs';
import Calenders from './assets/Component/Calenders';
import User from './assets/Component/User';
import LoginAccount from './assets/Component/LoginAccount';
import Signup from './assets/Component/Signup';


const App = () => {

  const Stack = createStackNavigator();

  const screenoption = {
    headerShown: false,
  }

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={screenoption}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Report' component={Report} />
        <Stack.Screen name='Bottomtabs' component={BottomTabs} />
        <Stack.Screen name='Calenders' component={Calenders} />
        <Stack.Screen name='Users' component={User} />
        <Stack.Screen name='Login' component={LoginAccount} />
        <Stack.Screen name='Signup' component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>







  );
}

export default App