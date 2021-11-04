import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  SectionList,
  Text, TouchableOpacity,
  View,
} from 'react-native';
import styles from '../../style/component.style';
import {API_URL} from '../../config/environement/dev';
import {useNavigation} from '@react-navigation/native';

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
          style={styles.homeItemPhoto}
        />
        <Text style={styles.homeItemText}>{item.title}</Text>
      </View>
      </TouchableOpacity>
  );
};

function CategoryList(dataHome) {
  console.log(dataHome, 'CATEGORYYYYYY');
  return (
    <View style={styles.home}>
      <SafeAreaView>
        <View style={styles.homeHeading}>
          <Text style={styles.homeTitle}>{dataHome.name}</Text>
          <Text style={styles.homeTitle}>{dataHome.books.length}</Text>
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
const SECTIONS = [
  {
    title: 'Made for you',
    data: [
      {
        key: '1',
        text: 'Item text 1',
        uri: 'https://picsum.photos/id/1/200',
      },
      {
        key: '2',
        text: 'Item text 2',
        uri: 'https://picsum.photos/id/10/200',
      },

      {
        key: '3',
        text: 'Item text 3',
        uri: 'https://picsum.photos/id/1002/200',
      },
      {
        key: '4',
        text: 'Item text 4',
        uri: 'https://picsum.photos/id/1006/200',
      },
      {
        key: '5',
        text: 'Item text 5',
        uri: 'https://picsum.photos/id/1008/200',
      },
    ],
  },
  {
    title: 'Punk and hardcore',
    data: [
      {
        key: '1',
        text: 'Item text 1',
        uri: 'https://picsum.photos/id/1011/200',
      },
      {
        key: '2',
        text: 'Item text 2',
        uri: 'https://picsum.photos/id/1012/200',
      },

      {
        key: '3',
        text: 'Item text 3',
        uri: 'https://picsum.photos/id/1013/200',
      },
      {
        key: '4',
        text: 'Item text 4',
        uri: 'https://picsum.photos/id/1015/200',
      },
      {
        key: '5',
        text: 'Item text 5',
        uri: 'https://picsum.photos/id/1016/200',
      },
    ],
  },
  {
    title: 'Based on your recent listening',
    data: [
      {
        key: '1',
        text: 'Item text 1',
        uri: 'https://picsum.photos/id/1020/200',
      },
      {
        key: '2',
        text: 'Item text 2',
        uri: 'https://picsum.photos/id/1024/200',
      },

      {
        key: '3',
        text: 'Item text 3',
        uri: 'https://picsum.photos/id/1027/200',
      },
      {
        key: '4',
        text: 'Item text 4',
        uri: 'https://picsum.photos/id/1035/200',
      },
      {
        key: '5',
        text: 'Item text 5',
        uri: 'https://picsum.photos/id/1038/200',
      },
    ],
  },
];

export default CategoryList;
