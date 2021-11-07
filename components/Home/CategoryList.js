import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  SectionList,
  Text,
  TouchableOpacity, TouchableWithoutFeedback,
  View,
} from 'react-native';
import styles from '../../style/component.style';
import {API_URL} from '../../config/environement/dev';
import {useNavigation} from '@react-navigation/native';
import icons from '../../style/icons.style';

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
  const navigation = useNavigation();
  const catName = dataHome.name;
  return (
    <View style={styles.home}>
      <SafeAreaView>
        <View style={styles.homeHeading}>
          <View style={styles.homeTitleWrapper}>
            <Text style={styles.homeTitle}>
              {catName}
            </Text>
            <Text style={styles.homeTitleNumber}>
              ({dataHome.books.length})
            </Text>
          </View>
          <TouchableWithoutFeedback
            onPress={() =>
              navigation.navigate('Category', {name: catName, id: dataHome.id})
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

export default CategoryList;
