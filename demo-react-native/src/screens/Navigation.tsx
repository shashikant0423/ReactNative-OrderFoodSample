import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserLogin from './UserLogin';
import Home from './Home';

const Stack = createNativeStackNavigator();
const NavigationStack = () => {
  return (
    <Stack.Navigator 
    screenOptions={{ 
      headerStyle: { 
        backgroundColor: '#F27B18', 
      }, 
      headerTintColor: '#fff', 
    }}> 
      <Stack.Screen name="User LogIn" component={UserLogin} options={{headerShown: false}}/>
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
};

export default NavigationStack;
