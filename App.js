/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import {API_URL_APOLLO} from './config/environement/dev';
import { NavigationContainer } from '@react-navigation/native';
import StackView from './components/Stack';

const client = new ApolloClient({
  uri: API_URL_APOLLO,
  cache: new InMemoryCache(),
});

const App: () => Node = () => {
  return (
    <ApolloProvider client={client}>
        <StackView />
    </ApolloProvider>
  );
};

export default App;
