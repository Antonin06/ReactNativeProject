import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity, TouchableWithoutFeedback,
  View,
} from 'react-native';
import styles from '../../style/component.style';
import {useNavigation} from '@react-navigation/native';
import {API_URL} from '../../config/environement/dev';
import icons from '../../style/icons.style';

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
  const navigation = useNavigation();
  return (
    <View style={styles.home}>
      <SafeAreaView>
        <View style={styles.homeHeading}>
          <View style={styles.homeTitleWrapper}>
            <Text style={styles.homeTitle}>
              Nos Coups de Coeur
            </Text>
            <Text style={styles.homeTitleNumber}>
              {
                dataHome.books.filter((book, i) => {
                  return book.CoupDeCoeur;
                }).length
              }
            </Text>
          </View>
          <TouchableWithoutFeedback
              onPress={() =>
                  navigation.navigate('Coup_de_coeur')
              }>
            <Image
                source={icons.back_arrow_icon}
                resizeMode="contain"
                style={styles.homeCategoryIcon}
            />
          </TouchableWithoutFeedback>
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
