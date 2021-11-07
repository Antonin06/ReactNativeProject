import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {useQuery, gql} from '@apollo/client';
import Loading from './Loading';
import {useNavigation} from '@react-navigation/native';
import styles from '../style/component.style';
import {API_URL} from '../config/environement/dev';

const CATEGORIES = gql`
  query Getcategories($id: ID!) {
    category(id: $id) {
      name
      id
      books {
        id
        title
        thumbnail {
          url
        }
      }
    }
  }
`;

const ListItem = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('SingleBook', {name: item.title, id: item.id})
      }>
      <View style={styles.homeItem}>
        <Image
          source={{
            uri: `${API_URL}${item.thumbnail.url}`,
          }}
          style={styles.singleCategoryThumbnail}
        />
        <Text style={styles.homeItemText}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

function SingleCategory({route}) {
  const {id} = route.params;
  const {loading, data} = useQuery(CATEGORIES, {
    variables: {id: id},
  });
  console.log(data, 'SINGLE-CATEG');
  if (loading) {
    return <Loading />;
  }
  return (
    <View style={styles.singleCategoryView}>
      <FlatList
        columnWrapperStyle={styles.singleCategoryColumnWrapper}
        data={data.category.books}
        numColumns={3}
        renderItem={({item}) => <ListItem item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default SingleCategory;
