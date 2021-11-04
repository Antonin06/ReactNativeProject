import React from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  SectionList,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import BooksList from './Home/BooksList';
import {useQuery} from '@apollo/client';
import {HOME, SLIDER} from '../config/graphql/requests-front';
import Loading from './Loading';
import CategoryList from './Home/CategoryList';
import CoupDeCoeur from './Home/CoupDeCoeur';

function Home() {
  const {data: dataHome, loading} = useQuery(HOME);

  if (loading) {
    return <Loading />;
  }
  console.log(dataHome, 'HOME');

  return (
    <ScrollView>
      <CoupDeCoeur {...dataHome}/>
      <BooksList {...dataHome} />
      {dataHome.categories.map(categ => (
        <CategoryList {...categ} />
      ))}
    </ScrollView>
  );
}

export default Home;
