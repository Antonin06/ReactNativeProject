import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import SingleBook from './SingleBook';

const Stack = createNativeStackNavigator();

function StackView() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Welcome', headerShown: false}}
        />
        <Stack.Screen
            name="SingleBook"
            component={SingleBook}
            options={({route }) => ({ title: route.params.name, headerShown:false })}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackView;
