import React from 'react';
import {useQuery} from '@apollo/client';
import {SLIDER} from '../../config/graphql/requests-front';
import Loading from '../Loading';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from '../../style/component.style';
import {useNavigation} from '@react-navigation/native';
import {API_URL} from '../../config/environement/dev';

const ListItem = ({item}) => {
  // console.log(item);
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
          style={styles.homeItemPhoto}
        />
        <Text style={styles.homeItemText}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

function BooksList(dataHome) {
  return (
    <View style={styles.home}>
      <SafeAreaView>
        <View style={styles.homeHeading}>
          <Text style={styles.homeTitle}>Nos derniers Livres</Text>
          <Text style={styles.homeTitleNumber}>{dataHome.books.length}</Text>
        </View>
        <FlatList
          horizontal
          data={dataHome.books}
          renderItem={({item}) => <ListItem item={item} />}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </View>
  );
}

export default BooksList;
