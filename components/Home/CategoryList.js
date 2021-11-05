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

export default CategoryList;
