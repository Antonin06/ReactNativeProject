import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import SingleBook from './SingleBook';
import SingleCategory from './SingleCategory';
import theme from '../style/theme.style';
import CoupDeCoeur from './CoupDeCoeur';

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
          name="Coup_de_coeur"
          component={CoupDeCoeur}
          options={{
            title: 'Nos coups de coeur',
            headerShown: true,
            headerStyle: {
              backgroundColor: '#1a1a1a',
            },
            headerTintColor: theme.WHITE_COLOR,
          }}
        />
        <Stack.Screen
          name="SingleBook"
          component={SingleBook}
          options={({route}) => ({
            title: route.params.name,
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="Category"
          component={SingleCategory}
          options={({route}) => ({
            title: route.params.name,
            headerShown: true,
            headerStyle: {
              backgroundColor: '#1a1a1a',
            },
            headerTintColor: theme.WHITE_COLOR,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackView;
