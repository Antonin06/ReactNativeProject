import React from 'react';
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
  const isTrue = item.CoupDeCoeur;
  console.log(item.CoupDeCoeur, 'coupdecoeur');
  const navigation = useNavigation();

  return (
    <>
      {isTrue ? (
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
      ) : null}
    </>
  );
};

function CoupDeCoeur(dataHome) {
  // console.log(dataHome.books, 'Coupdecoeur');
  // console.log(
  //   dataHome.books.filter((x, i) => {
  //     return x.CoupDeCoeur;
  //   }).length,
  //   'toto',
  // );
  return (
    <View style={styles.home}>
      <SafeAreaView>
        <View style={styles.homeHeading}>
          <Text style={styles.homeTitle}>Nos Coups de Coeur</Text>
          <Text style={styles.homeTitleNumber}>
            {
              dataHome.books.filter((book, i) => {
                return book.CoupDeCoeur;
              }).length
            }
          </Text>
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

export default CoupDeCoeur;
